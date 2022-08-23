/// <reference types="Cypress" />

class CookiePage{

    verifyCookiePage(){

        const values = ['Protein', 'Veggie']
        let i = 0

        cy.get('[class="Section_section__2bvo_ css-0"]').find('h2').each((element)=>{
            let elemetText = element.text().trim()            
            expect(elemetText).to.equal(values[i])
            i++
        })
    
    }
}

export const onCookiePage = new CookiePage()