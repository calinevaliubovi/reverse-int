module.exports = function reverse(n) {
    let newNum = Math.abs(n);
    newNum = newNum.toString().split("").reverse().join("");
    return +newNum;
};
