document.getElementById('converter-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const tempInput = parseFloat(document.getElementById('temperature-input').value);
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;

    if (isNaN(tempInput)) {
        alert("Please enter a valid temperature.");
        return;
    }

    let result;

    // Conversion logic
    if (fromUnit === 'Celsius') {
        if (toUnit === 'Fahrenheit') {
            result = (tempInput * 9/5) + 32;
        } else if (toUnit === 'Kelvin') {
            result = tempInput + 273.15;
        } else {
            result = tempInput;
        }
    } else if (fromUnit === 'Fahrenheit') {
        if (toUnit === 'Celsius') {
            result = (tempInput - 32) * 5/9;
        } else if (toUnit === 'Kelvin') {
            result = (tempInput - 32) * 5/9 + 273.15;
        } else {
            result = tempInput;
        }
    } else if (fromUnit === 'Kelvin') {
        if (toUnit === 'Celsius') {
            result = tempInput - 273.15;
        } else if (toUnit === 'Fahrenheit') {
            result = (tempInput - 273.15) * 9/5 + 32;
        } else {
            result = tempInput;
        }
    }

    document.getElementById('result').innerText = `Result: ${result.toFixed(2)} ${toUnit}`;
});
