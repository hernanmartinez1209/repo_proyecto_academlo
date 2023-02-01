import Link from 'next/link';
import { useForm } from 'react-hook-form';
interface FormData {
  TituloDelaPublicacion: string;
  Tipo: string;
  Categoria: string;
  PorqueLorecomiendas: string;
  LinkDeReferencia: string;
}

const CreatePublication = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    // do something with the form data
    console.log(data);
  };
  return (
    <div className="flex bg-white">
      <div>
        <picture>
          <img
            className="h-[693px] w-[255px]"
            src="../img-form-pages.png"
            alt=""
          />
        </picture>
        <picture>
          <img
            className="absolute top-28 w-40 pl-4 "
            src="../frame.png"
            alt=""
          />
        </picture>
      </div>
      <div className=" absolute top-80 left-5 text-[#F3F243]">
        <h2>¡Bienvenido</h2>
        <h2>Creador!</h2>
        <div className="w-52 pt-8">
          <p className="w-full text-white text-[15px]">
            A continuación puedes completar la info de la marca, artista o
            torneo que quieres cerca.
          </p>
        </div>
        <div className=" absolute top-80">
          <p className="text-[#FFFFFF]">Ayuda</p>
        </div>
      </div>
      <div>
        <div>
          <h3 className="pl-[90px] pt-[36px] text-[#1B4DB1]">Back</h3>
          <div className=" w-[320px] z-10 bg-[#1B4DB1] h-3 absolute top-20 ml-[300px] rounded-lg"></div>
          <div className="w-[315px] h-3 bg-[#D9D9D9] absolute top-[80px] ml-[600px] rounded-lg"></div>
          <div>
            <h2 className="pl-[310px] pt-[87px] text-[#1A1E2E]">Publicacion</h2>
            <h5 className="pl-[310px] pt-[9px] mb-6 text-[12px] text-[#6E6A6C]">
              Informacion basica
            </h5>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <label
                className="text-[14px] ml-[330px] absolute top-[220px] pl-2  pr-2 bg-white text-[#7D7D7D]"
                htmlFor="TituloDelaPublicacion-input"
              >
                TituloDelaPublicacion
              </label>
            </div>
            <div>
              <input
                className="ml-[310px] w-[620px] pl-1 mt-2  rounded-[10px] border-solid border-[1px] border-[#7D7D7D] h-[49px]"
                type="text"
                id="TituloDelaPublicacion-input"
                {...register('TituloDelaPublicacion')}
              />
            </div>
          </div>
          <div>
            <select
              className="text-[14px] text-[#7D7D7D] ml-[310px] mt-4 rounded-[11px] border-solid border-[1px] border-[#7D7D7D] h-[51px] w-[300px]"
              name="Tipo"
              id="Tipo"
            >
              <option value="Tipo">Tipo</option>
              <option value="Marcas y Tiendas">Marcas y Tiendas</option>
              <option value="Artistas y conciertos">
                Artistas y conciertos
              </option>
              <option value="Torneos">Torneos</option>
            </select>
            <select
              className=" text-[14px] text-[#7D7D7D] mt-4 rounded-[11px] border-solid border-[1px] border-[#7D7D7D] h-[51px] w-[300px] ml-[20px]"
              id="Categoria"
            >
              <option value="categoria">Categoria</option>
              <option value="Deportes">Deportes</option>
              <option value="Conciertos">Conciertos</option>
              <option value="Meet & Greet">Meet & Greet</option>
              <option value="E-sport">E-sport</option>
              <option value="Pop / Rock">Pop / Rock</option>
              <option value="Tecnología">Tecnología</option>
            </select>
            <div>
              <h2 className="text-[14px] pr-2 pl-1 ml-[330px] absolute top-[360px] bg-white text-[#7D7D7D]">
                ¿ Porque lo recomiendas?
              </h2>
              <textarea className="mt-[26px] ml-[310px] rounded-[11px] border-solid border-[1px] border-[#7D7D7D] w-[620px] h-[115px] pl-1">
                {' '}
              </textarea>
            </div>
            <div>
              <label
                className="pl-1 pr-2 bg-white text-[14px] absolute top-[504px] ml-[330px] text-[#7D7D7D]"
                htmlFor="url"
              >
                Link de referencia
              </label>
            </div>
            <div>
              <input
                className="mt-[20px] ml-[310px] w-[620px] h-[51px] rounded-[11px] border-solid border-[1px] border-[#7D7D7D] "
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
          <Link href="/multitest-form-page/next_page_public">
            <button
              className="ml-[600px] w-[124px] rounded-[31px] h-[47px] mt-[40px] text-white bg-[#1B4DB1]"
              type="submit"
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CreatePublication;
