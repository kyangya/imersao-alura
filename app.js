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
        //Encontra se o herói pesquisado está no banco de dados.
        if (Heroi.includes(caixaPesquisa)) {
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
        //Muda os nomes de civis na base de dados para letras maiúsculas.
        Civil = dado.nomeCivil.toUpperCase()
        //Encontra se o nome de civil do herói pesquisado está no banco de dados.
        if (Civil.includes(caixaPesquisa)) {
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
        //Muda os nomes das organizações na base de dados para letras maiúsculas.
        Organizacao = dado.organizacao.toUpperCase()
        //Encontra os membros de determinada organização no banco de dados.
        if (Organizacao.includes(caixaPesquisa)) {
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
        if (caixaPesquisa == "") {
            // Cria um novo elemento com toda a base de dados
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
        if (!resultados) {
            resultados = "Nenhum herói encontrado."
        }
    }

    //Atribui novo nome à section para evitar manipulações equivocadas.
    section.innerHTML = resultados
}