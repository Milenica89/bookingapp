import {
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Pocetna from './stranice/pocetna/Pocetna';
import List from './stranice/list/List';
import Hoteli from "./stranice/hoteli/Hoteli";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pocetna/>}/>
        <Route path="/hoteli" element={<List/>}/>
        <Route path="/hoteli/:id" element={<Hoteli/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
