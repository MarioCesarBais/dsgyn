export function showhide(e) {
  e.target.innerText =
    e.target.innerText === "Mostrar" ? "Esconder" : "Mostrar";
  const cl = e.target.classList;
  const nat = cl[cl.length - 1];
  const el = document.querySelectorAll(`.${nat} > *`);
  el.forEach((ele) => {
    ele.style.display = ele.style.display ? "" : "none";
  });
}

export const baseUrl = "https://ds-gyn-news.herokuapp.com" || "http://localhost:3001";

export const baseUrlUser = "https://dsgyn-user.herokuapp.com" || "http://localhost:3002"

const ini = { manchete: "", data: "", materia: "" };

export const initialState = {
  evento: ini,
  noticia: ini,
  artigo: ini,
  list: []
};

export const formattedDate = (date) => {
    if (date && date.length === 10) return `${date.slice(8, 10)}/${date.slice(5, 7)}/${date.slice(0, 4)}`
}