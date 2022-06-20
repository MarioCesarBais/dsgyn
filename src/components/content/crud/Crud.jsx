import { Component } from "react";
// import { writeFile } from 'node:fs';
// import axios from 'axios'

import Main from "../../template/Main";

import artigos from "../../../data/artigos.json";
import eventos from "../../../data/eventos.json";
import noticias from "../../../data/noticias.json";

const headerProps = {
  icon: "events",
  title: "Eventos",
  subtitle:
    "Cadastro de eventos, notícias e artigos: Incluir, Listar, Alterar e Excluir!",
};

// const baseUrl = 'http://localhost:3001/users'
const ini = { manchete: "", data: "", materia: "" };
const initialState = {
  evento: ini,
  list: eventos,
};

export default class Crud extends Component {
  state = { ...initialState };

  // componentWillMount() {
  //     axios(baseUrl).then(resp => {
  //         this.setState({ list: resp.data })
  //     })
  // }

  clear() {
    this.setState({ evento: initialState.evento });
  }

  save() {
    const evento = this.state.evento;
    // const method = evento.id ? 'put' : 'post' --> substituir por método capaz de identificar se se trata
    // de salvar novo registro ou atualizá-lo
    // const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
    // axios[method](url, user)
    //     .then(resp => {
    //         const list = this.getUpdatedList(resp.data)
    //         this.setState({ user: initialState.user, list })
    //     })
    console.log(evento);
    eventos.push(evento);
    let fs = require("fs");
    fs.writeFileSync("./eventos.json", "Hey there!")
    // , function(err) {
    //         if(err) {
    //             console.log(err);
    //         } else {
    //             console.log("The file was saved!");
    //         }
    //     }
    // )
  }

  getUpdatedList(user, add = true) {
    const list = this.state.list.filter((u) => u.id !== user.id);
    if (add) list.unshift(user);
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
              className="btn btn-secondary ml-2"
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

  // remove(user) {
  //     axios.delete(`${baseUrl}/${user.id}`).then(resp => {
  //         const list = this.getUpdatedList(user, false)
  //         this.setState({ list })
  //     })
  // }

  renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            {/* <th>ID</th> */}
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
          {/* <td>{user.id}</td> */}
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
