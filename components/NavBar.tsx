import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="navBar w-full h-16 items-center flex  justify-between flex-row">
      <picture>
        <img src="../logo_pc.png" alt="" />
      </picture>

      <ul className=" flex flex-row gap-5 relative right-3">
        <li className="">
          <Link
            className="flex  justify-center items-center gap-2"
            href="/login"
          >
            <picture className="">
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
          </Link>
        </li>
        <li>
          <Link
            className="flex  justify-center items-center gap-2"
            href="/misvotos"
          >
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Mis votos
          </Link>
        </li>
        <li>
          <Link
            className="flex  justify-center items-center gap-2"
            href="/createpublic"
          >
            <picture>
              <img src="../plus.png" alt="" />
            </picture>
            Crear publicación
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
