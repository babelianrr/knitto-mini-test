function palindrome(input: string): boolean {
    const cleaned = input.replace(/\s/g, '').toLowerCase();

    return cleaned === cleaned.split('').reverse().join('');
}

// Example usage
const testString = "A man a plan a canal Panama";

if (palindrome(testString)) {
    console.log(`${testString} is a palindrome.`);
} else {
    console.log(`${testString} is not a palindrome.`);
}

export {}