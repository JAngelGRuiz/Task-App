import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
    width: 100%;
    margin: 15px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    height: 45px;
    width: 150px;
    border-radius: 20px;
    border: none;
    background-color: ${(props) => props.isHidden ? 'grey' : 'green'};
    color: white;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
`;