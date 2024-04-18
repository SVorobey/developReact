import { CalendarCells } from "@features/calendar/calendarCells"
import { CalendarHeader } from "@features/calendar/calendarHeader"
import { CalendarWrapper } from "./styles"
import useGetDate from "@shared/calendar/getDate";

export const CalendarEgar = () => {
    const firstLastDay = useGetDate();
    const day = firstLastDay.clone().subtract(1, 'day');
  return (
    <CalendarWrapper>
        <CalendarHeader day={day} />
        <CalendarCells day={day} />
    </CalendarWrapper>
  )
}
