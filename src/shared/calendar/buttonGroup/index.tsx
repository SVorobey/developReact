import { useAppDispatch, useAppSelector } from "@shared/hooks/reduxHooks"
import { Button, ButtonWrapper } from "./styles"
import { ButtonsData } from "@features/calendar/calendarHeader/mock"
import { fullDateSelector } from "@entities/calendar/model"

type Props = {
    data: ButtonsData[],
}

export const ButtonGroup = ({data}:Props) => {
    const dispatch = useAppDispatch();
    const currentDate = useAppSelector(fullDateSelector);
  return (
    <ButtonWrapper>
        {
            data.map((item) => (
                <Button key={item.label} onClick={() => dispatch(item.action(currentDate))}>
                    {item.label}
                </Button>
            ))
        }
    </ButtonWrapper>
  )
}
