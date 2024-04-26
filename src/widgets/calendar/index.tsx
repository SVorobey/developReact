import { CalendarHeader } from "@features/calendar/header";
import { CalendarWrapper } from "./styles";
import { useAppSelector } from "@shared/hooks/reduxHooks";
import {
  fullDateSelector,
  viewSelector,
} from "@entities/calendar/model";
import { CalendarCellsWeek } from "@features/calendar/cells/week";
import { CalendarCellsMonth } from "@features/calendar/cells/month";
import moment from "moment";

export const CalendarEgar = () => {
  const currentDate = useAppSelector(fullDateSelector);
  const currentMonthYear = moment(currentDate).format('MMMM YYYY');
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
