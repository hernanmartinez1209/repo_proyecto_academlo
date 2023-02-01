import Btn_next_page from './Btn_next_page';
import Cart from './Cart';

const Resientes = () => {
  return (
    <div className="h-[700px] relative bottom-28">
      <div className=" w-full flex flex-row-reverse relative top-96">
        <Btn_next_page />
      </div>
      <h1 className="font-bold text-xl relative left-24  top-16 pt-10">
        Resientes
      </h1>
      <p className="relative left-24 top-16  text-neutral-500">
        Las personas últimanete están hablando de esto
      </p>
      <Cart />
    </div>
  );
};

export default Resientes;
