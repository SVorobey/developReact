import moment from "moment";
import { WeekDaysWrapper } from "../calendarCellsMonth/styles";
import { DayInHeader, CellsWrapper, WeekWrapper, Cells, TimeWrapper, HeaderWrapper, EventWrapper, CurrentDay, Number, DayName } from "./styles";
import { daysOfWeek, time } from "@app/momentConfig";


type Props = {
    fulldate: string,
}

export const CalendarCellsWeek:React.FC<Props> = ({fulldate}) => {
    const day = moment(fulldate).startOf('week');
    const calendarDays = [...Array(7)].map(() => day.add(1, 'day').clone());
  return (
    <CellsWrapper>
      <HeaderWrapper>
        <WeekDaysWrapper />
        {
            calendarDays.map((item, index) => (
              <WeekWrapper
                isweekend={(item.day() === 6 || item.day() === 0) ? 'true' : 'false'}
              >
                <DayInHeader>
                  <Number>
                    {moment().isSame(item, 'day') ? <CurrentDay>{item.format('D')}</CurrentDay> : item.format('D')}
                  </Number>
                  <DayName>
                      {daysOfWeek[index].toUpperCase()}
                  </DayName>
                </DayInHeader>
              </WeekWrapper>
            ))
        }
      </HeaderWrapper>
      <TimeWrapper>
      {
        time.map((item) => (
          <Cells key={item}>
            {item}
          </Cells>
        ))
      }
      </TimeWrapper>
      <EventWrapper>
        {
          [...Array(168)].map((_, index) => (
            <Cells key={index } />
          ))
        }
      </EventWrapper>
    </CellsWrapper>
  )
}