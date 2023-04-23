import {useState} from "react";

export default function useTransaction(canvasContext, contractContext) {

    const [transactionPaneOpen, setTransactionPaneOpen] = useState(false);
    const [pixel, setPixel] = useState({});

    const context = {
        canvasContext,
        setTransactionPaneOpen,
        pixel,
        setPixel,
        contractContext
    };

    return {
        transactionPaneOpen,
        closeTransaction: () => setTransactionPaneOpen(false),
        openTransaction: (selectedPixel) => openTransaction(selectedPixel, context),
        submitTransaction: (R, G, B) => submitTransaction(R, G, B, context)
    }
}

function openTransaction(selectedPixel, context) {
    const {setTransactionPaneOpen, setPixel} = context;
    setPixel(selectedPixel);
    setTransactionPaneOpen(true);
}
function submitTransaction(R, G, B, context) {
    const {pixel, setTransactionPaneOpen, contractContext} = context;
    const {object} = pixel
    contractContext.updatePixel(object.index[0], object.index[1], [R, G, B])
    setTransactionPaneOpen(false);
}