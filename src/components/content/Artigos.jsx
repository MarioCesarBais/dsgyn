import { Link } from 'react-router-dom'
import artigos from '../../data/artigos.json'
import Card from '../../layout/Card'
import RenderItem from './RenderItem'

// const RenderItem = (props) => {
//     console.log(typeof(RenderItem))
//     return (
//       <div className="content">
//         <Card titulo={props.mancehete}>
//           {props.data}
//           <br></br>
//           {props.materia}
//         </Card>
//       </div>
//     );
//   }

const artigosLI = artigos.map(artigo =>
    // <button className="btn btn-primary btn-sm border border-dark rounded w-100 my-1" key={artigo.manchete}
    //     onClick={() => {
    //         console.log('cliquei!')
    //         console.log(new RenderItem(artigo))}}>
    //     {artigo.manchete}
    // </button>
    <Link to="/mat" state={artigo} key={artigo.manchete}>{artigo.data} --- {artigo.manchete}</Link>
)
  

export default () =>
    <div className="Cards">
        <Card titulo="Artigos" color="#3A9AD9">
            <div>{artigosLI}</div>
            <button className="btn btn-primary btn-sm border border-dark rounded w-100 my-1">
                {/* onClick={()=>RenderDemais()}> */}
                        Mais Artigos</button>
        </Card>
    </div>