export interface Question {
  question: string;
  answer: string;
  options: string[];
}

export const defaultQuestionList: Question[] = [
  {
    question: 'Hvor mange danskere pynter deres hjem op til Halloween?',
    answer: 'Cirka hver femte dansker',
    options: [
      'Cirka hver anden dansker',
      'Cirka hver femte dansker',
      'Cirka hver femogtyvende dansker',
      'Cirka hver hundrede dansker',
    ],
  },

  {
    question: 'Hvornår falder fastelavn?',
    answer: 'Altid 7 uger før påskedag',
    options: [
      'Altid tredje søndag i februar',
      'Altid 6 uger efter nytår',
      'Altid 7 uger før påskedag',
      'Der er ikke en fast regel pga. skudår',
    ],
  },

  {
    question: 'Hvad er en gammel betegnelse for fastelavnssøndag?',
    answer: 'Flæskesøndag',
    options: ['Flæskesøndag', 'Fastesøndag', 'Forklædningsdag', 'Kattedag'],
  },

  {
    question: 'Hvornår stammer den første afbilding af en fastelavnsbolle fra?',
    answer: '1250',
    options: ['1390', '1520', '1050', '1250'],
  },

  {
    question: 'Hvor mange dage skulle man faste efter fastelavn?',
    answer: '40 dage',
    options: ['35 dage', '40 dage', '42 dage', '49 dage'],
  },

  {
    question: 'Hvornår bliver man kronet kattedronning?',
    answer: 'Når man slår sidste bræt ned',
    options: [
      'Når man slår bunden ud af tønden',
      'Når man slår første bræt ned',
      'Når man slår sidste bræt ned',
      'Når man slår hul i siden af tønden',
    ],
  },

  {
    question: 'Hvorfor klæder man sig ud til fastelavn?',
    answer: 'For at skræmme det onde væk',
    options: [
      'For at skræmme det onde væk',
      'For at skræmme børn',
      'For at skræmme sine venner',
      'Fordi man holdt for få kostumefester',
    ],
  },

  {
    question: 'Hvornår ligger Halloween?',
    answer: '31. oktober',
    options: [
      'Fredag den 13. oktober',
      'Sidste lørdag i oktober',
      '31. oktober',
      'Der er ikke en fast regel pga. skudår',
    ],
  },

  {
    question:
      'Hvad hedder filmen om Jack Skellington, kongen af Halloween Town?',
    answer: 'The Nightmare Before Christmas',
    options: [
      'The Nightmare Before Thanksgiving',
      'The Nightmare Before Fastelavn',
      'The Nightmare Before Christmas',
      'Jack Skellington, King of Halloween Town',
    ],
  },

  {
    question:
      'Hvor mange dage er der i den kendte, engelske julesang, hvor man får en gave hver dag?',
    answer: '12',
    options: ['10', '12', '24', '25'],
  },

  {
    question: 'Hvilken dato har anden juledag?',
    answer: '26. december',
    options: [
      '25. december',
      '26. december',
      '27. december',
      'Der er ikke en fast regel pga. skudår',
    ],
  },

  {
    question: 'Hvilken dato har skuddagen?',
    answer: '24. februar',
    options: [
      '14. februar',
      '24. februar',
      '29. februar',
      'Der er ikke en fast regel pga. skudår',
    ],
  },

  {
    question: 'Hvilke tal skal gå op i et årstal for at det er et skudår?',
    answer: '4, 100, 400',
    options: ['4', '4, 100', '4, 100, 400', '4, 100, 400, 1050'],
  },

  {
    question: 'Hvor mange Ninja Turtles er der i den originale serie?',
    answer: '4',
    options: ['3', '4', '5', '10'],
  },

  {
    question: 'Hvilken dato havde sidste udsendelse af Disney Sjov?',
    answer: '30. december 2022',
    options: [
      '28. december 2022',
      '30. december 2022',
      '31. december 2022',
      '4. januar 2023',
    ],
  },

  {
    question: 'På hvilket tidspunkt sendes Disneys Juleshow juleaften?',
    answer: '16:00',
    options: ['14:35', '16:00', '18:00', '19:15'],
  },

  {
    question: 'Hvor stor en del af danskerne ser traditionelt flow-tv?',
    answer: '23%',
    options: ['85', '23%', '44%', '68%'],
  },

  {
    question: 'Hvilken streamingtjeneste er den største i verden?',
    answer: 'Netflix',
    options: ['HBO Max', 'TV2 Play', 'Amazon Prime', 'Netflix'],
  },

  {
    question: 'Hvilket kontinent er det største i verden?',
    answer: 'Asien',
    options: ['Asien', 'Afrika', 'Europa', 'Sydamerika'],
  },

  {
    question: 'Hvor mange lande er der i Europa?',
    answer: '44',
    options: ['22', '44', '77', '111'],
  },

  {
    question:
      'Hvilken af nedenstående seværdigheder er ikke et af De Syv Vidundere?',
    answer: '',
    options: ['Taj Mahal', 'Machu Picchu', 'Den kinesiske mur', 'Rundetårn'],
  },

  {
    question: 'Hvad er danskernes mest foretrukne rejsemål?',
    answer: 'Spanien',
    options: ['Finland', 'Peru', 'Spanien', 'USA'],
  },

  {
    question: 'Hvem vandt Superbowl 2023?',
    answer: 'Kansas City Chiefs',
    options: [
      'Philadelphia Eagles',
      'Kansas City Chiefs',
      'New England Patriots',
      'Det blev uafgjort',
    ],
  },

  {
    question: 'Hvad er verdens populære sportsgren?',
    answer: 'Fodbold',
    options: ['Fodbold', 'Amerikansk fodbold', 'Håndbold', 'Golf'],
  },

  {
    question: 'Hvor mange virksomheder er der på Incuba Katrinebjerg?',
    answer: '64',
    options: ['9', '26', '68', '196'],
  },

  {
    question: 'Hvad er kælenavnet for den kontorbygning vi flytter til i maj?',
    answer: 'Dødsstjernen',
    options: [
      'Dødsstjernen',
      'Borgen',
      'Kulklumpen',
      'Den der store, sorte bygning i Skejby',
    ],
  },

  {
    question: 'Hvilket firma laver de computerskærme, vi bruger på kontorerne?',
    answer: 'Lenovo',
    options: ['Logitech', 'Razer', 'Apple', 'Lenovo'],
  },

  {
    question: 'Hvilken af nedenstående er ikke lavet af Atlassian?',
    answer: 'Github',
    options: ['Jira', 'Bitbucket', 'Github', 'Confluence'],
  },

  {
    question: 'Hvor mange must-win battles har Bankdata?',
    answer: '5',
    options: ['3', '5', '6', '9'],
  },

  {
    question: 'Hvor mange områder er der i den nye organisation?',
    answer: '6',
    options: ['3', '5', '6', '9'],
  },

  {
    question: 'Hvem vandt VM i Fodbold 2022?',
    answer: 'Argentina',
    options: ['Argentina', 'Danmark', 'Frankrig', 'Wales'],
  },

  {
    question: 'Hvor tit bliver der holdt Bankdata-fredagsbar i Aarhus?',
    answer: 'En gang om måneden',
    options: [
      'En gang om ugen',
      'En gang om måneden',
      'En gang om året',
      'Aldrig',
    ],
  },

  {
    question: 'Hvad er hovedstaden af Schweiz?',
    answer: 'Bern',
    options: ['Zürich', 'Geneve', 'Bern', 'Østrig'],
  },

  {
    question: 'Hvornår uddeles der Oscars i 2023?',
    answer: '13. marts',
    options: ['1. januar', '13. marts', '21. maj', '25. december'],
  },

  {
    question: 'Hvem optrådte I Superbowls Half-Time Show?',
    answer: 'Rihanna',
    options: ['Abba', 'Rihanna', 'Kanye West', 'Beyoncé'],
  },

  {
    question: 'Hvad var den mest sete e-sport i 2022?',
    answer: 'Counter-Strike: Global Offensive',
    options: [
      'Counter-Strike: Global Offensive',
      'Team Fortress 2',
      'Overwatch',
      'Garry`s Mod',
    ],
  },

  {
    question: 'Hvilken region i Danmark har færrest indbyggere?',
    answer: 'Region Nordjylland',
    options: [
      'Region Hovedstaden',
      'Region Midtjylland',
      'Region Syddanmark',
      'Region Nordjylland',
    ],
  },

  {
    question: 'Hvilket land er det største i Skandinavien?',
    answer: 'Sverige',
    options: ['Danmark', 'Norge', 'Sverige', 'Alle tre lande er lige store'],
  },

  {
    question: 'Hvilken øl er mest solgt i Danmark?',
    answer: 'Grøn Tuborg',
    options: ['Ceres Top', 'Grøn Tuborg', 'Slots Classic', 'Heineken'],
  },

  {
    question: 'Hvilke farver skal man blande for at få lilla?',
    answer: 'Blå og rød',
    options: ['Rød og brun', 'Blå og gul', 'Blå og rød', 'Rød og gul'],
  },

  {
    question: 'Hvilket af nedenstående programmeringssprog er ældst?',
    answer: 'Fortran',
    options: ['Java', 'Fortran', 'COBOL', 'C++'],
  },

  {
    question: 'Hvad er den mest brugte søgemaskine?',
    answer: 'Google',
    options: ['Bing', 'Google', 'DuckDuckGo', 'Yahoo'],
  },
  {
    question: 'Hvor mange danskere pynter deres hjem op til Halloween?',
    answer: 'Cirka hver femte dansker',
    options: [
      'Cirka hver anden dansker',
      'Cirka hver femte dansker',
      'Cirka hver femogtyvende dansker',
      'Cirka hver hundrede dansker',
    ],
  },

  {
    question: 'Hvornår falder fastelavn?',
    answer: 'Altid 7 uger før påskedag',
    options: [
      'Altid tredje søndag i februar',
      'Altid 6 uger efter nytår',
      'Altid 7 uger før påskedag',
      'Der er ikke en fast regel pga. skudår',
    ],
  },

  {
    question: 'Hvad er en gammel betegnelse for fastelavnssøndag?',
    answer: 'Flæskesøndag',
    options: ['Flæskesøndag', 'Fastesøndag', 'Forklædningsdag', 'Kattedag'],
  },

  {
    question: 'Hvornår stammer den første afbilding af en fastelavnsbolle fra?',
    answer: '1250',
    options: ['1390', '1520', '1050', '1250'],
  },

  {
    question: 'Hvor mange dage skulle man faste efter fastelavn?',
    answer: '40 dage',
    options: ['35 dage', '40 dage', '42 dage', '49 dage'],
  },

  {
    question: 'Hvornår bliver man kronet kattedronning?',
    answer: 'Når man slår sidste bræt ned',
    options: [
      'Når man slår bunden ud af tønden',
      'Når man slår første bræt ned',
      'Når man slår sidste bræt ned',
      'Når man slår hul i siden af tønden',
    ],
  },

  {
    question: 'Hvorfor klæder man sig ud til fastelavn?',
    answer: 'For at skræmme det onde væk',
    options: [
      'For at skræmme det onde væk',
      'For at skræmme børn',
      'For at skræmme sine venner',
      'Fordi man holdt for få kostumefester',
    ],
  },

  {
    question: 'Hvornår ligger Halloween?',
    answer: '31. oktober',
    options: [
      'Fredag den 13. oktober',
      'Sidste lørdag i oktober',
      '31. oktober',
      'Der er ikke en fast regel pga. skudår',
    ],
  },

  {
    question:
      'Hvad hedder filmen om Jack Skellington, kongen af Halloween Town?',
    answer: 'The Nightmare Before Christmas',
    options: [
      'The Nightmare Before Thanksgiving',
      'The Nightmare Before Fastelavn',
      'The Nightmare Before Christmas',
      'Jack Skellington, King of Halloween Town',
    ],
  },

  {
    question:
      'Hvor mange dage er der i den kendte, engelske julesang, hvor man får en gave hver dag?',
    answer: '12',
    options: ['10', '12', '24', '25'],
  },

  {
    question: 'Hvilken dato har anden juledag?',
    answer: '26. december',
    options: [
      '25. december',
      '26. december',
      '27. december',
      'Der er ikke en fast regel pga. skudår',
    ],
  },

  {
    question: 'Hvilken dato har skuddagen?',
    answer: '24. februar',
    options: [
      '14. februar',
      '24. februar',
      '29. februar',
      'Der er ikke en fast regel pga. skudår',
    ],
  },

  {
    question: 'Hvilke tal skal gå op i et årstal for at det er et skudår?',
    answer: '4, 100, 400',
    options: ['4', '4, 100', '4, 100, 400', '4, 100, 400, 1050'],
  },

  {
    question: 'Hvor mange Ninja Turtles er der i den originale serie?',
    answer: '4',
    options: ['3', '4', '5', '10'],
  },

  {
    question: 'Hvilken dato havde sidste udsendelse af Disney Sjov?',
    answer: '30. december 2022',
    options: [
      '28. december 2022',
      '30. december 2022',
      '31. december 2022',
      '4. januar 2023',
    ],
  },

  {
    question: 'På hvilket tidspunkt sendes Disneys Juleshow juleaften?',
    answer: '16:00',
    options: ['14:35', '16:00', '18:00', '19:15'],
  },

  {
    question: 'Hvor stor en del af danskerne ser traditionelt flow-tv?',
    answer: '23%',
    options: ['85', '23%', '44%', '68%'],
  },

  {
    question: 'Hvilken streamingtjeneste er den største i verden?',
    answer: 'Netflix',
    options: ['HBO Max', 'TV2 Play', 'Amazon Prime', 'Netflix'],
  },

  {
    question: 'Hvilket kontinent er det største i verden?',
    answer: 'Asien',
    options: ['Asien', 'Afrika', 'Europa', 'Sydamerika'],
  },

  {
    question: 'Hvor mange lande er der i Europa?',
    answer: '44',
    options: ['22', '44', '77', '111'],
  },

  {
    question:
      'Hvilken af nedenstående seværdigheder er ikke et af De Syv Vidundere?',
    answer: '',
    options: ['Taj Mahal', 'Machu Picchu', 'Den kinesiske mur', 'Rundetårn'],
  },

  {
    question: 'Hvad er danskernes mest foretrukne rejsemål?',
    answer: 'Spanien',
    options: ['Finland', 'Peru', 'Spanien', 'USA'],
  },

  {
    question: 'Hvem vandt Superbowl 2023?',
    answer: 'Kansas City Chiefs',
    options: [
      'Philadelphia Eagles',
      'Kansas City Chiefs',
      'New England Patriots',
      'Det blev uafgjort',
    ],
  },

  {
    question: 'Hvad er verdens populære sportsgren?',
    answer: 'Fodbold',
    options: ['Fodbold', 'Amerikansk fodbold', 'Håndbold', 'Golf'],
  },

  {
    question: 'Hvor mange virksomheder er der på Incuba Katrinebjerg?',
    answer: '64',
    options: ['9', '26', '68', '196'],
  },

  {
    question: 'Hvad er kælenavnet for den kontorbygning vi flytter til i maj?',
    answer: 'Dødsstjernen',
    options: [
      'Dødsstjernen',
      'Borgen',
      'Kulklumpen',
      'Den der store, sorte bygning i Skejby',
    ],
  },

  {
    question: 'Hvilket firma laver de computerskærme, vi bruger på kontorerne?',
    answer: 'Lenovo',
    options: ['Logitech', 'Razer', 'Apple', 'Lenovo'],
  },

  {
    question: 'Hvilken af nedenstående er ikke lavet af Atlassian?',
    answer: 'Github',
    options: ['Jira', 'Bitbucket', 'Github', 'Confluence'],
  },

  {
    question: 'Hvor mange must-win battles har Bankdata?',
    answer: '5',
    options: ['3', '5', '6', '9'],
  },

  {
    question: 'Hvor mange områder er der i den nye organisation?',
    answer: '6',
    options: ['3', '5', '6', '9'],
  },

  {
    question: 'Hvem vandt VM i Fodbold 2022?',
    answer: 'Argentina',
    options: ['Argentina', 'Danmark', 'Frankrig', 'Wales'],
  },

  {
    question: 'Hvor tit bliver der holdt Bankdata-fredagsbar i Aarhus?',
    answer: 'En gang om måneden',
    options: [
      'En gang om ugen',
      'En gang om måneden',
      'En gang om året',
      'Aldrig',
    ],
  },

  {
    question: 'Hvad er hovedstaden af Schweiz?',
    answer: 'Bern',
    options: ['Zürich', 'Geneve', 'Bern', 'Østrig'],
  },

  {
    question: 'Hvornår uddeles der Oscars i 2023?',
    answer: '13. marts',
    options: ['1. januar', '13. marts', '21. maj', '25. december'],
  },

  {
    question: 'Hvem optrådte I Superbowls Half-Time Show?',
    answer: 'Rihanna',
    options: ['Abba', 'Rihanna', 'Kanye West', 'Beyoncé'],
  },

  {
    question: 'Hvad var den mest sete e-sport i 2022?',
    answer: 'Counter-Strike: Global Offensive',
    options: [
      'Counter-Strike: Global Offensive',
      'Team Fortress 2',
      'Overwatch',
      'Garry`s Mod',
    ],
  },

  {
    question: 'Hvilken region i Danmark har færrest indbyggere?',
    answer: 'Region Nordjylland',
    options: [
      'Region Hovedstaden',
      'Region Midtjylland',
      'Region Syddanmark',
      'Region Nordjylland',
    ],
  },
  {
    question: 'Hvilket land er det største i Skandinavien?',
    answer: 'Sverige',
    options: ['Danmark', 'Norge', 'Sverige', 'Alle tre lande er lige store'],
  },

  {
    question: 'Hvilken øl er mest solgt i Danmark?',
    answer: 'Grøn Tuborg',
    options: ['Ceres Top', 'Grøn Tuborg', 'Slots Classic', 'Heineken'],
  },

  {
    question: 'Hvilke farver skal man blande for at få lilla?',
    answer: 'Blå og rød',
    options: ['Rød og brun', 'Blå og gul', 'Blå og rød', 'Rød og gul'],
  },

  {
    question: 'Hvilket af nedenstående programmeringssprog er ældst?',
    answer: 'Fortran',
    options: ['Java', 'Fortran', 'COBOL', 'C++'],
  },

  {
    question: 'Hvad er den mest brugte søgemaskine?',
    answer: 'Google',
    options: ['Bing', 'Google', 'DuckDuckGo', 'Yahoo'],
  },
];
