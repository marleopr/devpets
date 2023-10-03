import { useNavigate } from "react-router-dom"
import { goToInfo, goToSearchtabela } from "../routes/Coordinator"

const RadioCyberButton = () => {
    const navigate = useNavigate()

    return (
        <div className="container">
            <div className="radio-wrapper">
                <input onClick={() => goToSearchtabela(navigate)} className="input" name="btn" id="value-1" type="radio" />
                <div className="btn">
                    <span aria-hidden="false">_</span>FIPE
                    <span className="btn__glitch" aria-hidden="false">_FIPE</span>
                    <label className="number">$</label>
                </div>
            </div>
            <div className="radio-wrapper">
                <input onClick={() => goToInfo(navigate)} className="input" name="btn" id="value-2" checked="true" type="radio" />
                <div className="btn">
                    _Info<span aria-hidden="false">_</span>
                    <span className="btn__glitch" aria-hidden="false">_Info</span>
                    <label className="number">i</label>
                </div>
            </div>
            {/* <div className="radio-wrapper">
                <input onClick={() => goToInfo(navigate)} className="input" name="btn" id="value-3" type="radio" />
                <div className="btn">
                    Buttons<span aria-hidden=""></span>
                    <span className="btn__glitch" aria-hidden="">Buttons_</span>
                    <label className="number">r3</label>
                </div>
            </div> */}
        </div>


    )
}
export default RadioCyberButton