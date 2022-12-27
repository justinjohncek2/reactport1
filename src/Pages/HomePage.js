import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Justin John</span></h1>
                <p>
                    I am a Web Developer and Digital Marketer.
                </p>
                <div className="icons">
                <a href="https://www.instagram.com/justinjohn999/" className="icon i-Instagram">
                        <InstagramIcon />
                    </a>
                    <a href="https://www.facebook.com/justin.john.7528/" className="icon i-Facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/justinjohncek2" className="icon i-Github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.youtube.com/channel/UCPpNC4mYJDUdJANclxf81BQ" className="icon i-Youtube">
                        <YoutubeIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/justin-john-407350154/" className="icon i-linkedin">
                        <LinkedInIcon/>
                    </a>
                    <a href="https://twitter.com/JustinJ00834052" className="icon i-linkedin">
                        <TwitterIcon/>
                    </a>
                    
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
