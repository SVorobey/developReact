import styled from "styled-components";
import { WeekDaysWrapper } from "../calendarCellsMonth/styles";

type Props = {
    isweekend?: string,
    isCurrentMonth?: string,
    isCurrentDay?: string,
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
    padding: 40px 0 0 40px;
`;

export const CellsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(25, 1fr);
`;

export const TimeDiv = styled.div`
    color: #000;
    font-size: 20px
`;

export const Cells = styled.div<Props>`
    min-width: 140px;
    min-height: 100px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    border-radius: 5px;
    border-top: ${props => props.isCurrentDay === 'true' ? '2px solid #1677FF' : 'none'};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const WeekWrapper = styled(WeekDaysWrapper)<Props>`
    background: ${props => props.isweekend === 'true' ? '#F9F9F9' : '#FFF'};
    color: ${props => props.isCurrentMonth === 'true' ? '#000' : '#A9A9A9'};
`;

export const TimeWrapper = styled.div`
    grid-area: 2 / 1 / 26 / 2;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(24, 1fr);
`;

export const EventWrapper = styled.div`
    grid-area: 2 / 2 / 26 / 9;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(24, 1fr);
`;

export const HeaderWrapper = styled.div`
    grid-area: 1 / 1 / 2 / 9;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 1fr;
`;