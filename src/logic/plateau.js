export default class Plateau
{
	#size;
	#rovers;
	constructor (size, rovers = [])
	{
		this.#size = size;
		this.#rovers = rovers;
	}
	get size()
	{
		return (this.#size);
	}
	get rovers()
	{
		return (this.#rovers);
	}
	addRover(rover)
	{
		this.#rovers.push(rover);
	}
	destroyRover(rover)
	{
		const	index = this.#rovers.indexOf(rover)
		if (index > -1)
		{
			this.#rovers.splice(index, 1);
		}
	}
}
