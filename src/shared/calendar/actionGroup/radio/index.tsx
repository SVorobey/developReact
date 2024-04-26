import { Radio } from "antd";
import { IHeaderData } from "@features/calendar/header/mock";
import { useAppDispatch } from "@shared/hooks/reduxHooks";
import { current, selectView } from "@entities/calendar/model";

type TRadioProps = {
  data: IHeaderData[];
  defaultCheckedIndex?: number;
};

export const RadioGroup = ({ data, defaultCheckedIndex = 0 }: TRadioProps) => {
  const dispatch = useAppDispatch();
  return (
    <Radio.Group defaultValue={data[defaultCheckedIndex]?.label}>
      {data.map((item) => (
        <Radio.Button
          key={item.label}
          value={item.label}
          onClick={() => {
            dispatch(selectView(item.id));
            dispatch(current());
          }}
        >
          {item.label}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
};
