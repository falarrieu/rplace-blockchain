import React from "react";
import {Tab, Tabs} from "@mui/material";
import styled from "@emotion/styled";
import PaletteIcon from '@mui/icons-material/Palette';
import InfoIcon from '@mui/icons-material/Info';
import WalletIcon from '@mui/icons-material/Wallet';
import { Link } from "react-router-dom";

const AlignedTabs = styled(Tabs)(() => ({
	"& .MuiTab-root": {
        display:"flex",
		justifyContent: 'start', 
		minWidth:0, 
		minHeight: '48px',
		paddingLeft:'8px',
		whiteSpace: 'nowrap',
	},
	"& button:focus": { 
		outline: "none"
	},
    "& .MuiTabs-flexContainer": {
        display:"flex",
		justifyContent: 'center', 
	},
}));

export default function TopBarTabs({expanded, tabsContext}){

	return (
		<AlignedTabs
			orientation="horizontal"
			variant="standard"
			value={tabsContext.tab}
			onChange={(e,newTab) => tabsContext.openTab(newTab)}
		>
			<Tab
				value={"Canvas"}
				label={expanded ? "Canvas" : ""}
				style={{ color: "rgb(255 106 0)" }}
				icon={<PaletteIcon style={{ color: "rgb(90 90 90)" }}/>}
				iconPosition="start"
				component={Link}
				to={"/Canvas"}
			/>
            <Tab 
                value={"About"}
                label={expanded ? "About" : ""} 
		style={{ color: "rgb(255 106 0)" }}
                icon={<InfoIcon style={{ color: "rgb(90 90 90)" }}/>} 
                iconPosition="start" 
            />
			<Tab 
                value={"Wallet"}
                label={expanded ? "Wallet" : ""} 
		style={{ color: "rgb(255 106 0)" }}
                icon={<WalletIcon style={{ color: "rgb(90 90 90)" }}/>} 
                iconPosition="start" 
				component={Link}
				to={"/Wallet"}
            />
		</AlignedTabs>
	);

}