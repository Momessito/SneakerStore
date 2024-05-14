import { useEffect, useState } from "react";
import { getCalcados } from "./firebase/firebase";
import img from './img/Fundo.jpeg'
import nike from './img/nike.png'
import adidas from './img/adidas.png'
import asics from './img/asics.png'
import converse from './img/converse.png'
import jordan from './img/nike.png'
import mizuno from './img/mizuno.png'
import puma from './img/puma.png'
import newb from './img/newb.png'
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
    <div className="">
    <div class="Hero">
        <img class="fundo" src="https://s3-alpha-sig.figma.com/img/b2ad/e30b/85eab93f11ab0fbee2e145c4a0f93d69?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rn7KAFExiFYPFtI4exYRjYhNjUUNVawZ~ToGpWi0aiVh4jkTeAkggzXmeAcIzghIa9~1ioLqyjOzAnnhbHrHrF8xrhXctAZguy5RJS~BErl4ahyoBKIBAlnIUrbpyqiy1m5CtSQ3-viOSmOawJuU5Uez3lba50pSulRj6wnulg8EEhy8gmm1S12FTqruvbSnFDQXHXiZmLotvFhS0ZIPu3TiB2TQ3tyl2Z2wl66LkewBWLT~SCPE5SdeFzW8zz4Zcti8tf291AxYC1Gzd1qkryZfEHLMoRKnQC7BmkdSu~LK-oFifSadIrcEYxKKaXCfV9u3vkJmml~AB6SyeTlgKw__"/>
        <div class="navbar">
            <img src="https://s3-alpha-sig.figma.com/img/7188/051b/94e692d5cff354d0914a7a31c2dd89a8?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pjzyqa9ZbcMGbOYZLhOr8cc4~j~DLuqg-~YHMCwZ9rluTHsZRHLaA-naYxnjTmqPvis9y2EYI-c2MWUlaumWNHj3SQT5b9AxM0qyUZAUZ9bSLW64PrGNj1ULO6nRaYAWmPnRkY7tJTVrllNwpopoELYLe56z1l7oUIebfpn8Ttx-jboOvgjP-ZE3Qu5gRCGQ4tcMDBF5QPa2AyF2FZ3xKeRfwdWjm7fMZOhyrlmPBA3xWgr2GtSY~vsf42dvaOvB3ZhUbF-fYVNcf2p7rZZzN3AtKzE11T90LEFkFH7gUWQHQ4NvrpLJn3yWMFOWznqLKGyGGUh3pX95evacE-pt2A__" alt="" />
            <div class="sair"><p>SAIR</p><img src="https://s3-alpha-sig.figma.com/img/2b6b/09dc/e6bbf2f7883b9a8f4887fad106ce7e0c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k0CgHtZjdgoMfE7mtWGh-JN8lnNunt6LknB7Yjy3ymnDVI8dK6KNblCY6mOjH~-YWigKeButrrU2Wht-eo8ZSfZXfdygId2rcyr8C5WrPndOdncD-AQwkYo8W~IXenamgylwZ-NvFq-BZpT~fK2d~Le9ngiHseAfuVvR711mpz7zkshuEKBimHrMlQ7qyvp4RO83aBNAPti3tlpPiENTN2wTUNqG1w~CFZ7DYaOMGJHBbYch-BzNZFuu3EIAK33MtdYLZwFEY4xujxwgtN1hlE0-eIRouoVN28rOoyasRoX7nHiliZMh4jU6UBm1N2iSxBF0MwFTubRC~kj1i22UCA__"/></div>
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
                <img class="logo" src="https://s3-alpha-sig.figma.com/img/80f5/b9d4/05f75c39c01c755f97ddc2866eede150?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ModDh69nVd1TarO5GuDLTNwnzA6d2shjwOCaO~GLFUML3opSLD~xY-idvBIvS3SLrbbkC75Bp5ENJi-4NzxkoyUaZsJmhKVZo9y889i9cbxfVezc3GCH1~-qKbfS3JcNOnYEZFxPfqfnm4mE8VtMA8-izm7xneB2P9a1pC9EXrVz-yyT-xUeKv9qaLKa5y2cuTTPhnrjF0tWSrBwiQ9kYv7aeSveX~Ew6s6zl9IZSjppfK7OTc867Y4uHKo~Y90v3Xc2ChxmBNyQq8OuT~teXaLEa4dKzDQB3dgJ6mVu2GIEEMd67ACzFUuf0wu3-hRKsk0bbjQzBt8zpMLdmmIJSQ__"/>

                <div class="inv">
                <img class="cardFundo" src={adidas}/>
                <h1>Adidas</h1>
                <p>9 Itens no estoque</p>
                <button>Confira →</button>
                </div>
            </div>
            <div class="Card">
                <img class="logo" src="https://s3-alpha-sig.figma.com/img/b341/b2d1/c373150d973f49699a02b29836330f46?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N4EwtWg3MsL-W5H6Kw8N99zPyvw1dn4qAiLPGXj329~-KFG9FkAszvVLF09C0aGQ0spIogDvj2HvdAnnwLat51v~qnsLqNI~FfJ57YOQnQyVk3HfiXC21h9q2s2pH0VIMYY7Sz~4m71~gRxvNHafJl-GCwjKf6L8zkYJtVnJ5TH6RffKP5JQjleRaKC3Vy7hRm85n6IESmWMh5-Cbfc-Z25z1SKU-vgF-6DT-3XLxoa55dVZkmcG4HyF3NPynFLkZ8eCobIkb9uwI~pWOnGeMEfgfKne4GXF4klBfF~YX3oDyaanHiQzjuvtCQ04xjk-9DQYrzQbTSILVB3KZ~VP2Q__"/>

                <div class="inv">
                <img class="cardFundo" src={nike}/>
                <h1>Nike</h1>
                <p>9 Itens no estoque</p>
                <button>Confira →</button>
                </div>
            </div>
            <div class="Card">
                <img class="logo" src="https://s3-alpha-sig.figma.com/img/fa10/be26/29f1680a1994a7de8c3884d36d757cc7?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dJtzy3FIxybOBgBYCIx4nABDyocOw8RcHMuLfKETZssGq6iMNZYCwsYbrL5RNrMMwWyeYZMq~DzR5KiDOnSaYIBoi3nhBN7o3-DcQPr5p5AWMmWWLwA7SoomYx1FSJ15F6ECvx~3lrMRoizZpxzckkD13mLTTJGvIKg4vzv8rCQhyW5yU6ln6CEMlqfQJZcnAxLFron~ZFNE~VLmD3aW4AzZwM4rizIwx5H27vZGGe0cqAHAAk4PXN2OwkgcDcoAJBkeLZCr54mBlVBBgw88tGVTGUSW4bgIgD87x2xNm4TrAbuTj-d7H~ObxHbNBc52xibVJorRpZ05yYwstuIzXw__"/>

                <div class="inv">
                <img class="cardFundo" src={mizuno}/>
                <h1>Mizuno</h1>
                <p>9 Itens no estoque</p>
                <button>Confira →</button>
                </div>
            </div>
            <div class="Card">
                <img class="logo" src="https://s3-alpha-sig.figma.com/img/d101/15c2/b70e39ed8c9ab0052e5b55853f155ad6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ANDTZcB5J3trAyaUzOvwLLvA5qCLunL0DqOd9Udlsca0ddEQdHdYmfmRgYnU7ZnlvUcSSC7StvrYiCwKOT0y5B5L9IzUeFnuiNl6~~Xni2uy9tEvI6Of-Z6FNmqjXv2FPMLgYDELwi8tTy24oRClhk795g4viBmYR9s~dgLONTgtEVWqeMbN3z5OsDF9OY7n5Vgi~jzJcV4c1Yj9FV0mPZAxOoxgOfFAG76epPcOK2NoIbxekLIsqKE7tuvuhhD~mn9NtyRPuCycAXJDyrzNB0XiIXTHMM3ixhnObKDq3K7RM-o87cT3CYUBZj8o0T-qiB~mxCId83GjayyALWJ75w__"/>

                <div class="inv">
                <img class="cardFundo" src={converse}/>
                <h1>Converse</h1>
                <p>9 Itens no estoque</p>
                <button>Confira →</button>
                </div>
            </div>
            <div class="Card">
                <img class="logo" src="https://s3-alpha-sig.figma.com/img/f15d/2167/b66f3f67176bfbcf9fd6892e1cb12f1a?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K6eFZ~MlUSXo033R4laN9CQzurrnwUWaqdxgHnFtVS8vcO7PmLY1tTRVul65yAJcp0rF7TzHC-hX8CbP5DkyZU4ojbFbJnBMSzJa4G8FgiM0I4l4BBSEmgSap4Vn71-LYjOLvNhPEC8deNc1zl1AUqIpXO0PpwSWu-eAFEx~k7~i0uF778d15GnwKaV~RX27bPpv1b9s0oI2WC5ohymKB9SLVPyXezCZGzx2jHZCsxxYLLt-rr-ylDxlENEsvBNPVX7IgwY8lXc5m3KUJwXPY6-durpORZsr0AQMl0CLVW1EeHiUyYJD2Dmv8IPUI0ts~wsk-ut2Wv9G462XojEY8Q__"/>

                <div class="inv">
                <img class="cardFundo" src={puma}/>
                <h1>Puma</h1>
                <p>9 Itens no estoque</p>
                <button>Confira →</button>
                </div>
            </div>
            <div class="Card">
                <img class="logo" src="https://s3-alpha-sig.figma.com/img/b08a/80cf/9d19505c6a56086cc602ecc01314ae2c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jIOcqA00Uqy8n4MGTXhg-IDM8oOfSS5x0cKfbojT49ao7ljoLbM87KS4ZSWw3GmZ74zqUC6o2crWdTgg46cNDMcPP6r89GcSuViWebU~Ht6C0yPClam4NGaU4Ds1QK7rRFhQajx3zRNzxN5IXuIXkJoSD4M5C8ibFDEYenPQk6xgyXuAnuMS6VnjMX~DCQ5ngoRFHBZRhbdbxPyjaq2wx8MVZqnO8A7-1b9Dbhb2V-YNr2hhFFUroAVimNPYA03euJJUW84wmynIH3ev4r5j2VkIFRVwrklQQrs5~TJdYUpVz8LCrufcJpVAEQszV90ICkPwb17HVh0wbIXB9CGiCw__"/>

                <div class="inv">
                <img class="cardFundo" src={asics}/>
                <h1>Asics</h1>
                <p>9 Itens no estoque</p>
                <button>Confira →</button>
                </div>
            </div>
            <div class="Card">
                <img class="logo" src="https://s3-alpha-sig.figma.com/img/e950/45c4/72bf3e6d97f2f643f9d193b0387945ae?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nPbfN6fKxafZCiB45HgoCOiI-tKJUOW6HH5CJHxcz~YqoYfSCXwUkZHlp2fQkOXnES0V6Qn7rngfNqN5Zznu-oCIRFLuvZM2S~rF3zdICAgbaw-Qx6Qiuk97iW4gVEYH5toOP-SUK4liBIYM6IP~Lorg98Q-vfNDT1TsQ3MgPzYn1Ins3H7SEcEuCfXJx~jaQT5USU25nhS-~WT~irZBfv0RjE0ELvJDszDzqXwEHUVA1om-Nbl2cOGSO5JE-m1kK1nZGsfzcZL~e2s1Kh13-Gk16HkAG25cPqEfQEp1MKINxNswUBqslDAYmaDQpo961fNZimVuA1dsMHn3-hteSw__"/>

                <div class="inv">
                <img class="cardFundo" src={jordan}/>
                <h1>Jordan</h1>
                <p>9 Itens no estoque</p>
                <button>Confira →</button>
                </div>
            </div>
            <div class="Card">
                <img class="logo" src="https://s3-alpha-sig.figma.com/img/2529/cbb9/d9132cf4aabc68954c6f24130102ac9e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n3Akevaz6hfpgqQxiqWHyt2oBKk7kevF1v8-ygSrVJXHJVISPws54xJR7J9eXNZDL9irDBfk-TgBNt2R27WvYuho4POxHzaNCp7Fs2VX9pdFLeQfV5xQPIkYuW9gFlzVgZx5ScMjaZoMH~gFpA8vZhLE-ZK85r9841mUe9YmisQIEJZspWcJBRPerTVJutAH0dvkIEkXu7keuXDxtgVXyFYjzsQzXkDsmYw0jCdboZ8dlPnTYeb9eH8wUy2lHb7MjArERkAZg8LnCIatUtf9WNmVQclwXtAOfDKQTGiGj1~XLOFoil-5Q1YXUoXY2u0zbZqdohhafozMPoY2wPZVfw__"/>

                <div class="inv">
                <img class="cardFundo" src={newb}/>
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