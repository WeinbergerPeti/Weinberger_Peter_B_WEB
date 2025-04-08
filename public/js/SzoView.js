import szavakModositTorolView from "./SzavakModositTorolView.js";

class SzoView
{
    #elem
    
    constructor(elem, szuloElem)
    {
        this.#elem=elem;
        this.pont=0;
        this.osszPont = this.pont;
        
        this.id;
        this.angolSzo;
        this.magyarSzo;
        this.temaId;
        
        $(szuloElem).append(
            `<div id="resz${elem.id}" class="resz">
                <div><p>${elem.angol}</p></div>
                <div><input type="text" id="magyar${elem.id}"><button id="gomb${elem.id}">OK</button></div>
                <div class="jelzes" id="jelzes${elem.id}"></div>
                <div class="modosit"><button id="modosit${elem.id}">Módosít</button></div>
                <div class="torles"><button id="torles${elem.id}">Törlés</button></div>
            </div>`
        )

        $(`#modosit${elem.id}`).on("click", () => {
            
            if ($(`#modosit${elem.id}`).text() === "Módosít")
            {
                $(`#modosit${elem.id}`).text("Mentés");
                new szavakModositTorolView(elem);
            }
            else
            {
                this.id = elem.id;
                this.angolSzo = $("#modositAngolSzo").val();
                this.magyarSzo = $("#modositMagyarSzo").val();
                this.temaId = $("#modositTema").val();
                console.log(this.angolSzo);
                
                this.modositasKattintasTrigger("ModositasKatt");

                
                $(`#modosit${elem.id}`).text("Módosít");
                $(`#resz${elem.id}`).remove();
                
                console.log("Mentés elindul");
            }
        });
        
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

        $(`#torles${elem.id}`).on("click", () => {
            console.log(`torles${elem.id}`);
            this.id = elem.id;
            this.torlesKattintasTrigger("torlesKatt");
        })
        
    }


    torlesKattintasTrigger(esemenyNeve)
    {
        window.dispatchEvent(new CustomEvent(esemenyNeve, {detail: this.id}));
    }

     modositasKattintasTrigger(esemenyNeve)
    {
        window.dispatchEvent(new CustomEvent(esemenyNeve, {
            detail:
            {
                id: this.id,
                angol: this.angolSzo,
                magyar: this.magyarSzo,
                temaId: this.temaId
            }
        }));
    }
}

export default SzoView