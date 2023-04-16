import { useEffect } from "react";

export default function About({setLoading}) {

    useEffect(() => {
        setLoading(false);
    },[])

    return (
        <>
            About
        </>
    );

}