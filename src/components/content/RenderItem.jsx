import { Component } from "react";
import Card from "../../layout/Card";

export default class RenderItem extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <div className="content">
        {this.props}
        {/* <Card titulo={props.mancehete}>
          {props.data}
          <br></br>
          {props.materia}
        </Card> */}
      </div>
    );
  }
}