import React from "react";
import { SavatchaStyled } from "./Savatcha.style";
import Card from "../../commonComponents/Card/Card";

const Savatcha = ({ setMahsulotlar, mahsulotlar }) => {
  const mahsulotniSavatchadanChiqarish = (chiqarmoqchiBolganMahsulot) => {
    setMahsulotlar(
      mahsulotlar.map((mahsulot) => {
        if (mahsulot.nomi === chiqarmoqchiBolganMahsulot.nomi && mahsulot.soni) {
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


  const onPlusClick = (soniOshayotganMahsulot) => {
    const yangiMaxsulotlar = mahsulotlar.map((mahsulot) => {
      if (mahsulot.nomi === soniOshayotganMahsulot.nomi) {
        return {
          ...mahsulot,
          soni: mahsulot.soni + 1,
        };
      } else {
        return mahsulot;
      }
    });
    setMahsulotlar(yangiMaxsulotlar);
  };
  const onMinusClick = (soniKamayayotganMahsulot) => {
    const yangiMaxsulotlar = mahsulotlar.map((mahsulot) => {
      if (mahsulot.nomi === soniKamayayotganMahsulot.nomi && mahsulot.soni > 0) {
        return {
          ...mahsulot,
          soni: mahsulot.soni - 1
          ,
        };
      } else {
        return mahsulot;
      }
    });
    setMahsulotlar(yangiMaxsulotlar);
  };
  // obshiy summa
  let obshiySumma = 0;
  const tanlanganMahsulotlar = mahsulotlar.filter(
    (mahsulot) => mahsulot.tanlanganmi === true
  );
  for (let i = 0; i < tanlanganMahsulotlar.length; i++) {
    obshiySumma =
      obshiySumma +
      tanlanganMahsulotlar[i].narxi * tanlanganMahsulotlar[i].soni;
  }
  // mahsulotlar soni 
  let mahsulotlarsoni = 0;
  const mahsulotsoni = mahsulotlar.filter(
    (mahsulot) => mahsulot.tanlanganmi === true
  );
  for (let i = 0; i < mahsulotsoni.length; i++) {
    mahsulotlarsoni =
      mahsulotlarsoni +
      mahsulotsoni[i].soni;
  }
  // mahsulotlar soni  

  return (
    <SavatchaStyled>
      <h3>Savatcha</h3>
      <h4>Umumiy maxsulotlar hisobi: ${obshiySumma}</h4>
      <h4>Umimiy mahsulotlar: {mahsulotlarsoni}</h4>
      <ul className="mahsulotlar-container">
        {tanlanganMahsulotlar.map((mahsulot) => (
          <Card
            key={mahsulot.nomi}
            mahsulot={mahsulot}
            onSavatchaClick={mahsulotniSavatchadanChiqarish}
            onPlusClick={onPlusClick}
            onMinusClick={onMinusClick}
          />
        ))}
      </ul>
    </SavatchaStyled>
  );
};

export default Savatcha;
