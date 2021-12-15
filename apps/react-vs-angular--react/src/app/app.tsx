import { ESTADOS_ENDPOINT, UnidadeFederativa } from "@hypeit-brasil/ibge-api";
import axios from 'axios';
import { useEffect, useState } from "react";

export interface Todo {
  id: number;
  title: string;
  done: boolean
}


export function App() {

  const [estados, setEstados] = useState([] as UnidadeFederativa[]);
  const [pesquisa, setPesquisa] = useState('');


  useEffect(() => {
    axios.get<UnidadeFederativa[]>(ESTADOS_ENDPOINT).then(
      estados => setEstados(estados.data)
    )
  }, [])



  return (
    <div>
      <h1>Estados brasileiros</h1>
      <input
        value={pesquisa}
        onChange={event => setPesquisa(event.target.value)}
      />
      <ul>
        {
          estados
            .filter(estado => estado.nome.includes(pesquisa))
            .map(estado =>
            <li key={estado.id}>
              { estado.nome }
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default App;
