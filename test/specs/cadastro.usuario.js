import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import cadastro from '../pageobjects/cadastro.js'
import dadosCadastro from '../pageobjects/dados.cadastro.js'
import novoUsuario from '../pageobjects/novo.usuario.js'

describe('Cadastro de Usuário', () => {
    it('Deve cadastrar novo usuário', async () => {
        await homePage.openMenu('profile')
        await cadastro.Logar('SignUp')
        await dadosCadastro.infodados('Kelvin', 'Zussa', '99999999', 'teste01@hotmail.com', 'Teste@1234', 'Teste@1234' )
        expect ((await novoUsuario.perfilnome ('Kelvin Zussa')).isDisplayed ()).toBeTruthy()
        
        

})
      
})

