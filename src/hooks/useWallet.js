import {useEffect, useState} from "react";
import {ethers} from "ethers";

export default function useWallet() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [walletAccessible, setWalletAccessible] = useState(false);
    const [address, setAddress] = useState(undefined);
    const [balance, setBalance] = useState(undefined);

    const context = {
        loggedIn,
        setLoggedIn,
        walletAccessible,
        setWalletAccessible,
        address,
        setAddress,
        balance,
        setBalance
    };

    useEffect(() => {
        if(window.ethereum){
            setWalletAccessible(true);
            requestAddress(context);
            requestBalance(context);

        }else{
            setWalletAccessible(false);
        }
    }, [address,balance])


    return {
        address,
        balance
    }
}

function requestAddress(context) {

    const {setAddress} = context;

    window.ethereum.request({method:'eth_requestAccounts'})
        .then(address =>{ setAddress(address[0]) })
}

function requestBalance(context) {

    const {address, setBalance} = context;

    if(address) {
        window.ethereum.request({
            method:'eth_getBalance',
            params: [address, 'latest']
        }).then(balance => {
            const formattedBalance = ethers.utils.formatEther(balance);
            setBalance(formattedBalance);
        })
    }
}



