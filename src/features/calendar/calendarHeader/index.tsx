import { RadioGroup } from "@shared/calendar/radioGroup"
import { CalendarHeaderWrapper, StyledText } from "./styles"
import { currentPrevNext, monthWeekData } from "./mock"
import { ButtonGroup } from "@shared/calendar/buttonGroup"

type Props = {
  currentmonthyear: string,
}

export const CalendarHeader:React.FC<Props> = ({currentmonthyear}) => {
  return (
    <CalendarHeaderWrapper>
        <ButtonGroup data={currentPrevNext} />
        <StyledText>
            {currentmonthyear}
        </StyledText>
        <RadioGroup data={monthWeekData} />
    </CalendarHeaderWrapper>
  )
}
