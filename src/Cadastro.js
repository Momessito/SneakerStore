import { useEffect } from 'react';
import { addCalcados } from './firebase/firebase';
import img from './img/logo.png'


function Cadastro() {

  useEffect(() => {
    const handleClick = () => {
      const Nome = document.getElementById('Nome');
      const cor = document.getElementById('Cor');
      const Marca = document.getElementById('Marca');
      const tamanho = document.getElementById('Tamanho');
      const Imagem = document.getElementById('Imagem');
      console.log(cor.value, Marca.value, Nome.value, tamanho.value, Imagem.value)
      addCalcados(cor.value, Marca.value, Nome.value, tamanho.value, Imagem.value);
      window.location.href = '/calcados'
    };

    const botao = document.getElementById('botaoCadastro');
    if (botao) {
      botao.addEventListener('click', handleClick);
    }

    return () => {
      if (botao) {
        botao.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <div className="cardCadastro">
      <img src={img} className="icone" />
      <>
        <h1>Cadastro de Produtos</h1>
        <div className='CadastroI'>
          <p>Nome</p>
          <input type='text' id='Nome' />
        </div>
        <div className='CadastroI'>
          <p>Tamanho</p>
          <input type='text' id='Tamanho' />
        </div>
        <div className='CadastroI'>
          <p>Cor</p>
          <input type='text' id='Cor' />
        </div>
        <div className='CadastroI'>
          <p>Marca</p>
          <input type='text' id='Marca' />
        </div>
        <div className='CadastroI'>
          <p>Imagem (Apenas Url)</p>
          <input type='text' id='Imagem' />
        </div>
        <button id='botaoCadastro'>Cadastrar</button>
      </>

    </div>);


}

export default Cadastro;
