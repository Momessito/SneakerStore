import { useEffect, useState } from "react";
import { getCalcados } from "./firebase/firebase";
import img from './img/Fundo.jpeg'
import nike from './img/nike.png'
import adidas from './img/adidas.png'
import asics from './img/asics.png'
import converse from './img/converse.png'
import jordan from './img/jordan.png'
import mizuno from './img/mizuno.png'
import puma from './img/puma.png'
import newb from './img/newb.png'
import Poster from './img/Poster.png'
function Calcados() {
  const [Sapatos, setSapatos] = useState()

  const fetchData = async () => {
    try {
      const calcadosData = await getCalcados();
      console.log("Dados Calçados: ", calcadosData);
      setSapatos(calcadosData);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (<>
    <div className="">
      <div class="Hero">
        <img class="fundo" src="https://s3-alpha-sig.figma.com/img/b2ad/e30b/85eab93f11ab0fbee2e145c4a0f93d69?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OCiWZZ7svYESFtj-UVWA0n8CCm8Vf8-jzgifMkuY0sZCU0mFqQvD5fPLVMafRwljfnX6lNH~cbhveh09Y16HwZvd1bdFG9jVnumH2sB8qDcZ~geWoIE0QkEaILjF9sSo6b7YqrHGO9UhrkP19ICBovopvQ3oYIIIHK9~Ixr2HONF0fY9o5VZHFhAhNQzaEOp1cd6-3Q6LWQqefFq~ouUF1RXojuwi9ZDGzm1bjIS9wcN7~Seu8szsyjGb-Iripd05ZVLW9KQPYSTsinzZ3znVbAuBnKk5joO-1KjQtPl-Ul9HD8PtcIef5V6d-gaPHErXMMWf-1v0-BfPtUidBNG8w__" />
        <div class="navbar">
          <img src="https://s3-alpha-sig.figma.com/img/7188/051b/94e692d5cff354d0914a7a31c2dd89a8?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WF5-7BoNFYXmsIEco3DOAOgsJ9ekpKJKFJWllg2p~KpN7mYOxfkjPF-8p-~rWO7yXkCBMsfFLMj3cfv3HgLy~lrDKwzrYKCGuMm4ihCLg0d1SIknvBm4KndzRpyme-G7LwI8fCOMIzfyFEKmJeMeecpW9qhQibMpvQ6xqavXBfToAXhJCpzHbAX7AczJW-nvV1YLm5xEQSX-4eE9SfYczZYXtbJwnEYVtg4SOi8dlL78BIAwd449mrAuYIBuxDtwVKCnlM~bH8V5it96IITRuC-6Nx6Duf8w7rMEUVaSJ5sBSEhGWU1X6YZYv9PchYS98-s9sEWwj3cIwB4WLjtR4Q__" alt="" />
          <div class="sair"><p>SAIR</p><img src="https://s3-alpha-sig.figma.com/img/2b6b/09dc/e6bbf2f7883b9a8f4887fad106ce7e0c?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jgabydgQUVvpVDmh2fMbgb-E~D3kM~sKNzko9eFtZBxvOcehezwgKcTx9Q0talT2ObBbhLhpQYaiqJv9NHG4W7kWG8LoyOE2Xx7iyqDBhhgLPx5C1wytdDrieSafdH5lfbElSpHS0obMYZjx3hEHvrJoAKlFeEMOfnVtviepv5sNemtLIwOHw1cpiFAsFA~mR96rC6bEAoZcXf1dfCBh2WNvRPAj3Sq7itep8fHIIquXtb2MmhV9dDjI2ahNDX-eGp75yqg9KKXCO2R6PKTa3qP82-RkvJfYRM6Uv46JX3-jebxJ74TmMCFGYm0xVUURei4QslCtkaL~k-HD3TP26g__" /></div>
        </div>

        <div class="textHero">
          <h1>CONTROLE DE ESTOQUE</h1>
          <p>Funcionários, confiram nosso novo portal de controle de estoque!</p>
        </div>
      </div>
      <div class="Marcas">
        <div class="marcasText">
          <h1>MARCAS DISPONÍVEIS</h1><small>9 itens</small>
        </div>
        <div class="MarcasCard">
          <div class="Card">
            <img class="logo" src="https://s3-alpha-sig.figma.com/img/80f5/b9d4/05f75c39c01c755f97ddc2866eede150?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i19xodNfdHH5STnm5KyL9neYdQcgsMu2QdYjesDdOuNlqBQkW4yMpwgCNKB66EqLYuIzl~xAVe12s-DJhUh5qtJgoUvWu9RrJF2voM0zl10-e0NHiFmFDxEQtQPqXN4dzD6MwIFo4QDNDguiXB2D9Kj1DF6un7AMPXiYwwZ4wZDWBAr8rW9XWHTNc~szarrSAlZDO62~I3Xxxoah7YHlWpHos0Zv-pcZVMJNIXamYvW8f~CZi-dyWvGzVYvXONNm-8Pgd4CyxCABvP~L3dzGR3~XHWWHm0lCGXvsEqLTCalUzB0H1VkGJDBCFtjHx61NQCmGYj5cYyJnmB0c6y8nFg__" />

            <div class="inv">
              <img class="cardFundo" src={adidas} />
              <h1>Adidas</h1>
              <p>9 Itens no estoque</p>
              <button>Confira →</button>
            </div>
          </div>
          <div class="Card">
            <img class="logo" src="https://s3-alpha-sig.figma.com/img/b341/b2d1/c373150d973f49699a02b29836330f46?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D66Kh0T01k-PVzZ9bQH846joZM7O2XgnGalwNDz--nkZjGB3eVjMN~j6gqPoUk~3LQWjHVh84g4kBiQfDahb36cxBt3qQs4oUe5V8wpOWwPIsJ5lFymabQylryR67U-Wsc-Vv0ZigjD6H82vZC1XIeEnQv0hNaRn45MOLzlT72-BG4mXVlhPKGBoqbcWjBJnmBwGlGunsCgM4FeLRZCwoak46gusnrbdZ7~D6~9XjyUS0mhCPmq0eCc4-A-bTWNr~UU8Fucvqc7pRFQRf5-hYWHzLNjAwhPK5aAhBAmo68PvcLP3PEhPewY83cUJzmUhfIe22IM7~G-c7gt4AhWIfg__" />

            <div class="inv">
              <img class="cardFundo" src={nike} />
              <h1>Nike</h1>
              <p>9 Itens no estoque</p>
              <button>Confira →</button>
            </div>
          </div>
          <div class="Card">
            <img class="logo" src="https://s3-alpha-sig.figma.com/img/fa10/be26/29f1680a1994a7de8c3884d36d757cc7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pmYY3H0i-kUThrdwpveUBf0MJB8Ufhi0q9tC7mHTPgV-WdnQUDV~nIiOU31SKNIcosn6Zti04CGpbOdCemEU7xw1N8c60qiGJWXMb-kiEORi5YJ16p7k7eK8oqqp1JY3dK0qESdP2I8OMZsujxiXX6GG04SbSyEUa37WgCvNV~PihmhtB7IBlGZpFUn5LYzaI0LHL4pE7CIMPHyih1xHon3oM8j7oEpTHtthm8nz8p02Qn9qX-CEo7F233cUpdqV0quNWpKua7tk0NJQWDjQJM3miZn6R0aGfcrwi4I-jsKt-NHdOBxpBvY0eibv-CK4F4jnuhB1YmVOB5bFDV3~3Q__" />

            <div class="inv">
              <img class="cardFundo" src={mizuno} />
              <h1>Mizuno</h1>
              <p>9 Itens no estoque</p>
              <button>Confira →</button>
            </div>
          </div>
          <div class="Card">
            <img class="logo" src="https://s3-alpha-sig.figma.com/img/d101/15c2/b70e39ed8c9ab0052e5b55853f155ad6?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pWEAyxiNrajfr9HhHc61RufTdS~Ej6iR0gSJIRsQ7HZ2aY~OzJrat5U8IJj9Q6RcWD1B2HLyJrauGoUWHC7qh5laJuEqfKJBHdRGH8UWgJz-PyCI3Wf3L2eO3F2InbqAXi3Wr8WCj7T7Hif338BFmRjnObCEYwj9UTnvfFD9~1nBuduY83SGWLSDvbcldIipAD0CKO4ZPbM8nMaY6XFa8-S6UTpTzu-mPsnI72Ay0Jabw37cHHQebeKozc0vkWN25rV3gbwlCWF1frtEDQv-DnkSbHhFXPAkAqK6ZR0Oa9c8cZnJmL54OpGggbHfpyolPCEdEogShAc4MHsFOauJsw__" />

            <div class="inv">
              <img class="cardFundo" src={converse} />
              <h1>Converse</h1>
              <p>9 Itens no estoque</p>
              <button>Confira →</button>
            </div>
          </div>
          <div class="Card">
            <img class="logo" src="https://s3-alpha-sig.figma.com/img/f15d/2167/b66f3f67176bfbcf9fd6892e1cb12f1a?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pr3xZZTeMUw~uzqO9ApSYdNLAzZEnxdiHYxBqnBg8bOU5rTZR~1s8I9j0kYIE3xFyeRXps7zlEyZhf5URhVJYyMdYMAM6iwKiJxKY~dUNSslsI1AZKVVqJPgoainvLnu5cD-3LIr0jZpknRgEZZQKK7SMHU3ATW8XjWMxd7T2bWQ06kvcZgWzI2YpxzS3BUc-PYuEmp07kOZ52uRu0vIjS4BxRk1~VJQrtKtAY6cPsoBJtA4C14j-WzBsfCwz4WYPeHUgb7IN~TdarZKgZtykFZ4TPYIiqc8PsiY86KFs4Txg9PdRYEOcXEADPXxY4vEzRAnxDggC4qyuNRLyCR3Kg__" />

            <div class="inv">
              <img class="cardFundo" src={puma} />
              <h1>Puma</h1>
              <p>9 Itens no estoque</p>
              <button>Confira →</button>
            </div>
          </div>
          <div class="Card">
            <img class="logo" src="https://s3-alpha-sig.figma.com/img/edc0/0318/d2ab4f304aaa71818c7b457d2044ec61?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=njy97udNZHVyLHpnRJtr9GoGmoz6oLWFUMN6V8TOUyGaMuopaz-UCSw5IkDSr4Qm~PR9FmA11s~ulutte8m8cTvFMiX4kMKNflmqZLODJ2nQIfa22HAVmVPCCYEB87Ddl4KlQr2fDGAJex8x9bqa7JtQZ3Iymvs~5NCwZex9~-1qJF5-lSxygIGOnZEKgjfjoq-57Yjs0JmCvdXY5cZjJnLbsaoyLvtIfoyfl9z-gfNC1f6yz3YNBBNTaTxdRvmGho2pZjq0EDSSvgg3Hl0KpP22Fdg4C03gQJtlGiFb12fndcaBzeJRHL1WAyx92HjZFWud3AaYT0pth1VltA~7rQ__" />

            <div class="inv">
              <img class="cardFundo" src={asics} />
              <h1>Asics</h1>
              <p>9 Itens no estoque</p>
              <button>Confira →</button>
            </div>
          </div>
          <div class="Card">
            <img class="logo" src="https://s3-alpha-sig.figma.com/img/e950/45c4/72bf3e6d97f2f643f9d193b0387945ae?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YkvvdZrW0kEkpF5DcQ2pN-Ku10AI8XofpEHlhcDFOmeJvHvVr3lP3aZSF-I8-ScwyYkVcPwD8liEfPrVBbto7-8PRImOsZ6Fyajic31XPmGb4cwNdcQz9HNn4ajS6Xb-id70JWJISK62E1fHU4vh3RMGb1DW6BR~JGCjnZP3zMcSehkf6-FZDXlX9anT-hP9wxno5iIungXb2sNZTlKMzVimv~qnDpdDe3ItwDb4ERjxGNl2~5dOZoAXysc8EkMEwfYI5MhbUKKEl-qvofTAoTzj~nTEw3RxQbVZ99CFcaPC5qHav7oIghZJeEusRCnpSUuVbrQjVf1HySDVWJIrTA__" />

            <div class="inv">
              <img class="cardFundo" src={jordan} />
              <h1>Jordan</h1>
              <p>9 Itens no estoque</p>
              <button>Confira →</button>
            </div>
          </div>
          <div class="Card">
            <img class="logo" src="https://s3-alpha-sig.figma.com/img/2529/cbb9/d9132cf4aabc68954c6f24130102ac9e?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oM0OJwh6AEw98KOQhAEXMPfYUPznD2RmmMHOSkIu0mp26cbFopryGCq-Tt3P1prHCLapVkA7TuWJ1eItCYKhwCeDWrtNnEJbHjQtTjgAy9oC5zMcZbUGwCZ7zG9Bg0gH5uvZOmZYAYhc3fuuy8CNR3hgIx1QkPbrMNlSyIQJ0XqpvwXvqBof7W~FVijugrDaBl6kh80ecAu1shj1Wd10AJoJDVxuJv5KzEKbhGvMDyqBxoOiIAoNhVKBeI3bSJfj8eqcRQ803ss6iTf6rbYgMNW3l9l99DYl10ucfUXvoHaCyXtg-Q7ZlTBziwb3zi40V6y1tPIRIsf7DY73l5EHeg__" />

            <div class="inv">
              <img class="cardFundo" src={newb} />
              <h1>New Balance</h1>
              <p>9 Itens no estoque</p>
              <button>Confira →</button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-max">

        {Sapatos && Sapatos.length > 0 ? (
          <div className="max-w-max">
            <div className="Titulos flex"><h1>PRODUTOS DISPONÍVEIS</h1><small>{Sapatos.length} itens</small></div>
            <div className="cardProduct">
              {Sapatos.map((calcado) => (
                <div className="CardP" key={calcado.id}>
                  <img src={calcado.imagem} />
                  <h1>{calcado.Nome}</h1>
                  <div className={`color-indicator cor-${calcado.Cor.toLowerCase()}`}>
                  </div>

                  <div className="numbers">
                    <p className="num1">{parseInt(calcado.Tamanho, 10) - 4}</p>
                    <p className="num1">{parseInt(calcado.Tamanho, 10) - 3}</p>
                    <p className="num1">{parseInt(calcado.Tamanho, 10) - 2}</p>
                    <p className="num1">{parseInt(calcado.Tamanho, 10) - 1}</p>
                    <p className="num">{calcado.Tamanho}</p>
                    <p className="num1">{parseInt(calcado.Tamanho, 10) + 1}</p>
                    <p className="num1">{parseInt(calcado.Tamanho, 10) + 2}</p>
                    <p className="num1">{parseInt(calcado.Tamanho, 10) + 3}</p>
                    <p className="num1">{parseInt(calcado.Tamanho, 10) + 4}</p>
                  </div>
                  <div className="buttonsCard"><button>Editar</button><button>Excluir</button></div>
                </div>
              ))}
            </div>
            <button className="Cadastrar" onClick={Indo}>ADICINAR NOVO ITEM  <h1>+</h1></button>
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
  </>);

  function Indo() {
    window.location = '/Cadastro'
  }
}

export default Calcados;