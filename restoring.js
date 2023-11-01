function calculateDivision() {
    const dividend = parseInt(document.getElementById("dividend").value);
    const divisor = parseInt(document.getElementById("divisor").value);

    let quotient = 0;
    let remainder = dividend;
    let binaryQuotient = "";
    let binaryRemainder = "";

    while (remainder >= divisor) {
        remainder -= divisor;
        quotient++;
    }

    // Convert quotient and remainder to binary
    binaryQuotient = quotient.toString(2);
    binaryRemainder = remainder.toString(2);

    document.getElementById("quotient").textContent = binaryQuotient;
    document.getElementById("remainder").textContent = binaryRemainder;
}