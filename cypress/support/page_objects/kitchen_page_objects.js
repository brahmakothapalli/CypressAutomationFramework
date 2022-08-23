/// <reference types="Cypress" />

class KitchenPage{

    navigateToHomePage(){
        cy.get('a:contains("The Kitchen")').click()
    }

    verifyKitchenPage(){
        cy.get('h1[class="chakra-heading css-dpmy2a"]')
        .should('be.visible')
        .should('have.text', 'The Kitchen')
    }

    navigateToPage(param){
        cy.get('.Card_card__3AVip').find('h3').each((pageLink) => {
            if(pageLink.text().includes(param)){
                cy.wrap(pageLink).click()
                cy.wait(3000)
            }
        })      
    }


}

export const onKitchenPage = new KitchenPage()