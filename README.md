# 1_validator_test

## Задание - Ru

Ваша задача написать валидатор, в котором есть ряд методов и свойств и экспортировать его из файла *src/Validator.js*. Валидатор позволяет проверять аргументы на соответствие необходимым условиям, которые были заданы с помощью методов валидатора.

Пример использования:

```javascript
// создаем экземпляр валидатора
const v = new Validator();
// определяем метод для валидации чисел и связываем его с валидатором, обращаясь к нему через переменную.
const schema = v.number();

// проверяем данные на соответствие числовому типу, с помощью метода isValid()
schema.isValid('Hexlet'); // false
schema.isValid(''); // false
schema.isValid(null); // false
schema.isValid(123); // true
```

### Примечания

Вы можете самостоятельно протестировать работу валидатора. В каталоге *src* разрешено использовать любые файлы и создавать новые, если это делает вашу разработку более удобной. Вам не обязательно использовать все файлы, достаточно реализовать валидатор в Validator.js, остальные файлы созданы для вашего удобства.

Для тестирования валидатора, достаточно создать экземпляр валидатора, настроить валидацию с помощью методов и вызвать метод `isValid()` с необходимым аргументом, после чего написать в терминале:

```bash
node index.js
```

## 1 задача

Вам необходимо создать валидатор, который способен принимать аргумент и проводить его проверку на соответствие определенным условиям. В данной задаче мы ограничиваемся валидацией только чисел. Для этого в вашем валидаторе должен быть метод `number()`, который создает экземпляр валидатора чисел. Этот экземпляр обладает методом `isValid()`, который принимает данные на вход и возвращает значение true или false в зависимости от того, являются ли входные данные числом или нет.

**Параметры и методы**

- аргумент, который мы валидируем (проверяем)
- метод валидатора `number()`, который создает экземпляр валидатора чисел
- метод экземпляра `isValid()`, который вызывается у экземпляра `number()`, он принимает данные на вход и валидирует

```javascript
const v = new Validator();
const schema = v.number();

schema.isValid(null); // false
schema.isValid(''); // false
schema.isValid(true); // false
schema.isValid(123); // true
schema.isValid(0); // true
```

После добавления методов `number()` и `isValid()`, экземпляр валидатора будет проверять является ли аргумент типом данных *Number*.

## 2 задача

Вам необходимо расширить функциональность экземпляра валидатора чисел, добавив к нему методы `even()` и `odd()`.
При вызове метода `even()`, он добавляет дополнительную проверку,
которая будет выполняться при вызове метода `isValid()` на то, является ли число четным. И наоборот, вызов метод `odd()`, проверяет является ли число нечетным.

**Методы**

- метод `even()`, который вызывается у экземпляра `number()`. Он добавляет проверку на четность
- метод `odd()`, который вызывается у экземпляра `number()`. Он добавляет проверку на нечетность

```javascript
const v = new Validator();

const schema1 = v.number();
schema1.isValid(11); // true;

const schema2 = v.number().even()
schema2.isValid(2); // true;
schema2.isValid(11); // false;

const schema3 = v.number().odd();
schema.isValid(22); // false;
schema.isValid(23); // true;
```

После добавления методов `even()` или `odd()`, экземпляр валидатора чисел будет проверять является ли аргумент четным или нечетным числом.

## 3 задача

Вам необходимо создать валидатор массивов, добавив к нему метод `array()`. Аналогично методу `number()`, метод `array()` создает экземпляр валидатора массивов. Для валидации массива у этого экземпляра также есть метод `isValid()`, который проверяет, является ли переданный аргумент массивом.

**Методы**

- метод валидатора `array()`, который создает экземпляр валидатора массивов
- метод `isValid()`, который вызывается у экземпляра `array()`. Он проверяет является ли аргумент массивом

```javascript
const v = new Validator();
const schema = v.array();

schema.isValid([]); // true
schema.isValid(123); // false
schema.isValid('Hexlet'); // false
```

После добавления метода `array()`, экземпляр валидатора сможет проверять переданные значения на соответствие экземпляру глобального объекта Array.

## 4 задача

Вам необходимо расширить функциональность экземпляра валидатора массивов. Кроме того, что он может валидировать, является ли аргумент массивом, он должен также иметь возможность проверять, соответствует ли массив указанной длине, если бы вызван метод `length()`, аргументом в котором является число, означающее необходимую длину массива.

**Методы**

- метод `length()`, который вызывается у экземпляра `array()`. Он проверяет соответствует ли длина массива заданному в `length()` аргументу

```javascript
const v = new Validator();
const schema1 = v.array();

schema1.isValid([1, 2]); // true

const schema2 = v.array().length(4);
schema2.isValid([1, 2]); // false
schema2.isValid([1, 2, 2, 1]); // true
```

После добавления метода `length()`, экземпляр валидатора массивов будет способен проверять, соответствует ли длина массива заданной в методе длине.

## 5 задача

Вам необходимо создать валидатор полей объекта, используя методы, представленные в предыдущих задачах. Для этого необходимо создать метод `object()`, который проверяет не сам объект, а данные внутри него на соответствием заданным валидаторам. Метод `Validator.object()` должен содержать метод `shape()`, позволяющий задать поля, подлежащие валидации, для объекта. Метод `shape()` принимает объект, в котором ключи представляют поля, которые требуется проверить, а значения - экземпляры валидаторов. Если количество полей в shape не совпадает с количеством полей в валидируемом объекте, то валидация не проходит.

**Методы**

- метод валидатора (экземпляр класса *Validator*) `object()`, который проверяет данные внутри объекта (поля объекта)
- метод `shape()`, который вызывается у экземпляра `object()`. Он позволяет задать поля валидации для объекта

