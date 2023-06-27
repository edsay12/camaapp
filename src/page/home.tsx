import * as S from "./style";
import img from "../assets/img/R.jpg";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
  return (
    <>
      <S.homeContainer>
        <img src={img} alt="Foto de uma cama" />
      </S.homeContainer>
      <S.anuncio>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-8231164361310670"
          data-ad-slot="5719652690"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </S.anuncio>
    </>
  );
}

export default Home;
