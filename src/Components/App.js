import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import UserContext from '../Contexts/UserContext';
import GlobalStyle from '../styles/GlobalStyle';
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Home from "./Pages/Home";
import Entrada from "./Pages/Entrada";
import Saida from "./Pages/Saida";

export default function App() {

  const [user, setUser] = useState('');

  // const config = {headers: {Authorization: `Bearer ${user.token}`}};

  return (
    <>
  <UserContext.Provider value={{
        user, setUser,
        // config
      }}>
    <Container>
            <BrowserRouter>
            <GlobalStyle/>
            
                <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/home" element={<Home/>} />
                <Route path="/nova-entrada" element={<Entrada/>} />
                <Route path="/nova-saida" element={<Saida/>} />
                </Routes>
               

            </BrowserRouter>

        </Container>
        </UserContext.Provider>
        </>
  
  );
}

const Container = styled.div`
  background-color:#8C11BE;
    height: 100%;
    min-height: 100vh;
    min-width: 300px;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`