function printLcd(inputs) {

    var numberArry = buildNumberArry(inputs);
    var numberString = matchNumberString(numberArry);
    printNumber(numberString);

}

function buildNumberArry(numbers) {

    var numberArry = [];


    for (var i = 0; i < numbers.length; i++)
        numberArry.push(numbers[i]);

    return numberArry;
}

function findNumber(number) {
    for (var i = 0; i < 10; i++) {
        if (number === i + "") {

            return i;
        }
    }
}

function buildlcd() {

    var lcd = [];

    lcd = [
        ["._. ", "... ", "._. ", "._. ", "... ", "._. ", "._. ", "._. ", "._. ", "._. "],
        ["|.| ", "..| ", "._| ", "._| ", "|_| ", "|_. ", "|_. ", "..| ", "|_| ", "|_| "],
        ["|_| ", "..| ", "|_. ", "._| ", "..| ", "._| ", "|_| ", "..| ", "|_| ", "..| "]
    ];

    return lcd;
}

function matchNumberString(numberArry) {

    var lcd = buildlcd();
    var numberString = "";
    var indexArry = [];

    numberArry.forEach(function (number) {

        var index = findNumber(number);

        indexArry.push(index);
    });
    for (var i = 0; i < numberArry.length; i++) {
        numberString += lcd[i][indexArry[0]] + lcd[i][indexArry[1]] + lcd[i][indexArry[2]] + "\n";
    };

    return numberString;
}

