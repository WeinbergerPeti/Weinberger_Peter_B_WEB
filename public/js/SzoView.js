class SzoView
{
    #elem
    
    constructor(elem, szuloElem)
    {
        this.#elem=elem;
        this.pont=0;
        this.osszPont=this.pont;

        $(szuloElem).append(
            `<div class="resz">
                <div>${elem.angol}</div>
                <div><input type="text" id="magyar${elem.id}"><button id="gomb${elem.id}">OK</button></div>
                <div id="jelzes${elem.id}"></div>
            </div>`
        )

        
        
        $(`#gomb${elem.id}`).on("click", ()=>
        {
            this.ertek=$(`#magyar${elem.id}`).val();
            console.log(this.ertek);
            console.log(elem.magyar);
            if(this.ertek === elem.magyar)
            {
                $(`#jelzes${elem.id}`).html("&#9989;")
                this.pont++;
                console.log(this.pont);
            }
            else
            {
                $(`#jelzes${elem.id}`).html("&#10060;")
                this.pont+=0;
            }
            this.osszPont+=this.pont;
            console.log(this.pont);
            $("#pontozas").html(`A tesztben elért pont: ${this.osszPont}`)
        });

        
    }

    kattintasTrigger(esemenyNeve)
    {
        const esemeny = new CustomEvent(esemenyNeve, {detail: this.#elem});
        window.dispatchEvent(esemeny);
    }
}

export default SzoView