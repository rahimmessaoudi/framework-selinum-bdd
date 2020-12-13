package com.e2eTests.automation.stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.e2eTests.automation.pageObjects.AcceuilPage;
import com.e2eTests.automation.util.Setup;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AcceuilStepDefinition {

	public WebDriver driver;
	private AcceuilPage acceuilPage = new AcceuilPage();

	public AcceuilStepDefinition() {
		driver = Setup.driver;
	}

	@When("^je clique sur le module Recruitment$")
	public void jeCliqueSurLeModuleRecruitment() throws Throwable {
		PageFactory.initElements(driver, AcceuilPage.class);
		acceuilPage.goToRecruitment();
	}

	@Then("^je verifie la page Recruitment \"([^\"]*)\"$")
	public void jeVerifieLAffichageDeLaPageRecruitment(String menu_sub_Rec) throws Throwable {
		String pageRecruitment = AcceuilPage.pageRecruitment.getText();
		Assert.assertTrue(pageRecruitment.contains(menu_sub_Rec));
	}

	@When("^je clique sur le module PIM$")
	public void jeCliqueSurLeModulePIM() throws Throwable {
		PageFactory.initElements(driver, AcceuilPage.class);
		acceuilPage.goToBtn();
	}

	@Then("^je verifie la page PIM \"([^\"]*)\"$")
	public void jeVerifieLAffichageDeLaPagePIM(String menu_sub_PIM) throws Throwable {
		String pageRIM = AcceuilPage.pagePIM.getText();
		Assert.assertTrue(pageRIM.contains(menu_sub_PIM));

	}

}
