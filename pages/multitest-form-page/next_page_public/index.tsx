import Link from 'next/link';
const next_page_public = () => {
  return (
    <div className="flex ">
      <div >
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
            src="../Frame.png"
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
          <h3></h3>

          <Link
            className="pl-[90px] relative top-10 font-medium text-[#1B4DB1]"
            href="/multitest-form-page"
          >
            Back
          </Link>
          <div className=" w-[630px] bg-[#1B4DB1] h-3 absolute top-20 right-64  rounded-lg"></div>
        </div>
        <div className=" w-full flex justify-center items-center flex-col">
          <h1 className=" relative top-28 left-12">Fotos</h1>
          <p className=" relative top-28 left-52 text-[#6E6A6C]">
            Selecciona máximo tres fotos para crear una galería
          </p>
          <div className=" flex  justify-center  gap-9  absolute top-52 right-64  w-[620px] borde">
            <form action="imag_public" className="flex gap-2">
              <input
                className=" w-44 h-52 bg-[#D9D9D9]  relative cursor-pointer"
                type="file"
                name=""
                id=""
              />
              <picture>
                <img
                  className="  h-12 w-44 absolute right-[417px]  "
                  src="../Rectangle_183.jpg"
                  alt=""
                />
                <img
                  src="../plus.png"
                  className=" absolute right-28 z-50 top-24"
                  alt=""
                />
              </picture>
              <input
                className=" w-44 h-52 bg-[#D9D9D9]  relative cursor-pointer"
                type="file"
                name=""
                id=""
              />
              <picture>
                <img
                  className="  h-12 w-44 absolute right-[225px]  "
                  src="../Rectangle_183.jpg"
                  alt=""
                />
                <img
                  src="../plus.png"
                  className=" absolute right-[300px] z-50 top-24"
                  alt=""
                />
              </picture>
              <input
                className=" w-44 h-52 bg-[#D9D9D9]  cursor-pointer"
                type="file"
                name=""
                id=""
              />
              <picture>
                <img
                  className="  h-12 w-44 absolute right-[33px]  "
                  src="../Rectangle_183.jpg"
                  alt=""
                />
                <img
                  src="../plus.png"
                  className=" absolute left-28 z-50 top-24"
                  alt=""
                />
              </picture>
              <button className="bg-[#1B4DB1] absolute top-80 w-44 h-10 left-56 rounded-lg text-white">
                Publicar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default next_page_public;
