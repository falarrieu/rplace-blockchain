import {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./about/About";
import LoadingBar from "./canvas/LoadingBar";
import PixelCanvas from "./canvas/PixelCanvas";
import TopBar from "./topbar/TopBar";
import Wallet from "./wallet/Wallet";

function App() {

  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? <LoadingBar /> : <></>}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopBar />}>
            <Route index path="Canvas" element={<PixelCanvas setLoading={setLoading}/>}/>
            <Route path="About" element={<About setLoading={setLoading}/>}/>
            <Route path="Wallet" element={<Wallet setLoading={setLoading}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>    
  );
}

export default App;


{/* < >
<TopBar />
{loading ? <LoadingBar /> : <></>}
<PixelCanvas setLoading={setLoading}/>
</> */}