/*======Store=====*/

import { setproductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { openModal } from "./modal";

/* Funcion que trae elementos y llamar al render */
export const handleGetProductsToStore = () => {
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
}


/* Funcion que filtra y renderiza la seccion */
export const handleRenderList = (productsIn) => {

    //filtrado de arrays por categoía
    const burgers = productsIn.filter((el) => el.categoria == "Hamburguesas");
    const papas = productsIn.filter((el) => el.categoria == "Papas");
    const bebidas = productsIn.filter((el) => el.categoria == "Bebidas");

    /* Funcion que renderiza los elementos de la seccion */
    const renderProductGroup = (products, title) => {
        if (products.length > 0) {
            const productsHTML = products.map((product, index) => {
                return `
                <div class="containerTargetItem" id="product-${product.categoria}-${index}">
                <div>
                <img class="imageItem" src='${product.imagen}'/>
                <div>
                <h2>${product.nombre}</h2>
                </div>
                <div class="targetProps">
                <p><b>Precio:</b> $ ${product.precio}</p>
                </div>

                </div>
                </div> `;
            })
            //retornar la sección con todos los elementos dentro
            return `
            <section class="sectionStore">
            <div class="containerTitleSection">
            <h3>${title}</h3>
            </div>
            <div class="containerProductStore">
            ${productsHTML.join("")}  
            </div>

            </section>
            `;
        } else {
            return ""
        }
    };

    /* Funcion que renderiza cada producto */
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
    ${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(papas, "Papas")}
    ${renderProductGroup(bebidas, "Bebidas")}
    `;


    /* Funcion que añade los eventos de manera dinámica */
    const addEvents = (productsIn) => {
        productsIn.forEach((element, index) => {
            const productContainer = document.getElementById(
                `product-${element.categoria}-${index}`);
            productContainer.addEventListener("click", () => {
                setproductoActivo(element);
                openModal();
            })
        });
    }

    addEvents(burgers);
    addEvents(papas);
    addEvents(bebidas);

}