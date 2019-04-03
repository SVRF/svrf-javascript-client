import Category from './category';
import MediaType from './media-type';
import StereoscopicType from './stereoscopic-type';

/**
 * @typedef {Object} Enums
 * @prop {Category} category
 * @prop {MediaType} mediaType
 * @prop {StereoscopicType} stereoscopicType
 */

/**
 * @type {Enums}
 * @private
 */
const enums = {
  category: Category,
  mediaType: MediaType,
  stereoscopicType: StereoscopicType,
};

export default enums;
