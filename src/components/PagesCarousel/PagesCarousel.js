import React, {useState} from 'react';
import Carousel from "react-bootstrap/Carousel";


import classes from './PagesCarousel.module.css';
import BurgerApp from '../../assets/BurgerApp.png';
import FrontEndExample from '../../assets/FrontEnd-Example.png';
import Natours from '../../assets/natours.png';



const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };
    const [title] = useState('Examples');

    return (
        <div>
            <h1
                style={{textAlign: "center"}}
                className="display-3 font-weight-bolder"
            >
                {title}
            </h1>
            <Carousel className={classes.ControlledCarousel} activeIndex={index} direction={direction}
                      onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={BurgerApp}
                        alt="First slide"
                    />
                    <Carousel.Caption className={classes.Caption}>
                        <h3>Burger Builder</h3>
                        <p>Build on React</p>
                        <a href="https://my-burger-app-b8646.web.app/" target="_blank" rel="noopener noreferrer">More</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={FrontEndExample}
                        alt="Second slide"
                    />

                    <Carousel.Caption className={classes.Caption}>
                        <h3>Example</h3>
                        <p>Simple Front-End page</p>
                        <a href="https://yebobicycletheme.web.app/" target="_blank" rel="noopener noreferrer">More</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Natours}
                        alt="Natours"
                    />

                    <Carousel.Caption className={classes.Caption}>
                        <h3>Natours</h3>
                        <p>
                            Html, Css, Sass
                        </p>
                        <a href="https://natours-423ae.firebaseapp.com/" target="_blank" rel="noopener noreferrer">More</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default ControlledCarousel;

