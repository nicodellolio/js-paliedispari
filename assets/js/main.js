//# PALINDROME//

const wordGot = prompt('Please type any word here. Only small case.')

// funzione per cercare i palindromi
function checkPalindrome(string) {
    
    // utilizzare split, reverse e join
    const reversedString = string.split('').reverse().join('');

    // confrontiamo la stringa in consolo prima e dopo la conversione
    console.log(`String original: ` + wordGot);
    console.log(`String reversed: ` + reversedString);

    if(string === reversedString)
        return true;
    else
        return false;
    
}


const check = checkPalindrome(wordGot)
if(check == true){
	console.log(wordGot + " is palindrome");
	alert("✅ The typed word is palindrome");
}
else{
	console.log(wordGot + " is not palindrome");
  	alert("❌ The typed word is NOT palindrome");
}



