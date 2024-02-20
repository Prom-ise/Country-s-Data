class Country {
  constructor(countryName, population, economicalBudget) {
    (this.name = countryName),
      (this.pop = population),
      (this.ecoBgt = economicalBudget);
  }
}

let nigeria = new Country("NIGERIA", "Over 200 Million", "427 Billion Dollars");
console.log(nigeria);

// All Countries Listed
const data = [
  {
    name: "Afghanistan",
    Category: "Kabul",
    info: "Information about Afghanistan",
  },
  { name: "Albania", Category: "Tirana", info: "Information about Albania" },
  { name: "Algeria", Category: "Algiers", info: "Information about Algeria" },
  {
    name: "Andorra",
    Category: "Andorra la Vella",
    info: "Information about Andorra",
  },
  { name: "Angola", Category: "Luanda", info: "Information about Angola" },
  {
    name: "Antigua and Barbuda",
    Category: "Saint John's",
    info: "Information about Antigua and Barbuda",
  },
  {
    name: "Argentina",
    Category: "Buenos Aires",
    info: `Argentina: Known for its passionate culture, stunning landscapes, and vibrant cities like Buenos Aires, Argentina offers visitors opportunities to explore tango music, Patagonian glaciers, and the majestic Iguazu Falls.`,
  },
  { name: "Armenia", Category: "Yerevan", info: "Information about Armenia" },
  {
    name: "Australia",
    Category: "Canberra",
    info: `Australia: Known for its stunning natural landscapes, vibrant cities, and unique wildlife, Australia offers visitors diverse experiences ranging from the iconic Sydney Opera House to the breathtaking Great Barrier Reef.`,
  },
  { name: "Austria", Category: "Vienna", info: `Austria: Famed for its imperial history, classical music, and alpine scenery, Austria attracts travelers with attractions such as Vienna's palaces, Salzburg's Mozart heritage, and the scenic lakes of the Austrian Alps.` },
  {
    name: "Azerbaijan",
    Category: "Baku",
    info: "Information about Azerbaijan",
  },
  { name: "Bahamas", Category: "Nassau", info: "Information about Bahamas" },
  { name: "Bahrain", Category: "Manama", info: "Information about Bahrain" },
  {
    name: "Bangladesh",
    Category: "Dhaka",
    info: "Information about Bangladesh",
  },
  {
    name: "Barbados",
    Category: "Bridgetown",
    info: "Information about Barbados",
  },
  { name: "Belarus", Category: "Minsk", info: "Information about Belarus" },
  { name: "Belgium", Category: "Brussels", info: `Belgium: With its medieval architecture, chocolate, and beer culture, Belgium entices visitors with attractions such as the Grand Place in Brussels, medieval towns like Bruges, and delicious Belgian waffles.` },
  { name: "Belize", Category: "Belmopan", info: "Information about Belize" },
  { name: "Benin", Category: "Porto-Novo", info: "Information about Benin" },
  { name: "Bhutan", Category: "Thimphu", info: `Bhutan: Known for its stunning Himalayan landscapes, Buddhist monasteries, and Gross National Happiness philosophy, Bhutan offers travelers a unique cultural and natural experience.` },
  { name: "Bolivia", Category: "Sucre", info: "Information about Bolivia" },
  {
    name: "Bosnia and Herzegovina",
    Category: "Sarajevo",
    info: "Information about Bosnia and Herzegovina",
  },
  {
    name: "Botswana",
    Category: "Gaborone",
    info: `Botswana: Famed for its abundant wildlife, including the Okavango Delta and Chobe National Park, Botswana is a premier safari destination in Africa.`,
  },
  {
    name: "Brazil",
    Category: "Brasília",
    info: `Brazil: With its lively culture, beautiful beaches, and Amazon rainforest, Brazil attracts travelers seeking adventure, music, and vibrant street life, particularly during events like Carnival in Rio de Janeiro.`,
  },
  {
    name: "Brunei",
    Category: "Bandar Seri Begawan",
    info: "Information about Brunei",
  },
  { name: "Bulgaria", Category: "Sofia", info: "Information about Bulgaria" },
  {
    name: "Burkina Faso",
    Category: "Ouagadougou",
    info: "Information about Burkina Faso",
  },
  { name: "Burundi", Category: "Gitega", info: "Information about Burundi" },
  {
    name: "Cabo Verde",
    Category: "Praia",
    info: "Information about Cabo Verde",
  },
  {
    name: "Cambodia",
    Category: "Phnom Penh",
    info: `Cambodia: Home to the iconic Angkor Wat temple complex, Cambodia entices visitors with its rich Khmer history, vibrant markets, and picturesque countryside.`,
  },
  { name: "Cameroon", Category: "Yaoundé", info: "Information about Cameroon" },
  {
    name: "Canada",
    Category: "Ottawa",
    info: `Canada: Renowned for its breathtaking scenery, outdoor adventures, and multicultural cities, Canada offers visitors opportunities to explore national parks, ski resorts, and cultural festivals across its vast landscape.`,
  },
  {
    name: "Central African Republic",
    Category: "Bangui",
    info: "Information about Central African Republic",
  },
  { name: "Chad", Category: "N'Djamena", info: "Information about Chad" },
  { name: "Chile", Category: "Santiago", info: `Chile: Stretching along the western coast of South America, Chile offers diverse landscapes ranging from the Atacama Desert to the Andes Mountains and Patagonian fjords, as well as cultural attractions in Santiago and Valparaiso.` },
  {
    name: "China",
    Category: "Beijing",
    info: `China: As one of the world's oldest civilizations, China boasts a wealth of cultural treasures, including the Great Wall, Forbidden City, and Terracotta Army, along with modern metropolises like Shanghai and Beijing.`,
  },
  { name: "Colombia", Category: "Bogotá", info: `Colombia: With its diverse landscapes, colonial cities, and Caribbean beaches, Colombia offers travelers opportunities for adventure, culture, and relaxation.` },
  { name: "Comoros", Category: "Moroni", info: "Information about Comoros" },
  {
    name: "Congo (Congo-Brazzaville)",
    Category: "Brazzaville",
    info: "Information about Congo (Congo-Brazzaville)",
  },
  {
    name: "Cote dIvoire",
    Category: "Yamoussoukro",
    info: "Information about Cote dIvoire",
  },
  {
    name: "Costa Rica",
    Category: "San José",
    info: `Costa Rica: Known for its eco-tourism initiatives, lush rainforests, and biodiversity, Costa Rica attracts visitors with its wildlife reserves, volcanoes, and pristine beaches.`,
  },
  { name: "Croatia", Category: "Zagreb", info: `Croatia: Renowned for its stunning Adriatic coastline, historic cities, and picturesque islands, Croatia captivates visitors with attractions such as Dubrovnik's old town, Plitvice Lakes National Park, and the ancient city of Split.` },
  { name: "Cuba", Category: "Havana", info: "Information about Cuba" },
  { name: "Cyprus", Category: "Nicosia", info: "Information about Cyprus" },
  {
    name: "Czechia (Czech Republic)",
    Category: "Prague",
    info: `Czech Republic: Famed for its medieval castles, charming towns, and historic architecture, the Czech Republic offers travelers a glimpse into Central European culture and heritage.`,
  },
  {
    name: "Denmark",
    Category: "Copenhagen",
    info: `Denmark: Known for its fairy-tale castles, cycling culture, and hygge lifestyle, Denmark offers travelers opportunities to explore Copenhagen's colorful Nyhavn, historic landmarks like Kronborg Castle, and scenic countryside.`,
  },
  {
    name: "Djibouti",
    Category: "Djibouti City",
    info: "Information about Djibouti",
  },
  { name: "Dominica", Category: "Roseau", info: "Information about Dominica" },
  {
    name: "Dominican Republic",
    Category: "Santo Domingo",
    info: "Information about Dominican Republic",
  },
  { name: "Ecuador", Category: "Quito", info: `Ecuador: Home to the Galapagos Islands and the Amazon Rainforest, Ecuador offers travelers opportunities for wildlife viewing, adventure sports, and exploring indigenous cultures.` },
  {
    name: "Egypt",
    Category: "Cairo",
    info: `Egypt: Home to ancient wonders such as the Pyramids of Giza and the Sphinx, Egypt entices travelers with its rich history, archaeological sites, and Nile River cruises.`,
  },
  {
    name: "El Salvador",
    Category: "San Salvador",
    info: "Information about El Salvador",
  },
  {
    name: "Equatorial Guinea",
    Category: "Malabo",
    info: "Information about Equatorial Guinea",
  },
  { name: "Eritrea", Category: "Asmara", info: "Information about Eritrea" },
  { name: "Estonia", Category: "Tallinn", info: `Estonia: Known for its digital innovation, medieval old towns, and Baltic coastlines, Estonia captivates visitors with its blend of modernity and historical charm.` },
  {
    name: 'Eswatini (fmr. "Swaziland")',
    Category: "Mbabane",
    info: 'Information about Eswatini (fmr. "Swaziland")',
  },
  {
    name: "Ethiopia",
    Category: "Addis Ababa",
    info: "Information about Ethiopia",
  },
  { name: "Fiji", Category: "Suva", info: "Information about Fiji" },
  { name: "Finland", Category: "Helsinki", info: `Finland: With its pristine nature, modern design, and northern lights, Finland offers visitors opportunities for wilderness adventures, sauna culture, and exploring cities like Helsinki and Rovaniemi.` },
  {
    name: "France",
    Category: "Paris",
    info: `France: Renowned for its rich history, art, cuisine, and romantic ambiance, France attracts millions of visitors each year to explore attractions such as the Eiffel Tower, Louvre Museum, and French Riviera.`,
  },
  { name: "Gabon", Category: "Libreville", info: "Information about Gabon" },
  { name: "Gambia", Category: "Banjul", info: "Information about Gambia" },
  { name: "Georgia", Category: "Tbilisi", info: "Information about Georgia" },
  {
    name: "Germany",
    Category: "Berlin",
    info: `Germany: With its fascinating history, diverse landscapes, and vibrant cities, Germany appeals to travelers with its cultural festivals, medieval towns, scenic countryside, and renowned beer culture.`,
  },
  { name: "Ghana", Category: "Accra", info: `Ghana: With its vibrant culture, historic forts, and scenic coastline, Ghana offers travelers opportunities for cultural immersion, heritage tourism, and beach relaxation.` },
  {
    name: "Greece",
    Category: "Athens",
    info: `Greece: Famed for its ancient ruins, stunning islands, and Mediterranean cuisine, Greece beckons visitors with its picturesque landscapes, historic landmarks, and idyllic beaches.`,
  },
  {
    name: "Grenada",
    Category: "St. George's",
    info: "Information about Grenada",
  },
  {
    name: "Guatemala",
    Category: "Guatemala City",
    info: "Information about Guatemala",
  },
  { name: "Guinea", Category: "Conakry", info: "Information about Guinea" },
  {
    name: "Guinea-Bissau",
    Category: "Bissau",
    info: "Information about Guinea-Bissau",
  },
  { name: "Guyana", Category: "Georgetown", info: "Information about Guyana" },
  {
    name: "Haiti",
    Category: "Port-au-Prince",
    info: "Information about Haiti",
  },
  {
    name: "Holy See",
    Category: "Vatican City",
    info: "Information about Holy See",
  },
  {
    name: "Honduras",
    Category: "Tegucigalpa",
    info: "Information about Honduras",
  },
  { name: "Hungary", Category: "Budapest", info: `Hungary: Famed for its thermal baths, Baroque architecture, and rich cultural heritage, Hungary entices visitors with attractions such as Budapest's Parliament, Buda Castle, and the Danube River.` },
  {
    name: "Iceland",
    Category: "Reykjavik",
    info: `Iceland: Known for its dramatic landscapes, geothermal wonders, and vibrant culture, Iceland captivates visitors with attractions such as the Blue Lagoon, Golden Circle route, and the magical Northern Lights.`,
  },
  { name: "India", Category: "New Delhi", info: `India: With its vibrant colors, diverse cultures, and rich heritage, India offers travelers an immersive experience through its bustling cities, majestic temples, and scenic landscapes such as the Taj Mahal.` },
  {
    name: "Indonesia",
    Category: "Jakarta",
    info: `Indonesia: Comprising thousands of islands, Indonesia boasts tropical beaches, lush rainforests, and cultural diversity, making it a popular destination for beach lovers, adventure seekers, and cultural enthusiasts alike.`,
  },
  { name: "Iran", Category: "Tehran", info: `Iran: With its ancient history, stunning mosques, and Persian hospitality, Iran offers travelers a unique blend of cultural treasures, culinary delights, and breathtaking landscapes.` },
  { name: "Iraq", Category: "Baghdad", info: "Information about Iraq" },
  { name: "Ireland", Category: "Dublin", info: `Ireland: Famed for its lush green countryside, historic castles, and lively pub culture, Ireland offers travelers opportunities to explore Dublin's literary heritage, the Cliffs of Moher, and the scenic Ring of Kerry.` },
  { name: "Israel", Category: "Jerusalem", info: "Information about Israel" },
  {
    name: "Italy",
    Category: "Rome",
    info: `Italy: Famous for its ancient ruins, Renaissance art, picturesque landscapes, and delicious cuisine, Italy is a favorite destination for travelers seeking history, culture, and gastronomic experiences.`,
  },
  { name: "Jamaica", Category: "Kingston", info: "Information about Jamaica" },
  {
    name: "Japan",
    Category: "Tokyo",
    info: `Japan: Known for its blend of ancient traditions and cutting-edge technology, Japan offers visitors a unique cultural experience, from historic temples and gardens to futuristic cities and culinary delights.`,
  },
  { name: "Jordan", Category: "Amman", info: "Information about Jordan" },
  {
    name: "Kazakhstan",
    Category: "Nur-Sultan",
    info: "Information about Kazakhstan",
  },
  { name: "Kenya", Category: "Nairobi", info: `Kenya: Known for its diverse wildlife, Maasai culture, and scenic landscapes such as the Masai Mara and Mount Kenya, Kenya is a top safari destination in Africa.` },
  {
    name: "Kiribati",
    Category: "South Tarawa",
    info: "Information about Kiribati",
  },
  { name: "Kuwait", Category: "Kuwait City", info: "Information about Kuwait" },
  {
    name: "Kyrgyzstan",
    Category: "Bishkek",
    info: "Information about Kyrgyzstan",
  },
  { name: "Laos", Category: "Vientiane", info: `Laos: With its tranquil Buddhist temples, lush landscapes, and Mekong River scenery, Laos offers travelers a serene and spiritual escape in Southeast Asia.` },
  { name: "Latvia", Category: "Riga", info: "Information about Latvia" },
  { name: "Lebanon", Category: "Beirut", info: "Information about Lebanon" },
  { name: "Lesotho", Category: "Maseru", info: "Information about Lesotho" },
  { name: "Liberia", Category: "Monrovia", info: "Information about Liberia" },
  { name: "Libya", Category: "Tripoli", info: "Information about Libya" },
  {
    name: "Liechtenstein",
    Category: "Vaduz",
    info: "Information about Liechtenstein",
  },
  {
    name: "Lithuania",
    Category: "Vilnius",
    info: "Information about Lithuania",
  },
  {
    name: "Luxembourg",
    Category: "Luxembourg City",
    info: "Information about Luxembourg",
  },
  {
    name: "Madagascar",
    Category: "Antananarivo",
    info: "Information about Madagascar",
  },
  { name: "Malawi", Category: "Lilongwe", info: "Information about Malawi" },
  {
    name: "Malaysia",
    Category: "Kuala Lumpur",
    info: `Malaysia: Home to bustling cities, tropical rainforests, and multicultural heritage, Malaysia entices visitors with attractions such as Kuala Lumpur's Petronas Towers, Penang's street food, and Borneo's wildlife.`,
  },
  { name: "Maldives", Category: "Malé", info: "Information about Maldives" },
  { name: "Mali", Category: "Bamako", info: "Information about Mali" },
  { name: "Malta", Category: "Valletta", info: "Information about Malta" },
  {
    name: "Marshall Islands",
    Category: "Majuro",
    info: "Information about Marshall Islands",
  },
  {
    name: "Mauritania",
    Category: "Nouakchott",
    info: "Information about Mauritania",
  },
  {
    name: "Mauritius",
    Category: "Port Louis",
    info: "Information about Mauritius",
  },
  { name: "Mexico", Category: "Mexico City", info: `Mexico: Known for its vibrant culture, ancient civilizations, and delicious cuisine, Mexico attracts visitors with its archaeological sites, colonial cities, and pristine beaches along the Caribbean and Pacific coasts.` },
  {
    name: "Micronesia",
    Category: "Palikir",
    info: "Information about Micronesia",
  },
  { name: "Moldova", Category: "Chișinău", info: "Information about Moldova" },
  { name: "Monaco", Category: "Monaco", info: "Information about Monaco" },
  {
    name: "Mongolia",
    Category: "Ulaanbaatar",
    info: `Mongolia: Known for its vast steppes, nomadic culture, and Gobi Desert landscapes, Mongolia offers travelers opportunities for horseback riding, eagle hunting, and exploring ancient traditions.`,
  },
  {
    name: "Montenegro",
    Category: "Podgorica",
    info: "Information about Montenegro",
  },
  { name: "Morocco", Category: "Rabat", info: `Morocco: Bridging Africa and Europe, Morocco entices travelers with its exotic markets, medieval medinas, and Sahara Desert adventures, as well as historic cities like Marrakech, Fes, and Casablanca.` },
  {
    name: "Mozambique",
    Category: "Maputo",
    info: "Information about Mozambique",
  },
  {
    name: "Myanmar (formerly Burma)",
    Category: "Naypyidaw",
    info: "Information about Myanmar (formerly Burma)",
  },
  { name: "Namibia", Category: "Windhoek", info: `Namibia: Famed for its otherworldly landscapes, including the Namib Desert and Fish River Canyon, Namibia offers travelers opportunities for desert safaris, star gazing, and adventure activities.` },
  { name: "Nauru", Category: "Yaren", info: "Information about Nauru" },
  { name: "Nepal", Category: "Kathmandu", info: `Nepal: Home to the world's highest peaks, including Mount Everest, Nepal captivates visitors with its Himalayan trekking routes, ancient temples, and rich cultural heritage.` },
  {
    name: "Netherlands",
    Category: "Amsterdam",
    info: `Netherlands: Famous for its picturesque canals, historic windmills, and vibrant tulip fields, the Netherlands captivates travelers with its charming cities, cultural heritage, and cycling-friendly landscapes.`,
  },
  {
    name: "New Zealand",
    Category: "Wellington",
    info: "Information about New Zealand",
  },
  {
    name: "Nicaragua",
    Category: "Managua",
    info: "Information about Nicaragua",
  },
  { name: "Niger", Category: "Niamey", info: "Information about Niger" },
  {
    name: "Nigeria",
    Category: "Abuja",
    info: `Nigeria, situated in West Africa, stands as the continent's most populous nation, boasting over 200 million inhabitants encompassing a mosaic of ethnic groups and cultures. With a bustling economy anchored by its oil and gas industry, Nigeria is also diversifying into telecommunications, banking, and services. Abuja, the centrally located capital, serves as the country's political hub. Nigeria operates as a federal republic with a presidential system of government, facing challenges such as political instability, corruption, poverty, and security concerns, notably the Boko Haram insurgency. Despite these challenges, Nigeria's rich cultural heritage shines through its traditional music, dance, festivals, and vibrant fashion industry. Endowed with abundant natural resources beyond oil and gas, Nigeria continues to grapple with issues surrounding resource management and distribution, yet its development remains pivotal not just for the region but for the entire continent.`,
  },
  {
    name: "North Korea",
    Category: "Pyongyang",
    info: "Information about North Korea",
  },
  {
    name: "North Macedonia",
    Category: "Skopje",
    info: "Information about North Macedonia",
  },
  { name: "Norway", Category: "Oslo", info: `Norway: Known for its stunning fjords, northern lights, and outdoor adventures, Norway offers travelers opportunities for scenic drives along the Atlantic Road, hiking in the Lofoten Islands, and exploring Oslo's museums.` },
  { name: "Oman", Category: "Muscat", info: "Information about Oman" },
  {
    name: "Pakistan",
    Category: "Islamabad",
    info: "Information about Pakistan",
  },
  { name: "Palau", Category: "Ngerulmud", info: "Information about Palau" },
  {
    name: "Palestine State",
    Category: "Jerusalem",
    info: "Information about Palestine State",
  },
  { name: "Panama", Category: "Panama City", info: `Panama: Known for its canal connecting the Atlantic and Pacific Oceans, Panama offers travelers opportunities for eco-tourism, jungle adventures, and exploring colonial architecture.` },
  {
    name: "Papua New Guinea",
    Category: "Port Moresby",
    info: "Information about Papua New Guinea",
  },
  {
    name: "Paraguay",
    Category: "Asunción",
    info: "Information about Paraguay",
  },
  { name: "Peru", Category: "Lima", info: `Peru: Home to ancient civilizations such as the Incas, Peru offers travelers opportunities to explore Machu Picchu, the Sacred Valley, and the Amazon Rainforest, as well as vibrant cities like Lima and Cusco.` },
  {
    name: "Philippines",
    Category: "Manila",
    info: `Philippines: With its stunning beaches, vibrant festivals, and diverse marine life, the Philippines attracts visitors with its island-hopping tours, historic landmarks, and warm hospitality.`,
  },
  { name: "Poland", Category: "Warsaw", info: `Poland: Famed for its medieval towns, Gothic castles, and rich history, Poland offers travelers opportunities for cultural exploration, culinary delights, and outdoor adventures.` },
  { name: "Portugal", Category: "Lisbon", info: `Portugal: Famed for its historic landmarks, charming villages, and scenic coastline, Portugal captivates visitors with attractions such as Lisbon's colorful neighborhoods, Porto's wine cellars, and the Algarve's beaches.` },
  { name: "Qatar", Category: "Doha", info: "Information about Qatar" },
  { name: "Romania", Category: "Bucharest", info: `Romania: With its picturesque landscapes, medieval castles, and folklore traditions, Romania entices visitors with attractions such as Transylvania's Dracula's Castle, Bucharest's architecture, and the Carpathian Mountains.` },
  { name: "Russia", Category: "Moscow", info: `Russia: Spanning two continents, Russia boasts iconic landmarks such as the Kremlin, Red Square, and the Hermitage Museum, as well as diverse landscapes ranging from snowy Siberia to the historic streets of St. Petersburg.` },
  { name: "Rwanda", Category: "Kigali", info: `Rwanda: Known for its mountain gorillas, lush rainforests, and genocide memorial sites, Rwanda offers travelers opportunities for wildlife encounters, cultural immersion, and eco-tourism.` },
  {
    name: "Saint Kitts and Nevis",
    Category: "Basseterre",
    info: "Information about Saint Kitts and Nevis",
  },
  {
    name: "Saint Lucia",
    Category: "Castries",
    info: "Information about Saint Lucia",
  },
  {
    name: "Saint Vincent and the Grenadines",
    Category: "Kingstown",
    info: "Information about Saint Vincent and the Grenadines",
  },
  { name: "Samoa", Category: "Apia", info: "Information about Samoa" },
  {
    name: "San Marino",
    Category: "San Marino",
    info: "Information about San Marino",
  },
  {
    name: "Sao Tome and Principe",
    Category: "São Tomé",
    info: "Information about Sao Tome and Principe",
  },
  {
    name: "Saudi Arabia",
    Category: "Riyadh",
    info: "Information about Saudi Arabia",
  },
  { name: "Senegal", Category: "Dakar", info: "Information about Senegal" },
  { name: "Serbia", Category: "Belgrade", info: "Information about Serbia" },
  {
    name: "Seychelles",
    Category: "Victoria",
    info: "Information about Seychelles",
  },
  {
    name: "Sierra Leone",
    Category: "Freetown",
    info: "Information about Sierra Leone",
  },
  {
    name: "Singapore",
    Category: "Singapore",
    info: `Singapore: With its modern skyline, multicultural cuisine, and lush gardens, Singapore offers visitors a blend of urban sophistication and natural beauty, including attractions such as Gardens by the Bay and Sentosa Island.`,
  },
  {
    name: "Slovakia",
    Category: "Bratislava",
    info: "Information about Slovakia",
  },
  {
    name: "Slovenia",
    Category: "Ljubljana",
    info: "Information about Slovenia",
  },
  {
    name: "Solomon Islands",
    Category: "Honiara",
    info: "Information about Solomon Islands",
  },
  { name: "Somalia", Category: "Mogadishu", info: "Information about Somalia" },
  {
    name: "South Africa",
    Category: "Pretoria",
    info: `South Africa: Known for its diverse wildlife, stunning landscapes, and vibrant cities, South Africa offers travelers opportunities for safaris, wine tasting, and exploring iconic landmarks such as Table Mountain and Robben Island.`,
  },
  {
    name: "South Korea",
    Category: "Seoul",
    info: `South Korea: With its dynamic cities, ancient temples, and delicious cuisine, South Korea entices visitors with its blend of traditional culture and modern innovations, showcased in cities like Seoul and historic sites like Gyeongbokgung Palace.`,
  },
  {
    name: "South Sudan",
    Category: "Juba",
    info: "Information about South Sudan",
  },
  {
    name: "Spain",
    Category: "Madrid",
    info: `Spain: With its vibrant cities, stunning beaches, historic landmarks, and lively festivals, Spain offers a diverse range of attractions, from the architectural wonders of Barcelona to the flamenco dance of Andalusia.`,
  },
  {
    name: "Sri Lanka",
    Category: "Colombo",
    info: `Sri Lanka: With its ancient ruins, tea plantations, and golden beaches, Sri Lanka captivates visitors with attractions such as Sigiriya Rock Fortress, Kandy's Temple of the Tooth, and Mirissa's whale watching.`,
  },
  { name: "Sudan", Category: "Khartoum", info: "Information about Sudan" },
  {
    name: "Suriname",
    Category: "Paramaribo",
    info: "Information about Suriname",
  },
  { name: "Sweden", Category: "Stockholm", info: `Sweden: Known for its sleek design, natural beauty, and progressive values, Sweden offers travelers opportunities to explore Stockholm's archipelago, Lapland's northern lights, and historic landmarks like the Vasa Museum.` },
  {
    name: "Switzerland",
    Category: "Bern",
    info: `Switzerland: Famed for its picturesque Alps, pristine lakes, and charming villages, Switzerland offers travelers opportunities for skiing, hiking, and exploring cultural treasures such as the Matterhorn and Jungfraujoch.`,
  },
  { name: "Syria", Category: "Damascus", info: "Information about Syria" },
  {
    name: "Tajikistan",
    Category: "Dushanbe",
    info: "Information about Tajikistan",
  },
  { name: "Tanzania", Category: "Dodoma", info: `Tanzania: Home to Africa's highest peak, Mount Kilimanjaro, and the Serengeti National Park, Tanzania offers travelers opportunities for safari adventures, beach relaxation, and cultural experiences with Maasai tribes.` },
  { name: "Thailand", Category: "Bangkok", info: `Thailand: Known for its vibrant street life, ancient temples, and tropical islands, Thailand captivates visitors with its bustling cities, golden temples, and exotic cuisine, as well as its renowned hospitality.` },
  {
    name: "Timor-Leste",
    Category: "Dili",
    info: "Information about Timor-Leste",
  },
  { name: "Togo", Category: "Lomé", info: "Information about Togo" },
  { name: "Tonga", Category: "Nukuʻalofa", info: "Information about Tonga" },
  {
    name: "Trinidad and Tobago",
    Category: "Port of Spain",
    info: "Information about Trinidad and Tobago",
  },
  { name: "Tunisia", Category: "Tunis", info: `Tunisia: Famed for its ancient ruins, Mediterranean beaches, and desert landscapes, Tunisia offers travelers a blend of history, culture, and relaxation along its coastlines and in its historic cities.` },
  { name: "Turkey", Category: "Ankara", info: `Turkey: Bridging Europe and Asia, Turkey boasts a rich tapestry of history, culture, and natural beauty, with attractions such as the Hagia Sophia, Cappadocia's fairy chimneys, and the Mediterranean coastline.` },
  {
    name: "Turkmenistan",
    Category: "Ashgabat",
    info: "Information about Turkmenistan",
  },
  { name: "Tuvalu", Category: "Funafuti", info: "Information about Tuvalu" },
  { name: "Uganda", Category: "Kampala", info: "Information about Uganda" },
  { name: "Ukraine", Category: "Kyiv", info: `Ukraine: With its historic cities, Orthodox churches, and Black Sea coastlines, Ukraine offers travelers opportunities for exploring UNESCO World Heritage Sites, vibrant street art scenes, and cultural festivals.` },
  {
    name: "United Arab Emirates (UAE)",
    Category: "Abu Dhabi",
    info: `UAE (United Arab Emirates): Home to futuristic cities like Dubai and Abu Dhabi, the UAE dazzles visitors with its skyscrapers, luxury shopping malls, and desert adventures, offering a blend of modernity and traditional Arabian hospitality.`,
  },
  {
    name: "United Kingdom",
    Category: "London",
    info: `United Kingdom: Home to iconic landmarks such as Big Ben, Buckingham Palace, and Stonehenge, the United Kingdom attracts visitors with its rich history, royal heritage, cultural institutions, and charming countryside.`,
  },
  {
    name: "United States of America",
    Category: "Washington, D.C.",
    info: `United States: Known for its diverse landscapes, iconic cities, cultural attractions, and global influence in areas such as entertainment, technology, and politics, the United States is a top destination for travelers worldwide.`,
  },
  {
    name: "Uruguay",
    Category: "Montevideo",
    info: `Uruguay: Known for its laid-back lifestyle, pristine beaches, and historic districts, Uruguay attracts visitors with attractions such as Montevideo's colonial architecture, Punta del Este's resorts, and Colonia del Sacramento's cobbled streets.`,
  },
  {
    name: "Uzbekistan",
    Category: "Tashkent",
    info: `Uzbekistan: With its Silk Road heritage, ancient cities, and Islamic architecture, Uzbekistan offers travelers a journey through history with attractions such as Samarkand's Registan Square, Bukhara's old town, and Khiva's walled city.`,
  },
  { name: "Vanuatu", Category: "Port Vila", info: "Information about Vanuatu" },
  {
    name: "Venezuela",
    Category: "Caracas",
    info: "Information about Venezuela",
  },
  { name: "Vietnam", Category: "Hanoi", info: `Vietnam: Offering a rich tapestry of history, culture, and natural beauty, Vietnam beckons visitors with its ancient temples, lush landscapes, and vibrant cities like Hanoi and Ho Chi Minh City.` },
  { name: "Yemen", Category: "Sana'a", info: "Information about Yemen" },
  { name: "Zambia", Category: "Lusaka", info: "Information about Zambia" },
  { name: "Zimbabwe", Category: "Harare", info: `Zimbabwe: Known for its majestic Victoria Falls, wildlife reserves, and Great Zimbabwe ruins, Zimbabwe offers travelers opportunities for safari adventures, adrenaline activities, and exploring ancient civilizations.` },
];

