const StarRatingCats = ({ data }) => {

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

    const librasParaQuilos = (libras) => {
        return libras / 2
    }
    const lengthCat = (item) => {
        const match = item.length.match(/\d+/g); // Encontra todos os números na string
        if (match && match.length === 2) {
            const min = parseInt(match[0], 10); // Primeiro número como mínimo
            const max = parseInt(match[1], 10); // Segundo número como máximo
            return `${min * 2.54}cm a ${max * 2.54}cm sem a cauda`; // Converte para centímetros e formata
        } else {
            return "Dados não disponíveis"; // Trate o caso em que os dados não estão disponíveis
        }
    };
    return (
        <div>
            {data.map((item, index) => {
                return (
                    <div key={index}>
                        <div>
                            <div className="card">
                                <div className="card-image"><img style={{ borderRadius: '5px', width: '315px', height: '210px', objectFit: 'fill' }} src={item.image_link} alt={item.image_link} /></div>
                                <div className="category"> {item.name} </div>
                                <div className="author"><div className="authorFixed">Tamanho:</div>{lengthCat(data[0])}</div>
                                <div className="author"><div className="authorFixed">Peso:</div>{librasParaQuilos(item.min_weight)} kg a {librasParaQuilos(item.max_weight)} kg</div>
                                <div className="author"><div className="authorFixed">Expectativa de vida:</div> {item.min_life_expectancy} a {item.max_life_expectancy} anos</div>
                                <div className="author"><div className="authorFixed">Saúde geral:</div>{getStar(item.general_health)}</div>
                                <div className="author"><div className="authorFixed">Miados:</div> {getStar(item.meowing)}</div>
                                <div className="author"><div className="authorFixed">Bom com crianças:</div>{getStar(item.children_friendly)}</div>
                                <div className="author"><div className="authorFixed">Bom com a família:</div>{getStar(item.family_friendly)}</div>
                                <div className="author"><div className="authorFixed">Bom com estranhos:</div>{getStar(item.stranger_friendly)}</div>
                                <div className="author"><div className="authorFixed">Outros animais:</div>{getStar(item.other_pets_friendly)}</div>
                                <div className="author"><div className="authorFixed">Higiene:</div>{getStar(item.grooming)}</div>
                                <div className="author"><div className="authorFixed">Ludicidade:</div> {getStar(item.playfulness)}</div>
                                <div className="author"><div className="authorFixed">Perca de pelo:</div>{getStar(item.shedding)}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default StarRatingCats