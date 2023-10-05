import { useNavigate } from "react-router-dom"
import { goToInfo } from "../routes/Cordinator"
import { goToSearchCats, goToSearchDogs } from "../routes/Coordinator"
// import './radioButtons.css'

const RadioButtons = () => {
    const navigate = useNavigate()

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <label onClick={() => goToSearchDogs(navigate)} id="topleft" className="containerHome">
                <input name="my-radio-button" type="radio" />
                <label id="tl"> <br />Placa</label>
                <div className="selected"></div>
            </label>
            &nbsp;
            <label onClick={() => goToSearchCats(navigate)} id="topright" className="containerHome">
                <input name="my-radio-button" type="radio" />
                <label id="tr"><br />Tabela</label>
                <div className="selected"></div>
            </label>
            <br>
            </br>
            <label onClick={() => goToInfo(navigate)} id="bottomleft" className="containerHome">
                <input name="my-radio-button" type="radio" />
                <label id="bl"> <br />+Info</label>
                <div className="selected"></div>
            </label>
            &nbsp;
            {/* <label onClick={() => goToTaxas(navigate)} id="bottomright" className="containerHome">
                <input name="my-radio-button" type="radio" />
                <label id="br"> <br />Taxas</label>
                <div className="selected"></div>
            </label> */}
        </div>
    )
}
export default RadioButtons