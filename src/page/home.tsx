import * as S from "./style";
import img from "../assets/img/R.jpg";

function Home() {
  return (
    <S.homeContainer>
      <img src={img} alt="Foto de uma cama" />
    </S.homeContainer>
  );
}

export default Home;
