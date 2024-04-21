import styled from 'styled-components';

type Props = {
    justifycontent?: string,
    isweekend?: string,
    isCurrentMonth?: string,
}

export const CellsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 4px;
    background: #F7F7F7;
`;

export const Cells = styled.div<Props>`
    min-width: 140px;
    min-height: 100px;
    background: ${props => props.isweekend === 'true' ? '#F9F9F9' : '#FFF'};
    color: ${props => props.isCurrentMonth === 'true' ? '#000' : '#A9A9A9'};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    border-radius: 5px;
`;

export const RowInCell = styled.div<Props>`
    display: flex;
    justify-content: ${props => props.justifycontent ? props.justifycontent : 'flex-start'};
`;

export const DayWrapper = styled.div`
    height: 33px;
    width: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px 2px 0 0;
`;

export const CurrentDay = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    color: #fff;
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const WeekDaysWrapper = styled(Cells)`
    min-height: 40px;
    grid-gap: 0;
    color: #000;
`;

export const DayInHeader = styled(RowInCell)`
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 10px;
    font-size: 20px;
`;