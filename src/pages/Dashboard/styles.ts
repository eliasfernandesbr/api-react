import styled from "styled-components";

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    max-width: 450px;
    line-height: 56px;

    margin-top: 80px;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;
    display: flex;

    input {
        flex: 1;
        height: 40px;
        padding: 0 24px;
        border: 0;
        border-radius: 4px;

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        color: #fff;
        font-weight: bold;
        width: 210px;
        height: 40px;
        border-radius: 4px;
        background-color: #287ae0;
        border: none;
        margin-left: 10px;
        transition: background-color 0.4s;

        &:hover {
            background-color: #0048a2;
        }
    }
`;

export const Repositories = styled.div`
    margin-top: 30px;
    max-width: 700px;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        height: 80px;
        padding: 24px;
        display: block;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: transform 0.2s;
        margin-top: 16px;

        &:hover {
            transform: translateX(5px);
        }

        .imgAvatar {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div {
            margin-left: 16px;

            strong {
                font-size: 20px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px;
            }
        }
    }
`;

export const ArrowIcon = styled.img`
    margin-left: auto;
    width: 20px;
`;
