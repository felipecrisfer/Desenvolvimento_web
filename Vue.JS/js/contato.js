const PaginaContato = {
    template:
        `
    <!-- Cabeçalho com fundo em degradê -->
    <header>
        <h1>Contatos dos Responsáveis</h1>
    </header>

    <!-- Seção com as informações de contato -->
    <div class="container">
        <p class="container paragrafo">
            Abaixo estão os contatos dos responsáveis. Caso tenha alguma dúvida ou precise de mais informações, entre em contato!
        </p>
    </div>

    <!-- Lista de Responsáveis -->
    <div class="container">
        <div class="row">
            <!-- Responsável 1 -->
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="Imagens/David.png" class="card-img-top" alt="Responsável 1">
                    <div class="card-body">
                        <h5 class="card-title">David Bryan</h5>
                        <p class="card-text">Coordenador de Projetos</p>
                        <p><strong>Telefone:</strong> (11) 98765-4321</p>
                        <p class="link">
                            <a href="https:" target="_blank"><img src="Imagens/linkedin.png" style="height: 40px; width: 40px;"></a>
                            <a href="https:" target="_blank"><img src="Imagens/insta.png" style="height: 40px; width: 40px;"></a>
                        </p>
                    </div>
                </div>
            </div>

            <!-- Responsável 2 -->
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="Imagens/Felipe.png" class="card-img-top" alt="Responsável 2">
            <div class="card-body">
                <h5 class="card-title">Felipe Fernandes</h5>
                <p class="card-text">Gerente de Marketing</p>
                <p><strong>Telefone:</strong> (21) 91234-5678</p>
                <p>
                    <a href="https://www.linkedin.com/in/felipe-fernandes-722590260/" target="_blank"><img src="Imagens/linkedin.png" style="height: 40px; width: 40px;"></a>
                    <a href="https://www.instagram.com/felipecrisfer/" target="_blank"><img src="Imagens/insta.png" style="height: 40px; width: 40px;"></a>
                </p>
                </div>
                </div>
            </div>

            <!-- Responsável 3 -->
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="Imagens/Robertha.png" class="card-img-top" alt="Responsável 3">
                    <div class="card-body">
                        <h5 class="card-title">Robertha Rezende</h5>
                        <p class="card-text">Diretora de Comunicação</p>
                        <p><strong>Telefone:</strong> (31) 98765-4321</p>
                        <p>
                        <a href="https:" target="_blank"><img src="Imagens/linkedin.png" style="height: 40px; width: 40px;"></a>
                        <a href="https:" target="_blank"><img src="Imagens/insta.png" style="height: 40px; width: 40px;"></a>
                        </p>
                    </div>
                </div>
            </div>
        </div> <!-- Fim da primeira linha -->

        <!-- Responsável 4 -->
        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="Imagens/Victor.png" class="card-img-top" alt="Responsável 4">
                    <div class="card-body">
                        <h5 class="card-title">Victor Araújo</h5>
                        <p class="card-text">Supervisor de TI</p>
                        <p><strong>Telefone:</strong> (41) 91234-6789</p>
                        <p>
                        <a href="https://www.linkedin.com/in/victor-araújo-batista-310894246/" target="_blank"><img src="Imagens/linkedin.png" style="height: 40px; width: 40px;"></a>
                        <a href="https://www.instagram.com/victor.dll/" target="_blank"><img src="Imagens/insta.png" style="height: 40px; width: 40px;"></a>
                        </p>
                    </div>
                </div>
            </div>
        </div> <!-- Fim da segunda linha -->
    </div> <!-- Fim do container -->
    `,
    data() {
        return {
        };
    },
};
