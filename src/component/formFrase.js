export default function FormFraseComponent(props) {
    return (
        <>
            <div className="grid justify-items-center px-4 pt-5">
                <h1 className="text-center font-bold">{props.nomeFormulario}</h1>
                <form className="w-full max-w-lg" onSubmit={props.form.handleSubmit(props.onSubmit)}>
                    <textarea
                        className="w-full p-2 border border-gray-400 rounded-lg"
                        rows="6"
                        cols="80"
                        defaultValue={props.defaultTextoFrase}
                        {...props.form.register("frase")}
                    />
                    <label className="block mt-4">
                        <span className="text-gray-700 font-bold">Autor:</span>
                        <input
                            className="form-input mt-1 block w-full border border-gray-400 rounded-lg"
                            type="text"
                            defaultValue={props.defaultNomeAutor}
                            {...props.form.register("nomeAutor")}
                            required
                        />
                    </label>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                        type="submit"
                    >
                        ✉️ Enviar
                    </button>

                </form>

                <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" >
                    ⬅️ Voltar
                </a>
            </div>
        </>
    )
}