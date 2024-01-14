{
	"_Name": "RisksMobile",
	"Version": "/RisksMobile/Globals/Application/AppDefinition_Version.global",
	"MainPage": "/RisksMobile/Pages/Main.page",
	"OnLaunch": [
		"/RisksMobile/Actions/Service/InitializeOnline.action"
	],
	"OnWillUpdate": "/RisksMobile/Rules/Application/OnWillUpdate.js",
	"OnDidUpdate": "/RisksMobile/Actions/Service/InitializeOnline.action",
	"Styles": "/RisksMobile/Styles/Styles.less",
	"Localization": "/RisksMobile/i18n/i18n.properties",
	"_SchemaVersion": "23.12"
}