import BasePage from "./BasePage";
class HomePage{
    constructor(){
        this.loginButtonPage = '.shop-menu > .nav > :nth-child(4) > a';
    }

    navigateToLoginPage = () => {
        BasePage.clickElement(this.loginButtonPage)
    }
}
export default new HomePage();