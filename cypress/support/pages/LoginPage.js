import BasePage from "./BasePage";
class LoginPage {
    constructor(){
        this.emailInput = '.login-form > form > [type="email"]';
        this.passwordInput = '[type="password"]';
        this.loginButton = '.login-form > form > .btn';
    }

    enterCredentials = (email, password)  =>{
        BasePage.writeInElement(this.emailInput, email);
        BasePage.writeInElement(this.passwordInput ,password);
    }

    submitLogin = () => {
       BasePage.clickElement(this.loginButton) 
    }

}
export default new LoginPage();
