import Image from 'next/image';
import Link from 'next/link';

function MenuList(props) {

    return (
        <div className="menu-list shadow-md bg-white border border-gray-100 absolute w-64 -ml-16 rounded-md py-4 z-10">
            {
                props.list.map(option=> (
                    <div className="py-2 px-6 hover:bg-gray-50 cursor-pointer">
                        { option.href ? <Link href={option.href}><div>{option.title}</div></Link> : <div>{option.title}</div> }
                    </div>
                ))
            }
        </div>
    )

}

function MenuOption(props) {

    return (
        <div className="ml-12 relative menu-option">
            <div className="cursor-pointer">
                {
                    props.href ? <Link href={props.href}><div>{props.title}</div></Link> : <div>{props.title}</div>
                }
            </div>
            {
                props.list && <MenuList list={props?.list}/>
            }
        </div>
    )

}

export default function Header(props) {

    const menu = [
        {
            title: "Funcionalidades",
            list: [
                { title: "Tarjeta", href: "/tarjeta" },
                { title: "Transferencias", href: "/transferencias" },
                { title: "Retiros", href: "/extracciones" }
            ]
        },
        { 
            title: "Ayuda y Seguridad",
            list: [
                { title: "Preguntas frecuentes", href: "/faqs" },
                { title: "Métodos de contacto", href: "/contacto" },
                { title: "Comunidad Ualá", href: "" },
                { title: "Consejos de seguridad", href: "/seguridad" },
                { title: "Reporte por robo o pérdida", href: "/tarjeta#reporte" },
            ]
        },
        { 
            title: "Sobre Ualá",
            list: [
                { title: "Nosotr@s", href: "/nosotr@s" },
                { title: "Búsquedas laborales", href: "/trabajar-en-uala" },
                { title: "Prensa", href: "/prensa" },
                { title: "El blog de Ualá", href: "http://blog.uala.com.mx/" }
            ]
        },
        { title: "Costos", href: "/costos" },
        { title: "Promociones", href: "/promociones" },
    ]

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
                            {
                                menu.map(option => <MenuOption {...option} />)
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}