import axios from "axios"
import { useEffect, useState } from "react"
import { Input, InputGroup } from "@chakra-ui/react"
import useDebounce from "../components/useDebounce"
import DogLoader from "../components/DogLoader"
import pets from "../assets/dogBook.png"
import styled from "styled-components"
import StarRatingDogs from "../components/StarRatingDogs"

const SearchDogs = () => {
    const [raca, setRaca] = useState("")
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const handleDog = async () => {
        setData(null)
        setLoading(true)
        try {
            const res = await axios.get(
                `https://api.api-ninjas.com/v1/dogs?name=${debouncedNome}`, {
                headers: {
                    "X-Api-Key": "YtA/hp1dJPMZV9EDd+3N5A==anZ5RkxSFcD13OyS"
                },
            })
            setData(res.data)
            setLoading(false)
            // console.log(res.data)
            // console.log(res.data[0].name)
        } catch (error) {
            console.log(error)
            setLoading(false)
            console.log("Raça não encontrada")
        }
    }
    const debouncedNome = useDebounce(raca, 700)

    useEffect(() => {
        if (debouncedNome) {
            handleDog()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedNome])

    return (
        <Main>
            <InputContainer>
                <InputGroup>
                    <Input type="text" placeholder="Procure por uma raça..." value={raca} onChange={(event) => setRaca(event.target.value)} />
                </InputGroup>
                {/* <ButtonAll label='Buscar' isDisabled={!raca} onClick={handleDog} /> */}
            </InputContainer>

            <div style={{ color: 'white' }} >
                {loading ? (
                    <DogLoader />
                ) : (
                    data && data ? (
                        <StarRatingDogs data={data} />
                    ) : (
                        <img style={{ marginTop: '10px', width: '40rem' }} src={pets} alt="pets" />
                    )
                )}
            </div>
        </Main>
    )
}
export default SearchDogs
const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const InputContainer = styled.div`
    width: 22rem;
    display: flex;
    justify-content: center;
    align-items: center;
`