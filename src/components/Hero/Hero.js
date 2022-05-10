import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';



const Hero = (props) => (

  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! My Name is <br />
          Kang Lin
        </SectionTitle>
        
        <SectionText>
          I'm an aspiring Software developer that is currently attending CUNY Baruch College Majoring 
          in Computer Information Systems.
        </SectionText>
          <Link href="#contact">
          <Button >
            Contact
          </Button>
          </Link>
          
      </LeftSection>
    </Section>
  </>
);

export default Hero;