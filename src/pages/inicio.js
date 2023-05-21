import { useEffect, useState } from "react";
import { obterFrases, deletarFrase } from "../services/frases";
import { Link } from "react-router-dom";


export default function InicioPage() {
  const [frases, setfrases] = useState([]);
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    (async () => {
      await obterFrasesNaTela();
    })()
  }, []);

  async function obterFrasesNaTela() {
    setCarregando(true);
    let todasFrases = await obterFrases();
    setfrases(todasFrases.resposta);
    setCarregando(false);
  }


  async function deletar(id) {
    setCarregando(true);
    await deletarFrase(id);
    await obterFrasesNaTela();
  }




  return (<>

    {
      (carregando) ? (<>

        <center>
          <img src="/spiner.gif" alt="carregando" />
        </center>


      </>) : (<>
        <div className="container mx-auto px-4 pt-5">

          <Link to="/criar"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">📝 Criar</button></Link>

          <ul className="divide-y divide-gray-400">
            {frases.map(item => (
              <li key={item._id} className="py-4">
                <h2 className="text-2xl font-medium">{item.frase}</h2>
                <p className="text-gray-500">{item.nomeAutor}</p>
                <div className="flex mt-4">
                  <button onClick={() => { deletar(item._id) }} className="px-4 py-2 mr-2 text-white bg-red-500 rounded hover:bg-red-600">🗑️ Excluir</button>
                  <Link to={`/editar/${item._id}`}><button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">✏️ Editar</button></Link>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </>)
    }
  </>);
}