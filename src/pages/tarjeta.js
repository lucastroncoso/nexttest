import Layout from "../components/layout";
import Container from "../components/container";
import Head from 'next/head';
import Image from "next/image";


export default function Tarjeta(props) {

    return (
        <>
            <Head>
                <title>Ualá</title>
            </Head>
            <Layout>
                <Container>
                    <div className="grid lg:grid-cols-2 mt-24">
                        <div className="flex content-center flex-wrap">
                            <div className="w-full">
                                <h1 className="title-1 lg:w-2/3">
                                    <div className="">Una tarjeta para tod@s y para todo</div>
                                </h1>
                            </div>
                            <div className="w-full mt-4">
                                <div className="text-gray-500 text-xl w-2/3 leading-8">
                                    Compra en cualquier comercio o página web del mundo que acepte Mastercard.
                                </div>
                                <div className="mt-4 text-blue-600 text-xl">
                                    <div className="mb-1">Recuerda:</div>
                                    <div>Si aceptan Mastercard, aceptan Ualá.</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center" >
                            <div>
                                <Image src="/assets/images/card.gif" width={500} height={400}/>
                            </div>
                        </div>
                    </div>
                </Container>
                {/* La tarjeta */}
                <Container>
                    <div className="grid lg:grid-cols-2 my-24">
                        <div className="flex justify-center" >
                            <div>
                                <Image src="/assets/images/card2.gif" width={500} height={500}/>
                            </div>
                        </div>
                        <div className="flex items-center lg:ml-12">
                            <div>
                                <div className="title-3 mb-4">La tarjeta</div>
                                <div className="text">Una tarjeta de débito Mastercard internacional diseñada para mejorar la experiencia de compra. Con chip, para que tu información esté más protegida que nunca y tecnología contactless, para que tus compras sean mucho más seguras.</div>
                            </div>
                        </div>
                    </div>
                </Container>
                {/* ¿Cómo depositar dinero a tu Ualá? */}
                <Container>
                    <div className="grid lg:grid-cols-2 my-24">
                        <div className="flex items-center lg:mr-12">
                            <div>
                                <div className="mb-4">
                                    <Image src="/assets/images/icono-efectivo.png" width={68} height={68}/>
                                </div>
                                <div className="title-3 mb-4">¿Cómo depositar dinero a tu Ualá?</div>
                                <div className="text">
                                    <div className="mb-2">Hacer depósitos a tu Ualá es simple, fácil y gratis.</div>
                                    <div>Puedes hacerlo por transferencia desde una cuenta bancaria o virtual, o en efectivo en alguno de los más de 14,000 establecimientos afiliados, totalmente gratis. Recuerda que estos establecimientos podría cobrarte una comisión de $10.00 aproximadamente por hacer el depósito, pero ¡no te preocupes! Nosotr@s te la reembolsaremos íntegramente todos los viernes.
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mt-12 lg:mt-0" >
                            <div>
                                <div><Image src="/assets/images/paynet.png" width={237} height={80}/></div>
                                <div className="link mt-2">Ver tiendas afiliadas</div>
                            </div>
                        </div>
                    </div>
                </Container>
                {/* Video como depositar */}
                <Container>
                    <div className="flex justify-center my-24">
                        <div>
                            <Image src="/assets/images/videoCargar.png" width={657} height={369}/>
                        </div>
                    </div>
                </Container>
                {/* Lleva tu Ualá de viaje */}
                <Container>
                    <div className="grid lg:grid-cols-2 my-24">
                        <div className="flex justify-center" >
                            <div>
                                <Image src="/assets/images/card4.gif" width={500} height={280}/>
                            </div>
                        </div>
                        <div className="flex items-center lg:ml-12">
                            <div>
                                <div className="title-3 mb-4">Lleva tu Ualá de viaje</div>
                                <div className="text">Puedes utilizar tu Tarjeta Ualá Mastercard Internacional para realizar compras en el extranjero sin ningún costo. Disfruta de la seguridad de recibir notificación de los pagos que realices y poder congelar tu cuenta en caso de que extravíes tu tarjeta durante tu viaje.</div>
                            </div>
                        </div>
                    </div>
                </Container>
                {/* ¿Perdiste o te robaron tu Ualá? */}
                <Container>
                    <div className="grid lg:grid-cols-2 my-24" id="reporte">
                        <div className="flex items-center lg:mr-12">
                            <div>
                                <div className="title-3 mb-12">¿Perdiste o te robaron tu Ualá?</div>
                                <div className="mb-12">
                                    <div className="grid grid-cols-12">
                                        <div className="col-span-3  flex justify-center">
                                            <div>
                                                <Image src="/assets/images/card3.gif" width={120} height={132}/>
                                            </div>
                                        </div>
                                        <div className="col-span-9 ml-4">
                                            <div className="text-gray-700 text-2xl font-semibold">1. Congela tu tarjeta</div>
                                            <p className="text-gray-500 text-lg">Si no encuentras tu Ualá, puedes bloquearla inmediatamente desde la app para inhabilitar las operaciones con la tarjeta.</p>
                                            <p className="text-gray-500 text-lg">Si la encuentras, la puedes desbloquear y seguirla usando como siempre.</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="grid grid-cols-12">
                                        <div className="col-span-3 flex justify-center">
                                            <div>
                                                <Image src="/assets/images/cardIcon2.svg" width={80} height={80}/>
                                            </div>
                                        </div>
                                        <div className="col-span-9 ml-4">
                                            <div className="text-gray-700 text-2xl font-semibold">2. Haz el reporte</div>
                                            <p className="text-gray-500 text-lg">Si perdiste o te robaron tu tarjeta Ualá te recomendamos que lo primero que hagas sea inhabilitar tu tarjeta. Para ello ve a la sección “Tarjeta” y desliza el botón “Congelar tarjeta” hacia la derecha, posteriormente aparecerá un botón que dice “Denunciar pérdida o robo”. Llama al teléfono de denuncia al (55) 88-96-82-52 o desde tu celular marcando UALA (*8252) y te enviaremos una nueva dentro de 2 a 5 días hábiles.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                
            </Layout>
        </>
    )

}