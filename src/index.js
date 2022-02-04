module.exports = function reverse(n) {
    n = Math.abs(n);
    nString = n.toString();
    let y = "";
    for (let i = nString.length - 1; i >= 0; i--) {
        y = y + nString[i];
    }
    // console.log(+y);
    return +y;
};
