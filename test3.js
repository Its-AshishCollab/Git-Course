function addEvenNumbers(a, b) {
    if (a % 2 === 0 && b % 2 === 0) {
        return a + b;
    } else {
        throw new Error("Both numbers must be even.");
    }
}

// Example usage:
console.log(addEvenNumbers(4, 6)); 