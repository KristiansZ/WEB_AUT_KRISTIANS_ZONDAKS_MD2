class LoginPage {
    static get url(){
        return "https://katalon-demo-cura.herokuapp.com/profile.php#login";
    }

    static visit(){
        cy.visit(this.url);
    }

    static get usernameField(){
        return cy.get("#txt-username");
    };

    static get passwordField(){
        return cy.get("#txt-password");
    }

    static get loginBtn(){
        return cy.get("#btn-login");
    }
}

export default LoginPage;