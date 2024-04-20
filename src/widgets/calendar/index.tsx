import { CalendarCells } from "@features/calendar/calendarCells"
import { CalendarHeader } from "@features/calendar/calendarHeader"
import { CalendarWrapper } from "./styles"
import { useAppSelector } from "@shared/hooks/reduxHooks"
import { fullDateSelector, monthYearSelector } from "@entities/calendar/model"

export const CalendarEgar = () => {
  const currentDate = useAppSelector(fullDateSelector);
  const currentMonthYear = useAppSelector(monthYearSelector);

  return (
    <CalendarWrapper>
        <CalendarHeader currentmonthyear={currentMonthYear} />
        <CalendarCells fulldate={currentDate} />
    </CalendarWrapper>
  )
}
