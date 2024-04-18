import styled from 'styled-components';

type Props = {
    justifyContent?: string,
    isWeekend?: boolean,
}

export const CellsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 4px;
    background: #F7F7F7;
`;

export const Cells = styled.div<Props>`
    min-width: 140px;
    min-height: 100px;
    background: ${props => props.isWeekend ? '#F9F9F9' : '#FFF'};
    color: #000;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    border-radius: 5px;
`;

export const RowInCell = styled.div<Props>`
    display: flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
`;

export const DayWrapper = styled.div`
    height: 33px;
    width: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
`;