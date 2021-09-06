import Link from "next/link";

export function AboutNavbar(props){

    return (
        <div className="grid grid-cols-12 gap-2 lg:gap-12 text-xl lg:text-2xl">
            <Link href="/nosotr@s"><div className={`cursor-pointer col-span-4 flex items-center justify-center text-center py-4  border-b ${ props.page == "nosotros" ? 'text-blue-600 border-blue-600' : ' text-blue-400 border-blue-400'}`}>Nosotros</div></Link>
            <Link href="/trabajar-en-uala"><div className={`cursor-pointer col-span-4 flex items-center justify-center text-center py-4 border-b ${ props.page == "trabajar" ? 'text-blue-600 border-blue-600' : ' text-blue-400 border-blue-400'}`}>Trabajar en Ualá</div></Link>
            <Link href="/prensa"><div className={`cursor-pointer col-span-4 flex items-center justify-center text-center py-4 border-b ${ props.page == "prensa" ? 'text-blue-600 border-blue-600' : ' text-blue-400 border-blue-400'}`}>Prensa</div></Link>
        </div>
    )

}