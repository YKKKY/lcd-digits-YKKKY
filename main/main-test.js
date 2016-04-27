describe('lcd', function () {

    describe('unit', function () {

        var input = 910;
        var inputs = input + "";

        it('buildNumberArry should print correct text', function () {
            var numberArry = ["9", "1", "0"];

            expect(buildNumberArry(inputs)).toEqual(numberArry);
        });
    });

    describe('buildMatchNumber', function () {

        var numberArry = ["9", "1", "0"];

        it('matchNumberString should print correct text', function () {

            var numberString =
                "._. " + "... " + "._. " + "\n" +
                "|_| " + "..| " + "|.| " + "\n" +
                "..| " + "..| " + "|_| " + "\n";

            expect(matchNumberString(numberArry)).toEqual(numberString);
        });
    });
});