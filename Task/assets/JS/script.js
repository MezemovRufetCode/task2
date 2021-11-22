class CustomMatch {
  constructor(number) {
    this.number = number;
  }
  plus(num) {
    this.number += num;
    return this.number;
  }
  minus(num) {
    this.number -= num;
    return this.number;
  }
  multiple(num) {
    this.number *= num;
    return this.number;
  }
  divide(num) {
    this.number /= num;
    return this.number;
  }
}
var result = new CustomMatch(50).plus(6).minus(30).multiple(3).divide(2);
// result.plus(6);
// result.minus(30);
// result.multiple(3);
// result.divide(2);
console.log(result);
