import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Footer (){
    return (
        <footer className="mt-5">
           <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    {/*<Col className="p-0 d-flex justify-content-center" md={12}>*/}
                    {/*    Page still in progress  <Spinner animation="border" style={{marginLeft: '12px'}}/>*/}
                    {/*</Col>*/}
                </Row>
           </Container>
        </footer>
    )
}

export default Footer;