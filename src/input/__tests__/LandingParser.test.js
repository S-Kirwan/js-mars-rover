import PlateauSize from "../PlateauSize.js";
import LandingParser from "../LandingParser.js";
import Orientation from "../orientation.js";
import Position from "../../logic/Position.js";
import Plateau from "../plateau.js";
import Rover from "../../logic/Rover.js";

describe ("LandingParser", () =>
{
	test("Rejects empty string", () =>
	{
		const	testLandingParser= new LandingParser();
		const	input = "";

		expect(() =>
		{
			testLandingParser.parse(input)
		}).toThrow('Invalid landing format');
	})
	test("Rejects invalid instructions with no correct characters", () =>
	{
		const	testLandingParser = new LandingParser();
		const	input = "sadhnvweigbwenbg";

		expect(() =>
		{
			testLandingParser.parse(input)
		}).toThrow('Invalid landing format');
	});
	test("Rejects invalid instructions also containing valid characters", () =>
	{
		const	testLandingParser= new LandingParser();
		const	input = "sad22hnv12weigbwenNbg";

		expect(() =>
		{
			testLandingParser.parse(input)
		}).toThrow('Invalid landing format');
	})
	test("Rejects numbers less than 0", () =>
	{
		const	testLandingParser= new LandingParser();
		const	firstNumOver = "223 22 E";
		const	secondNumOver = "23 224 E";
		const	bothNumsOver = "22312 2235 E";

		expect(() =>
		{
			testLandingParser.parse(firstNumOver)
		}).toThrow('Invalid landing format');
		expect(() =>
		{
			testLandingParser.parse(secondNumOver)
		}).toThrow('Invalid landing format');
		expect(() =>
		{
			testLandingParser.parse(bothNumsOver)
		}).toThrow('Invalid landing format');
	})
	test("Rejects numbers over two digits", () =>
	{
		const	testLandingParser= new LandingParser();
		const	firstNumOver = "223 22 E";
		const	secondNumOver = "23 224 E";
		const	bothNumsOver = "22312 2235 E";

		expect(() =>
		{
			testLandingParser.parse(firstNumOver)
		}).toThrow('Invalid landing format');
		expect(() =>
		{
			testLandingParser.parse(secondNumOver)
		}).toThrow('Invalid landing format');
		expect(() =>
		{
			testLandingParser.parse(bothNumsOver)
		}).toThrow('Invalid landing format');
	})
	test("Rejects more than two numbers", () =>
	{
		const	testLandingParser= new LandingParser();
		const	threeInput = "20 12 5 N";
		const	manyInput = "1 33 44 7 5 11 99 83 22 N";
		
		expect(() =>
		{
			testLandingParser.parse(threeInput)
		}).toThrow('Invalid landing format');
		expect(() =>
		{
			testLandingParser.parse(manyInput)
		}).toThrow('Invalid landing format');

	})
	test("Returns Rover class on valid input", () =>
	{
		const	testLandingParser = new LandingParser();
		const	testPlateauSize = new PlateauSize(20, 20);
		const	testPlateau = new Plateau(testPlateauSize);
		const	input = "5 12 S Frederick";

		const	output = testLandingParser.parse(input, testPlateau);

		expect(output).toBeInstanceOf(Rover);
	})
	test("Rover returned has correct values", () =>
	{
		const	testLandingParser = new LandingParser();
		const	testPlateauSize = new PlateauSize(20, 20);
		const	testPlateau = new Plateau(testPlateauSize);
		const	input = "5 12 S Frederick";

		const	testRover = testLandingParser.parse(input, testPlateau);

		expect(testRover).toHaveProperty("name", "Frederick");
		expect(testRover).toHaveProperty("position");
		expect(testRover.position).toBeInstanceOf(Position);
		expect(testRover.position).toHaveProperty("x", 5);
		expect(testRover.position).toHaveProperty("y", 12);
		expect(testRover.position).toHaveProperty("orientation", Orientation.SOUTH);
	})
})
