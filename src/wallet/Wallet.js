import { useEffect } from "react";


export default function Wallet({setLoading}) {

    useEffect(() => {
        setLoading(false);
    },[])

    return (
        <>
            Wallet
        </>
    );
}