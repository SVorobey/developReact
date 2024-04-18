import moment from "moment";
import { Cells, CellsWrapper, RowInCell, DayWrapper, CurrentDay } from "./styles";

type Props = {
    day: moment.Moment,
}

export const CalendarCells:React.FC<Props> = ({day}) => {
    const calendarDays = [...Array(42)].map(() => day.add(1, 'day').clone());
  return (
    <CellsWrapper>
        {
            calendarDays.map((item) => (
                <Cells key={item.format('DDMMYYY')} isWeekend={item.day() === 6 || item.day() === 0}>
                    <RowInCell
                        justifyContent={'flex-end'}
                    >
                        <DayWrapper>
                            {moment().isSame(item, 'day') ? <CurrentDay>{item.format('D')}</CurrentDay> : item.format('D')}
                        </DayWrapper>
                    </RowInCell>
                </Cells>
            ))
        }
    </CellsWrapper>
  )
}