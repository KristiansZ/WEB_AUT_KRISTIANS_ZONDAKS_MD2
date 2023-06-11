class SummaryPage {
    static get url(){
        return "https://katalon-demo-cura.herokuapp.com/appointment.php#summary";
    }

    static visit(){
        cy.visit(this.url);
    }

    static get facilityField(){
        return cy.get("#facility");
    };

    static get hospReadmField(){
        return cy.get("#hospital_readmission");
    }

    static get healthcareProgram(){
        return cy.get("#program");
    }

    static get calendarDate(){
        return cy.get("#visit_date");
    }

    static get commentArea(){
        return cy.get("#comment");
    }
}

export default SummaryPage;