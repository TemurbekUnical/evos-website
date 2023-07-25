import { styled } from "styled-components";

export const StyledMostSold = styled.div`
  margin-top: 4rem;
  height: 400px;
  margin-bottom: 4rem;
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    height: 70%;
    margin: auto;

    
    text-align: center;
    font-size: 18px;
    background: #fff;
    border: #000 1px solid;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-slide-active {
    transform: scale(1.1);
    transition: 0.3s;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
