import React from 'react'
import { Box, Container, Typography, Divider } from '@mui/material';
import { RotatingText } from 'rotating-text';
import 'rotating-text/dist/index.css';
import ReactRotatingText from 'react-rotating-text';
import MyGallery from './MyGallery';

function About() {
  return (
    <Box className='about-section'>
      <Container>
      <RotatingText className="rotating-text2"
        text="Hassle?"
      stagger={0.1}
        timing={0.5}>
      </RotatingText>
        <ReactRotatingText style={{ textAlign: 'center', fontFamily: 'Air America', fontSize: '40px', letterSpacing: '5px'}}
          items=
          {[' Drive and Park ', 'Easy', 'with Reserva']} />
        <Divider className='divider-section'></Divider>

        <Typography style={{ fontSize: '30px', fontFamily: 'Roboto', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '100px'}}>
          Having a hard time looking for parking spot around the metro? <Divider></Divider>
          No worries, Reserva got your back.
        </Typography>
        <Container className='myGallery-container'>
          <MyGallery />
          <Divider style= {{ marginTop:'50px', marginBottom: '50px'}}></Divider>
        </Container>
        <Container>
        <Typography style={{ fontSize: '30px', fontFamily: 'Roboto', fontWeight: 'bold', letterSpacing: '2px', marginTop: '100px'}}>
          "Our goal is to provide maximum effectivity and efficiency when it comes to parking your vehicles around the metro.  <Divider style= {{ marginBottom: '50px'}}></Divider>
           In partnership with companies around business districts, We will make sure that you can secure your slot on your chosen location. <Divider style= {{ marginBottom: '50px'}}></Divider>
           Reserva is available on App Store, Google Play, Amazon so download the app and reserve now. 

        </Typography>
        </Container>
      </Container>
    </Box>
  )
}

export default About;