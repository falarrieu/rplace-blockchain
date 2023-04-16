import {useEffect, useState} from "react";


/**
 * Use data hook encapsulates logic for data retrieval, proccessing and relevant 
 * states needed for the UI.
 * @param  {Callback} setLoading Sets state of loading component
 */
export default function useData(setLoading) {

    const [data, setData] = useState([])
    const [fakeData, setFakeData] = useState([])

    const hookContext = {setData, setFakeData}

    useEffect( () => {
        // This will be replaced with the fetch the array on the smart contract
        // generateFakeData().then(response => setFakeData(response))
    }, []);

    useEffect( () => {
        transformData(hookContext, fakeData);
        setLoading(false);
    }, [fakeData]);

    return {
        data,
    };
}


/**
 * This function transform 2D index of the pixel into polygon geometry. After,
 * transforming it sets the data state in the hook.
 * @param  {Object} hookContext Context to useData hook
 * @param  {2D Array} pixelData Pixels with relevant data
 */
function transformData(hookContext, pixelData) {
    const flatArray = pixelData.flat()
    const transformed = flatArray.map((pixel) => {
        const bottomLeft = [pixel.index[0] * 10, pixel.index[1] * 10]
        const topLeft = [pixel.index[0] * 10,( pixel.index[1] + 1) * 10]
        const topRight = [( pixel.index[0] + 1) * 10, ( pixel.index[1] + 1) * 10]
        const bottomRight = [( pixel.index[0] + 1) * 10, pixel.index[1] * 10]
        return {
            polygon: [bottomLeft, topLeft, topRight, bottomRight, bottomLeft],
            index: pixel.index,
            color: pixel.color,
            numPurchases: pixel.numPurchases
        }
    })
    hookContext.setData(transformed)
}

async function generateFakeData(){
    const width = new Array(1000).fill(0);
    const height = new Array(1000).fill(0);

    const fakeData = width.map((value, x) => {
        return height.map((value, y) => {
            return {
                index: [x, y],
                color: [
                    Math.floor(Math.random() * 255),
                    Math.floor(Math.random() * 255),
                    Math.floor(Math.random() * 255)],
                numPurchases: Math.floor(Math.random() * (x + y))
            }
        })
    })
    return fakeData;
}

