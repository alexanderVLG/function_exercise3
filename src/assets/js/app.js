"use strict"
//============================= exercise #1 ============================================
/* let data = ["one", "two", "three"];

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

data.myForEach(function (elem, index, array) {
  console.log(elem, index, array);
}); */

// =============================== exercise#2 =========================================
/* function createDebounceFunction(func, wait) {
  return function () {
    setTimeout(func, wait)
  }
}
const begin = performance.now();
function timer(){
  return (performance.now() - begin).toFixed();
}
function logMsg() {
  console.log(`Time: ${timer()}`);
}

const smartLogMsg = createDebounceFunction(logMsg, 1000);
smartLogMsg();
setTimeout(smartLogMsg, 300);
setTimeout(smartLogMsg, 800); */




