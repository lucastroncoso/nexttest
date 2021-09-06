import Container from "./../components/container";
import Layout from "./../components/layout";
import Image from "next/image";

export default function Contacto(props) {

    return (
        <Layout>
            <Container>
                <div className="grid lg:grid-cols-2 lg:my-24 my-8">
                    <div className="flex content-center flex-wrap order-2 lg:order-none">
                        <div className="w-full">
                            <h1 className="title-1 lg:w-2/3">
                                <div className="">¿Necesitas ponerte en contacto con nosotros?</div>
                            </h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center order-1 lg:order-none" >
                        <div>
                            <Image src="/assets/images/contact.gif" width={550} height={350} />
                        </div>
                    </div>
                </div>
            </Container>
            <div className="bg-blue-wave mb-16">
                <Container>
                    <div className="grid lg:grid-cols-2 mt-24 lg:my-24">
                        <div className="flex lg:mr-12">
                            <div>
                                <div className="mb-4">
                                    <Image src="/assets/images/contactIcon1.svg" width={68} height={68} />
                                </div>
                                <div className="title-3 mb-4">Chat de la app</div>
                                <div className="text">
                                    <div>
                                        <p>Chatea con nosotros desde la app de Ualá de lunes a viernes de 8 a 23 horas y los sábados de 8 a 16 horas.</p>
                                        <p>Abre el chat, escribe tu consulta y permanece en línea para que podamos responderte.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex lg:ml-12">
                            <div>
                                <div className="mb-4">
                                    <Image src="/assets/images/contactIcon2.svg" width={68} height={68} />
                                </div>
                                <div className="title-3 mb-4">Mail</div>
                                <div className="text">
                                    <p>Puedes escribirnos por mail a <a className="link" href="mailto:hola@uala.com.mx">hola@uala.com.mx</a> cualquier día de la semana, a cualquier hora.</p>
                                    <p>Acuérdate de incluir tu CURP y el detalle de tu consulta.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 lg:my-24">
                        <div className="flex mr-12">
                            <div>
                                <div className="mb-4">
                                    <Image src="/assets/images/contactIcon4.svg" width={68} height={68} />
                                </div>
                                <div className="title-3 mb-4">Redes sociales</div>
                                <div className="text">
                                    <div>
                                        <p>Estamos para ayudarte en  <a className="link" target="_BLANK" href="https://www.facebook.com/uala.mx/">Facebook</a> , <a className="link" target="_BLANK" href="https://www.instagram.com/uala_mx/">Instagram</a> y <a className="link" target="_BLANK" href="https://twitter.com/uala_mx">Twitter</a>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex lg:ml-12">
                            <div>
                                <div className="mb-4">
                                    <Image src="/assets/images/contactIcon2.svg" width={68} height={68} />
                                </div>
                                <div className="title-3 mb-4">Comunidad Ualá</div>
                                <div className="text">
                                    <p>En la <a className="link" href="https://comunidad.uala.com.mx/">Comunidad Ualá</a> puedes hablar con otros usuarios e intercambiar dudas, sugerencias o ideas.</p>
                                    <p className="text-blue-600">Si eres el usuario que más ayuda a otros puedes ganar un premio todos los meses 😉.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </Layout>

    )

}