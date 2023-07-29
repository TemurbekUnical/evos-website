import React from "react";

const Savatcha = ({ setMahsulotlar, mahsulotlar }) => {
  const mahsulotniSavatchadanChiqarish = (chiqarmoqchiBolganMahsulot) => {
    setMahsulotlar(
      mahsulotlar.map((mahsulot) => {
        if (mahsulot.nomi === chiqarmoqchiBolganMahsulot.nomi) {
          return {
            ...mahsulot,
            tanlanganmi: false,
          };
        } else {
          return mahsulot;
        }
      })
    );
  };
  return (
    <>
      <h3>Savatcha</h3>
      <ul className="savatcha">
        {mahsulotlar
          .filter((mahsulot) => mahsulot.tanlanganmi === true)
          .map((mahsulot) => (
            <button onClick={() => mahsulotniSavatchadanChiqarish(mahsulot)}>
              {mahsulot.nomi}
            </button>
          ))}
      </ul>
    </>
  );
};

export default Savatcha;
