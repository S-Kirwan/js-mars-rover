import PlateauParser from "../PlateauParser.js";
import PlateauSize from "../PlateauSize.js"

describe ("PlateauParser", () =>
{
	test("Rejects empty string", () =>
	{
		const	testPlateauParser = new PlateauParser();
		const	input = "";

		expect(() =>
		{
			testPlateauParser.parse(input);
		}).toThrow('Invalid Plateau Format');
	})
	test("Rejects invalid instructions with no correct characters", () =>
	{
		const	testPlateauParser = new PlateauParser();
		const	input = "sadhnvweigbwenbg";

		expect(() =>
		{
			testPlateauParser.parse(input);
		}).toThrow('Invalid Plateau Format');
	});
	test("Rejects invalid instructions also containing valid characters", () =>
	{
		const	testPlateauParser= new PlateauParser();
		const	input = "sad22hnv12weigbwenbg";

		expect(() =>
		{
			testPlateauParser.parse(input);
		}).toThrow('Invalid Plateau Format');
	})
	test("Rejects numbers over two digits", () =>
	{
		const	testPlateauParser= new PlateauParser();
		const	firstNumOver = "223 22";
		const	secondNumOver = "23 224";
		const	bothNumsOver = "22312 2235";

		expect(() =>
		{
			testPlateauParser.parse(firstNumOver);
		}).toThrow('Invalid Plateau Format');
		expect(() =>
		{
			testPlateauParser.parse(secondNumOver);
		}).toThrow('Invalid Plateau Format');
		expect(() =>
		{
			testPlateauParser.parse(bothNumsOver);
		}).toThrow('Invalid Plateau Format');
	})
	test("Rejects more than two numbers", () =>
	{
		const	testPlateauParser= new PlateauParser();
		const	threeInput = "20 12 5";
		const	manyInput = "1 33 44 7 5 11 99 83 22";
		
		expect(() =>
		{
			testPlateauParser.parse(threeInput);
		}).toThrow('Invalid Plateau Format');
		expect(() =>
		{
			testPlateauParser.parse(manyInput);
		}).toThrow('Invalid Plateau Format');
	})
	test("Rejects 0 as an option", () =>
	{
		const	testPlateauParser = new PlateauParser();
		const	inputFirst = "0 5";
		const	inputSecond= "5 0";
		const	inputBoth = "0 0";

		expect(() =>
		{
			testPlateauParser.parse(inputFirst);
		}).toThrow('Invalid Plateau Size');
		expect(() =>
		{
			testPlateauParser.parse(inputSecond);
		}).toThrow('Invalid Plateau Size');
		expect(() =>
		{
			testPlateauParser.parse(inputBoth);
		}).toThrow('Invalid Plateau Size');
	})
	test("Rejects negative numbers", () =>
	{
		const	testPlateauParser = new PlateauParser();
		const	inputFirst = "-5 5";
		const	inputSecond= "5 -9";
		const	inputBoth = "-12 -4";

		expect(() =>
		{
			testPlateauParser.parse(inputFirst);
		}).toThrow('Invalid Plateau Format');
		expect(() =>
		{
			testPlateauParser.parse(inputSecond);
		}).toThrow('Invalid Plateau Format');
		expect(() =>
		{
			testPlateauParser.parse(inputBoth);
		}).toThrow('Invalid Plateau Format');
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
