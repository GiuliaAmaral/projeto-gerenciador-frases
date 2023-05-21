import { useForm } from "react-hook-form"
import { criarFrase } from "../services/frases"
import { useNavigate } from "react-router-dom";
import FormFraseComponent from "../component/formFrase";



export default function CriarFrasePage() {

    // o register é usado para capturar os inputs do formulário com os valores
    // o handleSubmit irá gerenciar o envio dos valores do input
    // o Erros irá validar o formulário e avisar caso tenha erros

    const navigate = useNavigate();
    const myForm = useForm();


    async function submit(data) {
         let res = await criarFrase(data)

         if(res.status === "OK"){
            navigate("/");
        }
    }

    return (
        <>
            <center>
                {/* <h1>📜Criar Frase</h1>
                <form onSubmit={handleSubmit(submit)}>
                    <textarea rows="6" cols="80" {...register('frase')}></textarea><br />
                    <label>Autor:</label><br />
                    <input type="text" {...register('nomeAutor')} required /><br /><br />
                    <button type="submit">✉️ Enviar</button>
                </form> */}

                <FormFraseComponent nomeFormulario="Digite a Frase" form={myForm} onSubmit={submit}/>
            </center>
        </>
    )
}




