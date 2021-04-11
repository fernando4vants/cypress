import articles from '../support/pages/articles'
import Routes from  '../support/routes'

describe('Publicação', () => {
    
    beforeEach(() => {
    
        // preciso inicializar as rotas em todas  os testes ? -> Não, somente uma vez
        //o que acontece se eu mudar o apelido de uma rota? -> Contrato

        //Preparação
        cy.backgroundLogin()
        articles.acessarFormularioDeNovaPublicacao()
    });

    it('Criar uma nova publicação', () => {
        //Ação
       articles.preencherFormulario()
       articles.submeterPublicacao()
       //Verificação
       articles.verificarSeAPublicacaoFoiCriadaComSucesso()
       
    });
});

//hooks -> momnetos antes / depois do teste
// before / beforeEach
// after / afterEach

//Tecnica do AAA -> aArrange Act Assert
// PAV-> Preparação Execução Verificação
