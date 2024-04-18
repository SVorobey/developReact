import { Button, ButtonWrapper } from "./styles"
import { Data } from "@features/calendar/calendarHeader/mock"

type Props = {
    data: Data[],
}

export const ButtonGroup = ({data}:Props) => {
  return (
    <ButtonWrapper>
        {
            data.map((item) => (
                <Button key={item.label} onClick={item.onClick}>
                    {item.label}
                </Button>
            ))
        }
    </ButtonWrapper>
  )
}
