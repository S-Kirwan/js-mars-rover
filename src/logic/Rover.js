import Position from "./Position.js"

export default class Rover
{
	#position;
	constructor(x, y, orientation)
	{
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
}
