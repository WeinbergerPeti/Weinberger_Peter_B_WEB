import AdatFeldolgozModel from "./AdatFeldolgozModel.js";
import TemakView from "./TemakView.js";
import SzavakHozzadView from "./SzavakHozzadView.js";
import SzavakView from "./szavakView.js";
import szavakModositTorolView from "./SzavakModositTorolView.js";

class IndexController
{
    constructor()
    {
        // console.log("Controller");

        const token= $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);

        adatFeldolgozModel.adatBe("/szavak", this.szavakAdat)
        adatFeldolgozModel.adatBe("/temak", this.temakAdat)

        
        this.szavakHozzad();
        // this.szavakModosit();

        $(window).on("MentesKatt", (event) => {
            console.log(event.detail);
            adatFeldolgozModel.adatUj("/szavak", event.detail);
            location.reload();
        })

        $(window).on("ModositasKatt", (event) => {
            console.log(event.detail);
            adatFeldolgozModel.adatModosit(`/szavak/${event.detail.id}`, event.detail)
            location.reload();
        })

        $(window).on("torlesKatt", (event) => {
            console.log(event.detail);
            adatFeldolgozModel.adatTorol(`/szavak/${event.detail}`);
            location.reload();
        })

        $(window).on("kategoriaSzures", (event)=>
        {
            // console.log(event.detail);
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

    // szavakModosit()
    // {
    //     new szavakModositTorolView();
    // }

    szavakHozzad()
    {
        const szuloElem = $(".ujSzo");
        new SzavakHozzadView(szuloElem);
    }

    szavakAdat(tomb)
    {
        const szuloElem=$("#tartalom")
        new SzavakView(tomb, szuloElem);
    }

    temakAdat(tomb)
    {
        const szuloElem =$("#szures");
        new TemakView(tomb, szuloElem)
    }
}
export default IndexController;