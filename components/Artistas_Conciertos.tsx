import Link from 'next/link';

const Artistas_Conciertos = () => {
  return (
    <Link
      className="flex items-center justify-center a w-48 h-9  rounded-2xl border-c routes-bg"
      href="/artistas-y-conciertos"
    >
      Artistas y Conciertos
    </Link>
  );
};

export default Artistas_Conciertos;
