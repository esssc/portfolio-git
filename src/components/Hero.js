import React from 'react';
import {Parallax} from 'react-parallax';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


// const backGround = {
//     background: "url('https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     width: "100%"
// };

const imageBackground = 'https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

function Hero(props) {
    return (
        <React.Fragment>
            <Parallax
                blur={2}
                bgImage={imageBackground}
                bgImageAlt="the cat"
                strength={500}
                style={{marginBottom: "30px"}}
            >
                    <Container fluid={true}>
                        <Row className="justify-content-center py-5">
                            <Col style={{color: 'white'}} md={8} sm={12}>
                                {props.title && <h1 className="display-1 font-weight-bolder page__title">{props.title}</h1>}
                                {props.subTitle && <h3 className="display-4 font-weight-light page__subtitle">{props.subTitle}</h3>}
                            </Col>
                        </Row>
                    </Container>
                <div style={{height: '250px'}}/>
            </Parallax>

            {/*<Jumbotron style={backGround} className="bg-transparent jumbotron-fluid">*/}
            {/*    <Container fluid={true}>*/}
            {/*        <Row className="justify-content-center py-5">*/}
            {/*            <Col style={{color: 'white'}} md={8} sm={12}>*/}
            {/*                {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}*/}
            {/*                {props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3>}*/}
            {/*            </Col>*/}
            {/*        </Row>*/}
            {/*    </Container>*/}
            {/*</Jumbotron>*/}

        </React.Fragment>

    )
}

export default Hero;