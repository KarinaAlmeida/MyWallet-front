// import axios from "axios";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";
import { RxExit } from "react-icons/rx";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";


export default function Home() {
    const navigate = useNavigate();

    return (
        <Container>
             <Titulo>
                <h1>Olá, Fulano</h1>

                <Icon onClick={() => navigate('/')}>
                <RxExit />
                </Icon>

            </Titulo>
            <Dados>
                <Lista>
                    <Item>
                        <p>30/11</p>
                        <h1>Almoço mãe</h1>
                        <h2>39,90</h2>
                    </Item>
                    <Item>
                        <p>27/11</p>
                        <h1>Mercado</h1>
                        <h2>542,54</h2>
                    </Item>
                    <Item>
                        <p>20/11</p>
                        <h1>Salário</h1>
                        <h3>3000,00</h3>
                    </Item>
                </Lista>
                <Total>
                    <h1>SALDO:</h1>
                    <p>2.417,56</p>
                </Total>
            </Dados>
            <Footer>
                <Button onClick={() => navigate('/nova-entrada')}>
                    <Icon>
                    <AiOutlinePlusCircle />
                    </Icon>
                    <p>Nova<br /> entrada</p>
                </Button>
                <Button onClick={() => navigate('/nova-saida')}>
                    <Icon>
                    <AiOutlineMinusCircle />
                    </Icon>
                    <p>Nova<br /> saida</p>
                </Button>
            </Footer>


        </Container>


    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    background: #8C11BE;
    a {
        margin-top: 50px;
        text-decoration: none;
    }
`;

const Titulo = styled.div`
    width: 90%;
    height: 10%;
    color: #FFFFFF;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
`
const Icon= styled.div `
cursor: pointer;
`

const Dados = styled.div`
    box-sizing: border-box;
    width: 90%;
    height: 70%;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 4%;
`;



const Lista = styled.div`
    width: 100%;
    line-height: 25px;
    display: flex;
    flex-direction: column;
    font-size: 15px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    
    
      
`

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        color: #C6C6C6;
    }
    h1{
        width: 58%;
        
    }
    h2{
        color: red;
    }
    h3 {
        color: green;
    }
`


const Total = styled.div`
    width: 100%;
    height: 10%;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    
    p{
        font-weight: 400;
        color: green;
    }

`

const Footer = styled.div`
    width: 90%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Button = styled.div`
    width: 48%;
    height: 85%;
    font-family: 'Raleway', sans-serif;
    font-size: 25px;
    padding: 20px;
    box-sizing: border-box;
    background-color: #A328D6;
    border: 2px;
    border-radius: 5px;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-align: start;
    cursor: pointer;
    
    p{
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
    }
`


