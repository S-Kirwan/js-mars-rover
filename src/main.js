import LandingParser from "./input/LandingParser.js";
import InstructionParser from "./input/InstructionParser.js";
import PlateauParser from "./input/PlateauParser.js";

function	main()
{
	// temporary examples before logic to receive input
	const	examplePlateauInput = "1 1";
	const	exampleRoverLandingInput = "1 2 N";
	const	exampleInstructionInput = "LMLMLMLMM"

	const	plateauParser = new PlateauParser();
	const	instructionParser = new InstructionParser();
	const	landingParser = new LandingParser();
	
	const	plateauSize = plateauParser.parse(examplePlateauInput);
	const	instructions = instructionParser.parse(exampleInstructionInput);
	const	rover = landingParser.parse(exampleRoverLandingInput);

	try
	{
		rover.executeInstructions(instructions, plateauSize);
	}
	catch (error)
	{
		console.log(error.message);
	}
}

main();
