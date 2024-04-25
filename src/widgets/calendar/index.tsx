import { CalendarHeader } from "@features/calendar/header";
import { CalendarWrapper } from "./styles";
import { useAppSelector } from "@shared/hooks/reduxHooks";
import {
  fullDateSelector,
  monthYearSelector,
  viewSelector,
} from "@entities/calendar/model";
import { CalendarCellsWeek } from "@features/calendar/cells/week";
import { CalendarCellsMonth } from "@features/calendar/cells/month";

export const CalendarEgar = () => {
  const currentDate = useAppSelector(fullDateSelector);
  const currentMonthYear = useAppSelector(monthYearSelector);
  const currentView = useAppSelector(viewSelector);

  return (
    <CalendarWrapper>
      <CalendarHeader currentmonthyear={currentMonthYear} />
      {currentView === "month" ? (
        <CalendarCellsMonth fulldate={currentDate} />
      ) : (
        <CalendarCellsWeek fulldate={currentDate} />
      )}
    </CalendarWrapper>
  );
};
