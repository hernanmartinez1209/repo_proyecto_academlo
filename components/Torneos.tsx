import Link from 'next/link';

const Torneos = () => {
  return (
    <Link
      className="flex items-center justify-center a w-48 h-9  rounded-2xl border-c routes-bg"
      href="/torneos-y-eventos"
    >
      Torneos
    </Link>
  );
};

export default Torneos;
