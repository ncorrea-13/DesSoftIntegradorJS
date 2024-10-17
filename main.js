import { renderCategories } from "./src/services/categories";
import { buttonSearch, handleSearch } from "./src/services/searchBar";
import { handleGetProductsToStore } from "./src/views/store";
import './style.css'


/* ====Aplication==== */

export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) => {
  categoriaActiva = categoriaIn;
}
export let productoActivo = null;
export const setproductoActivo = (productoIn) => {
  productoActivo = productoIn;
}

buttonSearch
handleGetProductsToStore();
renderCategories();
handleSearch();