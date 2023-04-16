import React, {useState} from 'react';
import {OrbitView, OrthographicView, MapView, GlobeView} from '@deck.gl/core';
export default function useViews() {

    const ortho = new OrthographicView({
        id: "ortho"
    });

    const orbit = new OrbitView({
        id: "orbit",
        target: [5000,5000],
        orbitAxis: 'Y',
    })

    const [views, setViews] = useState([ortho])


    return {
        views
    };
}