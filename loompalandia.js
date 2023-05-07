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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis luctus orci, vitae elementum elit. Ut faucibus in neque a condimentum. Sed semper sapien eros, sit amet interdum dui pharetra vel. Proin malesuada eleifend rutrum. Aenean sodales, nunc sit amet venenatis vulputate, massa metus ullamcorper metus, eu hendrerit justo lorem ut libero. Proin sodales neque at sollicitudin sodales. Ut ullamcorper risus quis odio pharetra posuere. Vestibulum in velit pulvinar, maximus neque rutrum, mollis orci. Etiam vel elementum tortor, id interdum lacus. Ut tincidunt quis urna quis euismod. </p>
            </div>
        </div>
    </div>
</div>
`
}

function fechar_modal(){
    aparecer_loompa.innerHTML = " ";
}