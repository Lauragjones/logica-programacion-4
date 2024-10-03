function getFibonacciSeries(n) {
    let series = [];
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        series.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
    return series;
}

function requestFibonacciNumber() {
    let input;

    while (true) {
        input = prompt("Por favor, introduce un número para generar la serie de Fibonacci:");
        
        // Convertir el input a número
        const number = Number(input);

        // Verificar si es un número válido
        if (!isNaN(number) && number > 0) {
            const fibonacciSeries = getFibonacciSeries(number);
            console.log(fibonacciSeries.join(", "));
            document.getElementById("result").innerText = `Serie de Fibonacci: ${fibonacciSeries.join(", ")}`;
            break;
        } else {
            alert("Error: Por favor, introduce un número válido.");
        }
    }
}

// Llamar a la función para iniciar el programa
requestFibonacciNumber();
