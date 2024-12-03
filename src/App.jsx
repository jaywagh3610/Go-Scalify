import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AuthProvider } from "./utils/AuthProvider";
import HelloPage from "./pages/HelloPage";
import Pinterest from "./pages/Pinterest";
import PinterestMain from "./pages/PinterestMain";
import Images from "./pages/Images";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/hello" element={<HelloPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/pinterest" element={<Pinterest />} />
          <Route path="/pinterestmain" element={<PinterestMain />} />
          <Route path="/images" element={<Images />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
