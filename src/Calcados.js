import { useEffect, useState } from "react";
import { getCalcados } from "./firebase/firebase";
import img from './img/Fundo.jpeg'

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
    <div class="navbar  bg-base-100 navInicio">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">Sneaker Station</a>
        </div>
        <div class="flex-none">
          <button class="btn btn-square btn-ghost">
 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </button>
        </div>
      </div>
      <div class="hero medio bg-base-200">
                <img class="fundo" src={img}/>
                <div class="max-w-md">

              <h1 class="text-5xl font-bold textHero">CONTROLE DE ESTOQUE</h1>
              <p class="py-6 textHero">Funcionários, confiram nosso portal de controle de estoque.</p>
                    </div>
      </div>
      <div className="max-w-max">
        <div>
      <div className="Titulos flex"><h1>Marcas disponíveis</h1><small>9 itens</small></div>
      <div className="Chooser">
      <div class="marca w-96 bg-black shadow-xl " style={{backgroundImage : 'url("https://s3-alpha-sig.figma.com/img/80f5/b9d4/05f75c39c01c755f97ddc2866eede150?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LITcMmpLrSpj5VF47iTM3PioCd2Uh~gHQjXi-NuyC-aQFTKNYqucK5dRSs2USP0ia4eYiK6TG7gTvsarkUTjDvuXdYe62olnoGgbKHV0QPemkgCzEYa-vaazS1HYbu9iADiZwX6IMAyPpAfskqc-LW~oUoCT3KQnsrD-yYe0HoECTT9Iz6el5aOT5Y-7X2xdBcDFNwpmFnub3fucF9JI0HnCd9tjMgTi~bQjlMcZmJ71Vo~zEY5orkDRKZTakEOMUUAXunilrwgBVpo-n2VzI6PsOCTOpjhagPSJ6C1nM4M-Cit0e1pEj-iTt4vfiGDiAurmZzQQsqe2uiE4vJIfXw__")'}}>
  <div class="card-body ">
    <div class="card-actions justify-start">
      <button style={{backgroundColor : '#1E1E1E',border : '0px solid black'}} class="btn btn-square btn-sm">
        <img src="https://s3-alpha-sig.figma.com/img/80f5/b9d4/05f75c39c01c755f97ddc2866eede150?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LITcMmpLrSpj5VF47iTM3PioCd2Uh~gHQjXi-NuyC-aQFTKNYqucK5dRSs2USP0ia4eYiK6TG7gTvsarkUTjDvuXdYe62olnoGgbKHV0QPemkgCzEYa-vaazS1HYbu9iADiZwX6IMAyPpAfskqc-LW~oUoCT3KQnsrD-yYe0HoECTT9Iz6el5aOT5Y-7X2xdBcDFNwpmFnub3fucF9JI0HnCd9tjMgTi~bQjlMcZmJ71Vo~zEY5orkDRKZTakEOMUUAXunilrwgBVpo-n2VzI6PsOCTOpjhagPSJ6C1nM4M-Cit0e1pEj-iTt4vfiGDiAurmZzQQsqe2uiE4vJIfXw__"/>
      </button>
    </div>
    <h1>ADIDAS</h1>
    <p>68 itens no estoque.</p>
    <button class="btn btn-md marcabutton">Conferir <img src="https://s3-alpha-sig.figma.com/img/56d7/ff1e/d1c7e30c0444b63303f8d01412274fda?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lxU4ZPwaOBdiokRKsQ8~zRNOOOIX7VQUHfQ0O4gU0uTV5Cm0FIbqf0MWCGwgOSoBCEiwTQXZ83sf84ynAfwnJe83feaEM8CtGiJvh3bRVmpMhOxSW0icPfTYHJq4AXlZk7spL764yQ61GfgQbYMrgLO2ahwlSLluNQod2~BC~2eL8q5pb1-N1UfQygSyudc0CzTsF0SbogctrTrRQlPNOl-bXJPHhRWKpLcwBtA5gsjk5ELP8CGpcqcg7F~6Om~KTPc7x4nl6vGxxh5DWtLgdQZnb-5M1wQgy4V6ellUR5oG~r1wkmt0GFL6wZC4~W5WvapPr2OWM6orIqsA~ll3hA__" width={'20px'}/></button>

  </div>
