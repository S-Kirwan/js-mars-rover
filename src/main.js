import LandingParser from "./input/LandingParser.js";
import InstructionParser from "./input/InstructionParser.js";
import PlateauParser from "./input/PlateauParser.js";

function	main()
{
	// temporary examples before logic to receive input
	const	examplePlateauInput = "5 10";
	const	exampleRoverLandingInput = "1 2 N";
	const	exampleInstructionInput = "MMRMMRMRRM"

	const	plateauParser = new PlateauParser();
	const	instructionParser = new InstructionParser();
	const	landingParser = new LandingParser();
	
	const	plateauSize = plateauParser.parse(examplePlateauInput);
	console.log("plateauSize x = ", plateauSize.x);
	console.log("plateauSize y = ", plateauSize.y);

	const	instructions = instructionParser.parse(exampleInstructionInput);
	console.log("Instructions = ", instructions);

	const	rover = landingParser.parse(exampleRoverLandingInput);
	console.log("Rover = ", rover);

}

main();
