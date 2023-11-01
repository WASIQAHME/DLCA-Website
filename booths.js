document.addEventListener("DOMContentLoaded", function () {
    const decimal1Input = document.getElementById("decimal1");
    const decimal2Input = document.getElementById("decimal2");
    const calculateButton = document.getElementById("calculate");
    const binaryBcdOutput = document.getElementById("binary-bcd");

    calculateButton.addEventListener("click", function () {
        const decimal1 = parseInt(decimal1Input.value);
        const decimal2 = parseInt(decimal2Input.value);

        if (isNaN(decimal1) || isNaN(decimal2)) {
            alert("Please enter valid decimal numbers.");
            return;
        }

        const multiplicationResult = decimal1 * decimal2;
        const binaryResult = decimalToBinary(multiplicationResult);

        binaryBcdOutput.textContent = binaryResult;
    });

    function decimalToBinary(decimal) {
        const decimalString = decimal.toString();
        let binaryResult = "";
        
        for (let i = 0; i < decimalString.length; i++) {
            const digit = parseInt(decimalString[i]);
            const binaryDigit = digit.toString(2).padStart(4, '0');
            binaryResult += binaryDigit;
        }

        return binaryResult;
    }
});