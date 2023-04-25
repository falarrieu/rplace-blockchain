import { Box, Typography, useTheme } from "@material-ui/core";
import React, { useState } from "react";
import useTabs from "../hooks/useTabs";
import MiniDrawer from "./MiniDrawer";
import TopBarTabs from "./TopBarTabs";
import Logo from "./Logo";
import { Outlet} from "react-router-dom";


export default function TopBar() {


    const [expanded, setExpanded] = useState(false);
    const tabsContext = useTabs();

    const theme = useTheme();

    return (
        <>
            <MiniDrawer
                open={expanded}
                variant="permanent"
                anchor="top"
                theme={theme} // Don't know why I need to pass it through
                onMouseEnter={() => setExpanded(true)}
                onMouseLeave={() => setExpanded(false)}
            >
                <Logo  expanded={expanded} />
                <TopBarTabs expanded={expanded} tabsContext={tabsContext} />
            </MiniDrawer>
            <Outlet />
        </>       
    );
}