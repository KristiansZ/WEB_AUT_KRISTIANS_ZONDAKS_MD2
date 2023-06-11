import MainPage from "../../pageObjects/Main.Page"; 
import LoginPage from "../../pageObjects/Login.Page";
import AppointmentPage from "../../pageObjects/Appointment.Page";
import SummaryPage from "../../pageObjects/Summary.Page";

describe('MD2 Scenarios', () => {
  context("Appointment scenarios", () => {
    beforeEach(() => {
        MainPage.visit();
    });
  
    it("Make an Appointment", ()  =>{
      MainPage.makeAppointmentBtn.click();
      LoginPage.usernameField.type("John Doe");
      LoginPage.passwordField.type("ThisIsNotAPassword");
      LoginPage.loginBtn.click();
      AppointmentPage.facilityField.select('Seoul CURA Healthcare Center');
      AppointmentPage.checkboxHospReadm.click();
      AppointmentPage.selectMedicaid.click();
      AppointmentPage.calendarWidget.click();
      AppointmentPage.widgetDay.contains("30").click();
      cy.get("body").click(10,10);//had to click somewhere on screen otherwise calendar in front
      AppointmentPage.commentArea.type("CURA Healthcare Service");
      AppointmentPage.bookAppointBtn.click();
      SummaryPage.facilityField.should("contain", "Seoul CURA Healthcare Center");
      SummaryPage.hospReadmField.should("contain", "Yes");
      SummaryPage.healthcareProgram.should("contain", "Medicaid");
      SummaryPage.calendarDate.should("contain", "30/05/2023");
      SummaryPage.commentArea.should("contain", "CURA Healthcare Service");
    });

    it.only("Appointment History", ()  =>{
      MainPage.makeAppointmentBtn.click();
      LoginPage.usernameField.type("John Doe");
      LoginPage.passwordField.type("ThisIsNotAPassword");
      LoginPage.loginBtn.click();
      AppointmentPage.menuBtn.click();
      AppointmentPage.sideBar.should("have.class", "active");
      AppointmentPage.sideBar.contains("History").click();
      cy.get(".text-center").should("contain", "No appointment.");//didnt want to create a new page for only this one
    });
  });
});