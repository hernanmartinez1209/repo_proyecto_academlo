const Mas_personal = () => {
  return (
    <div>
      <h1 className=" relative left-64 top-24 font-bold text-gay w-full">
        ¡Hagámoslo más personal!
      </h1>
      <p className=" relative  w-full left-64 top-24 text-gay">
        Selecciona tus interes para brindarte sugerencia de acuerdo a tus gustos
      </p>
      <div className="container-HMP w-full flex h-52  bg-gray">
        <ul className="flex justify-center items-center w-full relative top-7 gap-5 ">
          <li className="rounded-2xl border-c h-9 w-36 text-center pt-1">
            Restaurantes
          </li>
          <li className="rounded-2xl border-c h-9 w-36 text-center pt-1 ">
            Tiendas de ropa
          </li>
          <li className="rounded-2xl border-c h-9 w-36 text-center pt-1">
            Rock
          </li>
          <li className="rounded-2xl border-c h-9 w-36 text-center pt-1">
            Restaurantes
          </li>
          <li className="rounded-2xl border-c h-9 w-36 text-center pt-1">
            Restaurantes
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Mas_personal;
