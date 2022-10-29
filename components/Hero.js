import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

import Image from 'next/image';


const Hero = () => {
    return ( 
        <div className='hero-container'>
        <Container >
        <Row >
            <Col md >
                <Image src="/images/home.png" height='400' width='538' alt="logo"/>
            </Col>

          <Col md>
            <Stack gap={3} className="col-md-12 col-lg-8 mx-auto align-right">
                <h1 style={{fontWeight:700}}>Empowering your Bussiness</h1>
                <h5 style={{fontWeight:400,textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                <Button className='col-md-5 col-lg-4 hero-button' style={{fontWeight:500}}><h4>Let's Talk</h4></Button>
            </Stack>
          </Col>
        </Row>
      </Container>
      </div>
       
     );
}
 
export default Hero;