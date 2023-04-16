import React from "react";
import FullLogoWhite from '../static/FullLogoWhite.png'

export default function Logo({expanded}){

	return (
        <FullLogoComponent />
	);

}

function FullLogoComponent() {
    return (
        <img src={FullLogoWhite} alt="FullLogo"  style={{ 
            position: 'fixed',
            left: 0,
            height: '44px',
        }}/>
    );
}