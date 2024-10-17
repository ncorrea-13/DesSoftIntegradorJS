import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

export const buttonSearch = document.getElementById('buttonSearch');
console.log(buttonSearch);
buttonSearch.addEventListener("click", () => {
    handleSearch();
});


export const handleSearch = () => {
    const inputHeader = document.getElementById('inputHeader');
    const products = handleGetProductLocalStorage();

    const result = products.filter((el) =>
        el.nombre.toLowerCase().includes(inputHeader.value)
    );
    handleRenderList(result);
}