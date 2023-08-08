import React, { useState } from "react";
import { StyledCard } from "./Card.style";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Card = ({ mahsulot, onSavatchaClick, onPlusClick, onMinusClick }) => {
  return (
    <StyledCard>
      <li className="mahsulot-card">
        <img src={mahsulot.image} alt="" />
        <span>{mahsulot.nomi}</span>
        <div className="narxi">${mahsulot.narxi}</div>
        <button className="button-bir"
          // disabled={mahsulot.tanlanganmi}
          onClick={() => onSavatchaClick(mahsulot)}
        >
          {mahsulot.tanlanganmi === false
            ? "Savatchaga qo'shish"
            : " Savatchadan olish  "}
          <AddShoppingCartIcon />
        </button>
        
        {mahsulot.tanlanganmi === true && (
          <>
            <div className="mahsulotQoshish">
            <button onClick={() => onPlusClick(mahsulot)}>+</button>
            <h4>{mahsulot.soni}</h4>
            <button onClick={() => onMinusClick(mahsulot)}>-</button>
            </div>
          </>
        )}
      </li>
    </StyledCard>
  );
};

export default Card;
