import { useState } from "react";
import Savatcha from "./components/savatcha/Savatcha";
import Mahsulotlar from "./components/mahsulotlar/Mahsulotlar";
import { dataMahsulotlar } from "./bekendData/mahsulotlar";
import { AppStyled } from "./App.style";

function App() {
  const [mahsulotlar, setMahsulotlar] = useState(dataMahsulotlar);

  return (
    <AppStyled className="container">
      <Mahsulotlar mahsulotlar={mahsulotlar} setMahsulotlar={setMahsulotlar} />
      <Savatcha mahsulotlar={mahsulotlar} setMahsulotlar={setMahsulotlar} />
    </AppStyled>
  );
}

export default App;
