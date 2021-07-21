import Container from "../components/container";
import Layout from "../components/layout";
import Image from "next/image";

export default function Seguridad(props) {

    return (
        <Layout>
            <Container>
                <div className="grid lg:grid-cols-2 my-24">
                    <div className="flex content-center flex-wrap">
                        <div className="w-full">
                            <h1 className="title-1 w-2/3">
                                <div className="">Tu seguridad es lo más importante</div>
                            </h1>
                        </div>
                        <div className="w-full mt-4">
                            <div className="text-gray-500 text-xl w-2/3 leading-8">
                                Sigue estos consejos para manejar tu Ualá de forma segura.
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center" >
                        <div>
                            <Image src="/assets/images/security.gif" width={500} height={370} />
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="my-16">
                    <div className="grid grid-cols-12">
                        <div className="col-span-3">
                            <Image src="/assets/images/security_password.svg" width={177} height={177} />
                        </div>
                        <div className="col-span-9">
                            <div className="text-3xl">
                                <span className="text-red-400">1.</span> <span className="text-gray-500">Seguridad de tus claves</span>
                            </div>
                            <div>
                                <ul class="text-gray-600 py-4 list-dot">
                                    <li className="mb-4">Las claves utilizadas para operar en Ualá son datos confidenciales, únicos e intransferibles. NUNCA deberás compartirlos con nadie.</li>
                                    <li className="mb-4">No los escribas en papel, ni en ningún lugar de fácil acceso por otras personas y procura resguardarlo en un lugar seguro. (Hay aplicaciones gratuitas que protegen las contraseñas de forma segura).</li>
                                    <li className="mb-4">Cuando crees o modifiques las claves, procura no utilizar información personal o que pueda ser fácil de adivinar. (Fecha de nacimiento, nombre u otra información similar).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-16">
                    <div className="grid grid-cols-12">
                        <div className="col-span-3">
                            <Image src="/assets/images/security_phone.svg" width={177} height={177} />
                        </div>
                        <div className="col-span-9">
                            <div className="text-3xl">
                                <span className="text-red-400">2.</span> <span className="text-gray-500">Seguridad de tu dispositivo</span>
                            </div>
                            <div>
                                <ul class="text-gray-600 py-4 list-dot">
                                    <li className="mb-4">Te recomendamos siempre bloquear el acceso a tu dispositivo con un código de bloqueo, patrón o con algún mecanismo de biometría. (Cara, huella dactilar, etc), con esto aseguras que solo tú puedes acceder a lo que es tuyo.</li>
                                    <li className="mb-4">Actualiza regularmente tus aplicaciones y sistema operativo de tus dispositivos. Esto te permitirá tener las últimas actualizaciones de seguridad.</li>
                                    <li className="mb-4">Nunca instales aplicaciones por fuera de las Stores oficiales (Apple Store o Google Play), ya que no se puede garantizar que sean legítimas.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-16">
                    <div className="grid grid-cols-12">
                        <div className="col-span-3">
                            <Image src="/assets/images/security_mail.svg" width={177} height={177} />
                        </div>
                        <div className="col-span-9">
                            <div className="text-3xl">
                                <span className="text-red-400">3.</span> <span className="text-gray-500">Seguridad en tus operaciones</span>
                            </div>
                            <div>
                                <ul class="text-gray-600 py-4 list-dot">
                                    <li className="mb-4">Nunca nadie de Ualá te pedirá por mail, redes sociales, de forma telefónica ni por otro medio las claves que utilizas para operar en la aplicación. Tampoco te pediremos los datos que están en tu tarjeta. Adicionalmente, nunca brindes los códigos que te enviamos para resetear algunas de tus claves en caso de olvido.</li>
                                    <li className="mb-4">Desconfía de todas las comunicaciones que te ofrezcan promociones, premios o préstamos que contengan links sospechosos por los distintos medios de contacto y que te soliciten las claves de tu Ualá o cualquier otra información confidencial a cambio de un beneficio.</li>
                                    <li className="mb-4">Cuando realices una compra online verifica que la dirección del sitio sea legítima y que se trate de un sitio confiable y seguro.</li>
                                    <li className="mb-4">No permitas que alguien que no seas tú, utilice tus datos para abrir una cuenta a tu nombre ni entregues o cedas el uso de tu Ualá a nadie, aun cuando te ofrezcan dinero a cambio.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>

    )

}