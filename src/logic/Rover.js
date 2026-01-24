import Instruction from "../input/instruction.js";
import Orientation from "../input/orientation.js";
import Position from "./Position.js";

export default class Rover
{
	#position;
	#name;
	constructor(x, y, orientation, name = "Roger")
	{
		this.#name = name; 
		this.#position = new Position(x, y, orientation);
	};
	get position ()
	{
		return (this.#position);
	}
	set position(position)
	{
		this.#position = position;
	}
	get name ()
	{
		return (this.#name);
	}
	rotateLeft()
	{
		switch (this.#position.orientation)
		{
			case Orientation.NORTH:
				this.#position.orientation = Orientation.WEST;
				break;
			case Orientation.EAST:
				this.#position.orientation = Orientation.NORTH;
				break;
			case Orientation.SOUTH:
				this.#position.orientation = Orientation.EAST;
				break;
			case Orientation.WEST:
				this.#position.orientation = Orientation.SOUTH;
				break;
		}
	}
	rotateRight()
	{
		switch (this.#position.orientation)
		{
			case Orientation.NORTH:
				this.#position.orientation = Orientation.EAST;
				break;
			case Orientation.EAST:
				this.#position.orientation = Orientation.SOUTH;
				break;
			case Orientation.SOUTH:
				this.#position.orientation = Orientation.WEST;
				break;
			case Orientation.WEST:
				this.#position.orientation = Orientation.NORTH;
				break;
		}
	}
	moveForward(plateauSize)
	{
		switch (this.#position.orientation)
		{
			case Orientation.NORTH:
				if (this.#position.y === plateauSize.y)
					throw new Error(`Rover ${this.#name} has fallen off a cliff RIP :(`)
				this.#position.y += 1;
				break;
			case Orientation.EAST:
				if (this.#position.x === plateauSize.x)
					throw new Error(`Rover ${this.#name} has gone out of signal range and revolted against their creators!`)
				this.#position.x += 1;
				break;
			case Orientation.SOUTH:
				if (this.#position.y === 0)
					throw new Error(`Rover ${this.#name} has driven into a lake of ice and frozen RIP :(`)
				this.#position.y -= 1;
				break;
			case Orientation.WEST:
				if (this.#position.x === 0)
					throw new Error(`Rover ${this.#name} has ran into a patch of high intensity radiation and fried its electronics. RIP :(`)
				this.#position.x -= 1;
				break;
			default:
				break;
		}
	}
	executeInstructions(instructions, plateauSize)
	{
		for (let instruction of instructions)
		{
			switch (instruction)
			{
				case Instruction.LEFT:
					this.rotateLeft();
					break;
				case Instruction.RIGHT:
					this.rotateRight();
					break;
				case Instruction.MOVE:
					try
					{
						this.moveForward(plateauSize);
					}
					catch (error)
					{
						console.log(error.message);
						throw new Error(`Rover ${this.#name} has died`);
					}
				default:
					break;
			}
		}
		console.log("New position:");
		console.log(this.#position.x, this.#position.y, this.#position.orientation);
	}
}
