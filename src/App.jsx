import React from 'react';

import './App.css';

import Navbar from './components/Navbar';
import Form from './components/Form';
import Header from './components/Header';
import Input from './components/Input';
import SideImage from './components/SideImage';
import Checkbox from './components/Checkbox';
import Link from './components/Link';
import Button from './components/Button';

function App() {
    return (
        <>
            <Navbar />
            <div id="content">
                <div id="side-form">
                    <Form method="POST" action="/">
                        <Header title="Faça seu login" img="log-in-img">
                            Entre com suas informações de cadastro.
                        </Header>
                        <Input
                            label="E-mail"
                            type="email"
                            id="email"
                            img="email-img"
                        >
                            Digite seu e-mail
                        </Input>
                        <Input
                            label="Senha"
                            type="password"
                            id="password"
                            img="lock-img"
                        >
                            Digite sua senha
                        </Input>
                        <div id="options">
                            <Checkbox
                                label="Lembre-me"
                                id="remember"
                                checked={false}
                            />
                            <Link href="#">Esqueci minha senha</Link>
                        </div>
                        <div id="send">
                            <Button type="submit" onClick={null}>
                                Entrar
                            </Button>
                        </div>
                        <div id="sign-in">
                            <span>
                                Não tem uma conta?{' '}
                                <Link href="#">Registre-se</Link>
                            </span>
                        </div>
                    </Form>
                </div>
                <SideImage img="car" />
            </div>
        </>
    );
}

export default App;
