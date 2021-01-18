import styled from '@emotion/styled';

export const WrapperForm = styled.form`
    width: 100%auto;
    height: 50px;
    margin: 30px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    height: 40px;
    width: 75px;
    border: none;
    background: #2C5364;
    color: white;
    font-weight: bold;
    font-size: 15px;
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
    cursor: pointer;

`;

export const Input = styled.input`
    height: 40px;
    width: 50%;
    max-width: 600px;
    border: 1px solid rgba(0,0,0,0.2);
    padding: 12px;
    border-bottom-left-radius: 12px;
    border-top-left-radius: 12px;
    font-size: 16px;

    @media screen and (max-width: 480px){
        width: 60%;
    }
`;

