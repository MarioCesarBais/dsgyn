export function showhide(e) {
    e.target.innerText = e.target.innerText === 'Mostrar' ? 'Esconder' : 'Mostrar'
    const cl = e.target.classList
    const nat = cl[cl.length -1]
    const el = document.querySelectorAll(`.${nat} > *`)
    el.forEach(ele => {
        ele.style.display = ele.style.display ? '' : 'none'
    })
}

export const baseUrl = "http://localhost:3001";

const ini = { manchete: "", data: "", materia: "" };

export const initialState = {
    evento: ini,
    noticia: ini,
    list: [],
  };