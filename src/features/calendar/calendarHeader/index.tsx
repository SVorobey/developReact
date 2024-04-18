import { RadioGroup } from "@shared/radioGroup"
import { CalendarHeaderWrapper, StyledText } from "./styles"
import { currentPrevNext, monthWeekData } from "./mock"
import { ButtonGroup } from "@shared/buttonGroup"

export const CalendarHeader = () => {
  return (
    <CalendarHeaderWrapper>
        <ButtonGroup data={currentPrevNext} />
        <StyledText>
            April 2024
        </StyledText>
        <RadioGroup data={monthWeekData} />
    </CalendarHeaderWrapper>
  )
}
