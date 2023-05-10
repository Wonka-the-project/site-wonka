function mostrar_conteudo(){
    aparecer_willy.innerHTML = `
<div class="modal_willy">
    <div class="fundo_modal_willy">
        <div class="conteudo_modal_willy"> 
            <img src="./vetores/willy_wonka_foto.jpg" width="300px" style="border-radius: 20px;">

            <div class="texto">
                <div class="fechar">
                    <button onclick="fechar_modal()" class="botao_fechar">X</button>
                </div>
                <h1 style="font-weight: 900;">Willy Wonka</h1>
                <p>Willy Wonka é criativo e perseverante na construção de sua fábrica de chocolate, usando ingredientes incomuns para criar sabores únicos. Ele testa os visitantes com jogos para encontrar um sucessor e enfrenta desafios como a concorrência e a busca por ingredientes raros. Willy nunca desiste e sempre encontra soluções criativas para superar os desafios. Ele é inspirador, encorajando a inovação e superação de desafios, e sua história é um clássico da literatura infantil amado por gerações.</p>
            </div>
        </div>
    </div>
</div>
`
}

function fechar_modal(){
    aparecer_willy.innerHTML = " ";
}