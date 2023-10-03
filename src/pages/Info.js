import React, { useState } from "react";
import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useDisclosure
} from "@chakra-ui/react";
import ButtonAll from "../components/ButtonAll";
import styled from "styled-components";
import vintagePoster from "../assets/vintagePoster.png"

const Info = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);

    const { onOpen: onOpen1, onClose: onClose1 } = useDisclosure();
    const { onOpen: onOpen2, onClose: onClose2 } = useDisclosure();
    const { onOpen: onOpen3, onClose: onClose3 } = useDisclosure();
    const { onOpen: onOpen4, onClose: onClose4 } = useDisclosure();
    const { onOpen: onOpen5, onClose: onClose5 } = useDisclosure();

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
    const openDrawer4 = () => {
        setIsOpen4(true);
        onOpen4();
    };
    const openDrawer5 = () => {
        setIsOpen5(true);
        onOpen5();
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
    const closeDrawer4 = () => {
        setIsOpen4(false);
        onClose4();
    };
    const closeDrawer5 = () => {
        setIsOpen5(false);
        onClose5();
    };

    return (
        <Main>
            <ContainerButton>

                <br />
                <ButtonAll onClick={openDrawer1} label="O que é a Tabela FIPE" width="15rem" height='50px' />
                <br />
                <ButtonAll onClick={openDrawer2} label="Placas" width="15rem" height='50px' />
                <br />
                <ButtonAll onClick={openDrawer3} label="Detran" width="15rem" height='50px' />
                <br />
                <ButtonAll onClick={openDrawer4} label="DENATRAN" width="15rem" height='50px' />
                <br />
                <ButtonAll onClick={openDrawer5} label="Links Úteis" width="15rem" height='50px' />
            </ContainerButton>


            <Drawer onClose={closeDrawer1} isOpen={isOpen1} size="md">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>O que é a Tabela FIPE</DrawerHeader>
                    <DrawerBody>
                        <p>A Tabela FIPE é a principal referência de preços de veículos no Brasil, sendo usada por milhões de brasileiros que procuram comprar ou vender carros, motos e caminhões.</p><br></br>
                        <p>A Tabela FIPE serve de referência para quem quer comprar ou vender carro e para as seguradoras. A FIPE (Fundação Instituto de Pesquisas Econômicas) é uma entidade pública sem fins lucrativos que faz diversas pesquisas econômicas desde 1973.</p><br></br>
                        <p>Todos os carros, motos e caminhões vendidos no Brasil têm um código FIPE que faz referência à marca e modelo do veículos transacionado. É com base nesse código FIPE normalizado que se fazem as comparações de preços. Nos links seguintes pode consultar as tabelas FIPE de carros, motos e caminhões.</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Drawer onClose={closeDrawer2} isOpen={isOpen2} size="lg">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader width='250px' >Placas</DrawerHeader>
                    <DrawerBody>
                        <p>Todos os veículos que circulam no Brasil têm uma placa emitida pelo Detran do estado onde o veículo está registrado e que permite identificar qual o veículo e qual o proprietário.</p>
                        <br />
                        <Text as='b'>Sistemas de Placa:</Text>
                        <p>Em Setembro de 2018, o sistema de numeração das placas mudou e passaram a coexistir dois sistemas no Brasil, o novo sistema, também chamado de 'Mercosul' por ser um padrão nos países do Mercosul e que tem o formato 'ACB1D23' e o sistema antigo com o formato 'ABC-1234'.</p>
                        <br />
                        <p>Além do formato, também as placas mudaram como podemos ver abaixo.</p>
                        <p>A Placa de Identificação Veicular, também conhecida como PIV, ou simplesmente como 'placa', é o identificador de veículos usado no Brasil.</p>
                        <br />
                        <Text as='b'>Formatos de Placa:</Text>
                        <p>Conforme já foi referido, existem atualmente dois formatos de placas com especificações diferentes que vamos ver já de seguida.</p>
                        <br />
                        <Text as='b'>Placa Padrão Mercosul:</Text>
                        <p>Este é o novo formato de placas no Brasil que foi criado para ter a possibilidade de ter mais veículos registrados. Com este formato é possível mais de 500 milhões de combinações diferentes.</p>
                        <br />
                        <img style={{ width: '300px' }} src="https://www.tabelafipebrasil.com/site/images/placas/reais/ABC/tabelafipebrasil.com-placa-ABC1D23.png" alt="Placa ABC1D23 - Tabela FIPE" />
                        <br />
                        <p>Este formato é caracterizado por ter uma sequência de 3 letras, 1 número, 1 letra e mais 2 números, ficando assim no formato ABC1D23. A placa também é diferente, não tem mais o nome do município onde está registrado o veículo, tem a bandeira do Brasil e o símbolo do Mercosul.</p>
                        <br />
                        <p>No caso de motos o padrão é o mesmo que nos carros, sendo caracterizado por ter uma sequência de 3 letras, 1 número, 1 letra e mais 2 números, ficando assim no formato ABC1D34. A placa também é diferente, não tem mais o nome do município onde está registrado o veículo, tem a bandeira do Brasil e o símbolo do Mercosul.</p>
                        <br />
                        <img style={{ width: '250px' }} src="https://www.tabelafipebrasil.com/site/images/placas/reais/ABC/tabelafipebrasil.com-placa-ABC1D34.png" alt="Placa ABC1D34 - Tabela FIPE" />
                        <br />
                        <p>Este formato é ainda o mais usado no Brasil e esteve em uso desde 1990 até 2018. Quem quiser pode optar por mudar a placa física do veículo para o novo formato Mercosul, mas terá de converter o formato da placa como podemos ver mais abaixo.</p>
                        <br />
                        <p>Com este formato é possível cerca de 175 milhões de combinações diferentes.</p>
                        <br />
                        <br />
                        <Text as='b'>Esta é a placa que todos conhecemos:</Text>
                        <br />
                        <br />
                        <img style={{ width: '300px' }} src="https://www.tabelafipebrasil.com/site/images/placas/reais/ABC/tabelafipebrasil.com-placa-ABC1234.png" alt="Placa ABC1234 - Tabela FIPE" />
                        <br />
                        <Text as='b'>Converter para placa Mercosul</Text>
                        <br />
                        <p>É possível converter uma placa do formato antigo para o formato mercosul. Para converter a placa é necessário seguir a seguinte fórmula:</p>
                        <br />
                        <p>Como no novo formato o quinto caractere é uma letra e no formato antigo era um número, então esse número do formato antigo passará a uma letra de acordo com a tabela seguinte:</p>
                        <br />
                        <TableContainer>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>Segundo dígito da placa</Th>
                                        <Th>Quarta letra da placa</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>0</Td>
                                        <Td>A</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>1</Td>
                                        <Td>B</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>2</Td>
                                        <Td>C</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>3</Td>
                                        <Td>D</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>4</Td>
                                        <Td>E</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>5</Td>
                                        <Td>F</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>6</Td>
                                        <Td>G</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>7</Td>
                                        <Td>H</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>8</Td>
                                        <Td>I</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>9</Td>
                                        <Td>j</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <br />
                        <p>Assim a placa ABC-1234 no formato antigo passará a ABC1C34:</p>
                        <br />
                        <img style={{ width: '300px' }} src="https://www.tabelafipebrasil.com/site/images/placas/reais/ABC/tabelafipebrasil.com-placa-ABC1C34.png" alt="Placa ABC1D34 - Tabela FIPE" />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Drawer onClose={closeDrawer3} isOpen={isOpen3} size="md">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Detran</DrawerHeader>
                    <DrawerBody>
                        <Text as='b'>Sites Oficiais do Detran</Text>
                        <p>O Detran é o Departamento Estadual de Trânsito e cada estado tem o seu Detran com regras que podem ser ligeiramente diferentes.</p><br></br>
                        <Text as='b'>O que é o DETRAN?</Text>
                        <p>O Departamamento Estadual de Trânsito tem várias responsabilidades. Desde a emissão das placas, gerenciamento da CNH e outros assuntos relacionados com o trânsito em cada Estado.</p>
                        <br />
                        <Text as='b'>Consulte o Detran do seu Estado na tabela seguinte para maiores informações:</Text>
                        <ul style={{ listStyleType: 'none' }}>
                            <li><a href="http://www.detran.ac.gov.br/" target="_blank" rel="noopener noreferrer">AC - Acre</a></li>
                            <li><a href="http://www.detran.al.gov.br/" target="_blank" rel="noopener noreferrer">AL - Alagoas</a></li>
                            <li><a href="https://www.detran.am.gov.br/" target="_blank" rel="noopener noreferrer">AM - Amazonas</a></li>
                            <li><a href="https://www.detran.ap.gov.br/" target="_blank" rel="noopener noreferrer">AP - Amapá</a></li>
                            <li><a href="http://www.detran.ba.gov.br/" target="_blank" rel="noopener noreferrer">BA - Bahia</a></li>
                            <li><a href="http://www.detran.ce.gov.br/" target="_blank" rel="noopener noreferrer">CE - Ceará</a></li>
                            <li><a href="http://www.detran.df.gov.br/" target="_blank" rel="noopener noreferrer">DF - Distrito Federal</a></li>
                            <li><a href="https://www.detran.es.gov.br/" target="_blank" rel="noopener noreferrer">ES - Espírito Santo</a></li>
                            <li><a href="https://www.detran.go.gov.br/" target="_blank" rel="noopener noreferrer">GO - Goiás</a></li>
                            <li><a href="https://www.detran.ma.gov.br/" target="_blank" rel="noopener noreferrer">MA - Maranhão</a></li>
                            <li><a href="http://www.detran.mg.gov.br/" target="_blank" rel="noopener noreferrer">MG - Minas Gerais</a></li>
                            <li><a href="http://www.detran.ms.gov.br/" target="_blank" rel="noopener noreferrer">MS - Mato Grosso do Sul</a></li>
                            <li><a href="http://www.detran.mt.gov.br/" target="_blank" rel="noopener noreferrer">MT - Mato Grosso</a></li>
                            <li><a href="http://www.detran.pa.gov.br/" target="_blank" rel="noopener noreferrer">PA - Pará</a></li>
                            <li><a href="http://www.detran.pb.gov.br/" target="_blank" rel="noopener noreferrer">PB - Paraíba</a></li>
                            <li><a href="http://www.detran.pe.gov.br/" target="_blank" rel="noopener noreferrer">PE - Pernambuco</a></li>
                            <li><a href="http://www.detran.pi.gov.br/" target="_blank" rel="noopener noreferrer">PI - Piauí</a></li>
                            <li><a href="http://www.detran.pr.gov.br/" target="_blank" rel="noopener noreferrer">PR - Paraná</a></li>
                            <li><a href="http://www.detran.rj.gov.br/" target="_blank" rel="noopener noreferrer">RJ - Rio de Janeiro</a></li>
                            <li><a href="http://www.detran.rn.gov.br/" target="_blank" rel="noopener noreferrer">RN - Rio Grande do Norte</a></li>
                            <li><a href="http://www.detran.ro.gov.br/" target="_blank" rel="noopener noreferrer">RO - Rondônia</a></li>
                            <li><a href="http://www.detran.rr.gov.br/" target="_blank" rel="noopener noreferrer">RR - Roraima</a></li>
                            <li><a href="http://www.detran.rs.gov.br/" target="_blank" rel="noopener noreferrer">RS - Rio Grande do Sul</a></li>
                            <li><a href="http://www.detran.sc.gov.br/" target="_blank" rel="noopener noreferrer">SC - Santa Catarina</a></li>
                            <li><a href="http://www.detran.se.gov.br/" target="_blank" rel="noopener noreferrer">SE - Sergipe</a></li>
                            <li><a href="http://www.detran.sp.gov.br/" target="_blank" rel="noopener noreferrer">SP - São Paulo</a></li>
                            <li><a href="http://www.detran.to.gov.br/" target="_blank" rel="noopener noreferrer">TO - Tocantins</a></li>
                        </ul>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Drawer onClose={closeDrawer4} isOpen={isOpen4} size="md">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>DENATRAN</DrawerHeader>
                    <DrawerBody>
                        <Text as='b'><a href="https://www.denatran.org/" target="_blank" rel="noopener noreferrer">Site oficial DENATRAN</a></Text>
                        <br />
                        <br />
                        <p>O DENATRAN é o Departamento Nacional de Trânsito com sede em Brasília, tem autonomia administrativa e técnica e jurisdição sobre todo o território Brasileiro.</p><br></br>
                        <p>Sendo um orgão de abrangência nacional, tem como principal objetivo fiscalizar e fazer cumprir toda a legislação de trânsito, assim como a execução das normas e diretrizes estabelecidas pelo Conselho Nacional de Trânsito - CONTRAN.</p>
                        <br />
                        <p>Além disso, o DENATRAN tem a responsabilidade de supervisionar e coordenar os órgãos responsáveis pelo controle e fiscalização da execução da Política Nacional de Trânsito.</p>
                        <br />
                        <Text as='b'>Tipos de veículos</Text>
                        <p>O DENATRAN tem uma caracterização e definição dos tipos de veículos que é importante entender para melhor interpretar relatórios e informações referentes as registros de veículos.</p>
                        <br />
                        <p>As classificações de tipos de veículos, segundo o DENATRAN são as seguintes:</p>
                        <br />
                        <Text as='b'>Automóvel:</Text>
                        <p>Veículo automotor destinado ao transporte de passageiros, com capacidade para até oito pessoas, exclusive o condutor.</p>
                        <br />
                        <Text as='b'>Bonde:</Text>
                        <p>Veículo de propulsão elétrica que se move sobre trilhos.</p>
                        <br />
                        <Text as='b'>Caminhão:</Text>
                        <p>Veículo automotor destinado ao transporte de carga, com carroçaria, e peso bruto total superior a 3500 Kg.</p>
                        <br />
                        <Text as='b'>Caminhão Trator:</Text>
                        <p>Veículo automotor destinado a tracionar ou arrastar outro.</p>
                        <br />
                        <Text as='b'>Caminhonete:</Text>
                        <p>Veículo automotor destinado ao transporte de carga, com peso bruto total de até 3500 Kg.</p>
                        <br />
                        <Text as='b'>Camioneta:</Text>
                        <p>Veículo automotor, misto, com quatro rodas, com carroçaria, destinado ao transporte simultâneo ou alternativo de pessoas e carga no mesmo compartimento.</p>
                        <br />
                        <Text as='b'>Chassi Plataform</Text>
                        <p>Veículo inacabado, com equipamento que permita seu deslocamento em vias de rolamento, preparado para receber carroçaria de ônibus.</p>
                        <br />
                        <Text as='b'>Ciclomotor:</Text>
                        <p>Veículo de duas ou três rodas, provido de um motor de combustão interna cuja cilindrada não exceda a 50 cm3(3,05 polegadas cúbicas) e cuja velocidade máxima de fabricação não exceda a 50 Km/h.</p>
                        <br />
                        <Text as='b'>Micro-ônibus:</Text>
                        <p>Veículo automotor de transporte coletivo com capacidade para até 20 passageiros.</p>
                        <br />
                        <Text as='b'>Motocicleta:</Text>
                        <p>Veículo automotor de duas rodas, com ou sem side-car, dirigido em posição montada.</p>
                        <br />
                        <Text as='b'>Motoneta:</Text>
                        <p>Veículo auto-motor de duas rodas, dirigido por condutor em posição sentada.</p>
                        <br />
                        <Text as='b'>Ônibus:</Text>
                        <p>Veículo automotor de transporte coletivo com capacidade para mais de 20 passageiros, ainda que, em virtude de adaptações com vista à maior comodidade destes, transporte número menor.</p>
                        <br />
                        <Text as='b'>Outros:</Text>
                        <p>Argumento que não se enquadra em nenhuma definição estabelecida.</p>
                        <br />
                        <Text as='b'>Quadricíclo:</Text>
                        <p>Veículo de estrutura mecânica igual às motocicletas, possuindo eixos dianteiro e traseiro, dotados de quatro rodas.</p>
                        <br />
                        <Text as='b'>Reboque:</Text>
                        <p>Argumento que não se enquadra em nenhuma definição estabelecida.</p>
                        <br />
                        <Text as='b'>Semi-reboque:</Text>
                        <p>Veículo de um ou mais eixos que se apoia na sua unidade tratora ou é a ela ligado por meio de articulação.</p>
                        <br />
                        <Text as='b'>Side car:</Text>
                        <p>Carro ou caçamba provido de uma roda acoplada na lateral da motocicleta.</p>
                        <br />
                        <Text as='b'>Trator Esteira:</Text>
                        <p>Trator que se movimenta por meio de esteira.</p>
                        <br />
                        <Text as='b'>Trator Rodas:</Text>
                        <p>Trator que se movimenta sobre rodas,podendo ter chassi rígido ou articulado.</p>
                        <br />
                        <Text as='b'>Tricíclo:</Text>
                        <p>Veículo rodoviário automotor de estrutura mecânica igual à motocicleta dotado de três rodas.</p>
                        <br />
                        <Text as='b'>Utilitário:</Text>
                        <p>Veículo misto caracterizado pela versatilidade do seu uso, inclusive fora da estrada.</p>
                        <br />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Drawer onClose={closeDrawer5} isOpen={isOpen5} size="md">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Links Úteis</DrawerHeader>
                    <DrawerBody>
                        <Text as='b'><a href="https://www.gov.br/pf/pt-br" target="_blank" rel="noopener noreferrer">Polícia Federal (0800 9782 336)</a></Text>
                        <br />
                        <br />
                        <Text as='b'><a href="https://www.gov.br/prf/pt-br" target="_blank" rel="noopener noreferrer">Polícia rodoviária Federal (191)</a></Text>
                        <br />
                        <br />
                        <Text as='b'>Polícia Civil (190):</Text>
                        <ul style={{ listStyleType: 'none' }}>
                            <li><a href="https://pc.ac.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil do Acre (AC)</a></li>
                            <li><a href="http://pc.al.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil de Alagoas (AL)</a></li>
                            <li><a href="http://www.policiacivil.am.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil do Amazonas (AM)</a></li>
                            <li><a href="http://www.policiacivil.ap.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil do Amapá (AP)</a></li>
                            <li><a href="http://www.policiacivil.ba.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil da Bahia (BA)</a></li>
                            <li><a href="https://www.policiacivil.ce.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil do Ceará (CE)</a></li>
                            <li><a href="https://www.pcdf.df.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil do Distrito Federal (DF)</a></li>
                            <li><a href="https://pc.es.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil do Espírito Santo (ES)</a></li>
                            <li><a href="http://www.policiacivil.go.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil de Goiás (GO)</a></li>
                            <li><a href="https://www.policiacivil.ma.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil do Maranhão (MA)</a></li>
                            <li><a href="https://www.policiacivil.mg.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil de Minas Gerais (MG)</a></li>
                            <li><a href="http://www.pc.ms.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil de Mato Grosso do Sul (MS)</a></li>
                            <li><a href="http://www.pjc.mt.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil de Mato Grosso (MT)</a></li>
                            <li><a href="https://www.pc.pa.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil do Pará (PA)</a></li>
                            <li><a href="http://www.policiacivil.pb.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil da Paraíba (PB)</a></li>
                            <li><a href="http://www.policiacivil.pe.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil de Pernambuco (PE)</a></li>
                            <li><a href="https://portal.pi.gov.br/pc/" target="_blank" rel="noopener noreferrer">Polícia Civil do Piauí (PI)</a></li>
                            <li><a href="https://www.policiacivil.pr.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil do Paraná (PR)</a></li>
                            <li><a href="http://www.policiacivilrj.net.br/" target="_blank" rel="noopener noreferrer">Polícia Civil do Rio de Janeiro (RJ)</a></li>
                            <li><a href="http://www.policiacivil.rn.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil do Rio Grande do Norte (RN)</a></li>
                            <li><a href="https://www.pc.ro.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil de Rondônia (RO)</a></li>
                            <li><a href="http://www.pc.rr.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil de Roraima (RR)</a></li>
                            <li><a href="http://www.policiacivil.rs.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil do Rio Grande do Sul (RS)</a></li>
                            <li><a href="https://pc.sc.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil de Santa Catarina (SC)</a></li>
                            <li><a href="http://www.policiacivil.se.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil de Sergipe (SE)</a></li>
                            <li><a href="https://www.policiacivil.sp.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil de São Paulo (SP)</a></li>
                            <li><a href="https://www.to.gov.br/ssp/policia-civil/" target="_blank" rel="noopener noreferrer">Polícia Civil de Tocantins (TO)</a></li>
                        </ul>
                        <br />
                        <Text as='b'>Polícia Militar (190):</Text>
                        <ul style={{ listStyleType: 'none' }}>
                            <li><a href="https://www.pm.ac.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar do Acre (AC)</a></li>
                            <li><a href="http://www.pm.al.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar de Alagoas (AL)</a></li>
                            <li><a href="https://www.pm.am.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar do Amazonas (AM)</a></li>
                            <li><a href="http://www.pm.ap.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar do Amapá (AP)</a></li>
                            <li><a href="http://www.pm.ba.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar da Bahia (BA)</a></li>
                            <li><a href="https://www.pm.ce.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar do Ceará (CE)</a></li>
                            <li><a href="https://www.pmdf.df.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar do Distrito Federal (DF)</a></li>
                            <li><a href="https://pm.es.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar do Espírito Santo (ES)</a></li>
                            <li><a href="https://www.pm.go.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar de Goiás (GO)</a></li>
                            <li><a href="http://www.pm.ma.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar do Maranhão (MA)</a></li>
                            <li><a href="https://www.policiamilitar.mg.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar de Minas Gerais (MG)</a></li>
                            <li><a href="https://www.pm.ms.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar de Mato Grosso do Sul (MS)</a></li>
                            <li><a href="https://www.pm.mt.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar de Mato Grosso (MT)</a></li>
                            <li><a href="https://www.pm.pa.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar do Pará (PA)</a></li>
                            <li><a href="https://www.pm.pb.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar da Paraíba (PB)</a></li>
                            <li><a href="https://www.pm.pe.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar de Pernambuco (PE)</a></li>
                            <li><a href="http://www.pm.pi.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar do Piauí (PI)</a></li>
                            <li><a href="https://www.pmpr.pr.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar do Paraná (PR)</a></li>
                            <li><a href="https://sepm.rj.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar do Rio de Janeiro (RJ)</a></li>
                            <li><a href="http://www.pm.rn.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar do Rio Grande do Norte (RN)</a></li>
                            <li><a href="https://pm.ro.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar de Rondônia (RO)</a></li>
                            <li><a href="https://www.pm.rr.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar de Roraima (RR)</a></li>
                            <li><a href="https://www.brigadamilitar.rs.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar do Rio Grande do Sul (RS)</a></li>
                            <li><a href="https://www.pm.sc.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar de Santa Catarina (SC)</a></li>
                            <li><a href="https://www.pm.se.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar de Sergipe (SE)</a></li>
                            <li><a href="https://www.policiamilitar.sp.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar de São Paulo (SP)</a></li>
                            <li><a href="https://www.pm.to.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar de Tocantins (TO)</a></li>
                        </ul>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Main>
    );
};

export default Info;
const Main = styled.div`
/* border: solid red; */
width: 100%;
 background-image: url(${vintagePoster});
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