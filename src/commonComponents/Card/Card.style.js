import styled from "styled-components";

export const StyledCard = styled.div`
.mahsulot-card:hover{
  transition: 0.3s;
  transform: scale(1.1);
}
button {
  cursor: pointer;
}
  .mahsulot-card {
    padding: 0;
    list-style: none;
    width: 150px;
    border: 1px solid #888888;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    justify-content: center;
  
    
    .button-bir {
      background: rgb(37,190,205);
      background: linear-gradient(90deg, rgba(37,190,205,1) 9%, rgba(150,180,190,0.9976365546218487) 100%);
      width: 100%;
      border: none;
      cursor: pointer;
      border-radius: 10px;
      color: white;
      padding: 3px;
      font-size: 14px;
      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
    img {
      border-radius: 10px;
      width: 100%;
    }
    .narxi {
      text-align: center;
      
    }
    .mahsulotQoshish{
      border: 1px solid #fff;
      border-radius: 10px;
      margin-top: 2px;
      display: flex;
      border-radius: 1px solit;
      button{
        width: 100%;
        height: 2rem;
        font-size: 25px;
        border-radius: 10px;
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
      h4{
        margin: 0;
      }
    
    }
  }
`;
