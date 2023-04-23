import React, {useEffect, useState} from 'react';
import DeckGL from '@deck.gl/react';
import {SolidPolygonLayer} from '@deck.gl/layers';
import useViews from "../hooks/useViews";
import TransactionPane from "./TransactionPane";
import useTransaction from "../hooks/useTransaction";

/**
 * Component that encapsulated the rendering of the canvas.
 * @param  {Callback} setLoading Sets the loading state.
 * @return {DeckGL}      The DeckGL rendering component
 */
function PixelCanvas({canvasContext,loadingContext, contractContext}) {

    const viewContext = useViews();
    const transactionContext = useTransaction(canvasContext, contractContext);
    const [viewState, setViewState] = useState({target: [5000, 5000], zoom: -3.5})

    const pixelLayer = new SolidPolygonLayer({
        id:"pixelLayer",
        data: canvasContext.data,
        getPolygon: d => d.polygon,
        getFillColor: d => d.color,
        onClick: d => transactionContext.openTransaction(d),
        pickable: true,
        autoHighlight: true,
        highlightColor: d => [250,250,250, 150],
        updateTriggers: {
            getFillColor: d => d.color
        }
        // extruded: true,  To be implemented with the 3D viewer (GPU Heavy)
        // getElevation: d => d.numPurchases
    })

    return (
        <>
            {transactionContext.transactionPaneOpen ? <TransactionPane transactionContext={transactionContext}/> : null}
            <DeckGL
                viewState={viewState}
                onViewStateChange={e => {
                    setViewState(e.viewState)}
                }
                views={viewContext.views}
                controller={true}
                layers={pixelLayer}
            />
        </>
    );
}

export default PixelCanvas;

