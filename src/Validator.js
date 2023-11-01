import Numberschema from './NumberSchema.js';
import ArraySchema from './ArraySchema.js';
import ObjectSchema from './ObjectSchema.js';

export default class Validator {
  // eslint-disable-next-line class-methods-use-this
  number() {
    return new Numberschema();
  }

  // eslint-disable-next-line class-methods-use-this
  array() {
    return new ArraySchema();
  }

  // eslint-disable-next-line class-methods-use-this
  object() {
    return new ObjectSchema();
  }
}