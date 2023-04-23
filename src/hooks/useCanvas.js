import {useEffect, useState} from "react";

const CANVAS_SIZE = 100;

/**
 * Use data hook encapsulates logic for data retrieval, proccessing and relevant 
 * states needed for the UI.
 * @param  {Callback} setLoading Sets state of loading component
 */
export default function useCanvas(loadingContext) {

    const [data, setData] = useState([])
    const [fakeData, setFakeData] = useState([])

    const context = {
        data,
        fakeData,
        setData,
        setFakeData
    }

    useEffect( () => {
        // This will be replaced with the fetch the array on the smart contract
        generateFakeData().then(response => setFakeData(response))
    }, []);

    useEffect( () => {
        transformData(context, fakeData);
        loadingContext.setCanvasLoading(false);
    }, [fakeData]);

    return {
        data,
        setData: (data) => setData(data),
        changePixel: (x, y, color) => changePixel(x, y, color, context)
    };
}

/**
 * This function changes the color of a pixel. It is called from the contract event
 * listener (PixelUpdates).
 * @param  {x} xIndex
 * @param  {y} yIndex
 * @param  {Array} color RGB
 * @param  {Object} context Context to useCanvas hook

 *
 */
function changePixel(x,y, color, context) {
    const { data, setData }  = context;
    if(data.length > 0) {
        const clickedShape = data[x * CANVAS_SIZE + y];
        clickedShape.color = color;
        setData([...data])
    }
}

/**
 * This function transform 2D index of the pixel into polygon geometry. After,
 * transforming it sets the data state in the hook.
 * @param  {Object} context Context to useCanvas hook
 * @param  {2D Array} pixelData Pixels with relevant data
 */
function transformData(context, pixelData) {
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
    context.setData(transformed)
}

async function generateFakeData(){
    const width = new Array(CANVAS_SIZE).fill(0);
    const height = new Array(CANVAS_SIZE).fill(0);

    const fakeData = width.map((value, x) => {
        return height.map((value, y) => {
            return {
                index: [x, y],
                color: [
                    250,
                    250,
                    250,
                    ],
                numPurchases: Math.floor(Math.random() * (x + y))
            }
        })
    })
    return fakeData;
}

