
/**
 * Sprites have at a minimum a name. You can specify an entire object, or you may specify just a plain string, which will be interpreted as this sprite's name, leaving all other values to their defaults.
 * 
 * @typedef {Object} Sprite
 *
 * @param {string} name the name of the image for this sprite, within the asset catalog
 * @param {Edge} edge the edge to pin this sprite to
 * @param {Alignment} align the alignment for this sprite
 * @param {number} scale the scale for this sprite
 * @param {number} zPosition the zPosition for this sprite
 * @param {Insets} insets the insets to apply to this sprite
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