export default class ArraySchema {
  validators = [(value) => Array.isArray(value)];

  length(integer) {
    this.validators.push((value) => value.length === integer);
    return this;
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value) === true);
  }
}