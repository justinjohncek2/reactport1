import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                <ServiceCard 
                        image={gamedev} 
                        title={'Information sites & Ecommerce sites'} 
                        paragraph={'Mobile first websites created using Wordpress CMS.'}
                    />
                    <ServiceCard 
                        image={design} 
                        title={'Web apps & Mobile apps'} 
                        paragraph={'Web apps & Mobile apps using React & React Native'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={intelligence} 
                            title={'Digital Marketing'} 
                            paragraph={'SEO, SEM, Social media,Affilate,email,Mobile and Content Marketing.'}
                        />
                    </div>
                    <div className="mid-card">
                        <ServiceCard 
                            image={intelligence} 
                            title={'Deployment & SSL'} 
                            paragraph={'Hostinger,Godaddy,Fireabase,Netlify,Cloudfare'}
                        />
                    </div>
                    
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
