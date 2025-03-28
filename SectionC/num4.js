function ispalindrome(word){
    word = word.lower()
    return word == word[-1];

}
console.log(ispalindrome("madam"))  
console.log(ispalindrome("hello"))  
