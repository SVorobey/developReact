import { Radio } from 'antd';
import { Data } from '@features/calendar/calendarHeader/mock';

type Props = {
  data: Data[],
  defaultCheckedIndex?: number,
}

export const RadioGroup = ({ data, defaultCheckedIndex = 0 }: Props) => {
  return (
    <Radio.Group defaultValue={data[defaultCheckedIndex]?.label}>
      {data.map((item) => (
        <Radio.Button key={item.label} value={item.label}>
          {item.label}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
};
