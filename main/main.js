function printLcd(inputs) {

    var numberArry = buildNumberArry(inputs);
    var lcd = buildLcd();
    var numberValue = matchNumberString(numberArry, lcd);
    var numberString = buildNumberString(numberValue, numberArry);
}

function buildNumberArry(numbers) {

    var numberArry = [];

    for (var i = 0; i < numbers.length; i++)
        numberArry.push(numbers[i]);

    return numberArry;
}

function findNumber(number, lcd) {
    for (var i = 0; i < lcd.length; i++) {
        if (number === lcd[i].key) {

            return lcd[i].value;
        }
    }
}

function matchNumberString(numberArry, lcd) {

    var numberValue = [];

    numberArry.forEach(function (number) {

        var value = findNumber(number, lcd);

        numberValue.push(value);
    });

    return numberValue;
}

function buildNumberString(numberValue, numberArry) {

    var Enter = 0;
    var string = "";

    for (var i = 0; i < 3; i++) {
        for (var row = 0; row < numberArry.length; row++) {
            string += numberValue[row][i];
        }
        Enter++;
        if (Enter < 3) {
            string += "\n";
        }
    }

    return string;
}


