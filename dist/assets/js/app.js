"use strict"; //============================= exercise #1 ============================================

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

function createDebounceFunction(func, timer) {
  return function () {
    setTimeout(func, timer);
  };
}

var getQuestion = function getQuestion() {
  return console.log("How are you doing?");
};

var debounceQuestion = createDebounceFunction(getQuestion, 1000);
debounceQuestion();