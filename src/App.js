import {useEffect, useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./about/About";
import LoadingBar from "./canvas/LoadingBar";
import PixelCanvas from "./canvas/PixelCanvas";
import TopBar from "./topbar/TopBar";
import Wallet from "./wallet/Wallet";
import useWallet from "./hooks/useWallet";
import useContract from "./hooks/useContract";
import useLoading from "./hooks/useLoading";
import useCanvas from "./hooks/useCanvas";

function App() {

  const loadingContext = useLoading();
  const canvasContext = useCanvas(loadingContext);
  const walletContext = useWallet();
  const contractContext = useContract(canvasContext);

  return (
    <>
      {loadingContext.canvasLoading ? <LoadingBar /> : <></>}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopBar />}>
            <Route index path="Canvas" element={<PixelCanvas canvasContext={canvasContext} loadingContext={loadingContext} contractContext={contractContext}/>}/>
            <Route path="About" element={<About />}/>
            <Route path="Wallet" element={<Wallet walletContext={walletContext}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>    
  );
}

export default App;