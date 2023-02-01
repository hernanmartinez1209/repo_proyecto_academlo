import Artistas_Conciertos from './Artistas_Conciertos';
import Marcas_Tiendas from './Marcas_Tiendas';
import Serch from './Serch';
import Torneos from './Torneos';

const Resent_serch = () => {
  return (
    <div className="container-link  flex h-36 justify-center items-center ">
      <div className=" flex relative lg:right-32 gap-3 xl:right-48">
        <Marcas_Tiendas />
        <Artistas_Conciertos />
        <Torneos />
      </div>
      <div className=" flex flex-row-reverse relative left-28">
        <Serch />
      </div>
    </div>
  );
};

export default Resent_serch;
