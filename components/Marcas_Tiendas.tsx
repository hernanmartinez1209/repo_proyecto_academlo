import Link from 'next/link';
const Marcas_Tiendas = () => {
  return (
    <Link
      className="flex items-center justify-center a w-48 h-9  rounded-2xl border-c routes-bg"
      href="/marcas-y-tiendas"
    >
      Marcas y Tiendas
    </Link>
  );
};

export default Marcas_Tiendas;
