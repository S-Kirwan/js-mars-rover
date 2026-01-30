import LandingParser from "./input/LandingParser.js";
import InstructionParser from "./input/InstructionParser.js";
import PlateauParser from "./input/PlateauParser.js";
import UserInterface from "./ui/ui.js";
import Plateau from "./logic/plateau.js";

function	main()
{
	const	plateauParser = new PlateauParser();
	const	instructionParser = new InstructionParser();
	const	landingParser = new LandingParser();
	const	userInterface = new UserInterface();
	let		plateauSize;
	let		rover;
	let		instructions;
	
	userInterface.welcomeMessage();
	try
	{
		plateauSize = userInterface.promptGrid(plateauParser);
	}
	catch (error)
	{
		console.log(error);
		return ;
	}
	const	plateau = new Plateau(plateauSize);
	try
	{
		rover = userInterface.promptLanding(landingParser);
		plateau.addRover(rover);
		instructions = userInterface.promptInstructions(instructionParser);
		rover.executeInstructions(instructions, plateauSize);
	}
	catch (error)
	{
		console.log(error.message);
		return ;
	}
}

main();
