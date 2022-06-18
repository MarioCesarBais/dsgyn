export function showhide(e) {
    e.target.innerText = e.target.innerText === 'Mostrar' ? 'Esconder' : 'Mostrar'
    const cl = e.target.classList
    const nat = cl[cl.length -1]
    const el = document.querySelectorAll(`.${nat} > *`)
    el.forEach(ele => {
        ele.style.display = ele.style.display ? '' : 'none'
    })
}