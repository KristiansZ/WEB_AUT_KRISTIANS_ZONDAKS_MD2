class MainPage {
    static get url(){
        return "https://katalon-demo-cura.herokuapp.com/";
    }

    static visit(){
        cy.visit(this.url);
    }

    static get makeAppointmentBtn(){
        return cy.get("#btn-make-appointment");
    };
}

export default MainPage;