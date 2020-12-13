$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("accueil/Accueil.feature");
formatter.feature({
  "line": 2,
  "name": "Accueil-OrangeHRM",
  "description": "En tant que utilisateur orange je souhaite acceder au module Recruitment",
  "id": "accueil-orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@accueil"
    }
  ]
});
formatter.before({
  "duration": 9415359400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Je me connecte sur l application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisie le login \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisie le mot de passe \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Redirection vers l accueil",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationOutlineStepDefnition.jeMeConnecteSurLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 5111854600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 20
    }
  ],
  "location": "AuthentificationOutlineStepDefnition.jeSaisieLeLogin(String)"
});
formatter.result({
  "duration": 150597300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 27
    }
  ],
  "location": "AuthentificationOutlineStepDefnition.jeSaisieLeMotDePasse(String)"
});
formatter.result({
  "duration": 143217000,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationOutlineStepDefnition.jeCliqueSurLogin()"
});
formatter.result({
  "duration": 2836861500,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationOutlineStepDefnition.redirectionVersLAccueil()"
});
formatter.result({
  "duration": 45793400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Acceder au module Recruitment",
  "description": "",
  "id": "accueil-orangehrm;acceder-au-module-recruitment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Recruitment"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "je clique sur le module Recruitment",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "je verifie la page Recruitment \"Candidates\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AcceuilStepDefinition.jeCliqueSurLeModuleRecruitment()"
});
formatter.result({
  "duration": 1097847200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Candidates",
      "offset": 32
    }
  ],
  "location": "AcceuilStepDefinition.jeVerifieLAffichageDeLaPageRecruitment(String)"
});
formatter.result({
  "duration": 47892900,
  "status": "passed"
});
formatter.after({
  "duration": 1749540100,
  "status": "passed"
});
formatter.before({
  "duration": 8413163900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Je me connecte sur l application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisie le login \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisie le mot de passe \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Redirection vers l accueil",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationOutlineStepDefnition.jeMeConnecteSurLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 5341607100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 20
    }
  ],
  "location": "AuthentificationOutlineStepDefnition.jeSaisieLeLogin(String)"
});
formatter.result({
  "duration": 128716900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 27
    }
  ],
  "location": "AuthentificationOutlineStepDefnition.jeSaisieLeMotDePasse(String)"
});
formatter.result({
  "duration": 121098200,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationOutlineStepDefnition.jeCliqueSurLogin()"
});
formatter.result({
  "duration": 5083482000,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationOutlineStepDefnition.redirectionVersLAccueil()"
});
formatter.result({
  "duration": 60665900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Acceder au module PIM",
  "description": "",
  "id": "accueil-orangehrm;acceder-au-module-pim",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@PIM"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "je clique sur le module PIM",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "je verifie la page PIM \"Configuration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AcceuilStepDefinition.jeCliqueSurLeModulePIM()"
});
formatter.result({
  "duration": 3534289100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Configuration",
      "offset": 24
    }
  ],
  "location": "AcceuilStepDefinition.jeVerifieLAffichageDeLaPagePIM(String)"
});
formatter.result({
  "duration": 33102900,
  "status": "passed"
});
formatter.after({
  "duration": 1520579000,
  "status": "passed"
});
});