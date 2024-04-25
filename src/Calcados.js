import { useEffect, useState } from "react";
import { getCalcados } from "./firebase/firebase";
import img from './img/logo.png'

function Calcados() {
    const [Sapatos, setSapatos] = useState()

    const fetchData = async () => {
        try{
            const calcadosData = await getCalcados();
            console.log("Dados Calçados: " , calcadosData);
            setSapatos(calcadosData);
        }catch(error){
        console.log(error)
        }
    }
    
    useEffect(() => {
        fetchData()
    }, [])
    
    return ( <>
    <div className="overflow-x-auto tabela">
    <img src={img} className="icone"/>

    <div className="hero min-h-screen bg-base-200">
  <div className=" text-center">
    <div className="max-w-md">
      <h1 className=" font-bold">Veja os melhores calçados que temos na loja</h1>
      <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGFkcGMyYW42azVvdzdianBjazVnZ3Q5ZGl4MzRsM202dThnNDN2eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/3eTLIJv3FXGqzFR6WY/giphy.gif"/>
    </div>
  </div>
</div>
<div className="space"></div>
<h1 className="text-5xl font-bold">Quais São nossos tenis</h1>
<br/>
<br/>
  <table className="table">
    <thead>
      <tr>
        <th>Nome</th>
        <th>tamanho</th>
        <th>Cor</th>
        <th>Marca</th>
      </tr>
    </thead>
    <tbody>
    {Sapatos && Sapatos.map((calcado) => (
      <tr key={calcado.id}>
        <th>{calcado.Nome}</th>
        <td>{calcado.Tamanho}</td>
        <td>{calcado.Cor}</td>
        <td>{calcado.Marca}</td>
      </tr>
    ))}
    </tbody>
  </table>
  <button className="btn btn-primary " onClick={Indo}>Cadastrar tênis</button>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
</div>
    </> );

    function Indo(){
      window.location = '/Cadastro'
    }
}

export default Calcados;