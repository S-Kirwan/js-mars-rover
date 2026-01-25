import Rover from "../logic/Rover.js";
import Position from "../logic/Position.js";

export default class LandingParser
{
	constructor () {};
	validate(input)
	{
		// matches only two numbers, each with 2 digits max, 1 cardinal direction (chars "N", "E", "S" or "W", and 1 word for rover name)
		// must have whitespace inbetween
		const	regex = /^\d{1,2}\s+\d{1,2}\s+[NESW]{1}\s+\w{3,}$/;

		return (regex.test(input));
	}
	checkNameUnique(name, rovers)
	{
		for (let rover of rovers)
		{
			if (rover.name === name)
				return (false);
		}
		return (true);
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
	extractName(input)
	{
		return (input.match(/\w{3,}/));
	}
	parse(input, plateau)
	{
		input = input.trim();
		if (this.validate(input) === false)
			throw new Error('Invalid landing format')

		const	coords = this.extractCoordinates(input);
		const	orientation = this.extractOrientation(input);
		const	name = this.extractName(input)[0];

		if (this.checkNameUnique(name, plateau.rovers) === false)
			throw new Error('Please enter a unique name');

		const	landingPos = new Position();
		const	rover = new Rover;

		landingPos.x = Number(coords[0]);
		landingPos.y = Number(coords[1]);
		if (landingPos.x < 0 || landingPos.x > plateau.size.x)
			throw new Error('Invalid landing position');
		if (landingPos.y < 0 || landingPos.y > plateau.size.y)
			throw new Error('Invalid landing position');
		landingPos.orientation = orientation[0];
		rover.position = landingPos;
		rover.name = name;
		return (rover);
	}
}
