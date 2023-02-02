import Btn_next_page from '../components/Btn_next_page';
import Cart from '../components/Cart';

const Sugerencias = () => {
  return (
    <div>
      <div className=" w-full flex flex-row-reverse relative top-[450px]">
        <Btn_next_page />
      </div>
      <h1 className="font-bold text-xl relative left-24 top-16 pt-10">
        Sugerencias para ti
      </h1>
      <p className="relative top-16 left-24 text-neutral-500">
        Publicaciones que podrías colaborar
      </p>
      <Cart />
    </div>
  );
};

export default Sugerencias;
