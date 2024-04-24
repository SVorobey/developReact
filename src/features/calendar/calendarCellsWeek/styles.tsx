import styled from "styled-components";
import { WeekDaysWrapper } from "../calendarCellsMonth/styles";

type Props = {
    isweekend?: string,
    isCurrentMonth?: string,
}

export const Number = styled.p`
    font-size: 20px;
    color: #000;
    margin-right: 5px;
`;

export const DayName = styled.p`
    font-size: 10px;
    color: #000;
`;

export const DayInHeader = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 10px 0 0 10px;
`;

export const CellsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(25, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    .div1 {
        grid-area: 1 / 1 / 2 / 9;
    }
    .div2 {
        grid-area: 2 / 1 / 26 / 2; 
    }
    .div3 {
        grid-area: 2 / 2 / 26 / 9;
    }
`;

export const TimeDiv = styled.div`
    color: #000;
    font-size: 20px
`;

export const Cells = styled.div`
    min-width: 140px;
    min-height: 100px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const WeekWrapper = styled(WeekDaysWrapper)<Props>`
    background: ${props => props.isweekend === 'true' ? '#F9F9F9' : '#FFF'};
    color: ${props => props.isCurrentMonth === 'true' ? '#000' : '#A9A9A9'};
`;

export const TimeWrapper = styled.div`
`;