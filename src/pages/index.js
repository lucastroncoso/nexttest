import Head from 'next/head';
import Link from 'next/link';
import Layout from "../components/layout"
import Image from "next/image";

function Container(props) {

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12">
        <div className="col-span-10 col-start-2">
          {props.children}
        </div>
      </div>
    </div>
  )

}


export default function Home() {

  const onboardingSteps = [
    { image: "descargar.png", text: "Descarga la app desde Play Store o App Store en tu celular." },
    { image: "formulario.png", text: "Completa el registro con tus datos desde la app."},
    { image: "pin.png", text: "Recibe tu tarjeta Ualá dentro de los 5 días hábiles, gratis y en todo el país."},
    { image: "tarjeta.png", text: "¡Activa tu tarjeta desde la app y carga saldo para empezar a usarla!" }
  ];

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* Phone */}
        <Container>
          <div className="grid grid-cols-2 mt-16">
            <div className="flex content-center flex-wrap">

              <div className="w-full">
                <h1 className="text-blue-600 text-5xl font-medium w-2/3">
                  <div className="mb-3">La usas una vez,</div>
                  <div>la usas siempre</div>
                </h1>
              </div>
              <div className="w-full mt-8">
                <div className="text-gray-500 text-xl w-2/3 leading-8">
                  Somos Ualá. Una tarjeta de débito
                  Mastercard gratis y una app para
                  manejar tu dinero mucho más fácil.
                  Simple, seguro y 100% online
                </div>
              </div>
            </div>
            <div><Image src="/assets/images/phone-card.gif" width={540} height={490}></Image></div>
          </div>

        </Container>
        {/* Blue wave */}
        <div className="blueWaveContainer  my-32">
          <Container>
            <div className="mt-8 mb-4">
              <span className="text-blue-500 text-4xl font-medium">¿Cómo sumarte a Ualá?</span>
            </div>
            <div className="grid grid-cols-4 pt-8 pb-20">

              {
                onboardingSteps.map((step, index) => (
                  <div key={index} className="">
                    <div><Image src={`/assets/images/${step.image}`} width={100} height={100}></Image></div>
                    <div className="mt-4 w-5/6">
                      <span className="text-blue-600">{index + 1}.</span>
                      <span className="text-gray-500">{step.text}</span>
                    </div>
                  </div>
                )
                )
              }




            </div>

          </Container>
        </div>
      </Layout>

    </>
  )

}



