import {useEffect, useState} from "react";


export default function useData() {

    const [data, setData] = useState([])
    const [fakeData, setFakeData] = useState([])

    const hookContext = {setData, setFakeData}

    useEffect( () => {
        // This will be replaced with the fetch the array on the smart contract
        generateFakeData().then(response => setFakeData(response))
    }, []);

    useEffect( () => {
        transformData(hookContext, fakeData);
    }, [fakeData]);

    return {
        data,
    };
}

function transformData(hookContext, testData) {
    const flatArray = testData.flat()
    const transformed = flatArray.map((pixel) => {
        const bottomLeft = [pixel.index[0] * 10, pixel.index[1] * 10]
        const topLeft = [pixel.index[0] * 10,( pixel.index[1] + 1) * 10]
        const topRight = [( pixel.index[0] + 1) * 10, ( pixel.index[1] + 1) * 10]
        const bottomRight = [( pixel.index[0] + 1) * 10, pixel.index[1] * 10]
        return {
            polygon: [bottomLeft, topLeft, topRight, bottomRight, bottomLeft],
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
                //Other Data ?
            }
        })
    })
    return fakeData;
}

