import Image from 'next/image'
import styles from 'styles/Home.module.css'
import { Col, Container, Row } from 'reactstrap';

const Footer = () => {
    return (
        <footer style={{backgroundColor: "#013a14", color: "white", padding:"20px"}}>
            <Container fluid="md" >
                <Row>
                    <Col md="6">
                        <h4 style={{borderBottom: "1px dashed gray", padding: "0 0 20px 0"}}>Contact</h4>
                        <div><a href="">Customer service & contact</a></div>
                        <div><a href="">About Hemnet</a></div>
                        <div><a href="">Press</a></div>
                        <div><a href="">For investors</a></div>
                        <div><a href="">Banner advertising and advertising</a></div>
                        <div><a href="">Work with us</a></div>
                    </Col>
                    <Col md="3">
                        <h4 style={{borderBottom: "1px dashed gray", padding: "0 0 20px 0"}}>Appar</h4>
                        <div><a href="">iPhone and iPad</a></div>
                        <div><a href="">Android</a></div>
                    </Col>
                    <Col md="3">
                        <h4 style={{borderBottom: "1px dashed gray", padding: "0 0 20px 0"}}>Follow Hemnet</h4>
                        <div><a href="">Hemnet&apos;s newsletter</a></div>
                        <div><a href="">Facebook</a></div>
                        <div><a href="">Instagram</a></div>
                        <div><a href="">Twitter</a></div>
                        <div><a href="">LinkedIn LinkedIn</a></div>
                        <div><a href="">Pinterest</a></div>
                    </Col>
                </Row>
           </Container>
        </footer>
    );
}

export default Footer;