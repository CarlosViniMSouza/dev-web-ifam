function insert(num) {  
    let number = document.getElementById('result').innerHTML;

    document.getElementById('result').innerHTML = number + num;
}

function cleanDisplay() {
    document.getElementById('result').innerHTML = "";
}

function deleteLastInput() {
    let result = document.getElementById('result').innerHTML;

    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}

function calculateResult() {
    let result = document.getElementById('result').innerHTML;

    if (result) {
        document.getElementById('result').innerHTML = eval(result);
    } else {
        document.getElementById('result').innerHTML = "Invalid Operation!";
    }
}

function calculateSquare() {
    let result = document.getElementById('result').innerHTML;

    document.getElementById('result').innerHTML = Math.sqrt(result);
}
