import Head from 'next/head';
import { useState, useEffect, useRef } from "react";
import Layout from "../components/layout"
import Image from "next/image";
import Animation from "./../components/animation";
import Container from '../components/container';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

SwiperCore.use([Navigation])



function Box(props) {

  return (
    <div className="col-span-3 grid">
      <div className="grid">
        <div className="mx-3 border border-gray-100 rounded-md shadow-md p-6 flex flex-col">
          {/* Image */}
          <div>
            <Image alt="icon" src={`/assets/images/${props.image}`} width={72} height={72} />
          </div>
          <div className="flex-grow">
            {/* Title */}
            <div className="text-blue-600 text-2xl font-medium mt-4">{props.title}</div>
            {/* Text */}
            <div className="text-gray-500 mt-2">{props.text}</div>
          </div>
          {/* Ver mas */}
          <div className="mt-8">
            <span className="px-12 py-3 border border-blue-600 text-blue-600 rounded-full">Ver más</span>
          </div>
        </div>
      </div>
    </div>
  )

}


function Onboarding() {

  const [step, setStep] = useState(1);
  const prevScrollY = useRef(0);

  const handleScroll = () => {

    const currentScrollY = window.scrollY;

    if (prevScrollY.current < currentScrollY) {
      changePosition(currentScrollY);
      prevScrollY.current = currentScrollY;
    }

  };

  const changePosition = scrollY => {

    let element = document.querySelector('#onboardingSteps');
    let bodyRect = document.body.getBoundingClientRect(),
      elemRect = element.getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top;

    let actual = scrollY - (offset - window.innerHeight);
    let from = offset - window.innerHeight;
    let to = offset - window.innerHeight + elemRect.height;
    let percent = actual / (elemRect.height + (window.innerHeight / 5)) * 100;
    let step = Math.floor(percent / (100 / 4));


    if (step > 0 && step <= 4) {
      setStep(step)
    }
  }

  useEffect(() => {

    // Bind scoll
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const onboardingSteps = [
    { image: "descargar.png", text: "Descarga la app desde Play Store o App Store en tu celular." },
    { image: "formulario.png", text: "Completa el registro con tus datos desde la app." },
    { image: "pin.png", text: "Recibe tu tarjeta Ualá dentro de los 5 días hábiles, gratis y en todo el país." },
    { image: "tarjeta.png", text: "¡Activa tu tarjeta desde la app y carga saldo para empezar a usarla!" }
  ];

  return (
    <div className="grid lg:grid-cols-4 pt-8 pb-20 relative">
      <div style={{ left: "5%" }} className={`absolute duration-1000 ease-in-out transition-width lg:w-0 lg:w-${step - 1}/4  bg-blue-500 lg:h-2 top-20 rounded-full`}></div>
      <div style={{ left: "12%", top: "6%", transition: "height 2s" }} className={`absolute duration-1000 ease-in-out  w-2 bg-blue-500 lg:h-2 h-0  ${step != 4 ? 'h-' + (step - 1) + '/4' : 'h-' + step + '/6'} rounded-full lg:hidden`}></div>

      {
        onboardingSteps.map((s, index) => (
          <div key={index} className={`transition mb-8 flex lg:mb-0 lg:block delay-200 ${index >= step ? 'opacity-0' : ''}`}>
            <div className=""><Image alt="step" src={`/assets/images/${s.image}`} width={100} height={100} /></div>
            <div className="ml-4 lg:ml-0 mt-4 w-5/6">
              <span className="text-blue-600 mr-1">{index + 1}.</span>
              <span className="text-gray-500">{s.text}</span>
            </div>
          </div>
        )
        )
      }
    </div>
  )

}

export default function Home() {

  const features = [
    { image: "retiro.svg", title: "Retiros de efectivo", text: "Retira efectivo cuando lo necesites desde cualquier cajero ATM del país y en el extranjero", link: "/extracciones" },
    { image: "compras.svg", title: "Compras", text: "Desde la tiendita de la esquina o en un centro comercial de Milán y en tus ecommerce favoritos, vas a poder comprar todo lo que necesites con tu tarjeta Ualá Mastercard Internacional.", link: "/tarjeta" },
    { image: "transferencias.svg", title: "Transferencias", text: "Transfiere dinero a tus amig@s que tienen Ualá o a otras cuentas bancarias a través de SPEI desde tu app.", link: "/transferencias" },
  ]

  return (
    <>
      <Head>
        <title>Ualá</title>
      </Head>
      <Layout>
        {/* Phone */}
        <Container>
          <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse lg:mt-16 mt-8">

            {/* Title */}
            <div className="flex content-center flex-wrap">
              <div className="w-full">
                <h1 className="title-1 lg:w-2/3 text-center lg:text-left">
                  <div className="">La usas una vez, </div>
                  <div>la usas siempre</div>
                </h1>
              </div>

              {/* Subtitle */}
              <div className="w-full mt-8">
                <div className="text-gray-500 text-xl lg:w-2/3 leading-8 text-center lg:text-left">
                  Somos Ualá. Una tarjeta de débito
                  Mastercard gratis y una app para
                  manejar tu dinero mucho más fácil.
                  Simple, seguro y 100% online
                </div>
              </div>

              {/* Stores */}
              <div className="w-full mt-8">
                <div className="flex items-center justify-center lg:justify-start	">
                  <div className="mr-8">
                    <Image alt="playstore" src="/assets/images/icono-playstore.svg" width={30} height={34} />
                  </div>
                  <div>
                    <Image alt="applestore" src="/assets/images/apple-store.svg" width={33} height={37} />
                  </div>
                </div>
              </div>

            </div>

            <div className="relative hidden lg:block" style={{ height: 550 }}>
              <div className="absolute top-8 bg-blue-200 left-8 rounded-full hidden lg:block" style={{ height: 450, width: 450 }}></div>
              {/* <div className="absolute top-8 bg-blue-200 left-8 w-72 h-72 rounded-full lg:hidden"></div> */}
              <div className="absolute hidden lg:block"><Animation src="/assets/images/animation/celu_alta_Mx.png" zoom={0.85} className="lg:right-0 left-48" /></div>
              <div className="absolute top-20 hidden lg:block"><Animation src="/assets/images/animation/Tarjeta_alta_Mx.png" zoom={0.75} /></div>

            </div>
            <div className="lg:hidden">
              <Image layout="responsive" width={800} height={800} src="/assets/images/home/Ecosistema_Mx.png"></Image>

            </div>
          </div>

        </Container>
        {/* Blue wave */}
        <div className="bg-blue-wave my-16" id="onboardingSteps">
          <Container>
            <div className="mt-8 mb-4">
              <span className="title-2">¿Cómo sumarte a Ualá?</span>
            </div>
            <Onboarding />
          </Container>
        </div>
        {/* Depositos */}
        <Container>
          <div className="grid lg:grid-cols-2 my-16">
            <div>
              <div className="title-2 w-5/6">Deposita dinero en tu cuenta sin comisiones</div>
              <div className="mt-16 text-gray-600">
                {/* Transferencia */}
                <div className="grid grid-cols-12">
                  <div className="col-span-2">
                    <Image alt="transferencia" src="/assets/images/icono-transferencia.png" width={64} height={64} />
                  </div>
                  <div className="col-span-10 flex items-center">
                    <div className="w-2/3">Depósito por transferencia bancaria (SPEI)</div>
                  </div>
                </div>
                {/* Efectivo */}
                <div className="grid grid-cols-12 mt-8">
                  <div className="col-span-2">
                    <Image alt="efectivo" src="/assets/images/icono-efectivo.png" width={64} height={64} />
                  </div>
                  <div className="col-span-10 flex items-center">
                    <div className="w-2/3">Depósito en efectivo</div>
                  </div>
                </div>
              </div>
              <div className="mt-16">
                <div>
                  <Image alt="depositos" src="/assets/images/logos_depositos.png" width={364} height={174} />
                </div>
                <div className="mt-4">
                  <span className="link">Ver tiendas afiliadas</span>
                </div>
              </div>
            </div>
            <div>
              <div className="title-2 w-5/6">¡Úsala en todo el mundo!</div>
              <div className="mt-16">
                <div>
                  <Image alt="card" src="/assets/images/card4.gif" width={500} height={280} />
                </div>
              </div>
            </div>
          </div>
        </Container>
        {/* Descubre todo lo que puedes hacer con tu cuenta Ualá */}
        <Container>
          <div className="my-16">
            <div>
              <div className="title-2 lg:w-1/3">Descubre todo lo que puedes hacer con tu cuenta Ualá</div>
            </div>
            <div className="mt-16 hidden lg:grid grid-cols-11">
              <div></div>
              {
                features.map((feature, index) => <Box key={index} {...feature} />)
              }
            </div>

          </div>
        </Container>
        <div className="mt-16 w-full lg:hidden swiper-container flex">
          <Swiper
            style={{}}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            navigation
            scrollbar={{ draggable: true }}
          >
            {
              features.map((feature, index) =>

                <SwiperSlide className="h-full " key={index}>
                  <div className="mx-3 border border-gray-100 rounded-md shadow-md p-6 flex flex-col h-full">
                    {/* Image */}
                    <div>
                      <Image alt="icon" src={`/assets/images/${feature.image}`} width={72} height={72} />
                    </div>
                    <div className="flex-grow">
                      {/* Title */}
                      <div className="text-blue-600 text-2xl font-medium mt-4">{feature.title}</div>
                      {/* Text */}
                      <div className="text-gray-500 mt-2">{feature.text}</div>
                    </div>
                    {/* Ver mas */}
                    <div className="mt-8">
                      <span className="px-12 py-3 border border-blue-600 text-blue-600 rounded-full">Ver más</span>
                    </div>
                  </div>
                </SwiperSlide>)
            }
          </Swiper>
        </div>
        {/* Blue wave */}
        <div className="bg-blue-wave my-16">
          <Container>

            <div className="my-16">
              <div className="grid lg:grid-cols-2 grid-cols-1">
                <div>
                  <Image alt="celular tarjeta" src="/assets/images/celular_tarjeta.png" width={510} height={523} />
                </div>
                <div className="flex content-center flex-wrap">
                  <div className="w-full">
                    <div className="lg:text-4xl text-2xl text-gray-500 font-medium leading-normal">
                      Bienacostúmbrate a manejar tu dinero fácil, gratis y seguro desde una sola app con Ualá.
                    </div>
                  </div>
                  <div className="w-full mt-8">
                    <div className="lg:text-4xl text-xl text-blue-600 font-semibold">
                      #LaUsasUnaVezLaUsasSiempre
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </Container>
        </div>
      </Layout>

    </>
  )

}



