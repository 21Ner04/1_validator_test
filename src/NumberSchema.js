export default class Numberschema {
  validators = [(value) => typeof value === 'number'];

  even() {
    this.validators.push((value) => value % 2 === 0);
    return this;
  }

  odd() {
    this.validators.push((value) => value % 2 !== 0);
    return this;
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value) === true);
  }
}