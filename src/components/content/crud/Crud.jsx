import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faPaperPlane, faAddressCard, faCalendarDays, faFileLines } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

import Main from "../../template/Main";

// import artigos from "../../../data/artigos.json";
// import eventos from "../../../data/eventos.json";
// import noticias from "../../../data/noticias.json";

const headerProps = {
  icon: <FontAwesomeIcon icon={faCalendarDays} />,
  title: "Eventos",
  subtitle:
    "Cadastro de eventos, notícias e artigos: Incluir, Listar, Alterar e Excluir!",
};

const baseUrl = 'http://localhost:3001/eventos'
const ini = { manchete: "", data: "", materia: "" };
const initialState = {
  evento: ini,
  list: [],
};

export default class Crud extends Component {
  state = { ...initialState };

  componentWillMount() {
      axios(baseUrl).then(resp => {
          this.setState({ list: resp.data })
      })
  }

  clear() {
    this.setState({ evento: initialState.evento });
  }

  save() {
    const evento = this.state.evento;
    const method = evento.id ? 'put' : 'post' //identificar se se trata de salvar novo registro ou atualizá-lo
    const url = evento.id ? `${baseUrl}/${evento.id}` : baseUrl
    axios[method](url, evento)
        .then(resp => {
            const list = this.getUpdatedList(resp.data)
            this.setState({ evento: initialState.evento, list })
        })
    // console.log(evento);
    // eventos.push(evento);
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
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Data</label>
              <input
                type="date-local"
                className="form-control"
                data-date=""
                data-date-format="DD/MM/YYYY"
                name="data"
                value={this.state.evento.data}
                onChange={(e) => this.updateField(e)}
                placeholder="Digite a data..."
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
                name="data"
                value={this.state.evento.materia}
                onChange={(e) => this.updateField(e)}
                placeholder="Digite a matéria..."
              />
            </div>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary mx-1" onClick={(e) => this.save(e)}>
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
      axios.delete(`${baseUrl}/${evento.id}`).then(resp => {
          const list = this.getUpdatedList(evento, false)
          this.setState({ list })
      })
  }

  renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th key='manchete'>Manchete</th>
            <th key='data'>Data</th>
            <th key='acoes'>Ações</th>
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
          <td>{evento.manchete}</td>
          <td>{evento.data}</td>
          <td>
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
    return (
      <Main {...headerProps}>
        {this.renderForm()}
        {this.renderTable()}
      </Main>
    );
  }
}
