import React, { useState } from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import * as ScreenOrientation from 'expo-screen-orientation';

import VideosList from '../../Database/videos.json';
import Header from "../../components/Header";
import Videos from "../../components/Videos";

const Container = styled.ScrollView`
    flex: 1;
    background-color: #333333;
`;

async function changeScreenOrientation(){
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
}

export default function Home(){
    const [cat1, setCat1] = useState([]);
    const [cat2, setCat2] = useState([]);
    const [cat3, setCat3] = useState([]);

    changeScreenOrientation();
    return(
        <>
            <StatusBar 
                translucent 
                backgroundColor="transparent" 
                barStyle="light-content"
            />
            <Header />
            <Container>
                {VideosList.map(video => {
                    
                    if(video.cat == 1){
                        cat1.push(video)

                    }else if(video.cat == 2){
                        cat2.push(video)

                    }else if(video.cat == 3){
                        cat3.push(video)     
                    }
                })}
                <Videos label="Fundamentos Web" videos={cat1}> </Videos>
                <Videos label="Backend" videos={cat2}> </Videos>
                <Videos label="Frontend" videos={cat3}> </Videos>
            </Container>
        </>
    );
}

