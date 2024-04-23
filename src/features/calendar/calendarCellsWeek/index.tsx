import moment from "moment";
import { WeekDaysWrapper } from "../calendarCellsMonth/styles";
import { DayInHeader, CellsWrapper } from "./styles";
import { daysOfWeek } from "@app/momentConfig";
import { Number, DayName } from "./styles";


type Props = {
    fulldate: string,
}

export const CalendarCellsWeek:React.FC<Props> = ({fulldate}) => {
    const day = moment(fulldate).startOf('week');
    const calendarDays = [...Array(7)].map(() => day.add(1, 'day').clone());
  return (
    <CellsWrapper>
      <WeekDaysWrapper />
      {
        calendarDays.map((item, index) => (
          <WeekDaysWrapper>
              <DayInHeader>
                <Number>
                  {item.format('D')}
                </Number>
                <DayName>
                  {daysOfWeek[index].toUpperCase()}
                </DayName>
              </DayInHeader>
          </WeekDaysWrapper>
        ))
      }
    </CellsWrapper>
  )
}