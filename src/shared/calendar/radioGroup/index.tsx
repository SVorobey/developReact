import { Radio } from 'antd';
import { Data } from '@features/calendar/calendarHeader/mock';

type Props = {
  data: Data[],
}

export const RadioGroup = ({ data }:Props) => {
  return (
    <Radio.Group>
      {data.map((item) => (
        <Radio.Button key={item.label} value={item.label}>
          {item.label}
        </Radio.Button>
      ))}
    </Radio.Group>
  )
}
