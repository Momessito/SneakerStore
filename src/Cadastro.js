import { useEffect } from 'react';
import { addCalcados } from './firebase/firebase';
import img from  './img/logo.png'


function Cadastro() {

  useEffect(() => {
    const handleClick = () => {
        const Nome = document.getElementById('NomeCadastro');
        const cor = document.getElementById('corCadastro');
        const Marca = document.getElementById('marcaCadastro');
        const tamanho = document.getElementById('tamanhoCadastro');
        
            addCalcados(cor.value, Marca.value, Nome.value, tamanho.value);
            window.location = '/Calcados';
    };

    const botao = document.getElementById('botaoCadastro');
    if (botao) {
        botao.addEventListener('click', handleClick);
    }

    // Limpa o event listener quando o componente é desmontado
    return () => {
        if (botao) {
            botao.removeEventListener('click', handleClick);
        }
    };
}, []); // Executa somente na montagem inicial do componente
    
    return ( <div className="cardCadastro">
            <img src={img} className="icone"/>

    <div class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
       Nome do tênis
      </label>
      <input id='NomeCadastro' class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="Nome"/>
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>

  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        Tamanho
      </label>
      <input id='tamanhoCadastro' class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Tamanho do tênis"/>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Cor
      </label>
      <div class="relative">
      <input id='corCadastro' class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Cor do Tênis" />

        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Marca
      </label>
      <input id='marcaCadastro' class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Marca do Tênis" />
    </div>
    
  </div>
  <button id="botaoCadastro" className="btn btn-primary w-full">Cadastrar</button>
</div>
    </div> );


}

export default Cadastro;
