const sobreController = {
    index: (req, res) => {
        const dadosSobre = {
            titulo: "Sobre o Projeto ADS",
            versao: "1.0.0 (Expansão do Trabalho)",
            desenvolvedor: "Diogo Cruzs",
            missao: "Este projeto demonstra a arquitetura MVC (Controllers, Rotas e Views) usando ExpressJS e Handlebars."
        };
        
        res.render('sobre', dadosSobre);
    }
};

module.exports = sobreController;