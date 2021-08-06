const db = require("./db");
const { ObjectId } = require("mongodb");

const { v4: uuidv4 } = require("uuid");

const getCollection = async (db, name) => {
	const client = await db;
	const collection = await client.db().collection(name);
	return collection;
};

const getAll = async () => {
	const collection = await getCollection(db, "events");
	const results = await collection.find().toArray();
	return results;
};

const getById = async (id) => {
	const collection = await getCollection(db, "events");
	const objectId = new ObjectId(id);

	const [result] = await collection.find({ _id: objectId }).toArray();
	return result;
};

const remove = async (id) => {
	const collection = await getCollection(db, "events");
	const objectId = new ObjectId(id);

	const { value: result } = await collection.findOneAndDelete({
		_id: objectId,
	});
	return result;
};

const create = async (body) => {
	const record = {
		...body,
		...(body.date ? {} : { date: new Date() }),
	};
	const collection = await getCollection(db, "events");
	const result = await collection.insertOne(record);
	return result;
};

const update = async (id, body) => {
	const collection = await getCollection(db, "events");
	const objectId = new ObjectId(id);

	const { value: result } = await collection.findOneAndUpdate(
		{
			_id: objectId,
		},
		{ $set: body }
	);

	return result;
};

module.exports = { getAll, getById, remove, create, update };
