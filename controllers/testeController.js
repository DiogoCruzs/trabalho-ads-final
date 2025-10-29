const conteudosIniciais = [
    { id: 1, texto: "Conteúdo 1: Usando Array de Objetos" },
    { id: 2, texto: "Conteúdo 2: Iteração no Handlebars" }
];

const read = (req, res) => {
    const dadosParaPagina = {
        titulo: "Página Inicial (Com Estrutura CRUD)",
        usuarioLogado: false, 
        nome: "Estudante ADS",
        conteudos: conteudosIniciais 
    };
    res.render('home', dadosParaPagina);
};

const create = (req, res) => {
    const novoItem = req.body.nomeDoItem || 'Novo Item Simulado';
    console.log(`[CRUD] SIMULAÇÃO DE CRIAÇÃO do item: ${novoItem}`);

    res.redirect('/');
};

module.exports = { read,create}; 