import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Card from "../../../layout/Card";
// import noticias from '../../../data/noticias.json'
import { baseUrl, initialState } from "../../../utils/utils";

const maximo = 120;

export default () => {
  const [noticia, setNoticia] = useState(initialState);
  const [m, setM] = useState('')

  const getData = async () => {
    await axios(`${baseUrl}/noticias`).then((resp) => {
      setNoticia(resp.data[resp.data.length - 1]);
      setM(`${resp.data[resp.data.length - 1].materia.slice(0, maximo)} ...`)
    });
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (!noticia.manchete === '') {
        setM(`${noticia.materia.slice(0, maximo)} ...`)
    }
  }, [noticia, m]);

  // console.log(noticia)
  //
  //             }
  //         })
  //         return () => mounted = false
  //     },
  // [])

  // const noticia = {
  //     "manchete": "Pareceres da AGU estabelecem parâmetros para pagamento de benefício na aposentadoria dos servidores públicos",
  //     "data": "02/06/2022",
  //     "materia": "A Advocacia-Geral da União (AGU) publicou dois pareceres vinculantes com regras para o pagamento do benefício especial de caráter compensatório previsto na Lei nº 12.618 de 2012. O benefício é uma compensação paga pela União aos servidores públicos federais titulares de cargo efetivos que optaram por migrar para o Regime de Previdência Complementar (RPC). Os dois pareceres, publicados no Diário Oficial da União na terça-feira (31/05), foram assinados pelo Advogado-Geral da União, Bruno Bianco Leal, e pelo Presidente da República, Jair Bolsonaro – razão pela qual passam a ter efeito vinculante, ou seja, devem ser observados por todo o Poder Executivo Federal. O Parecer nª BBL-06 estabeleceu orientações sobre o momento do cálculo definitivo do benefício especial devido aos servidores e os critérios para sua atualização monetária, tanto antes quanto após o cálculo. Pelo parecer ficou fixado que o cálculo definitivo do valor do benefício especial do servidor público federal optante pelo regime de previdência complementar será feito na data da concessão da aposentadoria ou pensão; que enquanto não concedida a aposentadoria ou pensão, fica assegurado que as parcelas de remuneração que irão compor o cálculo do benefício especial sejam atualizadas monetariamente pelo Índice Nacional de Preços ao Consumidor Amplo (IPCA) ou outro índice que venha a substituí-lo; e que após o cálculo e fixação definitiva do benefício especial, seu valor será atualizado pelo mesmo índice aplicável ao benefício de aposentadoria ou pensão mantido pelo regime geral de previdência social, que atualmente é o Índice Nacional de Preços ao Consumidor (INPC). Já o Parecer n. BBL-07 estabeleceu orientações sobre a destinação dos valores do benefício especial na hipótese de morte do servidor dele beneficiário. Ficou definido que falecendo o servidor em atividade, o benefício especial a que teria direito será pago ao beneficiário da pensão por morte concedida pelo regime próprio de previdência da União, o mesmo critério sendo aplicável se falecer o servidor aposentado que esteja a recebê-lo;  sendo a pensão por morte concedida a mais de um beneficiário, o valor do benefício especial será entre eles dividido em partes iguais; e cessada a condição de um dos beneficiários da pensão por morte, o valor do benefício especial será redistribuído em partes iguais entre os beneficiários remanescentes, pelo tempo que durar o seu direito à pensão por morte. O diretor substituto do Departamento de Coordenação e Orientação de Órgãos Jurídicos da Consultoria-Geral da União (CGU), Joaquim Modesto Pinto Júnior, destaca a relevância dos pareceres. “Revelam-se de grande importância para uma melhor orientação da prática administrativa, pois com sua edição afastam-se possibilidades de interpretações desencontradas acerca dessas questões, uniformizam-se compreensões sobre o benefício especial e amplia-se a segurança jurídica sobre o tema no âmbito do Poder Executivo Federal”, afirmou."
  //     }

  return (
    <div className="Cards">
      <Card id="dcol" titulo={noticia.manchete || ""} color="#3A9AD9">
        <div>
          <p className="texto">
            {noticia.data || ""} - {m || ""}
            <Link to="/mat" state={noticia.materia || ""}>
              ler mais ...
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};
