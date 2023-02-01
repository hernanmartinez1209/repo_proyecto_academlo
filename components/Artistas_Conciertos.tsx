import Link from 'next/link';

const Artistas_Conciertos = () => {
  return (
    <Link
      className="flex items-center justify-center  h-9  w-40 rounded-2xl border-c  bg-white alllados text-[#A7A6A7]"
      href="/artistas-y-conciertos"
    >
      Artistas y Conciertos
    </Link>
  );
};

export default Artistas_Conciertos;
