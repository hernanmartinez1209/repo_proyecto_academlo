import Cart from './Cart';

const Sugerencias_para_ti = () => {
  return (
    <div>
      <h1 className=" font-bold text-xl relative left-24 pt-10">
        Sugerencias_para_ti
      </h1>
      <p className="relative left-24 text-neutral-500">
        Publicaciones que podrías colaborar
      </p>
      {/* <div className=" w-full flex flex-row-reverse relative top-96">
        <Btn_next_page />
      </div> */}
      <Cart />
    </div>
  );
};

export default Sugerencias_para_ti;
