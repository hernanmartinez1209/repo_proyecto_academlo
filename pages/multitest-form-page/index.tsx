import { useForm } from "react-hook-form";
interface FormData {
  TituloDelaPublicacion: string;
  Tipo:string;
  Categoria: string;
  PorqueLorecomiendas:string;
  LinkDeReferencia:string;
}

const CreatePublication = () => {
  
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    // do something with the form data
    console.log(data);
  }
  return (
    <div className="flex " >
      <div >
        <picture>
          <img className="h-[693px] w-[255px]" src="../img-form-pages.png" alt="" />
        </picture>
        <picture>
          <img  className="absolute top-28 w-40 pl-4 " src="../frame.png" alt="" />
        </picture>
      </div>
       <div className=" absolute top-80 left-5 text-[#F3F243]">
            <h2>¡Bienvenido</h2>
            <h2>Creador!</h2>
        <div className="w-52 pt-8">
          <p className="w-full text-white text-[15px]">A continuación puedes completar la info de la marca, artista o torneo que quieres cerca.</p>
        </div> 
        <div className=" absolute top-80">
          <p className="text-[#FFFFFF]">Ayuda</p>
        </div>
        </div>
      <div>
        <div >
          <h3 className="pl-[90px] pt-[36px] text-[#1B4DB1]">Back</h3>
          <div >
            <h2 className="pl-[310px] pt-[87px] text-[#1A1E2E]">Publicacion</h2>
          <h5  className="pl-[310px] pt-[9px] text-[12px] text-[#6E6A6C]">Informacion basica</h5>
          </div>
          
        </div>
        
          <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <label className="pl-[310px] pt-[10px] text-[#7D7D7D]" htmlFor='TituloDelaPublicacion-input'>TituloDelaPublicacion</label>
        </div>
        <div>
           <input type='text' id='TituloDelaPublicacion-input' {...register("TituloDelaPublicacion")} />
        </div>
      </div>
      <div>
        <select name="Tipo" id="Tipo">
          <option value="Tipo">Tipo</option>
          <option value="Marcas y Tiendas">Marcas y Tiendas</option>
          <option value="Artistas y conciertos">Artistas y conciertos</option>
          <option value="Torneos">Torneos</option>
        </select>
        <select name="Categoria" id="Categoria">
          <option value="categoria">Categoria</option>
          <option value="Deportes">Deportes</option>
          <option value="Conciertos">Conciertos</option>
          <option value="Meet & Greet">Meet & Greet</option>
          <option value="E-sport">E-sport</option>
          <option value="Pop / Rock">Pop / Rock</option>
          <option value="Tecnología">Tecnología</option>
        </select>
        <div>
          <textarea name="Porque lo recomiendas" >Porque lo recomiendas</textarea>
        </div>
        <div>
          <label htmlFor="url">Link de referencia</label>
        </div>
        <div>
          <input type="text" name="" id="" />
        </div>
      </div>
      <button type='submit'>Submit</button>
    </form>
      </div>
    
    </div>
   

  )
}

export default CreatePublication