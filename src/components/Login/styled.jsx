import styled from "styled-components";

export const ContentLogin = styled.div`
    position: absolute;
    left: 8%;
    width: 30%;
    height: 75%;
    background: #ffffff;
    opacity: 0.7;
    box-shadow: 6px 6px 14px -6px rgba(0, 63, 128, 0.12),
        0px 8px 32px -4px rgba(0, 63, 128, 0.1);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
`;
export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;
export const Login = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const BoxImg = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;
export const Img = styled.img`
    width: 70%;
`;

export const Input = styled.input`
    box-sizing: border-box;
    width: 80%;
    height: 40px;
    background: #ffffff;
    border: 1px solid #beccff;
    border-radius: 10px;
    margin-left: 10%;
    float: left;
`;

export const Label = styled.label`
    padding-top: 4%;
    width: 80px;
    height: 25px;
    font-family: "PT Sans Caption";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #2d4857;
    margin-left: 10%;
    float: left;
`;

export const Title = styled.h1`
    font-size: 40px;
    color: #2d4857;
    margin-left: 10%;
    float: left;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-top: 6%;
    align-self: center;
    width: 80%;
    height: 46px;
    color: white;
    background: #2d4857;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`;

export const ButtonText = styled.p`
    width: 97px;
    height: 26px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: #ffffff;
`;
