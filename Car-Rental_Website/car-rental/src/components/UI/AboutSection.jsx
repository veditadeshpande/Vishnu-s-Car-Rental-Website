import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../styles/about-section.css'
import aboutImg from '../../assets/all-images/cars-img/bmw-offer.png'

const AboutSection = () => {
  return <section className='about__section'>
    <Container>
        <Row>
            <Col lg='6' md='6'>
              <div className='about__section-content'>
                <h4 className='section__subtitle'>About Us</h4>
                <h2 className='section__title'>Welcome to car rent service</h2>
                <p className='section__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Autem molestiae possimus architecto expedita quaerat voluptatem repellat eius tempora ipsum 
                    quo asperiores magni modi nesciunt consequatur delectus assumenda itaque, fugiat veritatis, 
                    iste eum et? Labore rerum officia quos doloremque. Excepturi, eius.</p>
                    <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                            <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                        </p>

                        <p className='section__description d-flex align-items-center gap-2'>
                            <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                        </p>

                        <br/>

                        <p className='section__description d-flex align-items-center gap-2'>
                            <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                        </p>

                        <p className='section__description d-flex align-items-center gap-2'>
                            <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                        </p>
                    </div>
              </div>
              </Col>
            <Col lg='6' md='6'>
              <div className='about__img'>
                <img src={aboutImg} alt="" className='w-100' />
              </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default AboutSection