import promptSync from 'prompt-sync';

const	prompt = promptSync({sigint: true});

export default class UserInterface
{
	constructor () {};
	welcomeMessage()
	{
		const	welcomeMessage = `Welcome to Mars! Transport for Mars has hired you to explore the Red Planet with some state of the art rovers.
Designate a grid of the planet to explore, land rovers at certain points, and give them instructons to move them across the grid.`
		console.log(welcomeMessage);
	}
	promptGrid(plateauParser)
	{
		const	gridPrompt = `Input the size of the 2D plateau you wish to explore. It must be in the format 'x y', x and y must be numbers no more than two digits long.
E.g '5 5'`
		const	input = prompt(gridPrompt);
		const	plateauSize = plateauParser.parse(input);

		return (plateauSize);
	}
	promptLanding(landingParser)
	{
		const	landingPrompt = `Input landing coordinates of a rover, a compass direction the rover will be facing on landing (N, E, S, W), and a name for the rover. Coordinates must be no more than two digits, at least 0, and not beyond the size of the plateau.
E.g '2 3 E Delilah'`

		const input = prompt(landingPrompt);
		const rover = landingParser.parse(input)

		return (rover);
	}
	promptInstructions(instructionParser)
	{
		const	instructionPrompt = `Your rover can take three instructions, rotating left ('L'), rotating right ('R'), and moving forward ('M'). Input a consecutive string of instructions, and a rover's name to move that rover across the plateau.
E.G 'MMLMLMMRMM Delilah`

		const	input = prompt(instructionPrompt);
		const	instructions = instructionParser.parse(input);

		return (instructions);
	}
}
