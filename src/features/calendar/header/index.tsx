import { RadioGroup } from "@shared/calendar/actionGroup/radio";
import { CalendarHeaderWrapper, StyledText } from "./styles";
import { currentPrevNext, monthWeekData } from "./mock";
import { ButtonGroup } from "@shared/calendar/actionGroup/button";

type THeaderProps = {
  currentmonthyear: string;
};

export const CalendarHeader: React.FC<THeaderProps> = ({
  currentmonthyear,
}) => {
  return (
    <CalendarHeaderWrapper>
      <ButtonGroup data={currentPrevNext} />
      <StyledText>{currentmonthyear}</StyledText>
      <RadioGroup data={monthWeekData} />
    </CalendarHeaderWrapper>
  );
};
