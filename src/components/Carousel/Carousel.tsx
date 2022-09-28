import React, { FC, useState, useRef, useEffect } from "react";
import styles from "./Carousel.module.scss";

import ArrowLeft from "../../assets/svg/arrow_left.svg";
import ArrowRight from "../../assets/svg/arrow_right.svg";

interface ICarousel {
    images: string[]
};

const Carousel: FC<ICarousel> = ({images}) => {
    const [currentImage, setCurrentImage] = useState<number>(0);
    const [imageWidth, setImageWidth] = useState<number>(window.innerWidth < 767 ? window.innerWidth < 450 ? 300 : 400 : 600);
    const refCarousel = useRef<HTMLDivElement | null>(null);

    const onClickHandlerLeft = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setCurrentImage(prev => prev - 1);
    };
    
    const onClickHandlerRight = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setCurrentImage(prev => prev + 1);
    };

    const resizeHandler = () => {
        if(window.innerWidth > 450 && window.innerWidth < 767) {
            setImageWidth(400);
        }else if(window.innerWidth < 450){
            setImageWidth(300);
        }else{
            setImageWidth(600);
        };
    };

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);

        return () => window.removeEventListener("resize", resizeHandler);
    }, []);

    useEffect(() => {
        if(refCarousel.current){
            refCarousel.current.style.cssText = `transform: translateX(${-imageWidth * currentImage}px)`;
        };
    }, [currentImage, imageWidth]);

    if(!images.length) return null;

    return (
        <>
            <div className={styles.carousel}>
                {currentImage !== 0 && (
                    <button 
                        className={`${styles.carousel__btns} ${styles.carousel__btns_left}`}
                        onClick={onClickHandlerLeft}
                    >
                        <img src={ArrowLeft} alt="Slider Arrow Lift" />
                    </button>
                )}
                {currentImage !== images.length - 1 && (
                    <button 
                        className={`${styles.carousel__btns} ${styles.carousel__btns_right}`}
                        onClick={onClickHandlerRight}
                    >
                        <img src={ArrowRight} alt="Slider Arrow Right" />
                    </button>
                )}
                <div className={styles.carousel__container}>
                    <div className={styles.carousel__items} ref={refCarousel}>
                        {images.map(image => (
                            <div 
                                key={image}
                                className={styles.carousel__items_item}
                            >
                                <img src={image} alt="Space X Dragon" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.dots}>
                {images.map((image, index) => (
                    <div 
                        key={image}
                        className={`${styles.dots_dot} ${index === currentImage ? styles.active : ""}`}
                        onClick={(e: React.MouseEvent<HTMLDivElement>) => setCurrentImage(index)}
                    ></div>
                ))}
            </div>
        </>
    );
};

export default Carousel;
