$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentification/Authentification.feature");
formatter.feature({
  "line": 2,
  "name": "Authentification - OrangeHRM",
  "description": "ETQ(En tant que)utilisateur je souhaite m\u0027authentifier",
  "id": "authentification---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@authentification"
    }
  ]
});
formatter.before({
  "duration": 9993037900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Authentification - OrangeHRM",
  "description": "",
  "id": "authentification---orangehrm;authentification---orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@authentification"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "J ouvre l application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Je saisie le login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Je saisie le mot de passe",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Je clique sur le bouton login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Je verifie le compte admin",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationStepDef.jOuvreLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 5539797800,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDef.jeSaisieLeLogin()"
});
formatter.result({
  "duration": 151388700,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDef.jeSaisieLeMotDePasse()"
});
formatter.result({
  "duration": 153641200,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDef.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 2375246500,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDef.jeVerifieLeCompteAdmin()"
});
formatter.result({
  "duration": 51020100,
  "status": "passed"
});
formatter.after({
  "duration": 1676544400,
  "status": "passed"
});
});