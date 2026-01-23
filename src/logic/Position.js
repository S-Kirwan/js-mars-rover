export default class Position
{
	#x;
	#y;
	#orientation;
	constructor(x, y, orientation)
	{
		this.#x = x;
		this.#y = y;
		this.#orientation = orientation;
	}
	get x ()
	{
		return (this.#x);
	}
	get y ()
	{
		return (this.#y);
	}
	get orientation ()
	{
		return (this.#orientation);
	}
	set x (x)
	{
		this.#x = x;
	}
	set y (y)
	{
		this.#y = y;
	}
	set orientation (orientation)
	{
		this.#orientation = orientation;
	}
}
