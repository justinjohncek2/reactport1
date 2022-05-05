import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';
import pdf from '../Assets/justinresume.docx';


function ImageSection() {
   return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Justin John</span></h4>
                <p className="paragraph">
                    I am a React developer and Wordpress designer with knowledge in react js,wordpress,node js ,express js, react native and mern who creates respsosive websites, ecommerce sites and web applications.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Date of birth</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Justin John</p>
                        <p>: 07/04/1988</p>
                        <p>: Indian</p>
                        <p>: English, Malayalam, Hindi,  Tamil </p>
                        <p>: Kerala, India</p>
                        <p>: Software developer & Data Analyst</p>
                    </div>
                </div>
                <PrimaryButton  title={'Download Cv'}  href={pdf} target="_blank"/>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
            border-radius: 25px;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
