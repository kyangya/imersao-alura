function pesquisar() {
    let resultados = "";
    let Heroi = "";
    let Civil = "";
    let Organizacao = "";

    let section = document.getElementById("resultados-pesquisa")

    let caixaPesquisa = document.getElementById
        ("campo-pesquisa").value

    //Muda input da caixa de pesquisa para letras maiúsculas.
    caixaPesquisa = caixaPesquisa.toUpperCase()

    for (let dado of dados) {
        //Muda os nomes de heróis na base de dados para letras maiúsculas.
        Heroi = dado.alterEgo.toUpperCase()
        //Muda os nomes de civis na base de dados para letras maiúsculas.
        Civil = dado.nomeCivil.toUpperCase()
        //Muda os nomes das organizações na base de dados para letras maiúsculas.
        Organizacao = dado.organizacao.toUpperCase()

        //Encontra se o herói pesquisado está no banco de dados.
        if (Heroi.includes(caixaPesquisa) || Civil.includes(caixaPesquisa) || Organizacao.includes(caixaPesquisa)) {
            // Cria um novo elemento de acordo com pesquisa
            resultados += `
            <div class="dossie">
                <img src="dossies-herois/${dado.imagem}" width="270" height="360" align="right" />
                <h2>${dado.alterEgo}</h2>
                <h3>${dado.nomeCivil}</h3>
                <p>
                    <b>Estado de atividade:</b> ${dado.atividade}<br>
                    <b>Organização:</b> ${dado.organizacao}<br>
                    <b>Cidade de atuação:</b> ${dado.cidade}<br>
                    <b>Arqui-inimigo:</b> ${dado.vilao}<br>
                    <b>Habilidades:</b> ${dado.poder}<br>
                    <b>Fraqueza:</b> ${dado.fraqueza}<br>
                    <b>Nível de Risco:</b> ${dado.risco}<br>
                    <b>Análise psicológica:</b> ${dado.analise}
                </p>
            </div>
            `;
        }
    }
        if (!resultados) {
            resultados = "<p>Nenhum herói encontrado.</p>"
        }

    //Atribui novo nome à section para evitar manipulações equivocadas.
    section.innerHTML = resultados
}