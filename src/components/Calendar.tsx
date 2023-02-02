import React, { useState } from "react";
import { Calendar as ReactBigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { events, EventType } from "../constants/events";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-US");
const localizer = momentLocalizer(moment);

export default function Calendar() {
	const [eventsData, setEventsData] = useState<EventType[]>(events);

	const handleSelect = ({ start, end }: { start: Date; end: Date }) => {
		console.log(start);
		console.log(end);
		const title = window.prompt("New Event name");
		if (title)
			setEventsData([
				...eventsData,
				{
					id: uuidv4(),
					start,
					end,
					title,
				},
			]);
	};
	return (
		<div className="App">
			<ReactBigCalendar
				views={["day", "agenda", "work_week", "month"]}
				selectable
				localizer={localizer}
				defaultDate={new Date()}
				defaultView="month"
				events={eventsData}
				style={{ height: "100vh" }}
				onSelectEvent={(event) => alert(event.title)}
				onSelectSlot={handleSelect}
			/>
		</div>
	);
}
