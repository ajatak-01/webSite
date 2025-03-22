import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor() { }

  currentLang: 'fr' | 'en' = 'fr';

  setCurrentLang(lang: 'fr' | 'en') {
    this.currentLang = lang;
  }

  getTrad(trad: string ) {
    if (this.currentLang === 'fr') {
      return (this.frenchTranslate as any)[trad]
    }
    return (this.englishTranslate as any)[trad]
  }

  //#region FRANCAIS
  frenchTranslate = {

    //tab
    home: 'Accueil',
    skills: 'Compétences',
    formations: 'Diplômes',
    experiences: 'Expériences',
    contact: 'Contact',

    //home
    hello: 'Bonjour,',
    imCedric: 'Je suis Cédric',
    imDev: 'Je suis développeur web',
    dlCv: 'Télécharger mon CV',

    //Compétences
    agile: 'Maîtrise du fonctionnement agile',
    communication: 'Excellente communication et esprit d\'équipe',
    angular: 'Maîtrise des langages HTLM/SCSS, Javascript et du framework angular',
    php: 'Bonnes compétences en PHP',

    //formation
    epitechDate: 'septembre 2014 - juin 2019',
    griffithLabel: 'ERASMUS EN IRLANDE',
    griffithDate: 'septembre 2017 - juin 2018',

    //XP

    //accenta
    accentaTitle: 'Accenta',
    accentaDates: 'novembre 2021 à aujourd\'hui',
    accentaLocation: 'Lille, France',

    accentaAngular: 'Développement d\'une solution web angular 18/PHP/postgresSQL',
    accentaNewFeatures: 'Développement des nouvelles features',
    accentaBugs: 'Résolution des bugs',
    accentaConception: 'Conception technique',
    accentaScrum: 'Environnement Agile Scrum',
    accentaPair: 'Pair programming & code review',
    accentaRetroCode: 'Partage de connaissances entre développeurs via des ateliers',
    accentaPokerPlanning: 'Estimation des tâches grâce à des poker plannings',
    accendaDoc: 'Rédaction de la documentation technique et fonctionnelle',
    accentaMaj: 'Mise à niveau des versions d\'angular au fil du temps',

    //opti mix
    optimixTitle: 'Optimix',
    optimixDates: 'octobre 2020 - janvier 2021',
    optimixLocation: 'Lille, France',

    optimixScripts: 'Création de scripts nodeJs pour sonder des sites e-commerce',
    optimixBack: 'Création d\'un backend TypeScript/sequelize permettant l\'exécution et la récupération des données sondées',
    optimixAngular: 'Maintien d\'une Application Web typeScript/angular',

    //solutec
    solutecTitle: 'Solutec',
    solutecDate: 'avril 2019 - septembre 2020',
    solutecLocation: 'Lyon, France',

    solutecDescribe: 'J\'ai été consultant développeur. J\'ai effectué deux missions chez nos clients',
    
    locamTitle: 'Locam',
    locamDate: 'juin 2020 - septembre 2020',
    locamLocation: 'St Étienne, France',

    locamRecette: 'Recette technique en SQL dans un contexte de migration de donnée',

    apicilTitle: 'Apicil',
    apicilDate: 'mai 2019 - décembre 2019',
    apicilLocation: 'Lyon, France',

    apicilPerl: 'Auto Formation sur le langage Perl via des tâches pratiques',
    apicildevPerl: 'Développement de script Perl permettant de modifier des données dans un contexte de migration',
    apicilCSV: 'Traitement de données au format CSV et XML', 
    apicilScripts: 'Architectures des scripts',

    //contact
    contactJob: 'Je suis à la recherche d\'un emplois en Suisse proche de la frontière française.',
    contactFullStack: 'Je recherche un poste de développeur web fullstack ou front.',
    contactFront: 'Pour la stack front end, je souhaite travailler avec Angular.',
    contactBack: 'Pour la stack back end, j\'ai utilisé koseven en PHP mais je suis ouvert à d\'autres stack et je suis désireux d\'apprendre.',
    contactCannaux: 'Vous pouvez me contacter via les trois canaux :'
  }
  //#endregion

  //#region ANGLAIS

  englishTranslate = {
    home: 'Home',
    skills: 'Skills',
    formations: 'Education',
    experiences: 'Experiences',
    contact: 'Contact',

    hello: 'Hello,',
    imCedric: 'I am Cédric',
    imDev: 'I am web developer.',
    dlCv: 'Download my resume',

    agile: 'Expertise in Agile methodologies',
    communication: 'Excellent communication and teamwork skills',
    angular: 'Expertise in HTML/SCSS, JavaScript, and the Angular framework',
    php: 'Good PHP skills',

    epitechDate: 'september 2014 - june 2019',
    griffithLabel: 'YEAR ABROAD IN IRLANDE',
    griffithDate: 'september 2017 - june 2018',

    //accenta
    accentaTitle: 'Accenta',
    accentaDates: 'november 2021 - today',
    accentaLocation: 'Lille, France',
    
    accentaAngular: 'Development of a web application in angular 18/PHP/postgresSQL',
    accentaNewFeatures: 'Developping new features',
    accentaBugs: 'Correcting bugs',
    accentaConception: 'Technical design of the developments',
    accentaScrum: 'Scrum environment',
    accentaPair: 'Pair programming & code review',
    accentaRetroCode: 'Sharing knowledge between developers through development workshops',
    accentaPokerPlanning: 'Evaluate the time for features through poker plannings',
    accendaDoc: 'Technical and fonctionnal documentation writing',
    accentaMaj: 'Upgrading angular version from 14 to 18',

    //opti mix
    optimixTitle: 'Optimix',
    optimixDates: 'october 2020 - january 2021',
    optimixLocation: 'Lille, France',

    optimixScripts: 'Création de scripts nodeJs pour sonder des sites e-commerce',
    optimixBack: 'Création d\'un backend TypeScript/sequelize permettant l\'exécution et la récupération des données sondées',
    optimixAngular: 'Maintien d\'une Application Web typeScript/angular',

    //solutec
    solutecTitle: 'Solutec',
    solutecDate: 'april 2019 - september 2020',
    solutecLocation: 'Lyon, France',

    solutecDescribe: 'I have been a consultant developer. I have done two missions for our client',
    
    locamTitle: 'Locam',
    locamDate: 'june 2020 - september 2020',
    locamLocation: 'St Étienne, France',

    locamRecette: 'Technical test in SQL in a data migration context',

    apicilTitle: 'Apicil',
    apicilDate: 'may 2019 - december 2019',
    apicilLocation: 'Lyon, France',

    apicilPerl: 'Self formation of Perl Language',
    apicildevPerl: 'Development of perl scripts that was abble to modify data in a data migration context',
    apicilCSV: 'Data processing in CSV and XML format', 
    apicilScripts: 'Scripts architecture',

    //contact
    contactJob: 'I am looking for a job in Switzerland close to the french border.',
    contactFullStack: 'I am looking for a web developer fullstack or front end job',
    contactFront: 'For the front end stack, I would like to work with Angular',
    contactBack: 'For the back end stack, i worked with koseven in PHP, but i am open to other frameworks or languages. I willing to learn.',
    contactCannaux: 'You can contact me with one of those ways :'
  }
  //#endregion
}
