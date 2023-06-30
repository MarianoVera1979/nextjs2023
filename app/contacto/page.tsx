export default function Contacto () {
    return(
        <>
        <h1>Estas en contacto</h1>

        <form action="" method="" className='formulario'>
                <label>
                    Nombre:
                    <input type="text" />
                </label>
                <label>
                    Mail:
                    <input type="email" />
                </label>
                <label>
                    Comentarios:
                    <textarea></textarea>
                </label>

                <button type="submit" value="Enviar">Enviar</button>  
            </form>
        
        </>
       
    )
}