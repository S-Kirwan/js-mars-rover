import Rover from "../logic/Rover.js";
import Position from "../logic/Position.js";

export default class LandingParser
{
	constructor () {};
	validate(input)
	{
		// matches only two numbers, each with 2 digits max and 1 cardinal direction
		// can have whitespace inbetween
		const	regex = /^\d{1,2}\s+\d{1,2}\s+[NESW]{1}$/;

		return (regex.test(input));
	}
	extractCoordinates(input)
	{
		// matches each number
		const	regex = /\d{1,2}/g;

		return (input.match(regex));
	}
	extractOrientation(input)
	{
		return (input.match(/[NESW]/));
	}
	parse(input)
	{
		const	rover = new Rover;
		
		input = input.trim();
		if (this.validate(input) === false)
			return ("error");

		const	coords = this.extractCoordinates(input);
		const	orientation = this.extractOrientation(input);
		const	landingPos = new Position();
		landingPos.x = Number(coords[0]);
		landingPos.y = Number(coords[1]);
		landingPos.orientation = orientation[0];
		rover.position = landingPos;
		return (rover);
	}
}
