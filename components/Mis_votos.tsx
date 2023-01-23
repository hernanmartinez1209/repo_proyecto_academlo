import Link from 'next/link';

const Mis_votos = () => {
  return (
    <Link
      className="flex items-center justify-center a w-48 h-9  rounded-2xl border-c routes-bg"
      href="/mis-votos"
    >
      Mis Votos
    </Link>
  );
};

export default Mis_votos;
