import { useState } from "react";
import Savatcha from "./components/Savatcha";
import Mahsulotlar from "./components/Mahsulotlar";
import { dataMahsulotlar } from "./bekendData/mahsulotlar";

function App() {
  const [sum, setSum] = useState(1);
  const [mahsulotlar, setMahsulotlar] = useState(dataMahsulotlar);

  const add = () => {
    setSum(sum + 1);
  };
  const remove = () => {
    setSum(sum - 1);
  };

  return (
    <div className="container">
      <Mahsulotlar mahsulotlar={mahsulotlar} setMahsulotlar={setMahsulotlar} />
      <Savatcha mahsulotlar={mahsulotlar} setMahsulotlar={setMahsulotlar} />

      {/* <h3>Mahsulot hisoboti</h3>
      <h4>Narxi: 5000</h4>
      <h4>Mavjud: 10</h4>
      <div>
        <button disabled={sum === 10 ? true : false} onClick={add}>
          +
        </button>
        <span>{sum}</span>
        <button disabled={sum === 0 ? true : false} onClick={remove}>
          -
        </button>
      </div>
      <h4>Umumiy narx: {sum * 5000}</h4>
      <h4>Bo'lib to'lashga (12 oy): {Math.floor((sum * 5000) / 12)}</h4> */}
    </div>
  );
}

export default App;
