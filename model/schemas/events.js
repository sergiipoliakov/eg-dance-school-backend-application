const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const eventsSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Set name for event's author "],
		},
		title: {
			type: String,
			required: [true, "Set title for event"],
		},
		date: { type: String, default: Date.now },
		time: { type: String, required: [true, "Set time for event"] },
		text: {
			type: String,
			required: [true, "Write description about the event"],
		},
	},
	{ versionKey: false, timestamps: true }
);

const Event = model("event", eventsSchema);

module.exports = Event;
