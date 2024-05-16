function isPalindrome(number) {
    if (number < 0) {
        return false; // Negative numbers are not palindromes
    }

    let originalNumber = number;
    let reversedNumber = 0;

    while (number > 0) {
        const digit = number % 10;
        reversedNumber = reversedNumber * 10 + digit;
        number = Math.floor(number / 10);
    }
    const digit = number % 10;
        reversedNumber = reversedNumber * 10 + digit;
        number = Math.floor(number / 10);

    return originalNumber === reversedNumber;
}

// Example usage
const numberToCheck = 12321;
if (isPalindrome(numberToCheck)) {
    console.log(`${numberToCheck} is a palindrome.`);
} else {
    console.log(`${numberToCheck} is not a palindrome.`);
}   

// const digit = 121% 10;
// reversedNumber = reversedNumber * 10 + digit;
// number = Math.floor(number / 10);
// console.log(digit)
