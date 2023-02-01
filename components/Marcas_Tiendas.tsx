import Link from 'next/link';
const Marcas_Tiendas = () => {
  return (
    <Link
      className="flex items-center justify-center a h-9  w-36  rounded-2xl border-c  bg-white text-[#A7A6A7]"
      href="/marcas-y-tiendas"
    >
      Marcas y Tiendas
    </Link>
  );
};

export default Marcas_Tiendas;
