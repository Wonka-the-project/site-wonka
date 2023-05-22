function mostrar_conteudo_principal(){
    aparecer_personagens.innerHTML = `
<div class="modal_willy">
    <div class="fundo_modal_willy">
        <div class="conteudo_modal_willy"> 
            <img src="./vetores/sala principal.png" width="270px" style="border-radius: 20px;">

            <div class="texto">
                <div class="fechar">
                    <button onclick="fechar_modal()" class="botao_fechar">X</button>
                </div>
                <h1 style="font-weight: 900;">Sala Principal</h1>
                <p>A sala da cachoeira de chocolate é uma das salas mais memoráveis da fábrica de chocolate de Willy Wonka. Ela é iluminada por um sol artificial e possui uma cascata de chocolate que cai em um pequeno lago. A sala é coberta por árvores de marshmallow e rochas de açúcar, além de um sistema de tubos que transporta o chocolate para outras partes da fábrica. Na sala da cachoeira de chocolate, é possível ver e provar o chocolate em seu estado mais puro e delicioso.</p>
            </div>
        </div>
    </div>
</div>
`
}

function mostrar_conteudo_invencao(){
    aparecer_personagens.innerHTML = `
<div class="modal_willy">
    <div class="fundo_modal_willy">
        <div class="conteudo_modal_willy"> 
            <img src="./vetores/sala invencao.png" width="270px" style="border-radius: 20px;">

            <div class="texto">
                <div class="fechar">
                    <button onclick="fechar_modal()" class="botao_fechar">X</button>
                </div>
                <h1 style="font-weight: 900;">Sala de Invenções</h1>
                <p>A sala de invenções é um laboratório secreto dentro da fábrica de chocolate, onde Willy Wonka cria novos sabores e texturas para seus chocolates. O espaço é preenchido com equipamentos de alta tecnologia e ingredientes incomuns, como chiclete e cogumelos. Willy Wonka é um inventor talentoso e sua imaginação é ilimitada, o que o leva a criar doces inovadores e surpreendentes que ninguém jamais viu.</p>
            </div>
        </div>
    </div>
</div>
`
}

function mostrar_conteudo_nozes(){
    aparecer_personagens.innerHTML = `
<div class="modal_willy">
    <div class="fundo_modal_willy">
        <div class="conteudo_modal_willy"> 
            <img src="./vetores/sala nozes.png" width="270px" style="border-radius: 20px;">

            <div class="texto">
                <div class="fechar">
                    <button onclick="fechar_modal()" class="botao_fechar">X</button>
                </div>
                <h1 style="font-weight: 900;">Sala de Nozes</h1>
                <p>Na sala de seleção de nozes, as nozes são cuidadosamente selecionadas por uma equipe de Oompa-Loompas para serem usadas na produção de chocolate. A sala é decorada com animais de estimação, como esquilos e esquilos-voadores, que ajudam a selecionar as nozes. Willy Wonka e sua equipe levam a seleção de nozes muito a sério e trabalham duro para garantir que apenas as nozes mais frescas e saborosas sejam usadas na fabricação de seus chocolates.</p>
            </div>
        </div>
    </div>
</div>
`
}

function mostrar_conteudo_tv(){
    aparecer_personagens.innerHTML = `
<div class="modal_willy">
    <div class="fundo_modal_willy">
        <div class="conteudo_modal_willy"> 
            <img src="./vetores/sala tv.png" width="270px" style="border-radius: 20px;">

            <div class="texto">
                <div class="fechar">
                    <button onclick="fechar_modal()" class="botao_fechar">X</button>
                </div>
                <h1 style="font-weight: 900;">Sala de TV</h1>
                <p>A sala de TV é um espaço incrível, cheio de televisores que Willy Wonka usa para enviar sinais pelo ar para tornar o chocolate ainda mais saboroso. A sala é também o lugar onde Mike Teevee é reduzido a um tamanho minúsculo usando o dispositivo de teletransporte de Willy Wonka. A tecnologia é uma grande parte da fábrica de chocolate de Willy Wonka e a sala de TV é um exemplo perfeito de como Willy Wonka usa a tecnologia para criar uma experiência única e mágica.</p>
            </div>
        </div>
    </div>
</div>
`
}

function fechar_modal(){
    aparecer_personagens.innerHTML = " ";
}