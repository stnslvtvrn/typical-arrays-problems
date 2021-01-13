
exports.min = function min(array) {
  if (array == [""] || array == null || !array || array.length == 0) {
    return 0;
  } else {
    return Math.min(...array);
  }
}



exports.max = function max(array) {
  if (array == [""] || array == null || !array || array.length == 0) {
    return 0;
  } else {
    return Math.max(...array);
  }
};

exports.avg = function avg(array) {
  if (array == [""] || array == null || !array || array.length == 0) {
    return 0;
  } else {
    let sum = 0;
    array.forEach((element) => {
      sum += element;
      return sum;
    });
    return sum/array.length;
  }
}

