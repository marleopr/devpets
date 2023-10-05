import { styled } from "styled-components";
import { goToHomePage } from "../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import devPets from "../assets/pets.png"

const Header = () => {
    const navigate = useNavigate()

    return (
        <Main>
            <div style={{ cursor: "pointer" }} onClick={() => goToHomePage(navigate)}>
                <ImgLogo src={devPets} />
            </div>
        </Main>
    )
}
export default Header;

const Main = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ImgLogo = styled.img`
    width: 35rem;
    margin: 10px;
    @media screen and (max-device-width: 480px) {
        width: 18rem;
  }
`