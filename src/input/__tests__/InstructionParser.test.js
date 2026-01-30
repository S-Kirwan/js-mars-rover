import InstructionParser from "../InstructionParser.js"

describe("InstructionParser", () =>
{
	test("Rejects empty string", () =>
	{
		const	testInstructionParser = new InstructionParser();
		const	input = "";

		expect(() =>
		{
			testInstructionParser.parse(input)
		}).toThrow('Invalid Instructions');
	})
	test("Rejects invalid instructions with no correct characters", () =>
	{
		const	testInstructionParser = new InstructionParser();
		const	input = "sadhnvweigbwenbg";

		expect(() =>
		{
			testInstructionParser.parse(input)
		}).toThrow('Invalid Instructions');
	});
	test("Rejects invalid instructions also containing valid characters", () =>
	{
		const	testInstructionParser = new InstructionParser();
		const	input = "sadhnLRvweiMMgRLMbwenbg";

		expect(() =>
		{
			testInstructionParser.parse(input)
		}).toThrow('Invalid Instructions');
	})
	test("Accepts one valid instruction", () =>
	{
		const	testInstructionParser = new InstructionParser();
		const	input = "M";

		const	output = testInstructionParser.parse(input);

		const	expectedOutput = ["M"];
		expect(output).toEqual(expectedOutput);
	})
	test("Accepts multiple valid instructions", () =>
	{
		const	testInstructionParser = new InstructionParser();
		const	input = "MLLRMMLM";

		const	output = testInstructionParser.parse(input);

		const	expectedOutput = 
			["M", "L", "L", "R", "M", "M", "L", "M"];
		expect(output).toEqual(expectedOutput);
	})
	test("Accepts multiple valid instructions with spaces", () =>
	{
		const	testInstructionParser = new InstructionParser();
		const	input = "  MLL  RM  MLM";

		const	output = testInstructionParser.parse(input);

		const	expectedOutput = 
			["M", "L", "L", "R", "M", "M", "L", "M"];
		expect(output).toEqual(expectedOutput);
	})
})
