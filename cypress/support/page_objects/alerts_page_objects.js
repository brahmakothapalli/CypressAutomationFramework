class AlertPage{

    verifyAlertPage(){
        cy.get('class="chakra-heading css-1vyua5b"').should('have.text', 'Alert')
    }

}

export const onAlertPage = new AlertPage()