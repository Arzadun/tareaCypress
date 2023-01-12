class BasePage{


    clickElement = (element) =>{
        cy.get(element).click();
    }

    writeInElement = (element, text) =>{
        cy.get(element).type(text);
    }

}
export default new BasePage();