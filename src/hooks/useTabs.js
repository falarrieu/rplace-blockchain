import { useState } from "react";

/**
 * Use tabs hook encapsulates state and logic for tab components.
 * @return {Objext}      Context to hook.
 */
export default function useTabs() {

    const [tab, setTab] = useState("Canvas");

    const hookContext = {tab, setTab};

    return {
        tab,
        openTab: (newTab) => openTab(newTab, hookContext),
    }
}

function openTab(newTab, hookContext){
    hookContext.setTab(newTab);
}