class SzoView
{
    #elem
    constructor(elem, szuloElem)
    {
        this.#elem=elem;

        $(szuloElem).append(
            `<div class="resz">
                <div>${elem.angol}</div>
                <div><input type="text" id="magyar${elem.id}" name="magyar"></div>
                <div><input type="checkbox" id="visszajelzes${elem.id}" name="visszajelzes" value="${elem.temaId}"></div>
            </div>`
        )

        console.log($(`#magyar${elem.id}`).val());
        
        if(`#magyar${elem.id}` === $(elem.magyar).val())
        {
            console.log("igaz");
        }
    }

    kattintasTrigger(esemenyNeve)
    {
        const esemeny = new CustomEvent(esemenyNeve, {detail: this.#elem});
        window.dispatchEvent(esemeny);
    }
}

export default SzoView