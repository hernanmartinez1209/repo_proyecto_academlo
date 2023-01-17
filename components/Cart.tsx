import Likes from './Likes';

const Cart = () => {
  return (
    <article className="w-full flex justify-center ">
      <div className="w-72  color_cart">
        <picture>
          <img src="../Rectangle_3.png" alt="" />
        </picture>
        <Likes />
        <article className="relative bottom-16">
          <h1 className="h1_cart padig-left">Concierto de Lady Gaga</h1>
          <p className="padig-left">
            El concierto con la temática de Lady gaga en Las Vegas. El concierto
            con la temática de Lady gaga en Las Vegas.El concierto con la
            temática.
          </p>
          <a href="ladygaga.com" className="text-cyan-400 padig-left">
            ladygaga.com
          </a>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.89245 12.3777L1.8923 12.378C1.68621 12.7134 1.5835 13.0765 1.5835 13.4833V14.2499C1.5835 14.5763 1.69105 14.8374 1.92733 15.0737C2.16269 15.3091 2.42338 15.4166 2.75016 15.4166H14.2502C14.5768 15.4166 14.8379 15.3092 15.074 15.0737C15.3094 14.8377 15.4168 14.5765 15.4168 14.2499V13.4833C15.4168 13.0765 15.3141 12.7134 15.108 12.378L15.1079 12.3777C14.8992 12.0378 14.6301 11.7872 14.2932 11.612C13.3524 11.1421 12.4008 10.7915 11.438 10.558C10.4738 10.3248 9.49492 10.2083 8.50016 10.2083C7.5054 10.2083 6.52654 10.3248 5.56233 10.558L1.89245 12.3777ZM1.89245 12.3777C2.10108 12.0378 2.37019 11.7873 2.7071 11.6121M1.89245 12.3777L2.7071 11.6121M2.7071 11.6121C3.64777 11.1422 4.59919 10.7916 5.5619 10.5581L2.7071 11.6121ZM8.50016 7.74992C7.64649 7.74992 6.93437 7.45471 6.3232 6.84355C5.71204 6.23238 5.41683 5.52026 5.41683 4.66659C5.41683 3.81291 5.71204 3.10079 6.3232 2.48962C6.93437 1.87846 7.64649 1.58325 8.50016 1.58325C9.35384 1.58325 10.066 1.87846 10.6771 2.48962C11.2883 3.10079 11.5835 3.81291 11.5835 4.66659C11.5835 5.52026 11.2883 6.23238 10.6771 6.84355C10.066 7.45471 9.35384 7.74992 8.50016 7.74992Z"
              stroke="#1A1E2E"
              stroke-width="1.5"
            />
          </svg>
          <p className=" relative left-6 bottom-4">90’800’756 votos</p>
        </article>
      </div>
    </article>
  );
};

export default Cart;
