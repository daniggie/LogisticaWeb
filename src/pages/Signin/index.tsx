import React from "react";
import { FiLogIn } from 'react-icons/fi';

import Input from '../../components/input';

import { Container, Content, Background } from './style';

const Sign: React.FC = () => (
    <Container>

        <Background />

        <Content>
            <form>
                <h1>Fazer Login</h1>

                <Input name="E-mail" placeholder="E-mail..." />
                <Input name="Senha" type="password" placeholder="Senha..." />
                <a href="teste">Esqueci a senha!</a>

                <button type="submit"> Entrar </button>
            </form>

            <a href="teste">
                <FiLogIn />
                Criar Conta
            </a>
        </Content>
        
    </Container>
);

export default Sign;