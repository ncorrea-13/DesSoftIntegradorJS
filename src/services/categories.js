//render de vista de categorías

export const renderCategories = () => {
    const ulist = document.getElementById('listFilter');
    ulist.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="papas">Papas</li>
    <li id="gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor precio</li>
    <li id="menorPrecio">Menor precio</li>
    `;

    const liElements = ulList.querySelectorAll("li");
    liElements.forEach(liElement => {
        liElement.addEventListener("click", () => {
            handleClick(liElement);
        })
    });
}