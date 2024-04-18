import { RadioGroup } from "@shared/calendar/radioGroup"
import { CalendarHeaderWrapper, StyledText } from "./styles"
import { currentPrevNext, monthWeekData } from "./mock"
import { ButtonGroup } from "@shared/calendar/buttonGroup"
import moment from "moment"

type Props = {
  day: moment.Moment,
}

export const CalendarHeader:React.FC<Props> = ({day}) => {
  const today = moment();
  return (
    <CalendarHeaderWrapper>
        <ButtonGroup data={currentPrevNext} />
        <StyledText>
            {today.format('MMMM YYYY')}
        </StyledText>
        <RadioGroup data={monthWeekData} />
    </CalendarHeaderWrapper>
  )
}