</div>
      <div class="marca w-96 bg-black shadow-xl " style={{backgroundImage : 'url("https://s3-alpha-sig.figma.com/img/80f5/b9d4/05f75c39c01c755f97ddc2866eede150?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LITcMmpLrSpj5VF47iTM3PioCd2Uh~gHQjXi-NuyC-aQFTKNYqucK5dRSs2USP0ia4eYiK6TG7gTvsarkUTjDvuXdYe62olnoGgbKHV0QPemkgCzEYa-vaazS1HYbu9iADiZwX6IMAyPpAfskqc-LW~oUoCT3KQnsrD-yYe0HoECTT9Iz6el5aOT5Y-7X2xdBcDFNwpmFnub3fucF9JI0HnCd9tjMgTi~bQjlMcZmJ71Vo~zEY5orkDRKZTakEOMUUAXunilrwgBVpo-n2VzI6PsOCTOpjhagPSJ6C1nM4M-Cit0e1pEj-iTt4vfiGDiAurmZzQQsqe2uiE4vJIfXw__")'}}>
  <div class="card-body ">
    <div class="card-actions justify-start">
      <button style={{backgroundColor : '#1E1E1E',border : '0px solid black'}} class="btn btn-square btn-sm">
        <img src="https://s3-alpha-sig.figma.com/img/80f5/b9d4/05f75c39c01c755f97ddc2866eede150?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LITcMmpLrSpj5VF47iTM3PioCd2Uh~gHQjXi-NuyC-aQFTKNYqucK5dRSs2USP0ia4eYiK6TG7gTvsarkUTjDvuXdYe62olnoGgbKHV0QPemkgCzEYa-vaazS1HYbu9iADiZwX6IMAyPpAfskqc-LW~oUoCT3KQnsrD-yYe0HoECTT9Iz6el5aOT5Y-7X2xdBcDFNwpmFnub3fucF9JI0HnCd9tjMgTi~bQjlMcZmJ71Vo~zEY5orkDRKZTakEOMUUAXunilrwgBVpo-n2VzI6PsOCTOpjhagPSJ6C1nM4M-Cit0e1pEj-iTt4vfiGDiAurmZzQQsqe2uiE4vJIfXw__"/>
      </button>
    </div>
    <h1>ADIDAS</h1>
    <p>68 itens no estoque.</p>
    <button class="btn btn-md marcabutton">Conferir <img src="https://s3-alpha-sig.figma.com/img/56d7/ff1e/d1c7e30c0444b63303f8d01412274fda?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lxU4ZPwaOBdiokRKsQ8~zRNOOOIX7VQUHfQ0O4gU0uTV5Cm0FIbqf0MWCGwgOSoBCEiwTQXZ83sf84ynAfwnJe83feaEM8CtGiJvh3bRVmpMhOxSW0icPfTYHJq4AXlZk7spL764yQ61GfgQbYMrgLO2ahwlSLluNQod2~BC~2eL8q5pb1-N1UfQygSyudc0CzTsF0SbogctrTrRQlPNOl-bXJPHhRWKpLcwBtA5gsjk5ELP8CGpcqcg7F~6Om~KTPc7x4nl6vGxxh5DWtLgdQZnb-5M1wQgy4V6ellUR5oG~r1wkmt0GFL6wZC4~W5WvapPr2OWM6orIqsA~ll3hA__" width={'20px'}/></button>

  </div>
