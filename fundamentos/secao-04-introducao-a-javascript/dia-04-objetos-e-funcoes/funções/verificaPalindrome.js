function verificaPalindrome(string) {
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaPalindrome('subinoonibus')); //true
console.log(verificaPalindrome('descidoonibus')); //false