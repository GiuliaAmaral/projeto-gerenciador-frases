import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom";
import { editarFrase, obterFrasePorId } from "../services/frases";
import { useEffect } from "react";
import FormFraseComponent from "../component/formFrase";

export default function EditarPostPage() {

    const { id } = useParams();
    const navigate = useNavigate();
    const myForm = useForm();

    useEffect(() => {
        (async () => {
            let dadosApi = await obterFrasePorId(id);
            myForm.setValue('frase', dadosApi?.resposta?.[0]?.frase);
            myForm.setValue('nomeAutor', dadosApi?.resposta?.[0]?.nomeAutor);
        })()
    }, [id]);

    async function submit(data) {

        let resposta = await editarFrase(id, data);

        if (resposta.status === "OK") {
            navigate("/");
        }

    }


    return (
        <>
            <center>
                <FormFraseComponent nomeFormulario="Editar Frase" form={myForm} onSubmit={submit}/>

                {/* <h1>Editar Frase</h1>
                <form onSubmit={handleSubmit(submit)}>

                    <textarea rows="6" cols="80" {...register('frase')}></textarea><br />

                    <label>Autor:</label><br />
                    <input type="text" {...register('nomeAutor')} required /><br /><br />

                    <input type="submit" value=" ✉️ enviar" />
                </form> */}
            </center>
        </>
    )
}