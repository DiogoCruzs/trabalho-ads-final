const homeController = {
    index: (req, res) => {
        const dadosParaPagina = {
            titulo: "Página Inicial do Meu Projeto ADS",
            usuarioLogado: true,
            nome: "Estudante ADS",
            conteudos: [
                { id: 1, texto: "Conteúdo 1: Usando Array de Objetos" },
                { id: 2, texto: "Conteúdo 2: Iteração no Handlebars" }
            ]
        };
        res.render('home', dadosParaPagina);
    }
};

module.exports = homeController;