class AppointmentPage {
    static get url(){
        return "https://katalon-demo-cura.herokuapp.com/#appointment";
    }

    static visit(){
        cy.visit(this.url);
    }

    static get facilityField(){
        return cy.get("#combo_facility");
    };

    static get checkboxHospReadm(){
        return cy.get("#chk_hospotal_readmission");
    }

    static get selectMedicaid(){
        return cy.get("#radio_program_medicaid");
    }

    static get calendarWidget(){
        return cy.get(".input-group-addon");
    }

    static get widgetDay(){
        return cy.get("td.day");
    }

    static get commentArea(){
        return cy.get("#txt_comment");
    }

    static get bookAppointBtn(){
        return cy.get("#btn-book-appointment");
    }

    static get menuBtn(){
        return cy.get("#menu-toggle");
    }

    static get sideBar(){
        return cy.get("#sidebar-wrapper");
    }
}

export default AppointmentPage;