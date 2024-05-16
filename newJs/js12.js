function isPalindrome(num) { //110
    let originalNum = num; //110
    let reversed = 0;

    // Reverse the number
    while (num > 0) {
        let digit = num % 10; // return 0
        reversed = reversed * 10 + digit; //10
        num = Math.floor(num / 10); //10
    }

    // Check if the original number is equal to the reversed number
    return originalNum === reversed;
}

// Example usage:
let numberToCheck = 12321;
console.log(isPalindrome(numberToCheck)); // Output: true
if (isPalindrome(numberToCheck)) {
    console.log(`${numberToCheck} is a palindrome.`);
} else {
    console.log(`${numberToCheck} is not a palindrome.`);
}
