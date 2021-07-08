import Image from 'next/image';
import Link from 'next/link';

export default function Header(props) {

    return (
        <div className="">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 py-10">
                    <div className="col-span-2 col-start-2">
                        <Link href="/">
                            <Image className="cursor-pointer" width={80} height={40} src="/assets/images/logotipo.svg"></Image>
                        </Link>
                    </div>
                    <div className="col-span-8 flex items-center">
                        <div className="flex w-full justify-end text-lg text-gray-500 mt-2">
                            <div className="ml-12">Funcionalidades</div>
                            <div className="ml-12">Ayuda y Seguridad</div>
                            <div className="ml-12">Sobre Ualá</div>
                            <div className="ml-12">Costos</div>
                            <div className="ml-12">Promociones</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}