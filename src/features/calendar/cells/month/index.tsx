import moment from "moment";
import {
  Cells,
  CellsWrapper,
  RowInCell,
  DayWrapper,
  CurrentDay,
  DayInHeader,
  WeekDaysWrapper,
} from "./styles";
import { daysOfWeek } from "@app/momentConfig";
import { TCellsProps } from "../types";

export const CalendarCellsMonth: React.FC<TCellsProps> = ({ fulldate }) => {
  const day =
    moment(fulldate).startOf("month").startOf("week").day() === 0
      ? moment(fulldate).startOf("month").subtract(1, "day").startOf("week")
      : moment(fulldate).startOf("month").startOf("week");
  const calendarDays = [...Array(42)].map(() => day.add(1, "day").clone());
  
  return (
    <CellsWrapper>
      {daysOfWeek.map((item) => (
        <WeekDaysWrapper>
          <DayInHeader>{item}</DayInHeader>
        </WeekDaysWrapper>
      ))}
      {calendarDays.map((item) => (
        <Cells
          key={item.unix()}
          isweekend={item.day() === 6 || item.day() === 0 ? "true" : "false"}
          isCurrentMonth={
            item.month() === moment(fulldate).month() ? "true" : "false"
          }
        >
          <RowInCell justifycontent={"flex-end"}>
            <DayWrapper>
              {moment().isSame(item, "day") ? (
                <CurrentDay>{item.format("D")}</CurrentDay>
              ) : (
                item.format("D")
              )}
            </DayWrapper>
          </RowInCell>
        </Cells>
      ))}
    </CellsWrapper>
  );
};
