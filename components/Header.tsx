export const Header = () => {
  return (
    <header>
      <picture>
        <img
          src="../Frame.png"
          alt=""
          className="absolute   left-96  top-28 "
        />
        <img src="../Rectangle 21.jpg" alt="" />
      </picture>
      <form action="serch">
        <input
          className="input_serch  w-80 h-9 rounded-2xl "
          type="text"
          placeholder="¿Qué quieres ver en tu ciudad?"
        />
      </form>
      <div className="flex gap-6 items-cen justify-center relative bottom-20">
        <a
          className=" flex items-center justify-center a w-48 h-9  rounded-2xl bg-white "
          href="Marcas y Tiendas"
        >
          Marcas y Tiendas
        </a>
        <a
          className=" flex items-center justify-center w-48 h-9 text-center rounded-2xl bg-white "
          href="Artistas y Concientos"
        >
          Artistas y Conciento
        </a>
        <a
          className=" flex items-center justify-center w-48 h-9 text-center rounded-2xl bg-white "
          href="Torneos"
        >
          Torneos
        </a>
      </div>
    </header>
  );
};
