const db = require("./db");

const { v4: uuidv4 } = require("uuid");

const getAll = async () => {
	return db.get("events").value();
};

const getById = async (id) => {
	return db.get("events").find({ id }).value();
};

const remove = async (id) => {
	const [record] = db.get("events").remove({ id }).write();
	return record;
};

const create = async (body) => {
	const id = uuidv4();
	const record = {
		id,
		...body,
		...(body.date ? {} : { date: new Date() }),
	};
	db.get("events").push(record).write();
	return record;
};

const update = async (id, body) => {
	const record = db.get("events").find({ id }).assign(body).value();
	db.write();
	return record.id ? record : null;
};

module.exports = { getAll, getById, remove, create, update };
