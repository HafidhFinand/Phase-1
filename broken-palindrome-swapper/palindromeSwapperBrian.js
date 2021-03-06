/*
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */

function palindromeSwapper(str) {
  for (var i = 0; i < str.length; i++) {
    var newStr = '';
    for (var j = 0; j < str.length; j++) {
      if (i === j) {
        newStr += str[j + 1];
        newStr += str[j];
        j++;
      } else {
        newStr += str[j];
      }
      debugger;
    }
    debugger;
    if (isPalindrome(newStr)) return true;
  }
  return false;
}

/*
 * @function isPalindrome
 * Cek apabila kata merupakan palindromeSwapper
 * @param {string} str - input kata yang dicek bila palindrom
 * @returns {boolean} true bila kata adalah palindrom
 */

function isPalindrome(str) {
  if (str.split('').reverse().join('') === str) return true;
  debugger;
  return false;
}

console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE PS : kenapa ini true ya kak? bknnya hrsnya false?
console.log(palindromeSwapper('recacar')); // FALSE
console.log(palindromeSwapper('kasurruska')); // TRUE
console.log(palindromeSwapper('setdtse')); // TRUE