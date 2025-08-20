//Pormise and thenable
asyncFunc01("originalValue")
  .then(function (teo1) {
    return asyncFunc02(teo1);
  })
  .then(function (teo2) {
    return asyncFunc03(teo2);
  })
  .then(function (teo3) {
    console.log(teo3);
  });

function asyncFunc01(param1) {
  console.log(`Processing param: ${param1}`);
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const returnedValue = "asyncFunc01 -" + param1;
      resolve(returnedValue);
    }, 1 * 1000);
  });
}
function asyncFunc02(param2) {
  console.log(`Processing param: ${param2}`);
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const returnedValue = "asyncFunc02 -" + param2;
      resolve(returnedValue);
    }, 2 * 1000);
  });
}
function asyncFunc03(param3) {
  console.log(`Processing param: ${param3}`);
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const returnedValue = "asyncFunc03 -" + param3;
      resolve(returnedValue);
    }, 3 * 1000);
  });
}
