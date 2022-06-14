import dsgyn from '../imgs/sedepaisagem.jpg';
import sedeDRF from "../imgs/protesto.jpg";
import aeroporto from '../imgs/aeroporto.jpg'

export default _ =>
<div id='banner' className='d-flex justify-content-evenly'>
    <img src={dsgyn} alt="frente sede DS Goiânia" />
    <img src={sedeDRF} alt="sede da DRF" />
    <img src={aeroporto} alt="Aeroporto Goiânia" />
</div>