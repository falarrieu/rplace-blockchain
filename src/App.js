import {useState} from "react";
import LoadingBar from "./canvas/LoadingBar";
import PixelCanvas from "./canvas/PixelCanvas";
import TopBar from "./topbar/TopBar";

function App() {

  const [loading, setLoading] = useState(true);

  return (
    < >
      <TopBar />
      {loading ? <LoadingBar /> : <></>}
      <PixelCanvas setLoading={setLoading}/>
    </>
  );
}

export default App;
