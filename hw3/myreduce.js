Array.prototype.myReduce = function (fn, acc) {
  let res;
  if (acc === undefined) {
    res = this[0];
    for (let i = 1; i < this.length; i++) {
      res = fn(res, this[i]);
    }
  } else {
    res = acc;
    for (let i = 0; i < this.length; i++) {
      res = fn(res, this[i]);
    }
  }
  return res;
};

const arr = [12, 34, 56, 32];
console.log(
  "reduce arr:" +
    arr.reduce(function (acc, cur) {
      return acc - cur;
    }, 0)
);

console.log(
  arr.myReduce(function (acc, cur) {
    return acc - cur;
  }, 0)
);
