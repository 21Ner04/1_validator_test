export default class ObjectSchema {
  validators = {};

  shape(objectRules) {
    this.validators = Object.assign(this.validators, objectRules);
    return this;
  }

  isValid(object) {
    if (Object.keys(object).length !== Object.keys(this.validators).length) {
      return false;
    }
    return Object.keys(object).every((key) => this.validators[key].isValid(object[key]));
  }
}