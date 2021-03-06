import React from "react";
//import PropTypes from "prop-types";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

const AppContainer = styled.div`
    background-color: #fafafa;
    min-height: 100vh;
`;

const AppPresenter = () => (
    <BrowserRouter>
        <AppContainer>
            <h1>Hello</h1>
        </AppContainer>
    </BrowserRouter>
);

export default AppPresenter;