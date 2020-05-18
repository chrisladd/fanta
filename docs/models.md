

## Typedefs

<dl>
<dt><a href="#Sprite">Sprite</a> : <code>Object</code></dt>
<dd><p>Sprites have at a minimum a name. You can specify an entire object, or you may specify just a plain string, which will be interpreted as this sprite&#39;s name, leaving all other values to their defaults.</p>
</dd>
<dt><a href="#Label">Label</a> : <code>Object</code></dt>
<dd><p>Labels represent text on screen</p>
</dd>
<dt><a href="#Range">Range</a> : <code>String</code></dt>
<dd><p>Ranges may be supplied using the format <code>2.5..&lt;98.6</code></p>
</dd>
<dt><a href="#Insets">Insets</a> : <code>String</code></dt>
<dd><p>Insets are specified TOP, LEFT, BOTTOM, RIGHT</p>
</dd>
<dt><a href="#Edge">Edge</a> : <code>Enum</code></dt>
<dd></dd>
</dl>

<a name="Sprite"></a>

## Sprite : <code>Object</code>
Sprites have at a minimum a name. You can specify an entire object, or you may specify just a plain string, which will be interpreted as this sprite's name, leaving all other values to their defaults.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name of the image for this sprite, within the asset catalog. You may specify a comma-spearated list, in which case a random element will be used for `name`, and the entire array will be available to you within the `names` property. |
| edge | [<code>Edge</code>](#Edge) | the edge to pin this sprite to |
| align | <code>Alignment</code> | the alignment for this sprite |
| scale | <code>number</code> | the scale for this sprite |
| zPosition | <code>number</code> | the zPosition for this sprite |
| insets | [<code>Insets</code>](#Insets) | the insets to apply to this sprite |

<a name="Label"></a>

## Label : <code>Object</code>
Labels represent text on screen

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| fontName | <code>string</code> | `Helvetica` by default |
| fontSize | <code>number</code> | `18.0` by default |
| fontColor | <code>string</code> | a hex or rgba color string. `ffffff` by default |
| _font | <code>string</code> | you may specify font name, size, and color in a single comma-separated string. E.g. `CBSans, 24, ff0000`. You may also use this format as the entire label node, and the label will be parsed from there. |
| text | <code>string</code> | an optional string to display |
| the | [<code>Edge</code>](#Edge) | edge to align to. `middle` by default |
| align: | <code>Alignment</code> | alignment for the label. `center` |
| insets | [<code>Insets</code>](#Insets) |  |
| zPosition | <code>number</code> |  |

<a name="Range"></a>

## Range : <code>String</code>
Ranges may be supplied using the format `2.5..<98.6`

**Kind**: global typedef  
<a name="Insets"></a>

## Insets : <code>String</code>
Insets are specified TOP, LEFT, BOTTOM, RIGHT

**Kind**: global typedef  
<a name="Edge"></a>

## Edge : <code>Enum</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| top | <code>string</code> | 
| topMiddle | <code>string</code> | 
| middle | <code>string</code> | 
| bottomMiddle | <code>string</code> | 
| bottom | <code>string</code> | 

