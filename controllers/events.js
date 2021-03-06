const Events = require("../model/events");

const gelAll = async (req, res, next) => {
	try {
		const events = await Events.getAll();
		return res.json({
			status: "success",
			code: 200,
			data: { events },
		});
	} catch (error) {
		next(error);
	}
};

const create = async (req, res, next) => {
	try {
		const event = await Events.create(req.body);
		return res.status(201).json({
			status: "success",
			code: 201,
			data: {
				event,
			},
		});
	} catch (e) {
		next(e);
	}
};

const getById = async (req, res, next) => {
	try {
		const event = await Events.getById(req.params.id);
		if (event) {
			return res.json({
				status: "success",
				code: 200,
				data: { event },
			});
		} else {
			return res.status(404).json({
				status: "error",
				code: 404,
				data: "Not Found",
			});
		}
	} catch (error) {
		next(error);
	}
};

const update = async (req, res, next) => {
	try {
		const event = await Events.update(req.params.id, req.body);
		if (event) {
			return res.json({
				status: "success",
				code: 200,
				data: { event },
			});
		} else {
			return res.status(404).json({
				status: "error",
				code: 404,
				data: "Not Found",
			});
		}
	} catch (error) {
		next(error);
	}
};

const remove = async (req, res, next) => {
	try {
		const event = await Events.remove(req.params.id);
		if (event) {
			return res.json({
				status: "success",
				code: 200,
				data: { event },
			});
		} else {
			return res.status(204).json({
				status: "error",
				code: 204,
				data: "Not Found",
			});
		}
	} catch (error) {
		next(error);
	}
};

module.exports = {
	gelAll,
	getById,
	create,
	remove,
	update,
};
