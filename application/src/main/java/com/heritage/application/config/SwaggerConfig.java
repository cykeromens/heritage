package com.heritage.application.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger.web.SecurityConfiguration;
import springfox.documentation.swagger.web.SecurityConfigurationBuilder;

@Configuration
public class SwaggerConfig {

	private static final String CONTROLLER_PACKAGE = "com.heritage.application";
	private static final String GROUP_NAME = "heritage-api";
	private static final String TITLE = "API Documentation for Heritage Application";
	private static final String DESCRIPTION = "Description Placeholder";
	private static final String VERSION = "1.0";

	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2)
				.groupName(GROUP_NAME)
				.useDefaultResponseMessages(true)
				.apiInfo(apiInfo())
				.select()
				.apis(RequestHandlerSelectors.basePackage(CONTROLLER_PACKAGE))
				.paths(PathSelectors.any())
				.build();
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder().
				title(TITLE).
				description(DESCRIPTION).
				version(VERSION).
				build();
	}

	@Bean
	public SecurityConfiguration security() {
		return SecurityConfigurationBuilder.builder()
				.appName(GROUP_NAME)
				.scopeSeparator(",")
				.build();
	}
}
