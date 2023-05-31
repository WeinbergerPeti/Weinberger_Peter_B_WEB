import AdatFeldolgozModel from "./AdatFeldolgozModel.js";

class IndexController
{
    constructor()
    {
        console.log("Controller");

        const token= $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);
    }
}
export default IndexController;