import styled from "styled-components";
import { Button as UIButton } from 'antd';

export const ButtonWrapper = styled.div`
    
`;

export const Button = styled(UIButton)`
    border-radius: 0;
    &:first-child {
        border-radius: 5px 0 0 5px;
    }
    &:last-child {
        border-radius: 0 5px 5px 0;
    }
`;