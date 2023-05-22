function montar_barra() {
        var barra_de_chocolate = {
            pedaco: Number(inp_pedaco.value),
            chocolate: inp_chocolate.value,
            confeito: inp_confeito.value
        };
        localStorage.setItem('barra_de_chocolate', JSON.stringify(barra_de_chocolate));

        redirecionar()
    }

    function redirecionar(){
        window.location.href = "./goldenticket.html";
    }
