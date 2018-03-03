// does not contain:z = 5;
// add at runtime: x = 3;
var x;
if (global.__abstract) x = __abstract("number", "(3)");
else x = 3;

function func1() {
  let z = 5;
  if (x > 10) {
    throw new Error("X greater than 10 " + x);
  }
  return x;
}

if (global.__registerAdditionalFunctionToPrepack)
  __registerAdditionalFunctionToPrepack(func1);

inspect = function() {
  let error;
  let ret;
  try {
    ret = func1();
  } catch (e) {
    error = e.message;
  }
  return 'err: ' + error + ' ret ' + ret;
}