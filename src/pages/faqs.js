import { useState, useEffect } from "react";
import Layout from "../components/layout";
import Container from "../components/container";

function FaqCategory(props) {

    return (
        <div onClick={() => props.onClick(props.category)} className="p-6 shadow-md border border-gray-100 rounded-md cursor-pointer">
            <div className="text-blue-600 text-xl font-medium">{props.category?.title}</div>
            <div className="mt-4 text-gray-500">{props.category?.description}</div>
        </div>
    )

}

function Faq(props) {

    const [isOpen, setIsOpen] = useState(false)

    const open = () => {

        setIsOpen(!isOpen);

    }

    return (
        <div className="border mb-4 p-6 rounded-md shadow-md cursor-pointer" onClick={() => open()}>
            <div>
               <span className="text-2xl text-gray-700 font-medium">{ props.faq.question }</span>
            </div>
            {
                isOpen && 
                <div className="mt-4 text-gray-600">
                    { props.faq.answer }
                </div>
            }
        </div>
    )

}

export default function Faqs(props) {

    const [categories, setCategories] = useState([]); // Lista de categorias
    const [category, setCategory] = useState(); // Categoria seleccionada

    useEffect(async () => {

        let categoryList = await (await fetch("https://cms.prod.websites.uala.com.ar:2082/faq/categories")).json();

        setCategories(categoryList.payload)

    }, [])

    return (
        <Layout>
            <div className="bg-faqs h-96 flex items-center justify-center">
                <Container>
                    <div className="flex justify-center">
                        <div className="w-2/3 relative">
                            <div className="absolute p-4 text-blue-500 pl-5"><FontAwesomeIcon icon={faSearch} /></div>
                            <input type="text" className="bg-white rounded-full p-4 w-full pl-12" placeholder="Buscar..." />
                        </div>
                    </div>
                </Container>
            </div>

            <Container>
                <div className="pt-24 pb-6">
                    
                    {
                        category && 
                        <div className="mb-6 cursor-pointer" onClick={() => setCategory(null)}>
                            <span className="mr-4 text-blue-600"><FontAwesomeIcon icon={faChevronLeft} /></span>
                            <span className="text-blue-600 font-medium">Categorias</span>
                        </div>
                    }
                    <div><span className="text-blue-600 font-medium text-4xl">¿Alguna duda?</span></div>
                    
                </div>
                {
                    category
                        ?
                        // Faqs list
                        <div className="py-6">
                            {
                                category.faqs.map(faq => <Faq faq={faq} />)
                            }
                        </div>
                        :
                        // Faq category list
                        <div className="py-6 grid grid-cols-3 gap-4"> {categories.map(category => <FaqCategory key={category.faqcategoriesid} category={category} onClick={category => setCategory(category)} />)} </div>
                }
                <div className="grid grid-cols-12 my-12">

                    <div className="grid grid-cols-4 col-span-4">
                        <div>
                            <div className="text-blue-500 bg-blue-200 h-20 w-20 flex items-center justify-center text-5xl rounded-lg"><FontAwesomeIcon icon={faSmile} /></div>
                        </div>
                        <div className="ml-4 col-span-3 flex items-center">
                            <span className="text-xl text-gray-600">¿No encontraste la respuesta?</span>
                        </div>
                    </div>
                    <div className="col-span-8">
                        <div className="flex h-full items-center">
                            <span className="text-xl text-gray-600">Entra en la <a href="" className="link">Comunidad Ualá</a>, vas a encontrar muchos usuarios con ganas de ayudarte a resolver tus dudas.</span>
                        </div>
                    </div>

                </div>
            </Container>


        </Layout>
    )

}