class TemaView
{
    #elem
    ertek
    constructor(elem, szuloElem)
    {
        this.#elem=elem
        $(szuloElem).append(`<option value="${elem.id}">${elem.temanev}</option>`)
    }
}
export default TemaView