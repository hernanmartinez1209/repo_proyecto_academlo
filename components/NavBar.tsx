const NavBar = () => {
  return (
    <nav className="navBar w-full h-16 items-center flex  justify-between">
      <div>
        <picture>
          <img src="../logo_pc.png" alt="" />
        </picture>
        {/* <h1 className="text-white items-end">PC</h1> */}
      </div>
      <div className=" flex flex-row justify-center items-center gap-2 ">
        <a href=""></a>
        <a
          href=""
          className=" text-emerald-300 w-30 colorBlue flex flex-row justify-center items-center gap-2"
        >
          <picture>
            <img src="../plus.png" alt="" />
          </picture>
          Crear publicación
        </a>
        <a href="" className="text-white flex flex-row w-30 gap-1">
          <svg
            className="text-red-700 flex "
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.675 1C3.09313 1 1 3.00868 1 5.4864C1 9.97279 6.525 14.0513 9.5 15C12.475 14.0513 18 9.97279 18 5.4864C18 3.00868 15.9069 1 13.325 1C11.744 1 10.3458 1.75331 9.5 2.90631C9.06891 2.31705 8.49622 1.83614 7.8304 1.50431C7.16458 1.17248 6.42525 0.999492 5.675 1Z"
              stroke="#FF64BC"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Mis votos
        </a>
        <a
          href=""
          className="text-white flex flex-row justify-center items-center gap-1"
        >
          <picture>
            <img
              className=" absolute"
              src="../material-symbols_person-rounded.png"
              alt=""
            />
            <img
              className=" relative right-1 bottom-1"
              src="../Ellipse 3.png"
              alt=""
            />
          </picture>
          iniciar secion
        </a>
        <a href="">
          <svg
            className=" w-8"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 1L5 6L0 1L0.8875 0.1125L5 4.225L9.1125 0.1125L10 1Z"
              fill="#A7A6A7"
            />
          </svg>
        </a>
      </div>
      {/* <div className="p-6 max-w-sm mx-auto bg-black rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        {/* <picture>
          <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
      </picture> */}
      {/* </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
    </div> */}
    </nav>
  );
};

export default NavBar;
