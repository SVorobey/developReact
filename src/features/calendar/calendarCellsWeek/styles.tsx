import styled from "styled-components";

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
`;

export const TimeDiv = styled.div`
    color: #000;
    font-size: 20px
`;