data.forEach((country) => {
  country.name1 = `<h1 style="color: blue; margin-bottom: 30px;">${country.name}</h1>`;
  country.Category = `<span class="fs-4 mt-5">Capital:</span><br><span class="fs-3 fw-bold text-primary">${country.Category}</span>`;
  country.infom = `<div class="fw-bold">${country.info}</div`;
});

function renderResults(results) {
  const resultsContainer = document.getElementById("resultsContainer");
  resultsContainer.innerHTML = ""; // Clear previous results

  if (results.length === 0) {
    document.getElementById("noResultsMessage").style.display = "block";
  } else {
    document.getElementById("noResultsMessage").style.display = "none";
    results.forEach((item) => {
      const countryCard = document.getElementById("countryCard");
      const resultItem = document.createElement("div");
      const resultItems = document.createElement("div");
      const countryCategory = document.createElement("div");
      const countryInfo = document.createElement("div");
      resultItem.innerHTML = item.name;
      resultsContainer.appendChild(resultItem);
      countryCard.appendChild(resultItems);
      countryCard.appendChild(countryCategory);
      countryCard.appendChild(countryInfo);

      resultItem.addEventListener("click", () => {
        let count = document.getElementById("count");
        // alert(item.Category);
        count.style.display = "block";

        countryCategory.innerHTML = item.Category;
        resultItems.innerHTML = item.name1;
        countryInfo.innerHTML = item.infom;
      });

      resultItem.style.cursor = "pointer"; // Add pointer cursor to indicate clickable
    });
  }
}

// Function to perform filtering
function filterResults(query) {
  const filteredResults = data.filter((item) => {
    // Perform case-insensitive search
    return item.name.toLowerCase().includes(query.toLowerCase());
  });
  renderResults(filteredResults);
}

// Event listener for search input
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
  filterResults(this.value);
});

// Event listener for search button
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", function () {
  filterResults(searchInput.value);
});

// Initial rendering
filterResults("");

// Function to display country info
// Get the container element
// const countriesContainer = document.getElementById('resultsContainer');

// // Loop through the data and create HTML elements for each country
// data.forEach(country => {
//     // const resultItem = document.createElement('div');
//     // resultItem.textContent = country.name;
//     // resultItem.style.cursor = 'pointer'; // Add pointer cursor to indicate clickable

//     // Add click event listener to display information

//     // Append the country element to the container
//     countriesContainer.appendChild(resultItem);
// });
