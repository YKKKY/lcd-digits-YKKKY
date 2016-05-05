describe('lcd', function () {

    describe('integration testing', function () {
        var inputs = 910 + "";

        beforeEach(function () {
            var lcd = buildLcd();

        });
        it('should print correct text', function () {

            spyOn(console, 'log');
            printLcd(inputs);

            var expectText = "._. " + "... " + "._. " + "\n" +
                "|_| " + "..| " + "|.| " + "\n" +
                "..| " + "..| " + "|_| ";

            expect(console.log).toHaveBeenCalledWith(expectText);
        });
    });
});
describe('unit testing', function () {
    describe('buildNumberArry', function () {
        it('buildNumberArry should print correct text', function () {
            var numberArry = ["9", "1", "0"];

            expect(buildNumberArry("910")).toEqual(numberArry);
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

    describe('printNumberString（910）', function () {
        var numberArry = ["9", "1", "0"];
        var value = [
            ["._. ", "|_| ", "..| "],
            ["... ", "..| ", "..| "],
            ["._. ", "|.| ", "|_| "]];

        it('matchNumberString should print correct text', function () {

            var numberString =
                "._. " + "... " + "._. " + "\n" +
                "|_| " + "..| " + "|.| " + "\n" +
                "..| " + "..| " + "|_| ";

            expect(buildNumberString(value, numberArry)).toEqual(numberString);
        });
    });

    describe('printNumberString（9108）', function () {
        var numberArry = ["9", "1", "0", "8"];
        var value = [
            ["._. ", "|_| ", "..| "],
            ["... ", "..| ", "..| "],
            ["._. ", "|.| ", "|_| "],
            ["._. ", "|_| ", "|_| "]];

        it('matchNumberString should print correct text', function () {

            var numberString =
                "._. " + "... " + "._. " + "._. " + "\n" +
                "|_| " + "..| " + "|.| " + "|_| " + "\n" +
                "..| " + "..| " + "|_| " + "|_| ";

            expect(buildNumberString(value, numberArry)).toEqual(numberString);
        });
    });
});