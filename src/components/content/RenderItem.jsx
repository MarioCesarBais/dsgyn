import { Component } from "react";
import Card from "../../layout/Card";

export default class RenderItem extends Component {
  render() {
    console.log('entrei!')
    return (
      <div className="content">
        Artigo
        {/* <Card titulo={props.mancehete}>
          {props.data}
          <br></br>
          {props.materia}
        </Card> */}
      </div>
    );
  }
}