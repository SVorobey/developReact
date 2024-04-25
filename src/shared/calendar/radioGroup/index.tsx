import { Radio } from 'antd';
import { Data } from '@features/calendar/calendarHeader/mock';
import { useAppDispatch } from '@shared/hooks/reduxHooks';
import { current, selectView } from '@entities/calendar/model';

type Props = {
  data: Data[],
  defaultCheckedIndex?: number,
}

export const RadioGroup = ({ data, defaultCheckedIndex = 0 }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <Radio.Group defaultValue={data[defaultCheckedIndex]?.label}>
      {data.map((item) => (
        <Radio.Button key={item.label} value={item.label} onClick={() => {dispatch(selectView(item.id)); dispatch(current())}}>
          {item.label}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
};
