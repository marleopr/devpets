import { useNavigate } from "react-router-dom"
import { goToHomePage } from "../routes/Coordinator"
import pageNotFound from "../assets/pagina-nao-encontrada.png"
import dogErrorPage from '../assets/dogErrorPage.jpg'
import styled from "styled-components"

const ErrorPage = () => {
    const navigate = useNavigate()

    return (
        <Main>
            <h1 style={{ color: 'white', textShadow: '-1px 0 black, 0 1px #0a37ff, 1px 0 #ff0000, 0 -1px rgb(0, 81, 255)' }}>Página não encontrada</h1>
            <img src={pageNotFound} alt="Page Not Found" style={{ width: '100px', marginBottom: '20px' }} />
            <button onClick={() => goToHomePage(navigate)} style={{ width: '180px', marginBottom: '50px' }} className="buttonAll">Voltar ao início</button>
        </Main >

    )
}
export default ErrorPage
const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;
    background-image: url(${dogErrorPage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: radial-gradient(circle, rgba(33,33,33,1) 0%, rgba(1,21,34,1) 100%);
`