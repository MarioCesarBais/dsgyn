import "./quemsomos.css";
import { showhide } from "../../utils/utils";

export default () => (
  <div id="quemsomos">
      <h1>
        Quem Somos <button className="btn btn-primary btn-sm apresenta"
            onClick={e=>showhide(e)}>Esconder</button>
      </h1>
      <div className="apresenta">
      <p className="pt-3">
        A Delegacia Sindical de Goiânia (DS/Goiânia) compõe a estrutura do
        Sindifisco Nacional, Sindicato dos Auditores Fiscais da Receita Federal
        do Brasil.
      </p>
      <p>
        Sua missão é defender as prerrogativas necessárias para que o
        Auditor-Fiscal possa desempenhar sua função de:
      </p>
      <ol>
        <li>controlar a entrada e saída de bens e mercadorias do país;</li>
        <li>
          verificar o cumprimento das obrigações tributárias principais e
          acessórias;
        </li>
        <li>
          selecionar contribuintes com base em critérios objetivos e impessoais;
        </li>
        <li>lançar, garantir, controlar e cobrar o crédito tributário;</li>
        <li>restituir tributo pago a maior;</li>
        <li>
          ressarcir tributo cuja legislação exija antecipação de pagamento e sua
          apuração resultou em crédito devido ao contribuinte; e
        </li>
        <li>julgar processos administrativos fiscais.</li>
      </ol>
      <p>
        No contexto em que o governante de plantão decide pesar a tributação
        sobre os mais carentes, e conceder benefícios fiscais aos mais
        abastados, torna-se necessário defender com maior força a prerrogativa
        do Auditor-Fiscal.
      </p>
      <p className="pb-5">
        Ao agir desta forma, o Sindicato defende a instituição Receita Federal,
        a concorrência salutar e o interesse público!
      </p>
    </div>
    <h1>Diretoria Executiva - Triênio 2022 a 2024 <button className="btn btn-primary btn-sm diretoria"
            onClick={e=>showhide(e)}>Esconder</button></h1>
    <div className='diretoria'>
    <p className="pt-3">Presidente - ARMANDO BRANQUINHO BARRETO</p>
    <p>1º Vice-Presidente – GUILHERME RENOVATO MARTINS</p>
    <p>2º Vice-Presidente – PAULO ROBERTO PEREIRA FERREIRA</p>
    <p>Secretário Geral – JAQUELINE KUHN</p>
    <p>1º Secretário – ANTONIO FERNANDO CANDIDO DA SILVA</p>
    <p>Diretor de Finanças – FABIO COIMBRA MIRANDA</p>
    <p>
      Diretor de Assuntos de Aposentadoria, Proventos e Pensões – NELIA CRUVINEL
      RESENDE
    </p>
    <p>Diretor de Assuntos Jurídicos – RICARDO SKAF ABDALA</p>
    <p>
      Diretor de Defesa da Justiça Fiscal, da Seguridade Social e Defesa
      Profissional – DIVINO DEONIR DIAS BORGES
    </p>
    <p>
      {" "}
      Diretor de Comunicação Social e Assuntos Parlamentares – GILENIR DO
      ROSARIO SILVA
    </p>
    <p>1º Diretor Suplente – JOSE DIAS BASTOS</p>
    <p>2º Diretor Suplente – VIVIAN MONTIJO SALVIANO</p>
    <p className="pb-5">
      3º Diretor Suplente – MARIA CONCEICAO CARDOZO MESQUITA
    </p>
    </div>
    <h1>Nossa História <button className="btn btn-primary btn-sm historia"
            onClick={e=>showhide(e)}>Esconder</button></h1>
    <div className="historia">
    <p>
      Na década de 90, a DS ocupava pequena sala gentilmente cedida pela
      administração tributária local, no prédio alugado na Avenida Professor
      Alfredo de Castro, no Setor Oeste, atualmente ocupado pela Procuradoria da
      Fazenda Nacional. Visando melhor atender aos filiados, a DS alugou sala na
      Galeria Compu Plaza durante a década 2000 e adquiriu mobiliário próprio.
      Antevendo a mudança da Delegacia da Receita Federal para a Avenida Fued
      José Sebba, a DS resolveu adquirir, nas proximidades, casa velha no Jardim
      Goiás pelo valor de R$ 190.000,00, correspondente ao lote de terreno. Foi
      necessária a demolição e nova construção a partir do zero. Nossa sede
      acolhedora, como a conhecemos hoje, é palco de nossas assembleias e
      eventos sociais.
    </p>
    </div>
    <h1 className="">Galeria de ex-Presidentes da DS</h1>
  </div>
);
