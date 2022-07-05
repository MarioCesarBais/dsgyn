import { useState, useEffect } from "react";

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

export const baseUrl = "http://localhost:3001";

const ini = { manchete: "", data: "", materia: "" };

export const initialState = {
  evento: ini,
  noticia: ini,
  list: []
};

export const formattedDate = (date) => {
    if (date && date.length === 10) return `${date.slice(8, 10)}/${date.slice(5, 7)}/${date.slice(0, 4)}`
};

export const useOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState)

  useEffect(() => {
    const onClick = e => {
      if(el.current !== null && !el.current.contains(e.terget))
        setIsActive(!isActive)
    }

    if(isActive) {
      window.addEventListener('click', onClick)
    }

    return () => {
      window.removeEventListener('click', onClick)
    }

  }, [isActive, el])

  return [isActive, setIsActive]
}