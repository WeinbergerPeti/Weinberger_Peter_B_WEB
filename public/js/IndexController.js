import AdatFeldolgozModel from "./AdatFeldolgozModel.js";
import TemakView from "./TemakView.js";
import SzavakView from "./szavakView.js";

class IndexController
{
    constructor()
    {
        console.log("Controller");

        const token= $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);

        adatFeldolgozModel.adatBe("/szavak", this.szavakAdat)
        adatFeldolgozModel.adatBe("/temak", this.temakAdat)

        $(window).on("kategoriaSzures", (event)=>
        {
            console.log(event.detail);
            if(event.detail==0)
            {
                adatFeldolgozModel.adatBe("/szavak", this.szavakAdat);
            }
            else
            {
                adatFeldolgozModel.adatBe("/tema_szures/"+event.detail, this.szavakAdat);
            }
        })

    }

    szavakAdat(tomb)
    {
        const szuloElem=$("#tartalom")
        new SzavakView(tomb, szuloElem);
    }

    temakAdat(tomb)
    {
        console.log(tomb);
        const szuloElem =$("#szures");
        new TemakView(tomb, szuloElem)
    }
}
export default IndexController;