</div>
      <div class="marca w-96 bg-black shadow-xl " style={{backgroundImage : 'url("https://s3-alpha-sig.figma.com/img/80f5/b9d4/05f75c39c01c755f97ddc2866eede150?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LITcMmpLrSpj5VF47iTM3PioCd2Uh~gHQjXi-NuyC-aQFTKNYqucK5dRSs2USP0ia4eYiK6TG7gTvsarkUTjDvuXdYe62olnoGgbKHV0QPemkgCzEYa-vaazS1HYbu9iADiZwX6IMAyPpAfskqc-LW~oUoCT3KQnsrD-yYe0HoECTT9Iz6el5aOT5Y-7X2xdBcDFNwpmFnub3fucF9JI0HnCd9tjMgTi~bQjlMcZmJ71Vo~zEY5orkDRKZTakEOMUUAXunilrwgBVpo-n2VzI6PsOCTOpjhagPSJ6C1nM4M-Cit0e1pEj-iTt4vfiGDiAurmZzQQsqe2uiE4vJIfXw__")'}}>
  <div class="card-body ">
    <div class="card-actions justify-start">
      <button style={{backgroundColor : '#1E1E1E',border : '0px solid black'}} class="btn btn-square btn-sm">
        <img src="https://s3-alpha-sig.figma.com/img/80f5/b9d4/05f75c39c01c755f97ddc2866eede150?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LITcMmpLrSpj5VF47iTM3PioCd2Uh~gHQjXi-NuyC-aQFTKNYqucK5dRSs2USP0ia4eYiK6TG7gTvsarkUTjDvuXdYe62olnoGgbKHV0QPemkgCzEYa-vaazS1HYbu9iADiZwX6IMAyPpAfskqc-LW~oUoCT3KQnsrD-yYe0HoECTT9Iz6el5aOT5Y-7X2xdBcDFNwpmFnub3fucF9JI0HnCd9tjMgTi~bQjlMcZmJ71Vo~zEY5orkDRKZTakEOMUUAXunilrwgBVpo-n2VzI6PsOCTOpjhagPSJ6C1nM4M-Cit0e1pEj-iTt4vfiGDiAurmZzQQsqe2uiE4vJIfXw__"/>
      </button>
    </div>
    <h1>ADIDAS</h1>
    <p>68 itens no estoque.</p>
    <button class="btn btn-md marcabutton">Conferir <img src="https://s3-alpha-sig.figma.com/img/56d7/ff1e/d1c7e30c0444b63303f8d01412274fda?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lxU4ZPwaOBdiokRKsQ8~zRNOOOIX7VQUHfQ0O4gU0uTV5Cm0FIbqf0MWCGwgOSoBCEiwTQXZ83sf84ynAfwnJe83feaEM8CtGiJvh3bRVmpMhOxSW0icPfTYHJq4AXlZk7spL764yQ61GfgQbYMrgLO2ahwlSLluNQod2~BC~2eL8q5pb1-N1UfQygSyudc0CzTsF0SbogctrTrRQlPNOl-bXJPHhRWKpLcwBtA5gsjk5ELP8CGpcqcg7F~6Om~KTPc7x4nl6vGxxh5DWtLgdQZnb-5M1wQgy4V6ellUR5oG~r1wkmt0GFL6wZC4~W5WvapPr2OWM6orIqsA~ll3hA__" width={'20px'}/></button>

  </div>
