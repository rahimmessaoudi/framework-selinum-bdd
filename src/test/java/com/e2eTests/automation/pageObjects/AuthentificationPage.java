package com.e2eTests.automation.pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AuthentificationPage {
	
	final static String USER_NAME_ID = "txtUsername"; 
	final static String PASS_WORD_ID = "txtPassword"; 
	final static String BTN_LOGIN_ID = "btnLogin"; 
	
	/*@FindBy*/
	@FindBy(how=How.ID, using = USER_NAME_ID)
	public static WebElement userName;
	/*@FindBy*/
	@FindBy(how=How.ID, using = PASS_WORD_ID)
	public static WebElement password;
	/*@FindBy*/
	@FindBy(how=How.ID, using = BTN_LOGIN_ID)
	public static WebElement btnLogin;
	
	/*Method*/
	public void fillUserName() {
		userName.sendKeys("Admin");
	}
	public void btnLogin() {
		password.sendKeys("admin123");
	}
	public void clicLoginButton() {
		btnLogin.click();
	}
}
