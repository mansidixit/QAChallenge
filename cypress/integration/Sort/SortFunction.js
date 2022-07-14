/// <reference types="cypress" />

const { after } = require("mocha");

describe('Sort Items', () => {
    beforeEach(() => {
        //  cy.visit("https://shutterfly.com/");
        cy.visit("https://craftcartel.com.au/");
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })

    // it('Sort Item from Low to High price', () => {

    //     cy.get("div.elementor-menu-toggle > i.eicon-menu-bar").click();
    //     cy.get("ul[id*='menu-2-'] > li:nth-child(1) ").click();
    //     cy.get("ul[id*='menu-2-'] > li:nth-child(1) >ul > li:nth-child(4)").click();

    //     //clicks Find your Spirit menu
    //     cy.get("div.prdctfltr_wc.prdctfltr_woocommerce.woocommerce.prdctfltr_wc_regular.pf_sidebar_css > span > span.prdctfltr_woocommerce_filter_title").click();
    //     //clicks Price Low to Hign
    //     cy.get("div.xwc--pf-show-sidebar label.prdctfltr_ft_price > span").click();
    //     //Clicks Go
    //     cy.get("div.xwc--pf-show-sidebar div.prdctfltr_buttons a").click();
    //     cy.get('div.ccliquor-shop-float-left > span > bdi', { timeout: 10000 }).should('be.visible');

    //     //checks whether the Single price is sorted correctly or not :lowToHigh
    //     cy.sortByPrice('div.ccliquor-shop-float-left > span > bdi', 'lowToHigh');

    //     // checks the Member Price is correctly sorted or not : lowToHigh
    //     cy.sortByPrice('div.ccliquor-member-shop-float-left > span > bdi', 'lowToHigh');

    // })

    it('Sort Item from High to Low price', () => {

        cy.get("div.elementor-menu-toggle > i.eicon-menu-bar").click();
        cy.get("ul[id*='menu-2-'] > li:nth-child(1) ").click();
        cy.get("ul[id*='menu-2-'] > li:nth-child(1) >ul > li:nth-child(4)").click();

        //clicks Find your Spirit menu
        cy.get("div.prdctfltr_wc.prdctfltr_woocommerce.woocommerce.prdctfltr_wc_regular.pf_sidebar_css > span > span.prdctfltr_woocommerce_filter_title").click();

        //clicks Price Low to Hign
        cy.get("div.xwc--pf-show-sidebar label.prdctfltr_ft_price-desc > span").click();

        //Clicks Go
        cy.get("div.xwc--pf-show-sidebar div.prdctfltr_buttons a").click();
        cy.get('div.ccliquor-shop-float-left > span > bdi', { timeout: 10000 }).should('be.visible');

       
        //checks whether the Single price is sorted correctly or not :highToLow
        cy.sortByPrice('div.ccliquor-shop-float-left > span > bdi', 'highToLow');

        // checks the Member Price is correctly sorted or not : highToLow
        cy.sortByPrice('div.ccliquor-member-shop-float-left > span > bdi', 'highToLow');

    })


    after(() => {
        cy.clearCookies()
    })

})