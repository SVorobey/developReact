import moment from "moment";
import { CellsWrapper, TimeWrapper, Cells } from "./styles";
// import { WeekDaysWrapper } from "../calendarCellsMonth/styles";
// import { DayInHeader, CellsWrapper, WeekWrapper, Cells, TimeWrapper } from "./styles";
// import { daysOfWeek, time } from "@app/momentConfig";
// import { Number, DayName } from "./styles";


type Props = {
  fulldate: string,
}

export const CalendarCellsWeek:React.FC<Props> = ({fulldate}) => {
    // const day = moment(fulldate).startOf('week');
    const Date = '2024-03-24';
    console.log(moment(Date).startOf('week').format('YYYY-MM-DD HH'));
    console.log(moment(Date).startOf('week'));
    console.log(fulldate);
    // const calendarDays = [...Array(7)].map(() => day.add(1, 'day').clone());
  return (
    <CellsWrapper>
      <div className='div1'>
        1
      </div>
      <TimeWrapper className='div2'>
        2
      </TimeWrapper>
      <div className='div3'>
        {
            [...Array(168)].map((_, index) => (
              <Cells key={index} />
          ))
        }
      </div>
    </CellsWrapper>
  )
}



// import moment from "moment";
// import { WeekDaysWrapper } from "../calendarCellsMonth/styles";
// import { DayInHeader, CellsWrapper, WeekWrapper, Cells, TimeWrapper } from "./styles";
// import { daysOfWeek, time } from "@app/momentConfig";
// import { Number, DayName } from "./styles";


// type Props = {
//     fulldate: string,
// }

// export const CalendarCellsWeek:React.FC<Props> = ({fulldate}) => {
//     const day = moment(fulldate).startOf('week');
//     const Date = '2024-03-24';
//     console.log(moment(Date).startOf('week').format('YYYY-MM-DD HH'));
//     console.log(moment(Date).startOf('week'));
//     const calendarDays = [...Array(7)].map(() => day.add(1, 'day').clone());
//   return (
//     <CellsWrapper>
//       <div className='div1'>
//         <WeekDaysWrapper />
//         {
//             calendarDays.map((item, index) => (
//                 <WeekWrapper
//                 isweekend={(item.day() === 6 || item.day() === 0) ? 'true' : 'false'}
//                 isCurrentMonth={item.month() === moment(fulldate).month() ? 'true' : 'false'}
//                 >
//                     <DayInHeader>
//                     <Number>
//                         {item.format('D')}
//                     </Number>
//                     <DayName>
//                         {daysOfWeek[index].toUpperCase()}
//                     </DayName>
//                     </DayInHeader>
//                 </WeekWrapper>
//             ))
//         }
//       </div>
//       <TimeWrapper className='div2'>
//       {
//         time.map((item) => (
//           <Cells key={item}>
//             {item}
//           </Cells>
//         ))
//       }
//       </TimeWrapper>
//       <div className='div3'>
//         {
//           [...Array(168)].map((_, index) => (
//             <Cells key={index} />
//         ))
//         }
//       </div>
//     </CellsWrapper>
//   )
// }