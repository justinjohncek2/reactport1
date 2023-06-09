import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'WORDPRESS CMS'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'SEO'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'DIGITAL MARKETING'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'REACT'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'REACT NATIVE'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'HOSTING & SSL'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'CANVA & EXCEL'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'SQL MONGODB'}
                            width={'70%'}
                            text={'70%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
