const reverseString = function(word) {
    let chAr = word.split('');
    let rEv = chAr.reverse();
    let revJoin = rEv.join('');
    return revJoin;

};

// Do not edit below this line
module.exports = reverseString;