</div>
      <div class="marca w-96 bg-black shadow-xl " style={{backgroundImage : 'url("https://s3-alpha-sig.figma.com/img/80f5/b9d4/05f75c39c01c755f97ddc2866eede150?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LITcMmpLrSpj5VF47iTM3PioCd2Uh~gHQjXi-NuyC-aQFTKNYqucK5dRSs2USP0ia4eYiK6TG7gTvsarkUTjDvuXdYe62olnoGgbKHV0QPemkgCzEYa-vaazS1HYbu9iADiZwX6IMAyPpAfskqc-LW~oUoCT3KQnsrD-yYe0HoECTT9Iz6el5aOT5Y-7X2xdBcDFNwpmFnub3fucF9JI0HnCd9tjMgTi~bQjlMcZmJ71Vo~zEY5orkDRKZTakEOMUUAXunilrwgBVpo-n2VzI6PsOCTOpjhagPSJ6C1nM4M-Cit0e1pEj-iTt4vfiGDiAurmZzQQsqe2uiE4vJIfXw__")'}}>
  <div class="card-body ">
    <div class="card-actions justify-start">
      <button style={{backgroundColor : '#1E1E1E',border : '0px solid black'}} class="btn btn-square btn-sm">
        <img src="https://s3-alpha-sig.figma.com/img/80f5/b9d4/05f75c39c01c755f97ddc2866eede150?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LITcMmpLrSpj5VF47iTM3PioCd2Uh~gHQjXi-NuyC-aQFTKNYqucK5dRSs2USP0ia4eYiK6TG7gTvsarkUTjDvuXdYe62olnoGgbKHV0QPemkgCzEYa-vaazS1HYbu9iADiZwX6IMAyPpAfskqc-LW~oUoCT3KQnsrD-yYe0HoECTT9Iz6el5aOT5Y-7X2xdBcDFNwpmFnub3fucF9JI0HnCd9tjMgTi~bQjlMcZmJ71Vo~zEY5orkDRKZTakEOMUUAXunilrwgBVpo-n2VzI6PsOCTOpjhagPSJ6C1nM4M-Cit0e1pEj-iTt4vfiGDiAurmZzQQsqe2uiE4vJIfXw__"/>
      </button>
    </div>
    <h1>ADIDAS</h1>
    <p>68 itens no estoque.</p>
    <button class="btn btn-md marcabutton">Conferir <img src="https://s3-alpha-sig.figma.com/img/56d7/ff1e/d1c7e30c0444b63303f8d01412274fda?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lxU4ZPwaOBdiokRKsQ8~zRNOOOIX7VQUHfQ0O4gU0uTV5Cm0FIbqf0MWCGwgOSoBCEiwTQXZ83sf84ynAfwnJe83feaEM8CtGiJvh3bRVmpMhOxSW0icPfTYHJq4AXlZk7spL764yQ61GfgQbYMrgLO2ahwlSLluNQod2~BC~2eL8q5pb1-N1UfQygSyudc0CzTsF0SbogctrTrRQlPNOl-bXJPHhRWKpLcwBtA5gsjk5ELP8CGpcqcg7F~6Om~KTPc7x4nl6vGxxh5DWtLgdQZnb-5M1wQgy4V6ellUR5oG~r1wkmt0GFL6wZC4~W5WvapPr2OWM6orIqsA~ll3hA__" width={'20px'}/></button>

  </div>
</div>
      </div>
      </div>
      {Sapatos && Sapatos.length > 0 ? (
        <div className="max-w-max">
          <div className="Titulos flex"><h1>Marcas disponíveis</h1><small>{Sapatos.length} itens</small></div>
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Tamanho</th>
                <th>Cor</th>
                <th>Marca</th>
              </tr>
            </thead>
            <tbody>
              {Sapatos.map((calcado) => (
                <tr key={calcado.id}>
                  <td>{calcado.Nome}</td>
                  <td>{calcado.Tamanho}</td>
                  <td>{calcado.Cor}</td>
                  <td>{calcado.Marca}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-primary" onClick={Indo}>Cadastrar tênis</button>
        </div>
      ) : (
        <>
        <div class="m-10">
          <div class="flex flex-col gap-4 w-100">
            <div class="skeleton h-32 w-full"></div>
            <div class="skeleton h-4 w-28"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-full"></div>
          </div>
        </div>
        <div class="m-10">
          <div class="flex flex-col gap-4 w-100">
            <div class="skeleton h-32 w-full"></div>
            <div class="skeleton h-4 w-28"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-full"></div>
          </div>
        </div>
        <div class="m-10">
          <div class="flex flex-col gap-4 w-100">
            <div class="skeleton h-32 w-full"></div>
            <div class="skeleton h-4 w-28"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-full"></div>
          </div>
        </div>
        </>
      )}
    </div>
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