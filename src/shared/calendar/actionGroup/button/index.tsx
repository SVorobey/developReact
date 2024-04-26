import { useAppDispatch, useAppSelector } from "@shared/hooks/reduxHooks";
import { Button, ButtonWrapper } from "./styles";
import { IHeaderButtonsData } from "@features/calendar/header/mock";
import { fullDateSelector } from "@entities/calendar/model";

type TButtonProps = {
  data: IHeaderButtonsData[];
};

export const ButtonGroup = ({ data }: TButtonProps) => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector(fullDateSelector);
  return (
    <ButtonWrapper>
      {data.map((item) => (
        <Button
          key={item.label}
          onClick={() => dispatch(item.action(currentDate))}
        >
          {item.label}
        </Button>
      ))}
    </ButtonWrapper>
  );
};
