import SzoView from "./SzoView.js";

class SzavakView
{
    constructor(tomb, szuloElem)
    {
        console.log("szavakView");

        $(szuloElem).html(
            `
            <div id="tartalomElemek">
                    <div class="fejlec">Angol</div>
                    <div class="fejlec">Magyar</div>
                    <div class="fejlec">Visszajelzés</div>
            </div>`);
            
            this.divElem=szuloElem.children("div:last-child")
            // this.tablaElem=szuloElem.children("table:last-child");
            // this.tbodyElem=this.tablaElem.children("tbody");
    
            tomb.forEach(elem => 
            {
                new SzoView(elem, this.divElem);
            });
    }
}
export default SzavakView