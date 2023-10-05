import React, { useState } from "react";
import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import ButtonAll from "../components/ButtonAll";
import styled from "styled-components";
import vintagePets from "../assets/vintagePets.png"
import tabelaIdadeCaes from "../assets/tabelaIdadeCaes.jpg"
import tabelaIdadeGatos from "../assets/tabelaIdadeGatos.jpg"
import linguagemAnimal from "../assets/linguagemAnimal.jpg"
import racaoCachorro1 from "../assets/racaoCachorro1.jpg"
import racaoCachorro2 from "../assets/racaoCachorro2.jpg"
import racaoCachorro3 from "../assets/racaoCachorro3.jpg"
import racaoCachorro4 from "../assets/racaoCachorro4.jpg"

const Info = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const { onOpen: onOpen1, onClose: onClose1 } = useDisclosure();
    const { onOpen: onOpen2, onClose: onClose2 } = useDisclosure();
    const { onOpen: onOpen3, onClose: onClose3 } = useDisclosure();

    const openDrawer1 = () => {
        setIsOpen1(true);
        onOpen1();
    };
    const openDrawer2 = () => {
        setIsOpen2(true);
        onOpen2();
    };
    const openDrawer3 = () => {
        setIsOpen3(true);
        onOpen3();
    };

    const closeDrawer1 = () => {
        setIsOpen1(false);
        onClose1();
    };
    const closeDrawer2 = () => {
        setIsOpen2(false);
        onClose2();
    };
    const closeDrawer3 = () => {
        setIsOpen3(false);
        onClose3();
    };

    return (
        <Main>
            <ContainerButton>
                <br />
                <ButtonAll onClick={openDrawer1} label="Tabela de idade animal" width="15rem" height='50px' />
                <br />
                <ButtonAll onClick={openDrawer2} label="Linguagem canina" width="15rem" height='50px' />
                <br />
                <ButtonAll onClick={openDrawer3} label="Quantidade de ração diária" width="15rem" height='50px' />
                <br />
            </ContainerButton>
            <Drawer onClose={closeDrawer1} isOpen={isOpen1} size="lg">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader width='250px' >Você sabe a idade do seu pet?</DrawerHeader>
                    <DrawerBody>
                        <Text as='b'>Cães geralmente atingem uma expectativa de vida entre 12 e 18 anos.</Text>
                        <br />
                        <Text as='b'>Já os gatos podem ir mais longe, até aproximadamente os 21 anos.</Text>
                        <br />
                        <br />
                        <p>Mas sabe aquele papo de que cada ano do cachorro equivale a 7 anos nossos? É balela. O 1º ano de vida de um cão equivale aos 12-15 anos de um humano. Um cão de 2 anos tem o equivalente a uns 16-24 anos de um humano. A velocidade com que os cães envelhecem tem muito a ver com o porte deles. Segundo uma estimativa do American Kennel Club, aos 10 anos um cão de porte pequeno teria 56 anos se fosse uma pessoa, ao passo que um cão de porte grande teria 10 anos a mais – 66 anos. Por isso observamos que os grandões geralmente vivem menos que os pequeninos.</p>
                        <br />
                        <p>Gatos entram na fase sênior a partir dos 11 anos, em média. Depois dos 15 anos vem a fase geriátrica. Cães de grande porte entram nessa faixa aos 6-7 anos enquanto os de porte pequeno, por volta de 9 anos. Para os cachorros a fase geriátrica acontece entre 11 e 14 anos, a depender do porte.</p>
                        <img style={{ width: '38rem' }} src={tabelaIdadeCaes} alt="Tabela idade canina" />
                        <br />
                        <p>As questões de saúde mais frequentes em pets sênior estão relacionadas ao desgaste de órgãos como rins, coração e articulações. Também são comuns o câncer, os distúrbios metabólicos (diabetes, hiperadrenocorticismo e alterações na tireoide) e o declínio cognitivo (esquecer onde as necessidades devem ser feitas, dormir a maior parte do tempo e ter comportamento ansioso, medroso e/ou ranheta).</p>
                        <img style={{ width: '38rem' }} src={tabelaIdadeGatos} alt="Tabela idade canina" />
                        <p>Há muito o que podemos fazer para tornar essa “melhor idade” mais tranquila. Faça exames de check-up geral a cada 6 meses, pois o estado de saúde muda repentinamente nessa fase e é sempre melhor detectar alterações no comecinho. Não deixe o pet ficar gordinho, nem magro demais. Proporcione estímulo físico e mental para minimizar a perda de massa muscular e cognitiva. Adapte o ambiente às necessidades do animal. Por exemplo, providencie mais de uma caixinha de areia para o gato e com acesso fácil. Evite mudar os móveis de lugar se o animal tem dificuldade de enxergar. Proporcione piso aderente para evitar escorregões. Há dificuldade para mastigar e redução do apetite? Sirva uma dieta macia, atraente e morna.</p>
                        <br />
                        <Text as='b'>Sylvia Angélico</Text>
                        <br />
                        <Text as='b'>Médica Veterinária</Text>
                        <br />
                        <Text as='b'>pós-graduada em Nutrição Animal</Text>
                        <br />
                        <Text as='b'>CRMV-SP 29945</Text>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Drawer onClose={closeDrawer2} isOpen={isOpen2} size="lg">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader width='250px' >Linguagem canina</DrawerHeader>
                    <DrawerBody>
                        <img style={{ width: '700px' }} src={linguagemAnimal} alt="Linguagem animal" />
                        <br />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Drawer onClose={closeDrawer3} isOpen={isOpen3} size="lg">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader width='250px' >Quantidade de ração diária de um cachorro</DrawerHeader>
                    <DrawerBody>
                        <p>O cuidado com os nossos animais de estimação exige conhecimentos diversos para que eles se desenvolvam com saúde e bem estar. Dentro disso, não podemos deixar de citar a alimentação, que é parte essencial para qualidade de vida e longevidade dos bichinhos. </p>
                        <br />
                        <p>Pensando nisso, separamos neste artigo algumas <b>dicas</b> para ajudar os donos de cachorros que possuem dúvida sobre qual a <b>quantidade correta de ração</b> para se colocar em cada refeição. Confira a seguir as diferenças de acordo com o tamanho e fase da vida do seu cãozinho. </p>
                        <br />
                        <img style={{ width: '500px' }} src={racaoCachorro1} alt="Linguagem animal" />
                        <br />
                        <Text as='b'>Quantidade de ração para cachorros filhotes</Text>
                        <br />
                        <br />
                        <p>Os <b>filhotes encerram a fase de amamentação por volta dos 45 dias</b>. A partir daí, já é possível dar ração para o cãozinho. No entanto, é necessário ter uma série de cuidados, pois o estômago do animal ainda é muito pequeno. </p>
                        <br />
                        <p>Por isso, o ideal é que você dê a ração ao seu filhote de <b>4 a 5 vezes ao dia</b>, de pouco em pouco. A boa notícia é que as rações atuais costumam ter indicações corretas da quantidade que o seu cãozinho deve comer. Com isso, você evita colocar mais do que o necessário.</p>
                        <br />
                        <p>Vale ressaltar que as <b>rações para filhotes</b> costumam ser específicas para essa função, pois contam com um maior valor energético e nutrientes para estimular o desenvolvimento da defesa natural do animal.</p>
                        <br />
                        <p>Com o passar do tempo, você pode adaptar gradualmente a dieta do cãozinho a cada mês até se adequar a de um animal adulto.</p>
                        <br />
                        <img style={{ width: '500px' }} src={racaoCachorro2} alt="Linguagem animal" />
                        <br />
                        <Text as='b'>Quantidade de ração para cachorros adultos</Text>
                        <br />
                        <br />
                        <p>O grande fator que vai influenciar a quantidade de ração ideal para o seu cachorro é o porte dele. Quanto maior o cão, maior deve ser também a quantidade de ração ideal para uma dieta saudável.</p>
                        <br />
                        <p>Para separar os tipos de porte de cachorro, você pode seguir a seguinte categorização:</p>
                        <br />
                        <p><b>- Porte miniatura (de 1 a 4 kg):</b> para um cachorro muito pequeno, oferecer uma quantidade entre 55 g e 95 g de ração por dia já será o suficiente.</p>
                        <br />
                        <p><b>- Porte pequeno (de 4 a 8 kg):</b> devem ingerir de 95 g a 155 g de ração diariamente.</p>
                        <br />
                        <p><b>- Porte médio (de 8 a 20 kg):</b> para esse tipo de porte, o ideal é oferecer entre 160 g e 320 g de ração por dia.</p>
                        <br />
                        <p><b>- Porte grande (de 20 a 40 kg):</b> cachorros de grande porte necessitam de uma quantidade entre 320 g e no máximo 530 g.</p>
                        <br />
                        <p><b>- Porte gigante (mais de 40 kg):</b> por último, os cães considerados gigantes necessitam de uma quantidade maior, ultrapassando meio quilo de ração por dia. O ideal é dar a ele entre 530 g e 810 g.</p>
                        <br />
                        <p>Vale ressaltar que as rações disponíveis atualmente possuem diferentes composições nutricionais. Por isso, <b>consulte sempre as embalagens</b> para checar a quantidade correta a ser usada.</p>
                        <br />
                        <img style={{ width: '500px' }} src={racaoCachorro3} alt="Linguagem animal" />
                        <br />
                        <p>Além disso, é importante relembrar também que a <b>dieta de seu cãozinho deve ser acompanhada por um veterinário</b>, que poderá monitorar de forma mais precisa o peso corporal e direcionar a quantidade necessária e saudável de ração para o seu pet.</p>
                        <br />
                        <p>É possível que, além da dieta necessária, o veterinário recomende <b>a prática de exercícios físicos com o cachorro</b>. Portanto, é essencial também realizar passeios com o seu cão para uma melhor qualidade de vida dele. A partir disso, a alimentação também deve ser adaptada para compensar o gasto calórico.</p>
                        <br />
                        <Text as='b'>Quantidade de ração para cachorros idosos</Text>
                        <br />
                        <br />
                        <p>Quando chegam a uma idade avançada, assim como os seres humanos, os cachorros tem uma diminuição em seu metabolismo. Com isso, eles terão menor capacidade de absorver e digerir alguns alimentos, e podem ver resultados diferentes de acordo com a dieta.</p>
                        <br />
                        <p>Por conta disso, é ideal que você procure <b>rações específicas para cachorros idosos</b>. Elas costumam possuir uma concentração de gordura um pouco menor, além de conter outros nutrientes necessários para essa fase da vida do animal.</p>
                        <br />
                        <img style={{ width: '500px' }} src={racaoCachorro4} alt="Linguagem animal" />
                        <br />
                        <p>Caso não seja possível, uma outra alternativa é <b>diminuir cerca de 20% da quantidade de ração</b> para o seu cachorro idoso. Com isso, é possível seguir as melhores práticas de nutrição e saúde de seu cãozinho, aumentando sua longevidade.</p>
                        <br />
                        <p><b>Créditos desse conteúdo:</b> https://blog.dona.com.br/</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

        </Main>
    );
};

export default Info;
const Main = styled.div`
    width: 100%;
    background-image: url(${vintagePets});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: radial-gradient(circle, rgba(33,33,33,1) 0%, rgba(1,21,34,1) 100%);
    background-size: 40rem;
`
const ContainerButton = styled.div`
    button {
    margin-bottom: 10px ;    
    }
`