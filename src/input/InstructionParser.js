import Instruction from "./instruction.js";

export default class InstructionParser
{
	constructor () {};
	validate(input)
	{
		const	regex = /^[LRM]+$/;

		return (regex.test(input));
	}
	clearWhiteSpace(input)
	{
		const	whitespace = /\s/g;

		return (input.replace(whitespace, ""));
	}
	parse(input)
	{
		const	instructions = [];

		input = this.clearWhiteSpace(input);
		if (this.validate(input) === false)
			return ("error");
		for (let i = 0; i < input.length; i++)
		{
			switch (input[i])
			{
				case Instruction.LEFT :
					instructions.push(Instruction.LEFT)
					break;
				case Instruction.RIGHT :
					instructions.push(Instruction.RIGHT)
					break;
				case Instruction.MOVE :
					instructions.push(Instruction.MOVE)
					break;
				default :
					return ("error");
					break;
			}
		}
		return (instructions);
	}
}
