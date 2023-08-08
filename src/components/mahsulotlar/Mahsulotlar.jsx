import React, { useState } from "react";
import Card from "../../commonComponents/Card/Card";
import { MahsulotlarStyled } from "./Mahsulotlar.style";

const Mahsulotlar = ({ mahsulotlar, setMahsulotlar }) => {
  const mahsulotTanlash = (tanlanganMahsulot) => {
    const yangiMahsulotlar = mahsulotlar.map((mahsulot) => {
      if (mahsulot.nomi === tanlanganMahsulot.nomi) {
        return {
          ...mahsulot,
          tanlanganmi: true,
          soni: 1,
        };
      } else {
        return mahsulot;
      }
    });
    setMahsulotlar(yangiMahsulotlar);
  };

  const [saqlanganMahsulotlar, setSaqlanganMahsulotlar] = useState(mahsulotlar);
  const mahsulotlarniIzlash = (izlanayotganText) => {
    if (izlanayotganText) {
      setSaqlanganMahsulotlar(
        mahsulotlar.filter((maxsulot) =>
          maxsulot.nomi.toLowerCase().includes(izlanayotganText.toLowerCase())
        )
      );
    } else {
      setSaqlanganMahsulotlar(mahsulotlar);
    }
  };
  return (
    <MahsulotlarStyled>
      <h3>Mavjud mahsulotlar</h3>
      <h4>Umumiy maxsulotlar soni: HOMEWORK%UMUMIY MAHSULOTLAR SONI%</h4>
      <input
        type="text"
        className="search-input"
        onChange={(e) => mahsulotlarniIzlash(e.target.value)}
        placeholder="izlash..."
      />
      <ul className="mahsulotlar-container">
        {saqlanganMahsulotlar.map((mahsulot) => (
          <Card
            key={mahsulot.nomi}
            mahsulot={mahsulot}
            onSavatchaClick={mahsulotTanlash}
          />
        ))}
      </ul>
    </MahsulotlarStyled>
  );
};

export default Mahsulotlar;
