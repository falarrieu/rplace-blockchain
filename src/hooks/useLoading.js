import {useState} from "react";


export default function useLoading() {

    const [canvasLoading, setCanvasLoading] = useState(false);

    return {
        canvasLoading,
        setCanvasLoading: (bool) => setCanvasLoading(bool)
    }

}