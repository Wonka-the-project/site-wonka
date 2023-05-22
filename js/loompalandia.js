function mostrar_conteudo(){
    aparecer_loompa.innerHTML = `
<div class="modal_willy">
    <div class="fundo_modal_willy">
        <div class="conteudo_modal_willy"> 
            <img src="./vetores/loompa_foto.jpg" width="270px" style="border-radius: 20px;">

            <div class="texto">
                <div class="fechar">
                    <button onclick="fechar_modal()" class="botao_fechar">X</button>
                </div>
                <h1 style="font-weight: 900;">Loompalândia</h1>
                <p>Oompa-Loompas são uma raça de seres pequenos e trabalhadores que vieram de Loompalandia, um lugar remoto e desconhecido. Os Oompa-Loompas são conhecidos por seus cânticos engraçados e habilidades na fabricação de chocolate. Eles são leais a Willy Wonka e trabalham na fábrica de chocolate para ajudá-lo a criar seus doces. Oompa-Loompalandia é um lugar misterioso que Willy Wonka descreve como um lugar com rios de chocolate e árvores de bom-bom, lagartas verdes e abrigos nas árvores.</p>
            </div>
        </div>
    </div>
</div>
`
}

function fechar_modal(){
    aparecer_loompa.innerHTML = " ";
}