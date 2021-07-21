import styled from 'styled-components';
import { shade } from 'polished';

import backgroundSign from '../../assets/entrega-bike.jpg';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    place-content: center;
    width: 80%;
    max-width: 500px;

    form{
        width: 340px;
        text-align: center;

        h1{
            margin-bottom: 24px;
        }

        input{
            width: 100%;
            flex: 1;
            padding: 12px;
            background: transparent;
            border: 0.1px solid #666360;
            color: #fff;
            border-radius: 10px;
            margin-bottom: 10px;

            &::placeholder{
                color: #666360;
            }
        }

        button{
            background: #ff9000;
            padding: 12px;
            border: 0;
            border-radius: 10px;
            width: 100%;
            margin-top: 20px;
            margin-bottom: 10px;
            cursor: pointer;

            transition: background-color 0.2s;

            &:hover{
                background: ${shade(0.2, '#ff9000')}
            }
        }

        a{
            text-decoration: none;
            color: #666360;
            display: flex;
            margin-left: 5px;
            align-items: left;
            font-size: 13px;
        }
    }

    > a{
        color: #ff9000;
        text-decoration: none;
        display: flex;
        align-items: center;
        margin-top: 20px;

        svg {
            margin-right: 16px;
        }

        &:hover{
            color: ${shade(0.2, '#ff9000')};
        }
    }
    
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundSign}) no-repeat center;
    background-size: cover;
`;