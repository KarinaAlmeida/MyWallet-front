import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
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
                        <h3>Almoço mãe</h3>
                        <h4>39,90</h4>
                    </Item>
                    <Item>
                        <p>27/11</p>
                        <h3>Mercado</h3>
                        <h4>542,54</h4>
                    </Item>
                    <Item>
                        <p>20/11</p>
                        <h3>Salário</h3>
                        <h4>3000,00</h4>
                    </Item>
                </Lista>
                <Total>
                    <h3>SALDO:</h3>
                    <p>2.417,56</p>
                </Total>
            </Dados>
            <Footer>
                <ButtonEntrada>
                    <AiOutlinePlusCircle />
                    <p>Nova<br /> entrada</p>
                </ButtonEntrada>
                <ButtonSaida>
                    <AiOutlineMinusCircle />
                    <p>Nova<br /> saida</p>
                </ButtonSaida>
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

`

const Item = styled.div`

`
const Total = styled.div`

`

const Footer = styled.div`

`

const ButtonEntrada = styled.div`

`

const ButtonSaida = styled.div`

`

