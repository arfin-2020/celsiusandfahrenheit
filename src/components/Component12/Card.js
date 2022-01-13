import React from 'react';
import nerdImage from './assets/illustration.png';
import Button from './Button';
// import Content from './Content';
import Image from './Image';
import { ButtonContainer, CardContainer, Content } from './styles/Container.style';
import { H1, P, Tag } from './styles/Elements';
const Card = () => {
    return (
        <CardContainer>
            <Content>
                <Tag color="#4361ee">EXCLUSIVE</Tag>
                <H1>React Styled Components</H1>
                <P>
                    Exclusive React js Tutorial on Styled Components where you will learn why we need this how to use it.
                </P>
                <ButtonContainer>
                    <Button link="https://lwsbd.link/rsc" text="Watch now" />
                    <Button link="https://lwsbd.link/react" text="Github repo" />
                </ButtonContainer>

            </Content>
            <Image imgSrc={nerdImage} alt="Nerd" width="300px" />
        </CardContainer>
    )
}
export default Card;