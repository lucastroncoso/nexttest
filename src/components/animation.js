import { useState, useEffect, useRef } from "react";

export default function Animation(props) {

    const width = 4096;
    const height = 2730;
    const frame = { width: width / 10, height: height / 4 };
    const [zoom, setZoom] = useState(props.zoom || 1);
    const [animationPosition, setAnimationPosition] = useState({ x: 10, y: 4 });
    const [animationSize, setAnimationSize] = useState({ height: frame.height, width: frame.width * 1.3 })
    const prevScrollY = useRef(0);

    const handleScroll = () => {

        const currentScrollY = window.scrollY;

        if (prevScrollY.current < currentScrollY) {
            changePosition(false);
            prevScrollY.current = currentScrollY;
        }

        if (prevScrollY.current > currentScrollY) {
            changePosition(true);
            prevScrollY.current = currentScrollY;
        }



    };

    const changePosition = direction => {

        if (!direction) {

            if (animationPosition.x == 1 && animationPosition.y == 1) {
                return false;
            } else if (animationPosition.x == 1) {
                setAnimationPosition({ x: 10, y: animationPosition.y - 1 })
            } else {
                setAnimationPosition({ ...animationPosition, x: animationPosition.x - 1 })
            }

        } else {


            if (animationPosition.x == 10 && animationPosition.y == 4) {
                return false;
            } else if (animationPosition.x == 10) {
                setAnimationPosition({ x: 1, y: animationPosition.y + 1 })
            } else {
                setAnimationPosition({ ...animationPosition, x: animationPosition.x + 1 })
            }


        }


    }

    useEffect(() => {
        
        if(window.innerWidth < 600){
            
            setZoom(0.5)

            setAnimationSize({ ...animationSize, height: frame.height - 200 });
     
    
        }
 
        // Bind scoll
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, [animationPosition]);
 

    let animationObject = {
        position: "absolute",
        backgroundPositionX: (frame.width * animationPosition.x) + "px",
        backgroundPositionY: (frame.height * animationPosition.y) + "px",
        width: frame.width,
        height: frame.height
    }
    
    return (

        <div className="flex justify-center">
            <div style={animationSize}>
                <div className="relative">                    
                    <div className={props.className} style={ { ...animationObject, backgroundImage: `url(${props.src})`, zoom }}></div>
                </div>
            </div>
        </div>

    )

}