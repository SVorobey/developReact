import moment from "moment";
import { WeekDaysWrapper } from "../calendarCellsMonth/styles";
import { DayInHeader, CellsWrapper, WeekWrapper, Cells } from "./styles";
import { daysOfWeek, time } from "@app/momentConfig";
import { Number, DayName } from "./styles";


type Props = {
    fulldate: string,
}

export const CalendarCellsWeek:React.FC<Props> = ({fulldate}) => {
    const day = moment(fulldate).startOf('week');
    const Date = '2024-03-24';
    console.log(moment(Date).startOf('week').unix());
    const calendarDays = [...Array(7)].map(() => day.add(1, 'day').clone());
  return (
    <CellsWrapper>
      <WeekDaysWrapper />
      {
        calendarDays.map((item, index) => (
          <WeekWrapper
            isweekend={(item.day() === 6 || item.day() === 0) ? 'true' : 'false'}
            isCurrentMonth={item.month() === moment(fulldate).month() ? 'true' : 'false'}
          >
              <DayInHeader>
                <Number>
                  {item.format('D')}
                </Number>
                <DayName>
                  {daysOfWeek[index].toUpperCase()}
                </DayName>
              </DayInHeader>
          </WeekWrapper>
        ))
      }
      {
        time.map((item) => (
          <Cells>
            {item}
          </Cells>
        ))
      }
    </CellsWrapper>
  )
}