import Orientation from "../../input/orientation.js";
import Instruction from "../../input/instruction.js";
import PlateauSize from "../../input/PlateauSize.js";
import Rover from "../Rover.js";

describe("Rover Class", () =>
{
	describe("rotateLeft", () =>
	{
		test("Can rotate left starting from facing north", () =>
		{
			const	testRover = new Rover(5, 5, Orientation.NORTH);
	
			testRover.rotateLeft();
			expect(testRover.position.orientation).toBe(Orientation.WEST);
		})
		test("Can rotate left starting from facing east", () =>
		{
			const	testRover = new Rover(5, 5, Orientation.EAST);
	
			testRover.rotateLeft();
			expect(testRover.position.orientation).toBe(Orientation.NORTH);
		})
		test("Can rotate left starting from facing south", () =>
		{
			const	testRover = new Rover(5, 5, Orientation.SOUTH);
	
			testRover.rotateLeft();
			expect(testRover.position.orientation).toBe(Orientation.EAST);
		})
		test("Can rotate left starting from facing west", () =>
		{
			const	testRover = new Rover(5, 5, Orientation.WEST);
	
			testRover.rotateLeft();
			expect(testRover.position.orientation).toBe(Orientation.SOUTH);
		})
	})
	describe("rotateRight", () =>
	{
		test("Can rotate right starting from facing north", () =>
		{
			const	testRover = new Rover(5, 5, Orientation.NORTH);
	
			testRover.rotateRight();
			expect(testRover.position.orientation).toBe(Orientation.EAST);
		})
		test("Can rotate right starting from facing east", () =>
		{
			const	testRover = new Rover(5, 5, Orientation.EAST);
	
			testRover.rotateRight();
			expect(testRover.position.orientation).toBe(Orientation.SOUTH);
		})
		test("Can rotate right starting from facing south", () =>
		{
			const	testRover = new Rover(5, 5, Orientation.SOUTH);
	
			testRover.rotateRight();
			expect(testRover.position.orientation).toBe(Orientation.WEST);
		})
		test("Can rotate right starting from facing west", () =>
		{
			const	testRover = new Rover(5, 5, Orientation.WEST);
	
			testRover.rotateRight();
			expect(testRover.position.orientation).toBe(Orientation.NORTH);
		})
	})
	describe("moveForward", () =>
	{
		test("Updates position correctly when facing north and within bounds", () =>
		{
			const	testRover = new Rover(5, 5, Orientation.NORTH);
			const	plateauSize = new PlateauSize(10, 10);

			testRover.moveForward(plateauSize);
			expect(testRover.position.y).toBe(6);
			expect(testRover.position.x).toBe(5);
			expect(testRover.position.orientation).toBe(Orientation.NORTH);
		})
		test("Updates position correctly when facing east and within bounds", () =>
		{
			const	testRover = new Rover(5, 5, Orientation.EAST);
			const	plateauSize = new PlateauSize(10, 10);

			testRover.moveForward(plateauSize);
			expect(testRover.position.y).toBe(5);
			expect(testRover.position.x).toBe(6);
			expect(testRover.position.orientation).toBe(Orientation.EAST);
		})
		test("Updates position correctly when facing south and within bounds", () =>
		{
			const	testRover = new Rover(5, 5, Orientation.SOUTH);
			const	plateauSize = new PlateauSize(10, 10);

			testRover.moveForward(plateauSize);
			expect(testRover.position.y).toBe(4);
			expect(testRover.position.x).toBe(5);
			expect(testRover.position.orientation).toBe(Orientation.SOUTH);
		})
		test("Updates position correctly when facing west and within bounds", () =>
		{
			const	testRover = new Rover(5, 5, Orientation.WEST);
			const	plateauSize = new PlateauSize(10, 10);

			testRover.moveForward(plateauSize);
			expect(testRover.position.y).toBe(5);
			expect(testRover.position.x).toBe(4);
			expect(testRover.position.orientation).toBe(Orientation.WEST);
		})
		test("Throws error when going out of bounds north", () =>
		{
			const	testRover = new Rover(5, 5, Orientation.NORTH);
			const	plateauSize = new PlateauSize(5, 5);

			expect(() =>
			{
				testRover.moveForward(plateauSize);
			}).toThrow(`Rover ${testRover.name} has fallen off a cliff RIP :(`);
		})
		test("Throws error when going out of bounds east", () =>
		{
			const	testRover = new Rover(5, 5, Orientation.EAST);
			const	plateauSize = new PlateauSize(5, 5);

			expect(() =>
			{
				testRover.moveForward(plateauSize);
			}).toThrow(`Rover ${testRover.name} has gone out of signal range and revolted against their creators!`);
		})
		test("Throws error when going out of bounds south", () =>
		{
			const	testRover = new Rover(5, 0, Orientation.SOUTH);
			const	plateauSize = new PlateauSize(5, 5);

			expect(() =>
			{
				testRover.moveForward(plateauSize);
			}).toThrow(`Rover ${testRover.name} has driven into a lake of ice and frozen RIP :(`);
		})
		test("Throws error when going out of bounds west", () =>
		{
			const	testRover = new Rover(0, 5, Orientation.WEST);
			const	plateauSize = new PlateauSize(5, 5);

			expect(() =>
			{
				testRover.moveForward(plateauSize);
			}).toThrow(`Rover ${testRover.name} has ran into a patch of high intensity radiation and fried its electronics. RIP :(`);
		})
	})
	describe("executeInstructions", () =>
	{
		test("updates rover correctly when given one valid instruction", () =>
		{
			const	instructions = [Instruction.MOVE]
			const	plateauSize = new PlateauSize(5, 5);
			const	testRover = new Rover(2, 2, Orientation.WEST);
			
			testRover.executeInstructions(instructions, plateauSize);
			expect(testRover.position.x).toBe(1);
			expect(testRover.position.y).toBe(2);
			expect(testRover.position.orientation).toBe(Orientation.WEST);
		})
		test("updates rover correctly when given multiple valid instructions", () =>
		{
			const	instructions =
			[
				Instruction.MOVE,
				Instruction.RIGHT,
				Instruction.MOVE,
				Instruction.MOVE,
				Instruction.RIGHT,
				Instruction.MOVE,
				Instruction.MOVE,
				Instruction.LEFT,
				Instruction.LEFT,
				Instruction.LEFT,
				Instruction.MOVE,
				Instruction.MOVE,
			]
			const	plateauSize = new PlateauSize(5, 5);
			const	testRover = new Rover(2, 2, Orientation.WEST);
			
			testRover.executeInstructions(instructions, plateauSize);
			expect(testRover.position.x).toBe(3);
			expect(testRover.position.y).toBe(2);
			expect(testRover.position.orientation).toBe(Orientation.SOUTH);
		})
		test("throws error when given an invalid set of instructions", () =>
		{
			const	instructions =
			[
				Instruction.MOVE,
				Instruction.RIGHT,
				Instruction.MOVE,
				Instruction.MOVE,
				Instruction.RIGHT,
				Instruction.MOVE,
				Instruction.MOVE,
				Instruction.LEFT,
				Instruction.LEFT,
				Instruction.LEFT,
				Instruction.MOVE,
				Instruction.MOVE,
			]
			const	plateauSize = new PlateauSize(1, 1);
			const	testRover = new Rover(2, 2, Orientation.WEST);
			
			expect(() =>
			{
				testRover.executeInstructions(instructions, plateauSize);
			}).toThrow(`Rover ${testRover.name} has died`);
		})
	})
})
