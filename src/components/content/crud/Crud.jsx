import { Component } from "react";
import {
  faNewspaper,
  faPaperPlane,
  faAddressCard,
  faCalendarDays,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import './crud.css'
import axios from "axios";

import Main from "../../template/Main";

import { baseUrl, initialState } from "../../../utils/utils";

class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState, props };
    console.log(this.state)
  }

  componentDidMount() {
    axios(`${baseUrl}/${this.state.props.subject}`).then((resp) => {
      this.setState({ list: resp.data });
    });
  }

  clear() {
    this.setState({ evento: initialState.evento });
  }

  save() {
    const evento = this.state.evento;
    if(!(evento.materia && evento.data && evento.manchete)) return
    const method = evento.id ? "put" : "post"; //identificar se se trata de salvar novo registro ou atualizá-lo
    const url = evento.id ? `${baseUrl}/${this.state.props.subject}/${evento.id}` : `${baseUrl}/${this.state.props.subject}`;
    axios[method](url, evento).then((resp) => {
      const list = this.getUpdatedList(resp.data);
      this.setState({ evento: initialState.evento, list });
    });
  }

  getUpdatedList(evento, add = true) {
    const list = this.state.list.filter((e) => e.id !== evento.id);
    if (add) list.unshift(evento);
    return list;
  }

  updateField(event) {
    const evento = { ...this.state.evento };
    evento[event.target.name] = event.target.value;
    this.setState({ evento });
  }

  formatDate = string => string.length === 10 ? `${string.slice(8,10)}/${string.slice(5,7)}/${string.slice(0,4)}` : ''

  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Manchete</label>
              <input
                type="text"
                className="form-control"
                name="manchete"
                value={this.state.evento.manchete}
                onChange={(e) => this.updateField(e)}
                placeholder="Digite a manchete..."
                required={true}
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Data</label>
              <input
              html5='true'
                as='date'
                type="date"
                className="form-control"
                data-date-format="DD/MM/YYYY"
                name="data"
                value={this.state.evento.data}
                onChange={(e) => this.updateField(e)}
                placeholder="Digite a data..."
                required={true}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label>Matéria</label>
              <input
                type="text"
                className="form-control"
                name="materia"
                value={this.state.evento.materia}
                onChange={(e) => this.updateField(e)}
                placeholder="Digite a matéria..."
                required={true}
              />
            </div>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button
              className="btn btn-primary mx-1"
              onClick={(e) => this.save(e)}
            >
              Salvar
            </button>

            <button
              className="btn btn-secondary"
              onClick={(e) => this.clear(e)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  }

  load(evento) {
    this.setState({ evento });
  }

  remove(evento) {
    axios.delete(`${baseUrl}/${this.state.props.subject}/${evento.id}`).then((resp) => {
      const list = this.getUpdatedList(evento, false);
      this.setState({ list });
    });
  }

  renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th key="manchete">Manchete</th>
            <th key="data">Data</th>
            <th key="acoes">Ações</th>
          </tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }

  renderRows() {
    return this.state.list.map((evento) => {
      return (
        <tr key={evento.manchete}>
          <td>{evento.id}</td>
          <td id='manchete'>{evento.manchete}</td>
          <td>{this.formatDate(evento.data)}</td>
          <td id='botoes'>
            <button
              className="btn btn-warning mx-1"
              onClick={() => this.load(evento)}
            >
              <i className="fa fa-pencil"></i>
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.remove(evento)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    const s = this.state.props.subject.slice(0, -1) // singular
    return (
      <Main {...this.state.props.header}>
        {this.renderForm()}
        {this.renderTable()}
      </Main>
    );
  }
}

export default Crud