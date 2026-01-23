import PlateauParser from "../PlateauParser.js";
import PlateauSize from "../PlateauSize.js"

describe ("PlateauParser", () =>
{
	test("Rejects empty string", () =>
	{
		const	testPlateauParser = new PlateauParser();
		const	input = "";

		const	output = testPlateauParser.parse(input);

		expect(output).toBe("error");
	})
	test("Rejects invalid instructions with no correct characters", () =>
	{
		const	testPlateauParser = new PlateauParser();
		const	input = "sadhnvweigbwenbg";

		const	output = testPlateauParser.parse(input);

		expect(output).toBe("error");
	});
	test("Rejects invalid instructions also containing valid characters", () =>
	{
		const	testPlateauParser= new PlateauParser();
		const	input = "sad22hnv12weigbwenbg";

		const	output = testPlateauParser.parse(input);

		expect(output).toBe("error");
	})
	test("Rejects numbers over two digits", () =>
	{
		const	testPlateauParser= new PlateauParser();
		const	firstNumOver = "223 22";
		const	secondNumOver = "23 224";
		const	bothNumsOver = "22312 2235";

		const	firstNumOutput= testPlateauParser.parse(firstNumOver);
		const	secondNumOutput = testPlateauParser.parse(secondNumOver);
		const	bothNumsOutput = testPlateauParser.parse(bothNumsOver);

		expect(firstNumOutput).toBe("error");
		expect(secondNumOutput).toBe("error");
		expect(bothNumsOutput).toBe("error");
	})
	test("Rejects more than two numbers", () =>
	{
		const	testPlateauParser= new PlateauParser();
		const	input = "20 12 5";

		const	output = testPlateauParser.parse(input);

		expect(output).toBe("error");

	})
	test("Returns PlateauSize class on valid input", () =>
	{
		const	testPlateauParser = new PlateauParser();
		const	input = "5 12";

		const	output = testPlateauParser.parse(input);

		expect(output).toBeInstanceOf(PlateauSize);
	})
	test("PlateauSize returned has correct values", () =>
	{
		const	testPlateauParser = new PlateauParser();
		const	input = "5 12";

		const	output = testPlateauParser.parse(input);

		expect(output.x).toBe(5);
		expect(output.y).toBe(12);
	})
})
