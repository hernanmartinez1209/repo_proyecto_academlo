import Artistas_Conciertos from '../../components/Artistas_Conciertos';
import Cart from '../../components/Cart';
import Footer from '../../components/Footer';
import Marcas_Tiendas from '../../components/Marcas_Tiendas';
import NavBar from '../../components/NavBar';
import Serch from '../../components/Serch';
import Torneos from '../../components/Torneos';

const PageDetalleDeEvento = () => {
  return (
    <article>
      <NavBar />
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
      <div className="container-descripcion-event pt-52  pb-52  flex  w-full justify-center">
        <div className=" w-96">
          <p className=" font-semibold">Artista / Pop / Rock</p>
          <h1 className="text-6xl font-bold">Concierto de Lady Gaga</h1>

          <p className=" pt-3 pb-4">
            El concierto con la temática de Lady gaga en Las Vegas. El concierto
            con la temática de Lady gaga en Las Vegas.El concierto con la
            temática.
          </p>
          <a href="ladygaga.com">ladygaga.com</a>
          <svg
            className=" relative top-5"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.89099 12.3778L1.89083 12.378C1.68474 12.7135 1.58203 13.0766 1.58203 13.4833V14.25C1.58203 14.5764 1.68959 14.8375 1.92586 15.0738C2.16122 15.3092 2.42192 15.4167 2.7487 15.4167H14.2487C14.5753 15.4167 14.8364 15.3093 15.0725 15.0738C15.308 14.8378 15.4154 14.5766 15.4154 14.25V13.4833C15.4154 13.0766 15.3127 12.7135 15.1066 12.378L15.1064 12.3778C14.8978 12.0379 14.6287 11.7873 14.2917 11.6121C13.3509 11.1422 12.3994 10.7916 11.4365 10.5581C10.4723 10.3249 9.49346 10.2083 8.4987 10.2083C7.50394 10.2083 6.52508 10.3249 5.56087 10.5581L1.89099 12.3778ZM1.89099 12.3778C2.09961 12.0379 2.36873 11.7874 2.70564 11.6122M1.89099 12.3778L2.70564 11.6122M2.70564 11.6122C3.64631 11.1422 4.59773 10.7917 5.56044 10.5582L2.70564 11.6122ZM8.4987 7.75001C7.64503 7.75001 6.9329 7.4548 6.32174 6.84364C5.71057 6.23247 5.41537 5.52035 5.41537 4.66668C5.41537 3.813 5.71057 3.10088 6.32174 2.48972C6.9329 1.87855 7.64503 1.58334 8.4987 1.58334C9.35237 1.58334 10.0645 1.87855 10.6757 2.48972C11.2868 3.10088 11.582 3.813 11.582 4.66668C11.582 5.52035 11.2868 6.23247 10.6757 6.84364C10.0645 7.4548 9.35237 7.75001 8.4987 7.75001Z"
              stroke="#1A1E2E"
              strokeWidth="1.5"
            />
          </svg>

          <p className=" relative left-7">90’800’756 votos</p>
          <button className="  mt-6 colorBluegb h-9 w-80 btn-netx">
            Votar
          </button>
        </div>
        <picture className=" ">
          <img src="../Rectangle_362.jpg" alt="" />
        </picture>
      </div>
      <h1 className=" relative left-64 top-24 font-bold text-gay w-full">
        ¡Hagámoslo más personal!
      </h1>
      <p className=" relative  w-full left-64 top-24 text-gay">
        Selecciona tus interes para brindarte sugerencia de acuerdo a tus gustos
      </p>
      <div className="container-HMP w-full flex h-52 border-down">
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
      <div className="container-resientes pt-11">
        <h1 className="relative left-32 top-24 font-bold text-gay w-full">
          Recientes
        </h1>
        <p className="relative left-32 top-24  text-gay w-full pb-16">
          Las personas últimanete están hablando de esto
        </p>
        <Cart />
      </div>
      <Footer />
    </article>
  );
};

export default PageDetalleDeEvento;
