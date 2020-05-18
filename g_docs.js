

const fs = require('fs');

function writeDocToFile(doc, filename) {
    console.log(`writing ${filename}`)

    if (filename.indexOf('README') >= 0) {
        fs.writeFileSync(filename, doc);
    }
    else {
        fs.writeFileSync('docs/' + filename, doc);
    }
    
}

function docsAtPath(path) {
    let jsdoc2md = require('jsdoc-to-markdown')
    let string = fs.readFileSync(path, 'utf8');
    let source = string;

    let topmatter = '';
    let mdPath = path.replace('.js', '.md');
    if (fs.existsSync(mdPath)) {
        topmatter = fs.readFileSync(mdPath, 'utf8');
    }

    let docs = null;

    if (source.length) {
        try {
            docs = jsdoc2md.renderSync({ files: path })

            let combined = topmatter + '\n\n' + docs;
            combined = combined.replace(/\$ROOT/g, 'https://github.com/chrisladd/rothko/blob/master/docs')

            return combined    
        }
        catch(error) {
            console.log('error with source file at path:' + path)
            console.log(error)
        }
        
    }

    return null;
}

let specDir = './spec';
let specFiles = fs.readdirSync(specDir);

for (var i = 0; i < specFiles.length; i++) {
    let filename = specFiles[i]
    if (filename.indexOf('.js') >= 0) {
        let path = specDir + '/' + filename;
        let docs = docsAtPath(path);

        console.log(path);

        if (docs && docs.length) {
            writeDocToFile(docs, filename.replace('.js', '.md'))
        }
    }
}

