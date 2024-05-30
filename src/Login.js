import { useEffect } from 'react';
import img from './img/logo.png'
function Login() {




    useEffect(() => {
        var botao = document.getElementById('botaoLogin')

        botao.addEventListener('click', () => {
            let login = document.getElementById("login").value;
            let senha = document.getElementById("senha").value;

            if (login == "adm" && senha == "123") {
                window.location.href = '/calcados'
            }
            else {
                alert('Usuario ou senha incorretos')
            }
        })
    }, [])

    return (
        <>
            <img className="icone" src={img} alt="logo" />
            <div className="formLogin">
                <h1>Login</h1>
                <p>Digite os seus dados de acesso no campo abaixo.</p>
                <label for="email">Usuario</label>
                <input type="name" placeholder="Digite seu Usuario" autofocus="true" id='login' />
                <label for="password">Senha</label>
                <input type="password" placeholder="Digite sua senha" id='senha' />
                <a href="/">Esqueci minha senha</a>
                <input type="submit" value="Acessar" className="btn" id='botaoLogin' />
            </div>
        </>
    );




}

export default Login;