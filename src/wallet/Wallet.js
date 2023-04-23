import { useEffect } from "react";
import {Paper} from "@mui/material";
import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";

const Balance = styled(Typography)(
    ({ theme, open }) => ({
        fontsize: '3rem'
    }),
);

const Address = styled(Typography)(
    ({ theme, open }) => ({
        fontsize: '1rem'
    }),
);


const WalletContainer = styled(Paper)(
    ({ theme, open }) => ({
        width: '500px',
        height: '500px',
    }),
);

export default function Wallet({walletContext}) {

    return (
        <div>
            <WalletContainer>
                <Address>
                    {walletContext.address}
                </Address>
                <Balance >
                    Balance: {walletContext.balance}
                </Balance>
            </WalletContainer>
        </div>
    );
}