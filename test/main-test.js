describe('lcd', function () {

    describe("printLCD", function () {
        it('hello', function () {
            printLcd(910);
        });
    });
    describe('unit', function () {

        var input = 910;
        var inputs = input + "";

        it('buildNumberArry should print correct text', function () {
            var numberArry = ["9", "1", "0"];

            expect(buildNumberArry(inputs)).toEqual(numberArry);
        });
    });

    describe('find numberValue', function () {

        var numberArry = ["9", "1", "0"];

        it('matchNumberValue should print correct text', function () {

            var value = [
                ["._. ", "|_| ", "..| "],
                ["... ", "..| ", "..| "],
                ["._. ", "|.| ", "|_| "]];

            expect(matchNumberString(numberArry, buildLcd())).toEqual(value);
        });
    });


    describe('printNumberString', function () {

        var numberArry = ["9", "1", "0"];
        var value = [
            ["._. ", "|_| ", "..| "],
            ["... ", "..| ", "..| "],
            ["._. ", "|.| ", "|_| "]];

        it('matchNumberString(910) should print correct text', function () {

            var numberString =
                "._. " + "... " + "._. " + "\n" +
                "|_| " + "..| " + "|.| " + "\n" +
                "..| " + "..| " + "|_| ";

            expect(buildNumberString(value, numberArry)).toEqual(numberString);
        });
    });
    describe('printNumberString', function () {
        var numberArry = ["9", "1", "0", "8"];
        var value = [
            ["._. ", "|_| ", "..| "],
            ["... ", "..| ", "..| "],
            ["._. ", "|.| ", "|_| "],
            ["._. ", "|_| ", "|_| "]];

        it('matchNumberString(9108) should print correct text', function () {

            var numberString =
                "._. " + "... " + "._. " + "._. " + "\n" +
                "|_| " + "..| " + "|.| " + "|_| " + "\n" +
                "..| " + "..| " + "|_| " + "|_| ";

            expect(buildNumberString(value, numberArry)).toEqual(numberString);
        });
    });
});