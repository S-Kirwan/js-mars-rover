import LandingParser from "../LandingParser.js";
import Orientation from "../orientation.js";
import Position from "../../logic/Position.js";
import Rover from "../../logic/Rover.js";

describe ("LandingParser", () =>
{
	test("Rejects empty string", () =>
	{
		const	testLandingParser= new LandingParser();
		const	input = "";

		const	output = testLandingParser.parse(input);

		expect(output).toBe("error");
	})
	test("Rejects invalid instructions with no correct characters", () =>
	{
		const	testLandingParser = new LandingParser();
		const	input = "sadhnvweigbwenbg";

		const	output = testLandingParser.parse(input);

		expect(output).toBe("error");
	});
	test("Rejects invalid instructions also containing valid characters", () =>
	{
		const	testLandingParser= new LandingParser();
		const	input = "sad22hnv12weigbwenNbg";

		const	output = testLandingParser.parse(input);

		expect(output).toBe("error");
	})
	test("Rejects numbers over two digits", () =>
	{
		const	testLandingParser= new LandingParser();
		const	firstNumOver = "223 22 E";
		const	secondNumOver = "23 224 E";
		const	bothNumsOver = "22312 2235 E";

		const	firstNumOutput= testLandingParser.parse(firstNumOver);
		const	secondNumOutput = testLandingParser.parse(secondNumOver);
		const	bothNumsOutput = testLandingParser.parse(bothNumsOver);

		expect(firstNumOutput).toBe("error");
		expect(secondNumOutput).toBe("error");
		expect(bothNumsOutput).toBe("error");
	})
	test("Rejects more than two numbers", () =>
	{
		const	testLandingParser= new LandingParser();
		const	threeInput = "20 12 5 N";
		const	manyInput = "1 33 44 7 5 11 99 83 22 N";
		
		const	threeOutput = testLandingParser.parse(threeInput);
		const	manyOutput = testLandingParser.parse(manyInput);

		expect(threeOutput).toBe("error");
		expect(manyOutput).toBe("error");

	})
	test("Returns Rover class on valid input", () =>
	{
		const	testLandingParser = new LandingParser();
		const	input = "5 12 S";

		const	output = testLandingParser.parse(input);

		expect(output).toBeInstanceOf(Rover);
	})
	test("Rover returned has correct values", () =>
	{
		const	testLandingParser = new LandingParser();
		const	input = "5 12 S";

		const	testRover = testLandingParser.parse(input);

		expect(testRover).toHaveProperty("position");
		expect(testRover.position).toBeInstanceOf(Position);
		expect(testRover.position).toHaveProperty("x", 5);
		expect(testRover.position).toHaveProperty("y", 12);
		expect(testRover.position).toHaveProperty("orientation", Orientation.SOUTH);
	})
})
