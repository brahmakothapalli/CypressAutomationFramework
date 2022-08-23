import { onAlertPage } from "../support/page_objects/alerts_page_objects";
import { onCookiePage } from "../support/page_objects/cookie_page_objects";
import { onKitchenPage } from "../support/page_objects/kitchen_page_objects";

describe('Sample Test Suite', ()=>{

   beforeEach(()=>{
    cy.visit('/')
   })

    it('Test navigating to cookies page', ()=>{       
        onKitchenPage.verifyKitchenPage()
        onKitchenPage.navigateToPage('Cookie')
        onCookiePage.verifyCookiePage()
        onKitchenPage.navigateToHomePage()      
    })

    it('Test navigating to alert page', ()=>{       
        onKitchenPage.verifyKitchenPage()
        onKitchenPage.navigateToPage('Alert')
        onAlertPage.verifyAlertPage()
        onKitchenPage.navigateToHomePage()      
    })

})