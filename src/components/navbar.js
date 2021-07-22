import Link from "next/link";

export function AboutNavbar(props){

    return (
        <div className="grid grid-cols-12 gap-12">
            <Link href="/nosotr@s"><div className={`cursor-pointer col-span-4 text-center py-4 text-2xl border-b ${ props.page == "nosotros" ? 'text-blue-600 border-blue-600' : ' text-blue-400 border-blue-400'}`}>Nosotros</div></Link>
            <Link href="/trabajar-en-uala"><div className={`cursor-pointer col-span-4 text-center py-4 text-2xl border-b ${ props.page == "trabajar" ? 'text-blue-600 border-blue-600' : ' text-blue-400 border-blue-400'}`}>Trabajar en Ualá</div></Link>
            <Link href="/prensa"><div className={`cursor-pointer col-span-4 text-center py-4 text-2xl border-b ${ props.page == "prensa" ? 'text-blue-600 border-blue-600' : ' text-blue-400 border-blue-400'}`}>Prensa</div></Link>
        </div>
    )

}