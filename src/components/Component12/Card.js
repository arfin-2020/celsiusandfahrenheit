import React, { useContext } from 'react';
import nerdImage from './assets/illustration.png';
import Button from './Button';
// import Content from './Content';
import Image from './Image';
import { ButtonContainer, CardContainer, Content } from './styles/Container.style';
import { H1, P, Tag } from './styles/Elements';




// const array = [23,545,45,55,45];
// const myFuntion = (initialValue,value,index,array) =>{
//     // console.log(value)
//     // console.log(index)
//     // console.log(array)
//     // console.log('---------------------------------------------')

//     return  initialValue + value;
// }

// const result = array.reduce(myFuntion);
// console.log('result-----', result);



const Card = () => {
    const Theme = useContext(ThemeContext);

        console.log(Theme)
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
                    <Button onClick={()=>{}} text='Change Theme'/>
                </ButtonContainer>

            </Content>
            <Image imgSrc={nerdImage} alt="Nerd" width="300px" />
        </CardContainer>
    )
}
export default Card;