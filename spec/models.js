
/**
 * Sprites have at a minimum a name. You can specify an entire object, or you may specify just a plain string, which will be interpreted as this sprite's name, leaving all other values to their defaults.
 * 
 * @typedef {Object} Sprite
 *
 * @param {string} name the name of the image for this sprite, within the asset catalog. You may specify a comma-spearated list, in which case a random element will be used for `name`, and the entire array will be available to you within the `names` property.
 * @param {Edge} edge the edge to pin this sprite to
 * @param {Alignment} align the alignment for this sprite
 * @param {number} scale the scale for this sprite
 * @param {number} zPosition the zPosition for this sprite
 * @param {Insets} insets the insets to apply to this sprite
 */


/**
 * Labels represent text on screen
 *
 * @typedef {Object} Label
 *
 * @param {string} fontName  `Helvetica` by default
 * @param {number} fontSize  `18.0` by default
 * @param {string} fontColor a hex or rgba color string. `ffffff` by default
 * @param {string} _font    you may specify font name, size, and color in a single comma-separated string. E.g. `CBSans, 24, ff0000`. You may also use this format as the entire label node, and the label will be parsed from there.
 * @param {string} text an optional string to display
 * @param {Edge}   the edge to align to. `middle` by default
 * @param {Alignment} align:  alignment for the label. `center`
 * @param {Insets} insets 
 * @param {number} zPosition
 */


/**
 *
 * Insets are specified TOP, LEFT, BOTTOM, RIGHT
 * 
 * @typedef {String} Insets 
 *
 * 
 */

/**
 * @typedef {Enum} Edge
 *
 * @property {string} top 
 * @property {string} topMiddle 
 * @property {string} middle 
 * @property {string} bottomMiddle 
 * @property {string} bottom 
 */