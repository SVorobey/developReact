// import { CalendarCellsMonth } from "@features/calendar/calendarCellsMonth"
import { CalendarHeader } from "@features/calendar/calendarHeader"
import { CalendarWrapper } from "./styles"
import { useAppSelector } from "@shared/hooks/reduxHooks"
import { fullDateSelector, monthYearSelector } from "@entities/calendar/model"
import { CalendarCellsWeek } from "@features/calendar/calendarCellsWeek"

export const CalendarEgar = () => {
  const currentDate = useAppSelector(fullDateSelector);
  const currentMonthYear = useAppSelector(monthYearSelector);

  return (
    <CalendarWrapper>
        <CalendarHeader currentmonthyear={currentMonthYear} />
        {/* <CalendarCellsMonth fulldate={currentDate} /> */}
        <CalendarCellsWeek fulldate={currentDate} />
    </CalendarWrapper>
  )
}
