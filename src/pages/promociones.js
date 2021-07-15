import Layout from "../components/layout";
import Container from "../components/container";
import Head from 'next/head';
import Image from "next/image";

function Promotion(props) {

    return (
        <div className="grid">
            <div className="flex flex-col m-4 shadow-lg p-4 rounded-3xl border border-gray-100">
                <div className="flex justify-center">
                    <div>
                        <img className="max-h-16" src="https://uala-mex-frontend-promotions-prod.s3.amazonaws.com/logo_Rappi.png" alt="" />
                    </div>
                </div>
                <div className="text-center mt-4 font-medium flex-grow flex items-center">
                    <div className="w-full">¡50% de descuento en tu primer pedido!</div>
                </div>
                <div className="text-center mt-4 text-sm">Del 30/04/21 al 01/08/21</div>
                <div className="text-center mt-4"><a href="/condiciones" className="link">Ver mas</a></div>
            </div>
        </div>
    )

}

export default function Promociones(props) {

    return (
        <>
            <Head>
                <title>Ualá</title>
            </Head>
            <Layout>
                <div className="flex justify-center">
                    <div className="hidden lg:block"><img src="/assets/images/MX_promos_MainSlider_banner.jpeg" /></div>
                    <div className="lg:hidden"><img src="/assets/images/MX_promos_Mainslideer_banner_mobile.jpeg" /></div>
                </div>
                <Container>
                    <div className="text-center my-16 text-blue-600 text-3xl font-medium">No te pierdas estas súper promociones</div>
                    <div className="my-16 grid grid-cols-3">
                        {
                            Array(10).fill().map(promotion => <Promotion {...promotion} />)
                        }
                    </div>
                </Container>
                <Container>
                    <div className="flex justify-center mb-12">
                        <div className="hidden lg:block"><img src="/assets/images/MX_promos_banner_adquisicion_desktop.png" /></div>
                        <div className="lg:hidden"><img src="/assets/images/MX_promos_banner_adquisicion_mobile.png" /></div>
                    </div>
                </Container>

            </Layout>
        </>
    )

}