```javascript
const v = new Validator();

// Позволяет описывать валидацию для свойств объекта
const schema = v.object().shape({
  id: v.number().odd(), // теперь, при валидации объекта с ключом id, значение этого ключа пройдет валидацию в соответствии с текущими методами
  basket: v.array().length(3),
});

schema.isValid({ id: 11, basket: ['potatos', 'tomatos', 'oranges'] }); // true
schema.isValid({ id: 12, basket: ['potatos', 'tomatos', 'oranges'] }); // false
schema.isValid({ id: 11, basket: [] }); // false
```

После добавления методов `object()` и `shape()`, экземпляр валидатора сможет проверять поля объекта на соответствие заданным валидаторам
__________

## Exercise - En

Your task is to write a validator that has a number of methods and properties and export it from the *src/Validator.js* file. The validator allows you to check arguments against the necessary conditions that were specified using validator methods.

Usage example:

```javascript
// create a validator instance
const v = new Validator();
// define a method for validating numbers and connect it to the validator, accessing it through a variable.
const schema = v.number();

// check the data for compliance with the numeric type using the isValid() method
schema.isValid('Hexlet'); // false
schema.isValid(''); // false
schema.isValid(null); // false
schema.isValid(123); // true
```

### Notes

You can test the operation of the validator yourself. The *src* directory allows you to use any files and create new ones if it makes your development more convenient. You don't have to use all the files, just implement the validator in Validator.js, the rest of the files are created for your convenience.

To test a validator, just create an instance of the validator, set up validation using methods and call the `isValid()` method with the required argument, then write in the terminal:

```bash
node index.js
```

## 1 task

You need to create a validator that can take an argument and check it against certain conditions. In this task, we limit ourselves to validating only numbers. To do this, your validator must have a `number()` method that instantiates a number validator. This instance has an `isValid()` method that takes input and returns true or false depending on whether the input is a number or not.

**Options and methods**

- the argument that we validate (check)
- `number()` validator method, which creates a number validator instance
- the `isValid()` instance method, which is called on the `number()` instance, it takes data as input and validates

```javascript
const v = new Validator();
const schema = v.number();

schema.isValid(null); // false
schema.isValid(''); // false
schema.isValid(true); // false
schema.isValid(123); // true
schema.isValid(0); // true
```

After adding the `number()` and `isValid()` methods, the validator instance will check whether the argument is a *Number* data type.

## 2 task

You need to extend the functionality of the number validator instance by adding `even()` and `odd()` methods to it.
When calling the `even()` method, it adds an additional check,
which will be executed when the `isValid()` method is called to determine whether the number is even. Conversely, calling the `odd()` method checks whether the number is odd.

**Methods**

- the `even()` method, which is called on the `number()` instance. It adds a parity check
- the `odd()` method, which is called on the `number()` instance. It adds an odd parity check

```javascript
const v = new Validator();

const schema1 = v.number();
schema1.isValid(11); // true;

const schema2 = v.number().even()
schema2.isValid(2); // true;
schema2.isValid(11); // false;

const schema3 = v.number().odd();
schema.isValid(22); // false;
schema.isValid(23); // true;
```

After adding the `even()` or `odd()` methods, the number validator instance will check whether the argument is an even or odd number.

## 3 task

You need to create an array validator by adding an `array()` method to it. Similar to the `number()` method, the `array()` method instantiates an array validator. For array validation, this instance also has an `isValid()` method that checks whether the argument passed is an array.

**Methods**

- `array()` validator method, which instantiates an array validator
- the `isValid()` method, which is called on the `array()` instance. It checks if the argument is an array

```javascript
const v = new Validator();
const schema = v.array();

schema.isValid([]); // true
schema.isValid(123); // false
schema.isValid('Hexlet'); // false
```

By adding the `array()` method, the validator instance will be able to check the passed values against an instance of the global Array object.

## 4 task

You need to extend the functionality of the array validator instance. In addition to being able to validate whether the argument is an array, it should also be able to check whether the array would be of the specified length if the `length()` method were called with the argument being a number indicating the desired length of the array.

**Methods**

- the `length()` method, which is called on the `array()` instance. It checks whether the length of the array matches the argument given in `length()`

```javascript
const v = new Validator();
const schema1 = v.array();

schema1.isValid([1, 2]); // true

const schema2 = v.array().length(4);
schema2.isValid([1, 2]); // false
schema2.isValid([1, 2, 2, 1]); // true
```

By adding the `length()` method, the array validator instance will be able to check whether the length of the array matches the length specified in the method.

## 5 task

You need to create an object field validator using the methods presented in the previous tasks. To do this, you need to create a method `object()`, which checks not the object itself, but the data inside it for compliance with the specified validators. The `Validator.object()` method must contain a `shape()` method, which allows you to set the fields to be validated for the object. The `shape()` method accepts an object in which the keys represent the fields to be validated and the values represent validator instances. If the number of fields in the shape does not match the number of fields in the object being validated, then validation fails.

**Methods**

- validator method (instance of the *Validator* class) `object()`, which checks the data inside the object (object fields)
- the `shape()` method, which is called on the `object()` instance. It allows you to set validation fields for an object

```javascript
const v = new Validator();

// Allows you to describe validation for object properties
const schema = v.object().shape({
   id: v.number().odd(), // now, when validating an object with the key id, the value of this key will be validated in accordance with the current methods
   basket: v.array().length(3),
});

schema.isValid({ id: 11, basket: ['potatos', 'tomatos', 'oranges'] }); // true
schema.isValid({ id: 12, basket: ['potatos', 'tomatos', 'oranges'] }); // false
schema.isValid({ id: 11, basket: [] }); // false
```

After adding the `object()` and `shape()` methods, the validator instance will be able to check the object's fields against the given validators
