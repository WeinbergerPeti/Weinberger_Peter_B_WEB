import SzoView from "./SzoView.js";

class SzavakView
{
    constructor(tomb, szuloElem)
    {
        // console.log("szavakView");

        $(szuloElem).html(
            `
            <div id="tartalomElemek">
                <div class="fejlec">
                    <div><p>Angol</p></div>
                    <div><p>Magyar<p></div>
                    <div><p>Visszajelzés</p></div>
                    <div><p>Módosít</p></div>
                    <div><p>Törlés</p></div>
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