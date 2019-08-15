import React from 'react';
import styled from 'styled-components'
import ProgressBar from './components/ProgressBarHooks'
import img1 from "./img/960x576_1.webp"
import img2 from "./img/nc_ss19_620x960px_1.webp"


const Section = styled.div`
    background:url(${img2})  no-repeat  center/cover ;
    width: 100vw;
    height: 100vh;
    @media screen and (min-width: 567px){
      background:url(${img1}) no-repeat  center/cover ;
    }
`;

function App (){
    return (
        <Section>
            <ProgressBar/>
        </Section>
    );
}

export default App;
