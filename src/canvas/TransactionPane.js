import styled from "@emotion/styled";
import {IconButton} from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import {ChromePicker} from 'react-color';
import {useState} from "react";
import { render } from "@testing-library/react";

const TransactionContainer = styled(Card)(
    ({ theme, open }) => ({
        zIndex: 100,
        width: '255px',
        position: 'absolute',
        variant: 'outlined',
        right: '8px',
        bottom: '30%',
    }),
);

const Submit = styled(IconButton)(
    ({ theme, open }) => ({
        width: '80px',
        height: '80px',
    }),
);

const Cancel = styled(IconButton)(
    ({ theme, open }) => ({
        width: '80px',
        height: '80px',
    }),
);

export default function TransactionPane({transactionContext}) {
    const [colorPickerColor, setColorPickerColor] = useState({r: transactionContext.context.pixel.object.color[0], g: transactionContext.context.pixel.object.color[1], b: transactionContext.context.pixel.object.color[2]});

    const handleColorChange = (color) => {
        setColorPickerColor(color.rgb);
    };

    var subheaderText = "x: " + transactionContext.context.pixel.object.index[0] + ", y: " + transactionContext.context.pixel.object.index[1];

    return (
        <TransactionContainer>
            <CardHeader title="Select Pixel Color" subheader={subheaderText} style={{ textAlign: 'center' }}/>
            <CardContent>
                <ChromePicker
                    color={colorPickerColor}
                    onChange={handleColorChange}
                />
            </CardContent>
            <CardActions>
                <Cancel style={{ marginRight: 'auto' }} onClick={() => transactionContext.closeTransaction()} >
                    <CancelIcon color='error' />
                </Cancel>
                <Submit style={{ marginLeft: 'auto' }} onClick={() => transactionContext.submitTransaction(colorPickerColor.r, colorPickerColor.g, colorPickerColor.b)}>
                    <SendIcon color='success'/>
                </Submit>
            </CardActions>
        </TransactionContainer>
    );
}