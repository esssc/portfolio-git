import React from 'react';

import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import udemy from '../assets/udemy.pdf';
import udemyPic from '../assets/udemyPic.png'
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Github',
                    subTitle: 'My repositories',
                    imgSrc: github,
                    link: 'https://github.com/esssc?tab=repositories',
                    selected: false
                },
                {
                    id: 1,
                    title: 'LinkedIn',
                    subTitle: 'My LinkedIn',
                    imgSrc: linkedin,
                    link: 'https://www.linkedin.com/in/sarunas-zimkus-a10536171/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Udemy',
                    subTitle: 'Self leaning courses',
                    imgSrc: udemyPic,
                    link: udemy,
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({});
    };

    makeItems = (items) => {
        return items.map(item => {
            return (
                <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
            );
        })
    };


    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;