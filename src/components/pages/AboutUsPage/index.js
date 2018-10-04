// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import Carousel from "react-bootstrap-carousel";

import { PageTemplate, Hero, TextBlock, Heading, Row, Column } from 'components'

const AboutUsPage = () => {
  return (
    <PageTemplate>
      <Hero title="" bg="ContactUs.png" className="about-us__hero">
        <h2 className="page-hero-title">A Creative Agency for Your Connected World</h2>
        <p>Cloud-Based Creative Collaboration brings the world's best creative talent to your video workflow</p>
      </Hero>

      <TextBlock
        className="about-us__text-block"
        title="Pioneering Cloud-Based Creative Collaboration"
        titleLevel={3}
        copy="Visionary teams with a diversity of Expertise, Innovation and Ideas... Award winning creativity available anytime and everywhere..."
      />

      <TextBlock
        className="our-solutions__text-block"
        title="Our Solutions"
        titleLevel={2}
        copy="Amazing video production doesn't have to be hard. Let's solve your media challenges together."
      />

      <Carousel
        className="carousel-component"
        animation={true}
        autoplay={false}
        slideshowSpeed={2000}
        version={4}
      >
        <div style={{ minHeight: 400, backgroundImage: 'url(https://www.w3schools.com/bootstrap/ny.jpg)' }}>
          <div className="carousel-caption">
            <Heading level={2}>Program Management</Heading>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div style={{ minHeight: 400, backgroundImage: 'url(https://www.w3schools.com/bootstrap/ny.jpg)' }}>
          <div className="carousel-caption">
            <Heading level={2}>Program Management</Heading>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </Carousel>

      <TextBlock
        className="our-solutions__text-block mt-5 pt-5 mb-5"
        title="Building a Fulfilled Creative Workforce with Vision"
        titleLevel={2}
        copy="Cut & Post is a cloud-based video production house born of the intersection between technology and teamwork."
      />
      
      <div className="our-clients">
        <div className="container">
          <TextBlock
            className="mt-5 pt-5 mb-5"
            title="Out Clients"
            align='left'
            titleLevel={2}
            copy="Our commitment to our creative team is matched only by our passion for our clients.  Cut & Post's principal goal is to deliver amazing visual and audio experiences on every project we touch.  Each successful project is another step on the Cut & Post journey, and we look forward to taking our next steps in this adventure together with you."
          />

          <Heading className="text-center" level={2}>Delivering Exceptional Work for World-Class Clients</Heading>

          <Row className="mt-5 pt-4">
            <Column md={{span: 6}}>
              <blockquote class="blockquote">
                <p class="mb-0">"The Cut & Post team always demonstrates a deep understanding of our voice, and their knowledge of our brand really shows in the final product..."</p>
                <footer class="blockquote-footer">Aldo Palma-Saracho<br />Senior Director of Marketing, NBC Universal</footer>
              </blockquote>
            </Column>

            <Column md={{ span: 6 }}>
              <blockquote class="blockquote">
                <p class="mb-0">"The social media space is all about last minute projects with quick turnarounds, and Cut & Post always delivers compelling content in record time!"</p>
                <footer class="blockquote-footer">Tatiana Holifield<br />Senior Director of Social Media, Viacom</footer>
              </blockquote>
            </Column>
          </Row>

          <img src="/images/logos.png" className="mx-auto client-logos" alt="logos" />
        </div>
      </div>
    </PageTemplate>
  )
}

export default AboutUsPage
