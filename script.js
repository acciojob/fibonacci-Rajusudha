function fibonacci(num) {
    if (num <= 0) {
        return "Invalid input. Please provide a positive integer greater than 0.";
    } else if (num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    } else {
        let a = 0, b = 1, temp;
        for (let i = 3; i <= num; i++) {
            temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
}

// Examples
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(5)); // Output: 3


