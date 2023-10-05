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

const Info = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const { onOpen: onOpen1, onClose: onClose1 } = useDisclosure();
    const { onOpen: onOpen2, onClose: onClose2 } = useDisclosure();



    const openDrawer1 = () => {
        setIsOpen1(true);
        onOpen1();
    };
    const openDrawer2 = () => {
        setIsOpen2(true);
        onOpen2();
    };

    const closeDrawer1 = () => {
        setIsOpen1(false);
        onClose1();
    };
    const closeDrawer2 = () => {
        setIsOpen2(false);
        onClose2();
    };

    return (
        <Main>
            <ContainerButton>
                <br />
                <ButtonAll onClick={openDrawer1} label="Tabela de idade animal" width="15rem" height='50px' />
                <br />
                <ButtonAll onClick={openDrawer2} label="Linguagem canina" width="15rem" height='50px' />
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