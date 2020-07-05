import React from "react";
import {useNavigation} from "@react-navigation/native";
import styled from "styled-components/native";

const Container = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 60px 25px 0 25px;
    width: 100%;
    background-color: #333333;
`;

const Logo = styled.Image`
    width: 20px;
    height: 40px;
`;

export default function Header(){
    const navigation = useNavigation();
    return(
        <Container>
            <Logo resizeMode="contain" source={require("../assets/short-logo.png")}></Logo>
        </Container>
    );
}