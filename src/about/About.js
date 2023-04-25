import React from 'react';
import styled from "@emotion/styled";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Button, Paper, Box} from "@mui/material";

import PDF from './about.pdf';

const theme = createTheme({
    palette: {
      primary: {
        main: '#ff6a00',
      },
    },
  });

const AboutContainer = styled(Paper)(
    ({ theme, open }) => ({
        zIndex: 100,
        width: '300px',
        height: '200px',
        variant: 'outlined',
        margin: 'auto',
    }),
);

export default function About() {
    return (
        <AboutContainer>
            <h3 style={{ textAlign: 'center' }}>Authors:</h3>
            <h4 style={{ textAlign: 'center' }}>Freddy Larrieu<br/>Eric Martin<br/>Victor Berggren</h4>
            <hr/>
            <ThemeProvider theme={theme}>
                <Box textAlign='center'>
                    <Button variant="outlined" color="primary" href = {PDF} target = "_blank">Read our whitepaper</Button>
                </Box>
            </ThemeProvider>
        </AboutContainer>
    );
}
