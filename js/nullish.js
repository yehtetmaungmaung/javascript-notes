const x = ''
if (x) {
    console.log('X is false')
}

const val = x ?? 'default'
console.log(val)

/* 
Logical AND (&&) evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters; if all values are truthy, the value of the last operand is returned.

If a value can be converted to true, the value is so-called truthy. If a value can be converted to false, the value is so-called falsy.

Examples of expressions that can be converted to false are:

false;
null;
NaN;
0;
empty string ("" or '' or ``);
undefined.
*/

result = "" && "foo"; // result is assigned "" (empty string)
result = 2 && 0; // result is assigned 0
result = "foo" && 4; // result is assigned 4

function A() {
    console.log("called A");
    return false;
  }
  function B() {
    console.log("called B");
    return true;
  }
  
  console.log(A() && B());
  // Logs "called A" to the console due to the call for function A,
  // && evaluates to false (function A returns false), then false is logged to the console;
  // the AND operator short-circuits here and ignores function B

  console.log(A() || B());
  