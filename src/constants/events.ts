import { v4 as uuidv4 } from "uuid";
const now = new Date();

export type EventType = {
	id: string;
	title: string;
	start: Date;
	end: Date;
	desc?: string;
	allDay?: boolean;
};

export const events: EventType[] = [
	{
		id: uuidv4(),
		title: "All Day Event very long title",
		allDay: true,
		start: new Date(2015, 3, 0),
		end: new Date(2015, 3, 1),
	},
	{
		id: uuidv4(),
		title: "Long Event",
		start: new Date(2015, 3, 7),
		end: new Date(2015, 3, 10),
	},

	{
		id: uuidv4(),
		title: "DTS STARTS",
		start: new Date(2016, 2, 13, 0, 0, 0),
		end: new Date(2016, 2, 20, 0, 0, 0),
	},

	{
		id: uuidv4(),
		title: "DTS ENDS",
		start: new Date(2016, 10, 6, 0, 0, 0),
		end: new Date(2016, 10, 13, 0, 0, 0),
	},

	{
		id: uuidv4(),
		title: "Some Event",
		start: new Date(2015, 3, 9, 0, 0, 0),
		end: new Date(2015, 3, 10, 0, 0, 0),
	},
	{
		id: uuidv4(),
		title: "Conference",
		start: new Date(2015, 3, 11),
		end: new Date(2015, 3, 13),
		desc: "Big conference for important people",
	},
	{
		id: uuidv4(),
		title: "Meeting",
		start: new Date(2015, 3, 12, 10, 30, 0, 0),
		end: new Date(2015, 3, 12, 12, 30, 0, 0),
		desc: "Pre-meeting meeting, to prepare for the meeting",
	},
	{
		id: uuidv4(),
		title: "Lunch",
		start: new Date(2015, 3, 12, 12, 0, 0, 0),
		end: new Date(2015, 3, 12, 13, 0, 0, 0),
		desc: "Power lunch",
	},
	{
		id: uuidv4(),
		title: "Meeting",
		start: new Date(2015, 3, 12, 14, 0, 0, 0),
		end: new Date(2015, 3, 12, 15, 0, 0, 0),
	},
	{
		id: uuidv4(),
		title: "Happy Hour",
		start: new Date(2015, 3, 12, 17, 0, 0, 0),
		end: new Date(2015, 3, 12, 17, 30, 0, 0),
		desc: "Most important meal of the day",
	},
	{
		id: uuidv4(),
		title: "Dinner",
		start: new Date(2015, 3, 12, 20, 0, 0, 0),
		end: new Date(2015, 3, 12, 21, 0, 0, 0),
	},
	{
		id: uuidv4(),
		title: "Planning Meeting with Paige",
		start: new Date(2015, 3, 13, 8, 0, 0),
		end: new Date(2015, 3, 13, 10, 30, 0),
	},
	{
		id: uuidv4(),
		title: "Inconvenient Conference Call",
		start: new Date(2015, 3, 13, 9, 30, 0),
		end: new Date(2015, 3, 13, 12, 0, 0),
	},
	{
		id: uuidv4(),
		title: "Project Kickoff - Lou's Shoes",
		start: new Date(2015, 3, 13, 11, 30, 0),
		end: new Date(2015, 3, 13, 14, 0, 0),
	},
	{
		id: uuidv4(),
		title: "Quote Follow-up - Tea by Tina",
		start: new Date(2015, 3, 13, 15, 30, 0),
		end: new Date(2015, 3, 13, 16, 0, 0),
	},
	{
		id: uuidv4(),
		title: "Late Night Event",
		start: new Date(2015, 3, 17, 19, 30, 0),
		end: new Date(2015, 3, 18, 2, 0, 0),
	},
	{
		id: uuidv4(),
		title: "Late Same Night Event",
		start: new Date(2015, 3, 17, 19, 30, 0),
		end: new Date(2015, 3, 17, 23, 30, 0),
	},
	{
		id: uuidv4(),
		title: "Multi-day Event",
		start: new Date(2015, 3, 20, 19, 30, 0),
		end: new Date(2015, 3, 22, 2, 0, 0),
	},
	{
		id: uuidv4(),
		title: "Today",
		start: new Date(new Date().setHours(new Date().getHours() - 3)),
		end: new Date(new Date().setHours(new Date().getHours() + 3)),
	},
	{
		id: uuidv4(),
		title: "Point in Time Event",
		start: now,
		end: now,
	},
	{
		id: uuidv4(),
		title: "Video Record",
		start: new Date(2015, 3, 14, 15, 30, 0),
		end: new Date(2015, 3, 14, 19, 0, 0),
	},
	{
		id: uuidv4(),
		title: "Dutch Song Producing",
		start: new Date(2015, 3, 14, 16, 30, 0),
		end: new Date(2015, 3, 14, 20, 0, 0),
	},
	{
		id: uuidv4(),
		title: "Itaewon Halloween Meeting",
		start: new Date(2015, 3, 14, 16, 30, 0),
		end: new Date(2015, 3, 14, 17, 30, 0),
	},
	{
		id: uuidv4(),
		title: "Online Coding Test",
		start: new Date(2015, 3, 14, 17, 30, 0),
		end: new Date(2015, 3, 14, 20, 30, 0),
	},
	{
		id: uuidv4(),
		title: "An overlapped Event",
		start: new Date(2015, 3, 14, 17, 0, 0),
		end: new Date(2015, 3, 14, 18, 30, 0),
	},
	{
		id: uuidv4(),
		title: "Phone Interview",
		start: new Date(2015, 3, 14, 17, 0, 0),
		end: new Date(2015, 3, 14, 18, 30, 0),
	},
	{
		id: uuidv4(),
		title: "Cooking Class",
		start: new Date(2015, 3, 14, 17, 30, 0),
		end: new Date(2015, 3, 14, 19, 0, 0),
	},
	{
		id: uuidv4(),
		title: "Go to the gym",
		start: new Date(2015, 3, 14, 18, 30, 0),
		end: new Date(2015, 3, 14, 20, 0, 0),
	},
];
