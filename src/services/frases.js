import axios from "axios";


const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;



export async function obterFrases() {
    try {
        const response = await axios.get(`${API_BASE_URL}/obter`);
        return response.data;
    } catch (error) {
        console.error("Http Error Fetch: ", error);
        let msgPtBr =  "Erro inesperado, tente novamente mais tarde!";
        if(String(error.message).includes("status code 404")){
            msgPtBr = "Não encontramos nenhuma frase!"
        }
        alert(msgPtBr);
        throw error;
    }
}

export async function obterFrasePorId(id) {
  try {
      const response = await axios.get(`${API_BASE_URL}/obter/${id}`);
      return response.data;
  } catch (error) {
      console.error("Http Error Fetch: ", error);
      let msgPtBr =  "Erro inesperado, tente novamente mais tarde!";
      if(String(error.message).includes("status code 404")){
          msgPtBr = "Não encontramos a frase selecionada!"
      }
      alert(msgPtBr);
      throw error;
  }
}

// função para criar um novo post na API
export async function criarFrase(fraseData) {
  try {
    const response = await axios.post(`${API_BASE_URL}/criar`, fraseData);
    return response.data;
  } catch (error) {
    console.error("Http Error Fetch: ", error);
    let msgPtBr = "Erro inesperado, tente novamente mais tarde!";
    if (String(error.message).includes("status code 404")) {
      msgPtBr = "Não encontramos nenhum post!";
    }
    alert(msgPtBr);
    throw error;
  }
}

export async function deletarFrase(id){
  try {
    const response = await axios.delete(`${API_BASE_URL}/deletar/${id}`);
    return response.data;
  } catch (error) {
    console.error("Http Error Fetch: ", error);
    let msgPtBr = "Erro inesperado, tente novamente mais tarde!";
    if (String(error.message).includes("status code 404")) {
      msgPtBr = "Não foi possível deletar a frase!";
    }
    alert(msgPtBr);
    throw error;
  }
}


export async function editarFrase(id, fraseData){
  try {
    const response = await axios.put(`${API_BASE_URL}/editar/${id}`, fraseData);
    return response.data;
  } catch (error) {
    console.error("Http Error Fetch: ", error);
    let msgPtBr = "Erro inesperado, tente novamente mais tarde!";
    if (String(error.message).includes("status code 404")) {
      msgPtBr = "Erro, não foi possível deletar a frase!";
    }
    alert(msgPtBr);
    throw error;
  }
}