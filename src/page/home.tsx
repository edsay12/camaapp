import * as S from "./style";
import img from "../assets/img/R.jpg";

function Home() {
  return (
    <>
      <S.homeContainer>
        <img src={img} alt="Foto de uma cama" />
      </S.homeContainer>
      <S.anuncio>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8231164361310670"
          crossOrigin="anonymous"
        ></script>

        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-8231164361310670"
          data-ad-slot="5719652690"
          data-adtest="'on"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </S.anuncio>
    </>
  );
}

export default Home;
