import styled from "@emotion/styled";
import {IconButton, Paper} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import {useState} from "react";

const TransactionContainer = styled(Paper)(
    ({ theme, open }) => ({
        zIndex: 100,
        width: '500px',
        height: '500px',
        position: 'absolute',
        right: '0%',
        bottom: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }),
);

const Submit = styled(IconButton)(
    ({ theme, open }) => ({
        width: '80px',
        height: '80px',
        position: 'absolute',
        right: '0%',
        bottom: '0%',
    }),
);

const Cancel = styled(IconButton)(
    ({ theme, open }) => ({
        width: '80px',
        height: '80px',
        position: 'absolute',
        left: '0%',
        bottom: '0%',
    }),
);

const FormGroup = styled("div")(
    ({ theme, open }) => ({
        width: '80%',
        height: '50px',
        position: 'absolute',
        left: '0%',
        bottom: '0%',
    }),
);

const Form = styled("form")(
    ({ theme, open }) => ({
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        height: '50px',
        position: 'absolute',
        bottom: '50%',
    }),
);

const Input = styled("input")(
    ({ theme, open }) => ({
        width: "33%"
    }),
);

export default function TransactionPane({transactionContext}) {

    const [R, setR] = useState(0);
    const [G, setG] = useState(0);
    const [B, setB] = useState(0);

    const handleRChange = (event) => {
        const value = Math.max(0, Math.min(255, event.target.value)); // Ensure value is between 0 and 255
        setR(value);
    };

    const handleGChange = (event) => {
        const value = Math.max(0, Math.min(255, event.target.value)); // Ensure value is between 0 and 255
        setG(value);
    };

    const handleBChange = (event) => {
        const value = Math.max(0, Math.min(255, event.target.value)); // Ensure value is between 0 and 255
        setB(value);
    };

    return (
        <TransactionContainer>
            <Form>
                <Input type="number" min="0" max="255" value={R} onChange={handleRChange}/>
                <Input type="number" min="0" max="255" value={G} onChange={handleGChange}/>
                <Input type="number" min="0" max="255" value={B} onChange={handleBChange}/>
            </Form>
            <Submit onClick={() => transactionContext.submitTransaction(R, G, B)}>
                <SendIcon color='success'/>
            </Submit>
            <Cancel onClick={() => transactionContext.closeTransaction()} >
                <CancelIcon color='error' />
            </Cancel>
        </TransactionContainer>
    );
}