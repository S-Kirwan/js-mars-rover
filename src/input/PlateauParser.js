import PlateauSize from "./PlateauSize.js"

export default class PlateauParser
{
	constructor () {};
	validate(input)
	{
		// matches only two numbers, each with 2 digits max
		// can have whitespace inbetween
		const	regex = /^\d{1,2}\s+\d{1,2}$/;

		return (regex.test(input));
	}
	extractCoordinates(input)
	{
		// matches each number
		const	regex = /\d{1,2}/g;

		return (input.match(regex));
	}
	parse(input)
	{
		const	plateauSize = new PlateauSize();

		input = input.trim();
		if (this.validate(input) === false)
			throw new Error('Invalid Plateau Format');

		const	coordinates = this.extractCoordinates(input);
		plateauSize.x = Number(coordinates[0]);
		plateauSize.y = Number(coordinates[1]);
		if (plateauSize.x === 0 || plateauSize.y === 0)
			throw new Error('Invalid Plateau Size');
		return (plateauSize);
	}
}
