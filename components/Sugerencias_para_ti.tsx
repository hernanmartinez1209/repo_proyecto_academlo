import Cart from './Cart';

const Sugerencias_para_ti = () => {
  return (
    <div className="h-[100px]">
      <h1 className=" font-bold text-xl relative left-24 pt-10">
        Sugerencias para ti
      </h1>
      <p className="relative left-24 text-neutral-500">
        Publicaciones que podrías colaborar
      </p>

      <Cart />
    </div>
  );
};

export default Sugerencias_para_ti;
