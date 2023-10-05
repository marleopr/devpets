import styled from "styled-components"
import MenuDog from "../assets/ButtonDog.png"
import MenuCat from "../assets/ButtonCat.png"
import { goToSearchCats, goToSearchDogs } from "../routes/Coordinator"
import { useNavigate } from "react-router-dom"

const RadioButtonPets = () => {
    const navigate = useNavigate()

    return (
        <Main>
            <Imagem onClick={() => goToSearchDogs(navigate)} src={MenuDog} alt="MenuDog" />
            <Imagem onClick={() => goToSearchCats(navigate)} src={MenuCat} alt="MenuCat" />
        </Main>
    )
}
export default RadioButtonPets
const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const Imagem = styled.img`
    width: 150px;
    margin: 10px;
    &:hover {
    cursor: pointer;
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    }
`