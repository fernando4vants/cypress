import login from '../support/pages/login'

describe('Login',{ browser: 'chrome'}, () => {
    it('Realizar login com sucesso', () => {
       login.acessarLogin()
       login.preencherFormulario()
       login.submeterFormulario()

        //verificação

    });
});