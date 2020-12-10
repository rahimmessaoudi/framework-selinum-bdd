package com.e2eTests.automation.util;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CommonMethods {

	public static WebDriver driver;
	public static Properties prop;
	protected static final Logger logger = (Logger) LoggerFactory.getLogger(AbstractPage.class);
	public CommonMethods() {
		driver = Setup.driver;
	}

	public void scrollerButtom() {
		((JavascriptExecutor) driver).executeScript("window.scrollBy(0,400)", "");
	}

	public void scrollerTop() {
		JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;
		javascriptExecutor.executeScript("window.scrollTo(" + 0 + "," + 0 + ")", "");
	}

	public void readFromConfigFile(String url) throws IOException {
		prop = new Properties();
		FileInputStream fis = new FileInputStream("src/test/resources/configs/config.properties");
		prop.load(fis);
		driver.get(prop.getProperty(url));
	}
}
