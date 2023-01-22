import Artistas_Conciertos from './Artistas_Conciertos';
import Marcas_Tiendas from './Marcas_Tiendas';
import Serch from './Serch';
import Torneos from './Torneos';

const Resent_serch = () => {
  return (
    <div className="container-link border-down flex h-36 justify-center items-center ">
      <div className=" flex relative right-32 gap-3">
        <Marcas_Tiendas />
        <Artistas_Conciertos />
        <Torneos />
      </div>
      <div className=" relative top-24">
        <Serch />
      </div>
    </div>
  );
};

export default Resent_serch;
