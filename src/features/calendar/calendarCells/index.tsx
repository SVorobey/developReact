import { Cells, CellsWrapper, RowInCell, DayWrapper } from "./styles";
import useGetDate from "@shared/getDate";

export const CalendarCells = () => {
    const firstLastDay = useGetDate();
    const day = firstLastDay.startDay.clone().subtract(1, 'day');
    const calendarDays = [...Array(42)].map(() => day.add(1, 'day').clone());

    console.log(calendarDays);
  return (
    <CellsWrapper>
        {
            calendarDays.map((item) => (
                <Cells key={item.format('DDMMYYY')} isWeekend={item.day() === 6 || item.day() === 0}>
                    <RowInCell
                        justifyContent={'flex-end'}
                    >
                        <DayWrapper>
                            {item.format('D')}
                        </DayWrapper>
                    </RowInCell>
                </Cells>
            ))
        }
    </CellsWrapper>
  )
}