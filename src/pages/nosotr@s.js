import Layout from "../components/layout";
import Container from "../components/container";
import Image from "next/image";
import { AboutNavbar } from "./../components/navbar"

export default function About(props) {

    const pillars = [
        { image: "icono-motivacion.svg", title: "Motivación por misión", description: "Nos motiva nuestro fin social de inclusión financiera." },
        { image: "icono-innovacion.svg", title: "Innovación", description: "Nos comprometemos a usar la mejor tecnología para crear el mejor producto." },
        { image: "icono-compromiso.png", title: "Compromiso", description: "Con la excelencia de nuestro trabajo, obsesionados con las necesidades de clientes." },
        { image: "icono-confianza.svg", title: "Confianza", description: "En el equipo que somos, para atraer y retener al mejor talento." },
        { image: "icono-transparencia.svg", title: "Transparencia", description: "Con integridad hacia adentro y, más allá, con clientes, inversores y la sociedad." }
    ]

    return (
        <Layout>
            <div className="bg-about h-96 flex items-center justify-center">
                <Container>
                    <div>
                        <div className="text-white font-semibold text-5xl">Sobre Ualá</div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="my-24">
                    <AboutNavbar page="nosotros"/>
                    <div className="my-16">
                        {/* Quienes somos */}
                        <div className="grid grid-cols-12 mb-12">
                            <div className="col-span-4">
                                <div className="text-4xl font-medium text-gray-800">Quiénes somos</div>
                            </div>
                            <div className="col-span-8">
                                <div className="text-gray-500 text-xl leading-8">
                                    Somos una empresa dedicada a ayudar a mejorar la vida financiera de las personas a través de una app y una tarjeta. Fundada por el emprendedor argentino Pierpaolo Barbieri y lanzada, en octubre de 2017, con el objetivo de contribuir a la inclusión financiera en América Latina, ofreciendo a nuestros usuarios una experiencia innovadora, integrada, sin sucursales y de bajo costo.
                                </div>
                            </div>
                        </div>
                        {/* Asi empezo todo */}
                        <div className="grid grid-cols-12 mb-12">
                            <div className="col-span-4">
                                <div className="text-4xl font-medium text-gray-800">Así empezó todo</div>
                            </div>
                            <div className="col-span-8">
                                <div className="text-gray-500 text-xl leading-8">
                                    En 2015 empezamos a pensar en cómo revolucionar el sistema financiero. Conocé nuestra historia.
                                </div>
                                <div className="mt-8">
                                    <Image src="/assets/images/videoHistoria.svg" width={716} height={402} />
                                </div>
                            </div>
                        </div>
                        {/* Un mensaje de nuestro fundador */}
                        <div className="text-blue-600 text-4xl font-medium">Por qué lo hacemos</div>
                        <div className="text-gray-600 mt-6 text-lg">Un mensaje de nuestro fundador:</div>
                        <ul className="list-dot grid grid-cols-2 mt-8">
                            <li><div className="w-11/12 mb-4">Queremos que manejes tu dinero desde una app fácil, gratis y segura.</div></li>
                            <li><div className="w-11/12 mb-4">Queremos que compres con tu tarjeta lo que quieras, donde quieras. Si aceptan Mastercard, aceptan Ualá.</div></li>
                            <li><div className="w-11/12 mb-4">Queremos que puedas transferir dinero desde tu celular, rápido y simple.</div></li>
                            <li><div className="w-11/12 mb-4">Queremos que puedas pagar tus facturas y hacer recargas de tiempo aire cuando lo necesites, estés en donde estés.</div></li>
                            <li><div className="w-11/12 mb-4">Queremos darte el mejor soporte, por redes sociales, comunidad, mail o chat.</div></li>
                            <li><div className="w-11/12 mb-4">Queremos cambiar paradigmas, sin costos escondidos, sucursales o filas eternas.</div></li>
                            <li><div className="w-11/12 mb-4">Queremos que cada día más mexican@s tengan el control de sus finanzas.</div></li>
                            <li><div className="w-11/12 mb-4">Queremos que confíes cada vez más en nosotr@s.</div></li>
                            <li><div className="w-11/12 mb-4">Queremos que nos acompañes para construir el futuro junt@s.</div></li>
                            <li><div className="w-11/12 mb-4">Y queremos estar siempre que nos necesites, respondiendo rápido y claro. Empezando por mí.</div></li>
                            <div></div>
                            <div className="mt-4 text-gray-600">
                                <div>Pierpaolo Barbieri</div>
                                <div>Fundador y Ceo de Ualá</div>
                            </div>
                        </ul>
                        {/* En qué creemos */}
                        <div className="my-16">
                            <div className="text-2xl text-gray-700 font-medium">En qué creemos</div>
                            <div className="text-gray-600 mt-4 mb-8 text-lg">
                                <p>Tenemos 5 pilares que nos guían en cada una de las decisiones que tomamos:</p>
                            </div>
                            <div className="grid grid-cols-3 gap-5">
                                {

                                    pillars.map(pillar => (
                                        <div className="shadow-md rounded-md p-6 border border-gray-100">
                                            <div><Image src={`/assets/images/${ pillar.image }`} width={50} height={50}/></div>
                                            <div className="text-gray-700 font-medium mt-3 mb-2">{ pillar.title }</div>
                                            <div className="text-gray-500">{ pillar.description }</div>
                                        </div>
                                    ))

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    )

}