import Joi from 'joi';

import enums from '../enums';

const optionsSchema = Joi.object().keys({
  category: Joi.string()
    .valid(Object.values(enums.category))
    .label('Category'),
  minimumWidth: Joi.number()
    .label('Minimum Width'),
  pageNum: Joi.number()
    .min(0)
    .label('Page Number'),
  size: Joi.number()
    .min(1)
    .max(100)
    .label('Page Size'),
  stereoscopicType: Joi.string()
    .valid(Object.values(enums.stereoscopicType))
    .label('Stereoscopic Type'),
  type: Joi.array()
    .items(Joi.string().valid(Object.values(enums.mediaType)))
    .single()
    .label('Media Type'),
});

class Validator {
  static validateStorage({get, set, remove}) {
    if (get && set && remove) {
      return;
    }

    throw new Error('You should implement all storage methods (get, set, remove)');
  }

  static validateMediaSearchOptions(options) {
    if (!options) {
      return;
    }

    try {
      Joi.assert(options, optionsSchema);
    } catch (err) {
      throw new Error(err.details[0].message);
    }
  }
}

export default Validator;
