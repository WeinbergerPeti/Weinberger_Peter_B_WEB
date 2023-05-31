import SzoView from "./SzoView.js";

class SzavakView
{
    constructor(tomb, szuloElem)
    {
        console.log("szavakView");

        $(szuloElem).html(
            `
            <div id="tartalomElemek">
                <div class="fejlec">
                    <div>Angol</div>
                    <div>Magyar</div>
                    <div>Visszajelzés</div>
                </div>
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