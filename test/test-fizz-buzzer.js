const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `adder` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return fizz, for numerators divisible by three', function() {
    // range of normal inputs, including
    // notable cases like negative answers
      [9, 18, 21].forEach((input) => {
        fizzBuzzer(input).should.equal('fizz');
      });
    });

  it('should return buzz, for numerators divisible by five', function() {
      // range of normal inputs, including
      // notable cases like negative answers
        [10, 20, 50].forEach((input) => {
          fizzBuzzer(input).should.equal('buzz');
        });
      });

  it('should return fizz-buzz, for numerators divisible by fifteen', function() {
        // range of normal inputs, including
        // notable cases like negative answers
          [30, 45, 90].forEach((input) => {
            fizzBuzzer(input).should.equal('fizz-buzz');
          });
        });
    // for each set of inputs (a, b), `fizzbuzz` should
    // produce the expected value

  it('should raise error if input is not a number', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      'a',
      '1',
      false
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});
