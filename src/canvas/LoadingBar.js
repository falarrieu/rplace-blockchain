import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import styled from "@emotion/styled";
import IconLogoWhite from '../static/IconLogoWhite.png'

const LinearLoadingBar = styled(LinearProgress, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        color: "rgb(255 106 0)",
        width: '700px',
		'& .MuiLinearProgress-bar1': {}
    }),
);

function IconLogoComponent() {
    return (
        <img src={IconLogoWhite} alt="IconLogo"  style={{ 

            width: "10%",
            margin: "10px"
        }}/>
    );
}

export default function LoadingBar() {
    return (
        <div style={{
            width: "600px",
             marginLeft: "auto",
              marginRight: "auto",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              top: "600px"
              }}>
            <IconLogoComponent />
            <LinearLoadingBar color='inherit'/>
        </div>
        
    );        
};