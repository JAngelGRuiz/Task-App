import styled from '@emotion/styled';
import { css } from '@emotion/react';

const empytListStyles = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const WrapperList = styled.div`
    width: 90%;
    max-width: 700px;
    min-height: 30vh;
    box-shadow: 1px 1px 12px 0px rgba(0,0,0,0.5);
    margin: auto;
    border-radius: 15px;
    margin-bottom: 50px;

    ${(props) => props.emptyList && empytListStyles}
`;

export const EmptyMessage = styled.span`
    font-size: 25px;
    color: rgba(0,0,0,0.3);
    font-style: italic;
`;