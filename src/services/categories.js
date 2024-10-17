//render de vista de categorías

import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";


const handleFilterProductsByCategory = (categoryIn) => {
    const products = handleGetProductLocalStorage();
    console.log(categoryIn.categoria);
    switch (categoryIn) {
        case categoriaActiva:
            handleRenderList(products);
            break;
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Bebidas":
            const result = products.filter((el) => el.categoria == categoryIn);
            handleRenderList(result);
        default:
            break;
        case "mayorPrecio":
            const resultMayorPrecio = products.sort((a, b) => b.precio - a.precio);
            handleRenderList(resultMayorPrecio);
            break;
        case "menorPrecio":
            const resultMenorPrecio = products.sort((a, b) => a.precio - b.precio);
            handleRenderList(resultMenorPrecio);
            break;
    }
}


export const renderCategories = () => {
    //tomamos elementos de la lista
    const ulist = document.getElementById('listFilter');

    //creamos esos elementos de la lista
    ulist.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Bebidas">Bebidas</li>
    <li id="mayorPrecio">Mayor precio</li>
    <li id="menorPrecio">Menor precio</li>
    `;

    // añadimos dinamicamente el evento click
    const liElements = ulist.querySelectorAll("li");
    liElements.forEach(liElement => {
        liElement.addEventListener("click", () => {
            handleClick(liElement);
        });
    });

    //verificamos y manejamos el estilo del elemento activo
    const handleClick = (elemento) => {
        handleFilterProductsByCategory(elemento.id);
        liElements.forEach((el) => {
            if (el.classList.contains('liActive')) {
                el.classList.remove('liActive');
            } else {
                if (elemento == el) {
                    el.classList.add('liActive');
                }
            }
        });
    }
};