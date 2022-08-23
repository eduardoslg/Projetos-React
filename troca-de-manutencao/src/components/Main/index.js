import { useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContainerPrincipal, ContainerInputs, Container } from "./styles";

export default function Main() {
  let data = new Date();
  let dia = String(data.getDate()).padStart(2, '0');
  let mes = String(data.getMonth() + 1).padStart(2, '0');
  let ano = data.getFullYear();
  let dataAtual = `${dia}/${mes}/${ano}`;

  const [ input, setInput ] = useState('');
  const [ input1, setInput1 ] = useState('');

  function handleCopyOldImei(){
    const antigo = document.getElementById('input')

    navigator.clipboard.writeText(antigo.innerText);
    toast.success("Informações do imei antigo copiadas com sucesso!")
  }

  function handleCopyNewImei(){
    const novo = document.getElementById('input1')

    navigator.clipboard.writeText(novo.innerText);
    toast.success("Informações do imei novo copiadas com sucesso!")
  }



  return (
    <ContainerPrincipal>
      <ContainerInputs>
        <div>
          <label> IMEI antigo </label>

          <input
          type="text"
          placeholder="Digite o imei antigo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength="15"
          />
        </div>

        <div>
          <label> IMEI Novo </label>

          <input
          type="text"
          placeholder="Digite o imei novo"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          maxLength="15"
          />
        </div> 

      </ContainerInputs>

      <h1 className="data">
        Data Atual:
        <br/>
        {dataAtual}</h1>

      <Container>
          <h1>Informações imei novo</h1>
            <p id="input"> Troca de manutenção {dataAtual} imei antigo: {input} </p>
            <button onClick={handleCopyOldImei}>Copiar IMEI antigo</button>

          <h1>Informações imei antigo</h1>
            <p id="input1"> Troca de manutenção {dataAtual} imei novo: {input1} </p>
            <button onClick={ handleCopyNewImei }>Copiar IMEI novo</button>
      </Container>


    </ContainerPrincipal>
  );
}
