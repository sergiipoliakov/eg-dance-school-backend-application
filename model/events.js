const Events = require("./schemas/events");

const getAll = async () => {
	const results = await Events.find();
	return results;
};

const getById = async (id) => {
	const result = await Events.findOne({ _id: id });
	return result;
};

const remove = async (id) => {
	const result = await Events.findByIdAndRemove({ _id: id });
	return result;
};

const create = async (body) => {
	try {
		const result = await Events.create(body);
		return result;
	} catch (error) {
		console.log(error);
	}
};

const update = async (id, body) => {
	const result = await Events.findByIdAndUpdate(
		{ _id: id },
		{ ...body },
		{ new: true }
	);
	return result;
};

module.exports = { getAll, getById, remove, create, update };
