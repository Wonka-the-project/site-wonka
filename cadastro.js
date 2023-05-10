function cadastrar(){
    div_alert.innerHTML = `
    <div class="div_1"
        style="margin-top: 25px; width: 350px;height: 150px;background-color: #57823e;border-radius: 30px;display: flex;align-items: center;justify-content: center;gap: 30px;">
        <div>
            <img src="./vetores/check.svg" width="100px">
        </div>

        <div style="width: 40%; text-align: center; font-size: x-large; font-weight: 700;
        color: white;">
            Cadastro efetuado!
        </div>
    </div>
    `

    setTimeout(function() {
        div_alert.style.display = "none";
      }, 2000);
      
      div_alert.style.display = "block";
}
