import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import menu from "../json/navbarData"

function MenuList(props) {

    return (
        <div className="menu-list shadow-md bg-white border border-gray-100 absolute w-64 -ml-16 rounded-md py-4 z-10">
            {
                props.list.map(option => (
                    <div key={option.title} className="py-2 px-6 hover:bg-gray-50 cursor-pointer">
                        { option.href ? <Link href={option.href}><div>{option.title}</div></Link> : <div>{option.title}</div>}
                    </div>
                ))
            }
        </div>
    )
}

function MenuListMobile(props) {

    return (
        <div className="w-full border-b border-t bg-gray-50">
            {
                props.list.map(option => (
                    <div key={option.title} className="ml-8 text-base py-2 ">
                        { option.href ? <Link href={option.href}><div>{option.title}</div></Link> : <div>{option.title}</div>}
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
                props.list && <MenuList list={props?.list} />
            }
        </div>
    )

}

export default function Header(props) {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [dropDownMenu, setDropDownMenu] = useState(() => {
        let obj = {}
        let options = menu.map(e => e.title)
        options.forEach((e) => {
            obj[e] = false
        })
        return obj
    })

    const onMobileClick = (option) => {
        setDropDownMenu({ ...dropDownMenu, [option]: !dropDownMenu[option] })
    }


    return (
        <div>
            <div className="container mx-auto">
                <div className="grid grid-cols-12 py-4 lg:py-10 ">
                    {/* Logo */}
                    <div className="col-span-2 col-start-2">
                        <Link href="/">
                            <a><img className="w-16 lg:w-auto" src="/assets/images/logotipo.svg" /></a>
                        </Link>
                    </div>
                    {/* Menu desktop */}
                    <div className="col-span-8 lg:flex items-center hidden">
                        <div className="flex w-full justify-end text-lg text-gray-500 mt-2">
                            {
                                menu.map(option => <MenuOption key={option.title} {...option} />)
                            }
                        </div>
                    </div>
                    {/* Menu mobile */}
                    <div onClick={() => setMobileMenu(!mobileMenu)}
                        className="col-span-8 flex justify-end lg:hidden">
                        <div className="flex items-center text-2xl text-gray-500">
                            <img src="/assets/images/rearange.svg" alt="" />
                        </div>
                    </div>

                    <div className={`col-span-12 ${mobileMenu ? "" : "hidden"}`}>
                        {
                            menu.map((o, i) =>
                                <div className="w-full text-lg text-gray-500   " key={i}>
                                    <div onClick={() => onMobileClick(o.title)} className={`mx-2 py-4 relative ${dropDownMenu[o.title] ? "" : "border-b"} `}>

                                        {o.href ? <Link href={o.href}>
                                            <div className="ml-6">
                                                {o.title}
                                            </div></Link> : <div className="ml-6">{o.title}
                                        </div>}
                                    </div>
                                    <div className={`${dropDownMenu[o.title] ? "" : "hidden"}`}>
                                        {
                                            o.list && <MenuListMobile list={o.list} />
                                        }
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </div >
    )

}