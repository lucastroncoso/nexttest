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
                    <div className="grid lg:grid-cols-2 lg:my-24 mt-8">
                        <div className="flex content-center flex-wrap order-2 lg:order-none">
                            <div className="w-full">
                                <h1 className="title-1 lg:w-2/3">
                                    <div className="lg:text-5xl lg:leading-normal">Retira efectivo en cualquier ATM</div>
                                </h1>
                            </div>
                            <div className="w-full mt-4">
                                <div className="text-gray-500 text-xl lg:w-2/3 leading-8">
                                    Si necesitas efectivo, puedes retirar desde cualquier cajero ATM.
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center order-1 lg:order-none" >
                            <div>
                                <Image src="/assets/images/extractions.gif" width={600} height={370
                                } />
                            </div>
                        </div>
                    </div>
                </Container>

                <Container>
                    <div className="my-24 grid lg:grid-cols-2">
                        <div className="flex items-center lg:mr-12">
                            <div>
                                <div className="mb-4">
                                    <Image src="/assets/images/icono-clave.svg" width={68} height={68} />
                                </div>
                                <div className="title-3 mb-4">Guarda tu PIN</div>
                                <div className="text">
                                    <div>Una vez que completaste el registro en la App y tus datos están validados, te enviaremos tu tarjeta Ualá. Cuando llegue tu tarjeta podrás ver el PIN que se te asignó, te sirve para hacer retiros en ATM´s y compras físicas. Si quieres cambiar tu PIN tendrás que seguir <a href="https://www.uala.com.mx/reseteo-de-pin" className="link">estos 3 simples pasos</a>.</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center mt-12" >
                            <div>
                                <Image src="/assets/images/extractHome.svg" width={486} height={373} />
                            </div>
                        </div>

                    </div>
                </Container>

                <Container>
                    <div className="grid lg:grid-cols-2 lg:my-24">
                        <div className="flex lg:mr-12 mb-12">
                            <div>
                                <div className="mb-4">
                                    <Image src="/assets/images/extractIcon2.svg" width={68} height={68} />
                                </div>
                                <div className="title-3 mb-4">¿Dónde puedes retirar efectivo?</div>
                                <div className="text">
                                    <p>Puedes retirar efectivo en cualquier cajero ATM de México, recuerda que Ualá no cobra comisiones y aunque los otros bancos sí, nosotros te reembolsaremos hasta $25.00 por comisión en tus primeros dos retiros del mes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex lg:ml-12 mb-12">
                            <div>
                                <div className="mb-4">
                                    <Image src="/assets/images/extractIcon1.svg" width={68} height={68} />
                                </div>
                                <div className="title-3 mb-4">Montos de retiro</div>
                                <div className="text">

                                    <p>Puedes retirar hasta $9,000 cada 24 horas. Ten en cuenta que solo puedes retirar el saldo disponible que tengas en tu cuenta Ualá, es decir que si tu saldo es de $1,500, solo puedes retirar hasta $1,500 menos la comisión que el banco de dicho cajero te cobre.</p>

                                    <p>Pero no te preocupes, recuerda que Ualá no cobra comisión en ninguna operación y te bonifica hasta $25 pesos la comisión del cajero dos veces al mes. A partir del tercer retiro por mes, el banco donde realizaste tu operación te cobrará una comisión de entre $15 y $45 pesos.</p>

                                    <p>Puedes revisar las comisiones de los bancos <a href="https://www.condusef.gob.mx/?p=contenido&idc=780&idcat=1" className="link">aquí</a>.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

            </Layout>
        </>
    )

}