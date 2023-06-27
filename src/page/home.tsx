import * as S from "./style";
import img from "../assets/img/R.jpg";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const pushAd = () => {
      try {
        const adsbygoogle = window.adsbygoogle
        console.log({ adsbygoogle })
        adsbygoogle.push({})
      } catch (e) {
        console.error(e)
      }
    }

    const interval = setInterval(() => {
      // Check if Adsense script is loaded every 300ms
      if (window.adsbygoogle) {
        pushAd()
        // clear the interval once the ad is pushed so that function isn't called indefinitely
        clearInterval(interval)
      }
    }, 300)

    return () => {
      clearInterval(interval)
    }
  }, [])
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
          data-adtest="'on"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
       
      </S.anuncio>
    </>
  );
}

export default Home;
