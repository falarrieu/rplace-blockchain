import React, {useState} from 'react';
import DeckGL from '@deck.gl/react';
import {SolidPolygonLayer} from '@deck.gl/layers';
import useViews from "./hooks/useViews";
import useData from "./hooks/useData";
function PixelCanvas() {

    const viewContext = useViews();
    const dataContext = useData();

    const [viewState, setViewState] = useState({target: [5000, 5000], zoom: -3.5})

    const pixelLayer = new SolidPolygonLayer({
        id:"pixelLayer",
        data: dataContext.data,
        getPolygon: d => d.polygon,
        getFillColor: d => d.color,
        pickable: true,
        autoHighlight: true,
        highlightColor: d => [250,250,250, 150],
        // extruded: false,
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

