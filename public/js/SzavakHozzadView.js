class SzavakHozzadView
{
    constructor(szuloElem)
    {
        this.angolSzo;
        this.magyarSzo;
        this.tema;
        $(szuloElem).html(`
            <label for="ujAngolSzo">Új angol szó:</label>
            <input type="text" id="ujAngolSzo">
            <label for="ujMagyarSzo">Új magyar szó:</label>
            <input type="text" id="ujMagyarSzo">
            <label for="ujTema">Téma:</label>
            <select id="ujTema">
                <option value="1" selected>Állat</option>
                <option value="2">Sport</option>
            </select>
            <input type="submit" id="szoMentesGomb" value="Mentés">
            `);
        
        // console.log(szuloElem);

        $("#szoMentesGomb").on("click", () => {
            console.log("katt");
            
            this.angolSzo = $("#ujAngolSzo").val();
            this.magyarSzo = $("#ujMagyarSzo").val();
            this.tema = $("#ujTema").val();
            this.kattintasTrigger("MentesKatt");
        })
    }

    kattintasTrigger(esemenyNeve)
    {
        window.dispatchEvent(new CustomEvent(esemenyNeve, {
            detail:
            {
                angol: this.angolSzo,
                magyar: this.magyarSzo,
                temaId: this.tema
            }
        }));
    }
} export default SzavakHozzadView;