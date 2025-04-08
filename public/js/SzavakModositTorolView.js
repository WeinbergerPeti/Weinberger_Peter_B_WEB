class SzavakModositTorolView
{
    constructor(elem)
    {
        // this.angolSzo;
        // this.magyarSzo;
        // this.tema;
        // this.id;
        
        console.log(elem);
            
        $(`#resz${elem.id}`).append(`
        <div class="ujSzo">
            <label for="modositAngolSzo">Új angol szó:</label>
            <input type="text" id="modositAngolSzo">
            <label for="modositMagyarSzo">Új magyar szó:</label>
            <input type="text" id="modositMagyarSzo">
            <label for="modositTema">Téma:</label>
            <select id="modositTema">
                <option value="1" selected>Állat</option>
                <option value="2">Sport</option>
            </select>
        </div>
        `);
            
    }

    // kattintasTrigger(esemenyNeve)
    // {
    //     window.dispatchEvent(new CustomEvent(esemenyNeve, {
    //         detail:
    //         {
    //             id: this.id,
    //             angol: this.angolSzo,
    //             magyar: this.magyarSzo,
    //             temaId: this.tema
    //         }
    //     }));
    // }
} export default SzavakModositTorolView;