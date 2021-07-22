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
                    <div className="grid lg:grid-cols-2 my-24">
                        <div className="flex content-center flex-wrap">
                            <div className="w-full">
                                <h1 className="title-1 w-2/3">
                                    <div className="">Transfiere y recibe dinero de tod@s</div>
                                </h1>
                            </div>
                            <div className="w-full mt-4">
                                <div className="text-gray-500 text-xl w-2/3 leading-8">
                                    Envia y recibe dinero desde cualquier cuenta bancaria y/o virtual, gratis y en el acto. También de tus amig@s o familiares que tengan Ualá.
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center" >
                            <div>
                                <Image src="/assets/images/transfers.gif" width={600} height={320
                                }/>
                            </div>
                        </div>
                    </div>
                </Container>
                {/* ¿Cómo depositar dinero a tu Ualá? */}
                <Container>
                    <div className="grid lg:grid-cols-2 my-24">
                        <div className="flex mr-12">
                            <div>
                                <div className="mb-4">
                                    <Image src="/assets/images/transferIcon1.svg" width={68} height={68}/>
                                </div>
                                <div className="title-3 mb-4">Transferencias entre usuarios</div>
                                <div className="text">
                                    <div>Puedes transferir dinero a tus contactos que también tengan Ualá muy fácil. Desde tu app debes de acceder a "Transferencias" y después a la sección "Tiene Ualá". Dentro de tus contactos podrás seleccionar a la persona a la cual le quieres hacer una transferencia y el monto de la misma.</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex ml-12">
                            <div>
                                <div className="mb-4">
                                    <Image src="/assets/images/transferIcon2.svg" width={68} height={68}/>
                                </div>
                                <div className="title-3 mb-4">Transferencias a cuentas bancarias y/o virtuales</div>
                                <div className="text">
                                    <p>Tansferir dinero a otras cuentas bancarias es muy sencillo, solo debes ir a la sección "Tarjeta" posteriormente en "Transferencias" y seleccionar la opción "No tiene Ualá".</p>
                                    <p>Ingresa la CLABE de la cuenta a la cual quieres hacer la transferencia, agrega el nombre del titular y el monto.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                {/* Video transferencia */}
                <Container>
                    <div className="flex justify-center my-16">
                        <div>
                            <Image src="/assets/images/videoTransferencia.svg" width={657} height={369}/>
                        </div>
                    </div>
                </Container>
                {/* Clave de seguridad */}
                <div className="bg-blue-wave mb-16">
                    <Container>
                        <div className="my-24 grid lg:grid-cols-2">
                            
                        <div className="flex items-center mr-12">
                            <div>
                                <div className="mb-4">
                                    <Image src="/assets/images/icono-clave.svg" width={68} height={68}/>
                                </div>
                                <div className="title-3 mb-4">Clave de seguridad</div>
                                <div className="text">
                                    <div>Para hacer transferencias desde la app de Ualá necesitás la clave de 6 dígitos o clave de seguridad que creaste cuando validamos tu usuario. Si te la olvidaste puedes recuperarla haciendo click en “Olvidé mi clave” antes de confirmar la transferencia o movimiento de dinero.</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center" >
                            <div>
                                <Image src="/assets/images/imagen-celular-clave.svg" width={486} height={373}/>
                            </div>
                        </div>

                        </div>
                    </Container>
                </div>
                
            </Layout>
        </>
    )

}