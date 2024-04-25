import styled from "styled-components";
import { WeekDaysWrapper } from "../calendarCellsMonth/styles";

type Props = {
    isweekend?: string,
}

export const Number = styled.div`
    font-size: 20px;
    margin-right: 10px;
`;

export const DayName = styled.p`
    font-size: 10px;
    margin-bottom: 15px;
`;

export const DayInHeader = styled.div<Props>`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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

export const CurrentDay = styled.div`
    width: 31px;
    height: 31px;
    border-radius: 50%;
    background: red;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -3px;
`;