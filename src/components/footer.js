import Container from "./container"
import Image from "next/image"
import Link from "next/link"
import { faInstagram, faFacebookSquare, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
//import { fabInstagram } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer(props) {

    const social = [
        { name: "instagram", href: "https://www.instagram.com/uala_mx/", icon: faInstagram },
        { name: "facebook", href: "https://www.facebook.com/uala.mx/", icon: faFacebookSquare },
        { name: "twitter", href: "https://twitter.com/uala_mx", icon: faTwitter },
        { name: "linkedin", href: "https://www.linkedin.com/company/ual%C3%A1/", icon: faLinkedin },
        { name: "youtube", href: "https://www.youtube.com/channel/UCGVDc5uFy4ZcrCafcnTGIng", icon: faYoutube }
    ]
 
    return (
        <div className="bg-gray-wave-top">
            <Container>
                <div className="my-12">
                    
                    <div className="grid grid-cols-12">

                        <div className="col-span-4">

                            {/* Isologotipo */}
                            <div>
                                <Image alt="isologotipo" src="/assets/images/isologotipo.png" width={69} height={38}/>
                            </div> 

                            {/* Redes sociales */}
                            <div className="text-4xl text-gray-400 mt-6"> 
                                { social.map(red => <div key={red.href} className="mr-2 inline cursor-pointer"><a alt="social" aria-label={red.name} href={red.href}><FontAwesomeIcon icon={red.icon} /></a></div>) } 
                            </div>

                            <div className="mt-6">
                                <Image alt="undostres" src="/assets/images/undostres_logo.svg" width={162} height={33}/>
                            </div>

                            {/* Stores */}
                            <div className="mt-16 flex">
                                <div className="mr-4"><Image alt="applestore" src="/assets/images/applestore.png" width={116} height={36}/></div>
                                <div><Image alt="playstore" src="/assets/images/androidstore.png" width={116} height={35}/></div>
                            </div>

                        </div>
                        <div className="col-span-8 flex items-center">

                            <div className="grid grid-cols-3 gap-5 text-gray-600">
                                <div><span>Búsquedas laborales</span></div>
                                <div><span>Términos y Condiciones</span></div>
                                <div><span>Comunidad Ualá</span></div>
                                <div><span>Contrato de producto</span></div>
                                <div><span>Aviso de privacidad</span></div>
                                <div><span>El Blog de Ualá</span></div>
                                <div><span>Consulta los costos y las comisiones de nuestros productos</span></div>
                            </div>

                        </div>

                    </div>

                </div>
                <div className="my-12">
                    <div className="text-sm text-gray-500 leading-snug">
                        Belanea México S.A.P.I. de C.V. (en adelante Belanea) es responsable de la apertura, operación y administración de las cuentas denominadas comercialmente como cuentas Ualá, así como de la emisión y operación de las tarjetas asociadas a estas cuentas que se utilicen como medio de disposición, denominadas comercialmente como tarjetas Ualá. Belanea se encuentra en proceso de autorización para operar como institución de fondos de pago electrónico en cumplimiento de la disposición Octava transitoria de la Ley para Regular las Instituciones de Tecnología Financiera (en adelante la Ley), para que ésta pueda llevar a cabo operaciones y prestar los servicios relacionados con la emisión, administración, redención y transmisión de fondos de pago electrónico (actualmente no es una entidad supervisada por las autoridades financieras mexicanas). Adicionalmente se hace de su conocimiento que ni el Gobierno Federal, ni las Entidades de la Administración Pública Paraestatal podrán responsabilizarse o garantizar los recursos de los usuarios que sean utilizados en las operaciones celebradas con Belanea, ni asumirán responsabilidad alguna por las obligaciones contraídas por Belanea o por algún usuario frente a otro, respecto de las operaciones que realicen. Bancar Tecnología MX, S.A. de C.V. no ofrece los servicios de emisión, administración, redención y transmisión de fondos de pago electrónico, sino que funge como comisionista y prestador de servicios de Belanea, en apego a lo permitido por el artículo 54, primer párrafo de la Ley. Para más info, aquí.
                    </div>
                </div>
            </Container>
        </div>
    )

}