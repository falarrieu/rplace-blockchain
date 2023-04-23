import Web3 from "web3";
import pixelCanvasABI from '../abi/PixelCanvas.json'
import {useState} from "react";

let web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:7545')); // Ganache RPC Server
const contractAddress = '0xfa175964B2EF5309c2C96DDC3c4f65A356524e16';
const contract = new web3.eth.Contract(pixelCanvasABI.abi, contractAddress);

export default function useContract(canvasContext) {

    const [account, setAccount] = useState('0x8b09C9f0f33Fd60d33FD30e4b9290C1B3c3f6AcD');
    const context = {account};

    contract.events.PixelUpdated({}, (error, event) => {
        if (error) console.log(error);
        const {x, y, color} =  event.returnValues;
        canvasContext.changePixel(
            parseInt(x),
            parseInt(y),
            [parseInt(color[0]), parseInt(color[1]), parseInt(color[2])]
        );
    });

    return {
        updatePixel: (x, y, color) => updatePixel(x, y, color, context),
        getPixel: (x, y) => getPixel(x, y, context)
    }
}

function updatePixel(x, y, color, context) {
    const {account} = context;
    contract.methods.updatePixel(x, y, color).send({ from: account, gas:'800000' }) // Had to set this gas to fix out of gas error
        .on('transactionHash', (hash) => {
            // console.log(`Transaction hash: ${hash}`);
        })
        .on('receipt', (receipt) => {
            // console.log(`Receipt: ${JSON.stringify(receipt, null, 2)}`);
        })
        .on('error', (error) => {
            console.error(error);
        });
}

function getPixel(x, y, context) {
    const {account} = context;
    contract.methods.getPixel(x, y).call({ from: account })
        .then((result) => {
            // console.log(`Pixel data: ${JSON.stringify(result, null, 2)}`);
        })
        .catch((error) => {
            console.error(error);
        });
}