import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2020 - present'} 
                        title={'Web developer & Data Analyst'}
                        subTitle={'free lancer'}
                        text={'I works as a freelancer web developer who offers Information,Ecommerce sites and web applications with the help of web technologies Wordpress, React js, React Native, Mern Stack, Next js & Gatsby. I also identifies the business issues of enterprises & deliver apt business remedies through Data Analysis & Visualization tools.'} 
                    />
                    <ResumeItem 
                        year={'2019'} 
                        title={'Data Analyst'}
                        subTitle={'Binary Fountain L.L.C'}
                        text={'The Job was to analyse the reviews & data on Doctors & nurses, and facilities in a Hospital along with reviewing the data on villas,flats & their services to arrive at an opinion & suggestion to improve the services of the entities. This helps the business to reach a conclusion to make changee and improvements and services offered by the Institution.  '} 
                    />
                    <ResumeItem 
                        year={'2017'} 
                        title={'Tech support'}
                        subTitle={'Federal Bank'}
                        text={'The nature of the job was to assist the bank staff in the technical works in the bank which includes in handling the software and Hardware jobs in the Bank. It comperises of online data entry, document scanning, ATM card activation and customer interaction for selling the banking products and starting bank accounts , F.D & Insurance products of the Bank. '} 
                    />
                    <ResumeItem 
                        year={'2016'} 
                        title={'Technical support consultant'}
                        subTitle={'sutherland global services'}
                        text={'I worked AT & T the biggest telecom company in U.S by taking the remote access of the custoemrs and resolved the pc issues of the system. The service helped the customers in resolving the pc issues like virus attack, Antivirus installation, System formating, Installations of telecom softwares, Cleaning the computer and browser etc.'} 
                    />
                    <ResumeItem 
                        year={'2015'} 
                        title={'software developer'}
                        subTitle={'Eleoenai technologies'}
                        text={'Worked as developer by helping develop  apps for both desktop and  web for chit companies. The internship includes development of back end app with data base management of relational databases using sql. The applications was meant for helping easty access to chit opeeations by private chit firms'} 
                    />
                    <ResumeItem 
                        year={'2012-2014'} 
                        title={'Higher studies and research'}
                        subTitle={''}
                        text={ 'Worked on studying advanced I.T coarses for improving my technical knowledge in the vast I.T world .I also did my language coarse in the form of IElTs. In addition some aptitude and Reasoning classes for preparing  for the tough entrance exams of companies.'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2008 - 2012'} 
                        title={'Information Technology Degree'}
                        subTitle={'CUSAT University'}
                        text={ 'Our Degree coarses include software programming,networking, computer hardware knowledge and in addition science & Mathematics subjects'} 
                    />
                    <ResumeItem 
                        year={'2005 - 2007'} 
                        title={'A grade in Higher secondary education'}
                        subTitle={'ST Johns hss, Kozhuvanal'}
                        text={'I passed my Higher secondary with A class in science group. Our class includes both theoretical and lab activities'} 
                    />
                    <ResumeItem 
                        year={'2005'} 
                        title={'S.S.L.C'}
                        subTitle={'M.T.S.H.SS KOTTAYAM'}
                        text={'I obtained my secondary school certificate with with A grade by attaining core knowledge in General science,mathematics,geography,History and languages. '} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
