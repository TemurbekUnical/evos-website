import React from "react";

const Mahsulotlar = ({ mahsulotlar, setMahsulotlar }) => {
  const mahsulotTanlash = (tanlanganMahsulot) => {
    setMahsulotlar(
      mahsulotlar.map((mahsulot) => {
        if (mahsulot.nomi === tanlanganMahsulot.nomi) {
          return {
            ...mahsulot,
            tanlanganmi: true,
          };
        } else {
          return mahsulot;
        }
      })
    );
  };

  return (
    <>
      <h3>Mavjud mahsulotlar</h3>
      <ul>
        {mahsulotlar.map((mahsulot) => (
          <li>
            <button
              disabled={mahsulot.tanlanganmi}
              onClick={() => mahsulotTanlash(mahsulot)}
            >
              {mahsulot.nomi}
            </button>
            <span>${mahsulot.narxi}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Mahsulotlar;
