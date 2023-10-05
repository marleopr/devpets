const StarRatingDogs = ({ data }) => {

    const getStar = (status) => {
        const starDict = {
            1: <div className="stars">★</div>,
            2: <div className="stars">★★</div>,
            3: <div className="stars">★★★</div>,
            4: <div className="stars">★★★★</div>,
            5: <div className="stars">★★★★★</div>,
        }
        return starDict[status] || "★"
    }

    const polegadasParaCm = (polegadas) => {
        return polegadas * 2.54.toFixed(1)
    }

    const librasParaQuilos = (libras) => {
        return libras / 2
    }

    return (
        <div>
            {data.map((item, index) => {
                return (
                    <div key={index}>
                        <div>
                            <div className="card">
                                <div className="card-image"><img style={{ borderRadius: '5px', width: '315px', height: '210px', objectFit: 'fill' }} src={item.image_link} alt={item.image_link} /></div>
                                <div className="category"> {item.name} </div>
                                <div className="author"><div className="authorFixed">Altura máxima:</div>{polegadasParaCm(item.max_height_female)} cm (femea) - {polegadasParaCm(item.max_height_male)} cm (macho)</div>
                                {/* <div className="heading"> */}
                                <div className="author"><div className="authorFixed">Peso máximo:</div>{librasParaQuilos(item.max_weight_female)} kg (femea) - {librasParaQuilos(item.max_weight_male)} kg (macho) </div>
                                <div className="author"><div className="authorFixed">Expectativa de vida:</div> {item.min_life_expectancy} a {item.max_life_expectancy} anos</div>
                                <div className="author"><div className="authorFixed">Latidos:</div> {getStar(item.barking)}</div>
                                <div className="author"><div className="authorFixed">Baba:</div>  {getStar(item.drooling)}</div>
                                <div className="author"><div className="authorFixed">Energia:</div>{getStar(item.energy)}</div>
                                <div className="author"><div className="authorFixed">Bom com crianças:</div>{getStar(item.good_with_children)}</div>
                                <div className="author"><div className="authorFixed">Bom com outros cães:</div>{getStar(item.good_with_other_dogs)}</div>
                                <div className="author"><div className="authorFixed">Bom com estranhos:</div>{getStar(item.good_with_strangers)}</div>
                                <div className="author"><div className="authorFixed">Higiene:</div>{getStar(item.grooming)}</div>
                                <div className="author"><div className="authorFixed">Alertar estranhos:</div> {getStar(item.protectiveness)}</div>
                                <div className="author"><div className="authorFixed">Treinabilidade:</div>{getStar(item.trainability)}</div>
                                <div className="author"><div className="authorFixed">Perca de pelo:</div>{getStar(item.shedding)}</div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default StarRatingDogs