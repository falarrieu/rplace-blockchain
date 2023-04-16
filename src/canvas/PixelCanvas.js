import React, {useEffect, useState} from 'react';
import DeckGL from '@deck.gl/react';
import {SolidPolygonLayer} from '@deck.gl/layers';
import useViews from "../hooks/useViews";
import useData from "../hooks/useData";

/**
 * Component that encapsulated the rendering of the canvas.
 * @param  {Callback} setLoading Sets the loading state.
 * @return {DeckGL}      The DeckGL rendering component
 */
function PixelCanvas({setLoading}) {

    const viewContext = useViews();
    const dataContext = useData(setLoading);

    const [viewState, setViewState] = useState({target: [5000, 5000], zoom: -3.5})

    useEffect(() => {
        setLoading(true);
    }, [])

    const pixelLayer = new SolidPolygonLayer({
        id:"pixelLayer",
        data: dataContext.data,
        getPolygon: d => d.polygon,
        getFillColor: d => d.color,
        pickable: true,
        autoHighlight: true,
        highlightColor: d => [250,250,250, 150],
        // extruded: true,  To be implemented with the 3D viewer (GPU Heavy)
        // getElevation: d => d.numPurchases
    })

    return (
        <DeckGL
            viewState={viewState}
            onViewStateChange={e => {
                setViewState(e.viewState)}
            }
            views={viewContext.views}
            controller={true}
            layers={pixelLayer}
        />
    );
}

export default PixelCanvas;

