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
    img: `https://cdn.britannica.com/40/5340-004-B25ED5CF/Flag-Afghanistan.jpg`,
    Category: "Kabul",
    info: `Situated in South Asia, Afghanistan is known for its rugged mountain landscapes, ancient cultural heritage, and historical significance as a crossroads of civilizations. Despite facing challenges such as conflict and political instability, Afghanistan's rich history and natural beauty continue to attract visitors interested in exploring its archaeological sites, bazaars, and hospitality of its people.`,
    popu: `Over 38 million`,
  },
  {
    name: "Albania",
    img: `https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg`,
    Category: "Tirana",
    info: `Albania: Nestled in the Balkans, Albania offers travelers a mix of stunning Mediterranean coastline, rugged mountain scenery, and vibrant cultural heritage. From the ancient ruins of Butrint to the Ottoman-era architecture of Gjirokastër, Albania's diverse attractions showcase its rich history and blend of Eastern and Western influences.`,
    popu: `Over 2.9 million`
  },
  {
    name: "Algeria",
    img: `https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg`,
    Category: "Algiers",
    info: `Algeria: As the largest country in Africa, Algeria boasts a diverse landscape ranging from the Sahara Desert to the Mediterranean coastline. With a rich cultural heritage influenced by Berber, Arab, and French traditions, Algeria offers visitors opportunities to explore historic sites such as the Roman ruins of Timgad and the ancient city of Algiers.`,
    popu: `Over 44 million`
  },
  {
    name: "Andorra",
    img: `https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg`,
    Category: "Andorra la Vella",
    info: `Andorra: Tucked away in the Pyrenees mountains between France and Spain, Andorra is known for its stunning alpine scenery, ski resorts, and duty-free shopping. Despite its small size, Andorra offers outdoor enthusiasts opportunities for hiking, skiing, and enjoying the natural beauty of its mountainous landscapes.`,
    popu: `Over  77,000`
  },
  {
    name: "Angola",
    img: `https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg`,
    Category: "Luanda",
    info: `Angola: Located on the west coast of Africa, Angola is known for its diverse culture, rich musical heritage, and stunning natural landscapes. From the vibrant streets of Luanda to the rugged beauty of Kalandula Falls, Angola offers travelers a unique blend of urban and outdoor experiences.`,
    popu: `Over 33 million`
  },
  {
    name: "Antigua and Barbuda",
    img: `https://cdn.britannica.com/04/5104-050-9E557169/Flag-Antigua-and-Barbuda.jpg`,
    Category: "Saint John's",
    info: `Antigua and Barbuda: Comprising two islands in the Caribbean, Antigua and Barbuda are renowned for their pristine beaches, clear turquoise waters, and rich maritime history. Whether relaxing on the sandy shores of Dickenson Bay or exploring the historic sites of English Harbour, visitors to Antigua and Barbuda can immerse themselves in the laid-back island lifestyle.`,
    popu: `Over 98,000`
  },
  {
    name: "Argentina",
    img: `https://cdn.britannica.com/69/5869-004-7D75CD05/Flag-Argentina.jpg`,
    Category: "Buenos Aires",
    info: `Argentina: From the bustling streets of Buenos Aires to the majestic peaks of the Andes, Argentina offers travelers a diverse range of attractions and experiences. Whether tango dancing in the capital, wine tasting in Mendoza, or marveling at the natural wonders of Patagonia and Iguazu Falls, Argentina captivates visitors with its vibrant culture and stunning landscapes.`,
    popu: `Over 45 million`
  },
  {
    name: "Armenia",
    img: `https://cdn.britannica.com/11/4711-004-1504C169/Flag-Armenia.jpg`,
    Category: "Yerevan",
    info: `Armenia: Nestled in the Caucasus region, Armenia is known for its ancient monasteries, picturesque landscapes, and rich cultural heritage. From the historic streets of Yerevan to the stunning vistas of Lake Sevan and the mountainous terrain of the Armenian Highlands, Armenia offers travelers a unique blend of history, nature, and hospitality.`,
    popu: `Over 3 million`
  },
  {
    name: "Australia",
    img: `https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg`,
    Category: "Canberra",
    info: `Australia: Known for its stunning natural landscapes, vibrant cities, and unique wildlife, Australia offers visitors diverse experiences ranging from the iconic Sydney Opera House to the breathtaking Great Barrier Reef.`,
    popu: `Over 25.5 million`
  },
  {
    name: "Austria",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/2560px-Flag_of_Austria.svg.png`,
    Category: "Vienna",
    info: `Austria: Famed for its imperial history, classical music, and alpine scenery, Austria attracts travelers with attractions such as Vienna's palaces, Salzburg's Mozart heritage, and the scenic lakes of the Austrian Alps.`,
    popu: `Over 8.9 million`
  },
  {
    name: "Azerbaijan",
    img: `https://media.istockphoto.com/id/1323578098/vector/flags-of-the-world.jpg?s=612x612&w=0&k=20&c=k6oaNtJch05UlaSNlLj0Vw2kzGOQLwXe82CEQLb0DZA=`,
    Category: "Baku",
    info: `Azerbaijan, located at the crossroads of Eastern Europe and Western Asia, is known for its rich cultural heritage, historic landmarks, and stunning natural beauty. The capital city, Baku, blends modern architecture with ancient landmarks such as the UNESCO-listed Old City, home to the iconic Maiden Tower and the Palace of the Shirvanshahs. Azerbaijan's diverse landscapes range from the Caspian Sea coastline to the rugged peaks of the Caucasus Mountains, offering opportunities for outdoor adventures such as hiking, skiing, and exploring ancient mud volcanoes. Azerbaijan's cultural heritage is reflected in its traditional music, dance, and cuisine, influenced by Persian, Turkish, and Russian traditions. With a growing tourism industry and a warm hospitality, Azerbaijan welcomes visitors to discover its history, culture, and natural wonders.`,
    popu: `Over  10.1 million`
  },
  {
    name: "Bahamas",
    img: `https://media.istockphoto.com/id/485833712/photo/bahamas-flag.jpg?s=612x612&w=0&k=20&c=ZvTJT3tnUH12CkrewW0kJy8JNBmHxnIhqls3yS26Isk=`,
    Category: "Nassau",
    info: `Bahamas: The Bahamas is an archipelago of islands located in the Caribbean Sea known for its stunning beaches, crystal-clear waters, and vibrant marine life. Popular destinations include Nassau, the capital city, and Paradise Island, home to the Atlantis resort.`,
    popu: `Over 393,000`
  },
  {
    name: "Bahrain",
    img: `https://media.istockphoto.com/id/1334735879/vector/kingdom-of-bahrain-flag.jpg?s=612x612&w=0&k=20&c=YEAK8HDnty1c6EG0SKw-yV9R9xTXBWK2RZ8oU3kUq2A=`,
    Category: "Manama",
    info: `Bahrain: Bahrain is an island nation in the Persian Gulf known for its modern skyline, historic sites, and rich cultural heritage. Attractions include the Bahrain Fort, Al Fateh Grand Mosque, and the Bahrain National Museum.`,
    popu: `Over 1.7 million`
  },
  {
    name: "Bangladesh",
    img: `https://media.istockphoto.com/id/1409466305/vector/bangladesh-flag-design-waving-bangladeshi-flag-made-of-satin-or-silk-fabric-vector.jpg?s=612x612&w=0&k=20&c=T7sgnxODQv57hQpBzC-gPFJU1hPvjKPPOiDNBnP9C8Q=`,
    Category: "Dhaka",
    info: `Bangladesh: Bangladesh is a South Asian country known for its lush green landscapes, vibrant culture, and bustling cities. Highlights include the Sundarbans mangrove forest, the ancient ruins of Paharpur, and the bustling capital city of Dhaka.`,
    popu: `Over 166 million`
  },
  {
    name: "Barbados",
    img: `https://media.istockphoto.com/id/1293471011/photo/flag-of-barbados-silk.jpg?s=612x612&w=0&k=20&c=kYlaX4WQWkrUVkqFGJ79osXEtmJgxWkC2sKIt8lvhy8=`,
    Category: "Bridgetown",
    info: `Barbados: Barbados is an island country in the Caribbean known for its sandy beaches, turquoise waters, and colonial architecture. Bridgetown, the capital city, is a UNESCO World Heritage Site, and the island is famous for its rum production and festivals.`,
    popu: `Over 287,000`
  },
  {
    name: "Belarus",
    img: `https://cdn.britannica.com/01/6401-004-FAEACB4E/Flag-Belarus.jpg`,
    Category: "Minsk",
    info: `Belarus: Belarus is a landlocked country in Eastern Europe known for its Soviet-era architecture, dense forests, and diverse wildlife. Highlights include the capital city of Minsk, the historic town of Mir, and the primeval Białowieża Forest.`,
    popu: `Over 9.4 million`
  },
  {
    name: "Belgium",
    img: `https://cdn.britannica.com/08/6408-004-405E272F/Flag-Belgium.jpg`,
    Category: "Brussels",
    info: `Belgium: With its medieval architecture, chocolate, and beer culture, Belgium entices visitors with attractions such as the Grand Place in Brussels, medieval towns like Bruges, and delicious Belgian waffles.Belgium is a Western European country known for its medieval towns, chocolate, and beer. Attractions include the Grand Place in Brussels, the medieval city of Bruges, and the historic battlefields of Flanders.`,
    popu: `Over 11.5 million`
  },
  {
    name: "Belize",
    img: `https://media.istockphoto.com/id/1388452604/vector/national-flag-of-belize.jpg?s=612x612&w=0&k=20&c=P6g4XZav_rDlapCfiqpSH6CnK_TsbWUtL6KGqaXaZ58=`,
    Category: "Belmopan",
    info: `Belize: Belize is a Central American country known for its Caribbean coastline, lush rainforests, and ancient Mayan ruins. Highlights include the Belize Barrier Reef, the Blue Hole, and the ancient city of Caracol.`,
    popu: `Over 419,000`
  },
  {
    name: "Benin",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/2560px-Flag_of_Benin.svg.png`,
    Category: "Porto-Novo",
    info: `Benin: Benin is a West African country known for its rich history, traditional culture, and diverse landscapes. Attractions include the royal palaces of Abomey, the Pendjari National Park, and the vibrant markets of Cotonou.`,
    popu: `Over 13.5 million`
  },
  {
    name: "Bhutan",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/2560px-Flag_of_Bhutan.svg.png`,
    Category: "Thimphu",
    info: `Bhutan: Known for its stunning Himalayan landscapes, Buddhist monasteries, and Gross National Happiness philosophy, Bhutan offers travelers a unique cultural and natural experience.`,
    popu: `Over  770,000`
  },
  {
    name: "Bolivia",
    img: `https://cdn.britannica.com/54/6754-004-AE3C4294/Flag-Bolivia.jpg`,
    Category: "Sucre",
    info: `Bolivia: Bolivia is a landlocked country in South America known for its Andean landscapes, colonial cities, and indigenous culture. Attractions include the Salar de Uyuni salt flats, Lake Titicaca, and the historic city of Sucre.`,
    popu: `Over 11.5 million`
  },
  {
    name: "Bosnia and Herzegovina",
    img: `https://media.istockphoto.com/id/1156898145/vector/vector-flag-of-bosnia-and-herzegovina-proportion-1-2-bosnia-herzegovinan-national-flag.jpg?s=612x612&w=0&k=20&c=46LiA_3BOCNke9j7IsyX1R6E2P7ICiIkENrtBqnW-9E=`,
    Category: "Sarajevo",
    info: `Bosnia and Herzegovina: Bosnia and Herzegovina is a Balkan country known for its historic cities, stunning scenery, and cultural diversity. Highlights include the old town of Mostar, the Stari Most bridge, and the medieval city of Sarajevo.`,
    popu: `Over 3.3 million`
  },
  {
    name: "Botswana",
    img: `https://t3.ftcdn.net/jpg/00/47/41/78/360_F_47417881_PQGWmsx36eYTnmQPZj5UlNp0Xb3E2AaH.jpg`,
    Category: "Gaborone",
    info: `Botswana: Famed for its abundant wildlife, including the Okavango Delta and Chobe National Park, Botswana is a premier safari destination in Africa.`,
    popu: `Over 2.4 million`
  },
  {
    name: "Brazil",
    img: `https://www.flagcolorcodes.com/filter?f=brazil&e=waves`,
    Category: "Brasília",
    info: `Brazil: With its lively culture, beautiful beaches, and Amazon rainforest, Brazil attracts travelers seeking adventure, music, and vibrant street life, particularly during events like Carnival in Rio de Janeiro.`,
    popu: `Over 213 million`
  },
  {
    name: "Brunei",
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vlA5IBGEvAsjPOcsb2VfCAdboYqd2UxEGP3vsnaQJw&s`,
    Category: "Bandar Seri Begawan",
    info: `Brunei: Brunei is a small Southeast Asian country known for its rich oil reserves, Islamic culture, and royal palaces. Highlights include the Omar Ali Saifuddien Mosque, the water village of Kampong Ayer, and the rainforests of Ulu Temburong National Park.`,
    popu: `Over 460,000`
  },
  {
    name: "Bulgaria",
    img: `https://cdn.britannica.com/04/6204-004-DC5CFE4F/Flag-Bulgaria.jpg`,
    Category: "Sofia",
    info: `Bulgaria: Bulgaria is a Balkan country known for its Black Sea coastline, mountainous landscapes, and ancient ruins. Attractions include the historic city of Sofia, the Rila Monastery, and the seaside resorts of Varna and Burgas.`,
    popu: `Over 6.9 million`
  },
  {
    name: "Burkina Faso",
    img: `https://media.istockphoto.com/id/1419221812/vector/flag-of-the-burkina-faso-vector-illustration.jpg?s=612x612&w=0&k=20&c=hgdllaM6u_Aq5VXNyXDooGCWgjVRleGwn-qDYFYvTVI= `,
    Category: "Ouagadougou",
    info: `Burkina Faso: Burkina Faso is a landlocked country in West Africa known for its traditional culture, lively markets, and Sahel landscapes. Highlights include the Ruins of Loropéni, the W National Park, and the Bobo-Dioulasso Grand Mosque.`,
    popu: `Over 21.7 million`
  },
  {
    name: "Burundi",
    img: ` https://cdn.britannica.com/77/7177-050-246CAF00/Flag-Burundi.jpg`,
    Category: "Gitega",
    info: `Burundi: Burundi is a small East African country known for its scenic landscapes, wildlife reserves, and traditional drumming rituals. Attractions include Lake Tanganyika, Kibira National Park, and the capital city of Bujumbura.`,
    popu: `Over 12.1 million`
  },
  {
    name: "Cabo Verde (Cape Verde)",
    img: `https://cdn.britannica.com/44/5044-050-2530FC16/Flag-Cabo-Verde.jpg`,
    Category: "Praia",
    info: `Cabo Verde (Cape Verde): Cabo Verde is an island nation off the coast of West Africa known for its volcanic landscapes, pristine beaches, and Creole culture. Attractions include the historic town of Cidade Velha, the volcanic peak of Pico do Fogo, and the beaches of Sal and Boa Vista.`,
    popu: `Over 555,000`
  },
  {
    name: "Cambodia",
    img: `https://media.istockphoto.com/id/1265164088/vector/cambodia-flag-vector-graphic-rectangle-cambodian-flag-illustration-cambodia-country-flag-is.jpg?s=612x612&w=0&k=20&c=J4FOMXvwaEG-brJeK1-T3qTNj4gBSJp7rGnPbL10lhA=`,
    Category: "Phnom Penh",
    info: `Cambodia: Home to the iconic Angkor Wat temple complex, Cambodia entices visitors with its rich Khmer history, vibrant markets, and picturesque countryside.It is a Southeast Asian country known for its ancient temples, lush jungles, and tragic history. Highlights include the Angkor Wat complex, the Killing Fields of Choeung Ek, and the riverside capital city of Phnom Penh.`,
    popu: `Over 16.7 million`
  },
  {
    name: "Cameroon",
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oAb_LZR1vO1UBQOQBi5qMyMdd8gETwKrJT9VCU4k2g&s `,
    Category: "Yaoundé",
    info: `Cameroon: Cameroon is a Central African country known for its diverse landscapes, including rainforests, savannas, and mountains. Attractions include Waza National Park, Mount Cameroon, and the vibrant markets of Yaoundé and Douala.`,
    popu: `Over  27.3 million`
  },
  {
    name: "Canada",
    img: `https://www.shutterstock.com/image-vector/flag-canada-600nw-94948876.jpg`,
    Category: "Ottawa",
    info: `Canada: Renowned for its breathtaking scenery, outdoor adventures, and multicultural cities, Canada offers visitors opportunities to explore national parks, ski resorts, and cultural festivals across its vast landscape.`,
    popu: `Over 38.5 million`
  },
  {
    name: "Central African Republic",
    img: `https://cdn.britannica.com/80/7180-004-8AFA2B44/Flag-Central-African-Republic.jpg`,
    Category: "Bangui",
    info: `Central African Republic: The Central African Republic is a landlocked country in Central Africa known for its wildlife reserves, including Dzanga-Sangha National Park and Manovo-Gounda St. Floris National Park. The capital city of Bangui is known for its vibrant markets and colonial architecture.`,
    popu: `Over 5.1 million`
  },
  {
    name: "Chad",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/2000px-Flag_of_Chad.svg.png`,
    Category: "N'Djamena",
    info: `Chad: Chad is a landlocked country in North-Central Africa known for its diverse landscapes, including the Sahara Desert and Lake Chad. Attractions include Zakouma National Park, the Ennedi Plateau, and the capital city of N'Djamena.`,
    popu: `Over 16.4 million`
  },
  {
    name: "Chile",
    img: `https://cdn.britannica.com/85/7485-004-00B07230/Flag-Chile.jpg`,
    Category: "Santiago",
    info: `Chile: Stretching along the western coast of South America, Chile offers diverse landscapes ranging from the Atacama Desert to the Andes Mountains and Patagonian fjords, as well as cultural attractions in Santiago and Valparaiso.`,
    popu: `Over 19.5 million`
  },
  {
    name: "China",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png`,
    Category: "Beijing",
    info: `China: As one of the world's oldest civilizations, China boasts a wealth of cultural treasures, including the Great Wall, Forbidden City, and Terracotta Army, along with modern metropolises like Shanghai and Beijing.`,
    popu: `Over 1.41 billion`
  },
  {
    name: "Colombia",
    img: `https://media.istockphoto.com/id/967321202/vector/vector-flag-of-colombia-proportion-2-3-colombian-national-tricolor-flag-tricolor.jpg?s=612x612&w=0&k=20&c=qEJP1i8Igt2Wdkfnhes229dAtAf43AQiH-r2krsq3Xk=`,
    Category: "Bogotá",
    info: `Colombia: With its diverse landscapes, colonial cities, and Caribbean beaches, Colombia offers travelers opportunities for adventure, culture, and relaxation.`,
    popu: `Over 51 million`
  },
  {
    name: "Comoros",
    img: `https://cdn.britannica.com/40/7740-050-C43A463A/Flag-Comoros.jpg`,
    Category: "Moroni",
    info: `Comoros: Comoros is a volcanic archipelago off the coast of East Africa known for its pristine beaches, coral reefs, and lush rainforests. Attractions include the beaches of Grande Comore, the volcanic crater of Mount Karthala, and the historic city of Moroni.`,
    popu: `Over 894,000`
  },
  {
    name: "Congo (Congo-Brazzaville)",
    img: `https://media.istockphoto.com/id/937875358/vector/democratic-republic-of-congo-flag.jpg?s=612x612&w=0&k=20&c=pv3RcrlAA0THpZpwbH0vPicTdU_BG8390Izs3xTFw_w=`,
    Category: "Brazzaville",
    info: `The Democratic Republic of the Congo is a Central African country known for its vast rainforests, diverse wildlife, and Congo River. Attractions include Virunga National Park, Garamba National Park, and the vibrant city of Kinshasa.`,
    popu: `Over 92.3 million`
  },
  {
    name: "Cote dIvoire",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/2560px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png`,
    Category: "Yamoussoukro",
    info: `Côte d'Ivoire (Ivory Coast): Côte d'Ivoire is a West African country known for its vibrant culture, colonial architecture, and diverse landscapes. Highlights include the Basilica of Our Lady of Peace, Comoe National Park, and the beaches of Grand-Bassam.`,
    popu: `Over 5.6 million`
  },
  {
    name: "Costa Rica",
    img: `https://media.istockphoto.com/id/652473764/photo/flag-of-costa-rica.jpg?s=612x612&w=0&k=20&c=LakPGBXffd4xAIhQwkU5ZCyUHwbSV8PeUCgavyn9LnM=`,
    Category: "San José",
    info: `Costa Rica: Known for its eco-tourism initiatives, lush rainforests, and biodiversity, Costa Rica attracts visitors with its wildlife reserves, volcanoes, and pristine beaches.`,
    popu: `Over 5.2 million`
  },
  {
    name: "Croatia",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/2560px-Flag_of_Croatia.svg.png`,
    Category: "Zagreb",
    info: `Croatia: Renowned for its stunning Adriatic coastline, historic cities, and picturesque islands, Croatia captivates visitors with attractions such as Dubrovnik's old town, Plitvice Lakes National Park, and the ancient city of Split.`,
    popu: `Over 4 million`
  },
  {
    name: "Cuba",
    img: `https://media.istockphoto.com/id/516927998/photo/close-up-of-cubas-flag.jpg?s=612x612&w=0&k=20&c=R9wxXjAfDHE2O7T1BScdCa6wLoAQG_ZGN1KApnM9WA4=`,
    Category: "Havana",
    info: `Cuba: Cuba is a Caribbean island nation known for its vibrant culture, colonial architecture, and pristine beaches. Highlights include Havana's historic Old Town, the tobacco fields of Viñales, and the beach resorts of Varadero.`,
    popu: `Over 11.3 million`
  },
  {
    name: "Cyprus",
    img: `https://media.istockphoto.com/id/1349793384/photo/flag-of-cyprus.jpg?s=612x612&w=0&k=20&c=w0IfyvdQxhKTFuWzAPBK5JLdDX8qKspfwnmwldl74Sc=`,
    Category: "Nicosia",
    info: `Cyprus: Cyprus is an island country in the Eastern Mediterranean known for its ancient ruins, sandy beaches, and lively resorts. Attractions include the archaeological site of Kourion, the Troodos Mountains, and the divided capital city of Nicosia.`,
    popu: `Over 1.2 million`
  },
  {
    name: "Czechia (Czech Republic)",
    img: `https://media.istockphoto.com/id/481762198/vector/flag-of-czech-republic.jpg?s=612x612&w=0&k=20&c=FI9dBmNLomIqtroItJG-Qxrzo-QuDzyEHEWHDv58-So=`,
    Category: "Prague",
    info: `Czech Republic: Famed for its medieval castles, charming towns, and historic architecture, the Czech Republic offers travelers a glimpse into Central European culture and heritage.`,
    popu: `Over 10.7 million`
  },
  {
    name: "Denmark",
    img: `https://media.istockphoto.com/id/1223778515/vector/denmark-flag-downloadable.jpg?s=612x612&w=0&k=20&c=j_ngu42Yj1sxTHtNTscE4E1hIk3HIrDM-21YdmvxY_U=`,
    Category: "Copenhagen",
    info: `Denmark: Known for its fairy-tale castles, cycling culture, and hygge lifestyle, Denmark offers travelers opportunities to explore Copenhagen's colorful Nyhavn, historic landmarks like Kronborg Castle, and scenic countryside.`,
    popu: `Over 5.8 million`
  },
  {
    name: "Djibouti",
    img: `https://media.istockphoto.com/id/537868229/vector/flag-of-djibouti.jpg?s=612x612&w=0&k=20&c=Nv2ajQddeQ5vkeBaeshSC-fWr3xgvl0GA84GVm3sYfY=`,
    Category: "Djibouti City",
    info: `Djibouti: Djibouti is a small East African country known for its strategic location, diverse landscapes, and rich cultural heritage. Attractions include Lake Assal, the Ardoukoba volcano, and the bustling capital city of Djibouti City.`,
    popu: `Over 1 million`
  },
  {
    name: "Dominica",
    img: `https://cdn.britannica.com/12/5112-050-2A5C6946/Flag-Dominica.jpg`,
    Category: "Roseau",
    info: `Dominica: Dominica is a Caribbean island nation known for its lush rainforests, volcanic landscapes, and pristine rivers. Attractions include Morne Trois Pitons National Park, Trafalgar Falls, and the Boiling Lake.`,
    popu: `Over 72,000`
  },
  {
    name: "Dominican Republic",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/1200px-Flag_of_the_Dominican_Republic.svg.png`,
    Category: "Santo Domingo",
    info: `Dominican Republic: The Dominican Republic is a Caribbean nation known for its sandy beaches, vibrant culture, and historic landmarks. Highlights include the historic district of Santo Domingo, the beaches of Punta Cana, and the mountainous interior.`,
    popu: `Over 10.9 million`
  },
  {
    name: "Ecuador",
    img: `https://cdn.britannica.com/49/149-050-7AD40B1F/flag-design-similarities-Ecuador-Colombia-flags-Venezuela.jpg`,
    Category: "Quito",
    info: `Ecuador: Home to the Galapagos Islands and the Amazon Rainforest, Ecuador offers travelers opportunities for wildlife viewing, adventure sports, and exploring indigenous cultures.`,
    popu: `Over 17.6 million`
  },
  {
    name: "Egypt",
    img: `https://cdn.britannica.com/85/185-004-1EA59040/Flag-Egypt.jpg`,
    Category: "Cairo",
    info: `Egypt: Home to ancient wonders such as the Pyramids of Giza and the Sphinx, Egypt entices travelers with its rich history, archaeological sites, and Nile River cruises.`,
    popu: `Over 104 million`
  },
  {
    name: "El Salvador",
    img: `https://cdn.britannica.com/10/7210-004-65DAD2F0/Flag-El-Salvador.jpg`,
    Category: "San Salvador",
    info: `El Salvador, located in Central America, is known for its Pacific Ocean coastline, volcanic landscapes, and rich culture. Despite its small size, the country boasts diverse attractions such as the Ruta de las Flores, a scenic route through picturesque towns and coffee plantations; the colonial city of Suchitoto with its cobblestone streets and vibrant arts scene; and the Joya de Cerén archaeological site, a UNESCO World Heritage site often called the "Pompeii of the Americas" for its remarkably preserved ancient ruins. El Salvador also offers opportunities for surfing along its coastline and exploring its natural reserves and national parks, such as El Imposible National Park and Cerro Verde National Park.`,
    popu: `Over 6.5 million`
  },
  {
    name: "Equatorial Guinea",
    img: `https://cdn.britannica.com/50/5050-004-EB18953A/Flag-Equatorial-Guinea.jpg`,
    Category: "Malabo",
    info: `Equatorial Guinea, located on the west coast of Central Africa, is known for its diverse ecosystems, including rainforests, mangroves, and coastal beaches. The country comprises the mainland region, known as Rio Muni, and several islands, including Bioko Island, home to the capital city of Malabo. Highlights of Equatorial Guinea include the lush rainforests of Monte Alén National Park, the volcanic landscapes of Bioko Island, and the colonial architecture of Malabo's historic district. The country also offers opportunities for wildlife viewing, with species such as gorillas, chimpanzees, and marine turtles found in its protected areas.`,
    popu: `Over 1.5 million`
  },
  {
    name: "Eritrea",
    img: `https://media.istockphoto.com/id/921945936/vector/eritrea-flag.jpg?s=612x612&w=0&k=20&c=1zRkP5ZPKlRZfUn8cw1dChzpEbkU2rwYH0phQrL9RIY=`,
    Category: "Asmara",
    info: `Eritrea, located in the Horn of Africa, is known for its ancient history, diverse culture, and striking landscapes. The country's capital city, Asmara, is renowned for its well-preserved Italian colonial architecture, vibrant markets, and bustling cafes. Eritrea's coastline along the Red Sea offers opportunities for diving and snorkeling, with coral reefs and marine life thriving in its waters. Inland, visitors can explore historic sites such as the ancient city of Aksum, the ruins of Qohaito, and the Dahlak Archipelago, known for its pristine beaches and crystal-clear waters. Eritrea's rich cultural heritage is celebrated in its festivals, music, and traditional cuisine, making it a fascinating destination for travelers interested in history and culture.`,
    popu: `Over 3.5 million`
  },
  {
    name: "Estonia",
    img: `https://cdn.britannica.com/46/6246-050-F6E15290/Flag-Estonia.jpg`,
    Category: "Tallinn",
    info: `Estonia: Known for its digital innovation, medieval old towns, and Baltic coastlines, Estonia captivates visitors with its blend of modernity and historical charm.`,
    popu: `Over 1.3 million`
  },
  {
    name: 'Eswatini (fmr. "Swaziland")',
    img: `https://media.istockphoto.com/id/1422539729/vector/the-national-flag-of-the-world-eswatini.jpg?s=612x612&w=0&k=20&c=k1CeQdTBSpcOFc-Aqw5jSUOi4a8igB7D5JrEiwQkeGs=`,
    Category: "Mbabane",
    info: `Eswatini, a landlocked country in Southern Africa, is known for its stunning landscapes, rich culture, and wildlife reserves. Despite being one of the smallest countries in Africa, Eswatini offers diverse attractions, including the Hlane Royal National Park, known for its populations of rhinos and elephants, and the Mlilwane Wildlife Sanctuary, where visitors can spot hippos, crocodiles, and a variety of bird species. The country's cultural heritage is celebrated in events such as the Umhlanga Reed Dance and the Incwala Ceremony, which showcase traditional music, dance, and ceremonies. Eswatini also boasts scenic mountain ranges, such as the Malolotja Nature Reserve and the Lubombo Mountains, which offer opportunities for hiking, mountain biking, and birdwatching.`,
    popu: `Over 1.2 million`
  },
  {
    name: "Ethiopia",
    img: `https://media.istockphoto.com/id/694106258/vector/vector-national-flag-of-ethiopia.jpg?s=612x612&w=0&k=20&c=tUF-0fZCmdutiETuMW67nn4OtbiDBi_9lAndFzrjklc=`,
    Category: "Addis Ababa",
    info: `Ethiopia, located in the Horn of Africa, is known for its ancient history, diverse cultures, and stunning landscapes. The country is home to numerous UNESCO World Heritage sites, including the rock-hewn churches of Lalibela, the ancient obelisks of Aksum, and the medieval castles of Gondar. Ethiopia's natural beauty is evident in its diverse ecosystems, from the rugged Simien Mountains to the Danakil Depression, one of the hottest and lowest places on Earth. Visitors to Ethiopia can also explore the colorful markets of Addis Ababa, sample traditional Ethiopian cuisine such as injera and wat, and experience the rich traditions of the country's many ethnic groups. Additionally, Ethiopia is known for its coffee culture, with opportunities to visit coffee plantations and learn about the country's coffee-growing heritage.`,
    popu: `Over 120 million`
  },
  {
    name: "Fiji",
    img: `https://cdn.britannica.com/86/3286-050-F16637E1/Flag-Fiji.jpg`,
    Category: "Suva",
    info: `Fiji is an archipelago of more than 300 islands located in the South Pacific Ocean, known for its stunning beaches, crystal-clear waters, and vibrant coral reefs. The country's main islands, Viti Levu and Vanua Levu, offer a mix of lush rainforests, rugged mountains, and bustling towns. Visitors to Fiji can explore the traditional Fijian culture through activities such as village visits, kava ceremonies, and meke dance performances. The islands are also a paradise for outdoor enthusiasts, with opportunities for snorkeling, scuba diving, surfing, and hiking. Highlights of Fiji include the Mamanuca and Yasawa island chains, the Coral Coast, and the Garden of the Sleeping Giant. Fiji's warm hospitality, stunning landscapes, and rich marine biodiversity make it a popular destination for travelers seeking relaxation and adventure in a tropical paradise.`,
    popu: `Over 903,000`
  },
  {
    name: "Finland",
    img: `https://media.istockphoto.com/id/1177039583/vector/the-national-flag-of-finland.jpg?s=612x612&w=0&k=20&c=cjJAtezAPx4YxBGH60Sp9vR7ci8RjSk49NGa00IZpPo=`,
    Category: "Helsinki",
    info: `Finland: With its pristine nature, modern design, and northern lights, Finland offers visitors opportunities for wilderness adventures, sauna culture, and exploring cities like Helsinki and Rovaniemi.`,
    popu: `Over 5.5 million`
  },
  {
    name: "France",
    img: `https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg`,
    Category: "Paris",
    info: `France: Renowned for its rich history, art, cuisine, and romantic ambiance, France attracts millions of visitors each year to explore attractions such as the Eiffel Tower, Louvre Museum, and French Riviera.`,
    popu: `Over 67 million`
  },
  {
    name: "Gabon",
    img: `https://cdn.britannica.com/85/7185-050-2DEB57E7/Flag-Gabon.jpg`,
    Category: "Libreville",
    info: `Gabon: Gabon is a Central African country known for its dense rainforests, diverse wildlife, and pristine coastline. Attractions include Loango National Park, Ivindo National Park, and the bustling capital city of Libreville.`,
    popu: `Over 2.3 million`
  },
  {
    name: "Gambia",
    img: `https://media.istockphoto.com/id/1205695307/vector/vector-gambian-flag-design.jpg?s=612x612&w=0&k=20&c=1iAPJM8jdZSyJ7rXha2qqq1bLSs-cNOzNfuDcZhLcOY=`,
    Category: "Banjul",
    info: `Gambia: The Gambia is a small West African country known for its scenic river, diverse birdlife, and vibrant culture. Highlights include the UNESCO-listed Stone Circles of Senegambia, the River Gambia National Park, and the beach resorts of Bakau and Kololi.`,
    popu: `Over 2.5 million`
  },
  {
    name: "Georgia",
    img: `https://media.istockphoto.com/id/1205695285/vector/vector-georgia-flag-design.jpg?s=612x612&w=0&k=20&c=m0gp7P_Pg_6KpPhkZpS9yTXkZJ70Ks_Oi_lJNluhtXo=`,
    Category: "Tbilisi",
    info: `Georgia: Georgia is a country located at the crossroads of Europe and Asia known for its stunning mountain scenery, ancient monasteries, and rich wine culture. Attractions include the historic city of Tbilisi, the cave town of Vardzia, and the vineyards of Kakheti.`,
    popu: `Over 3.7 million`
  },
  {
    name: "Germany",
    img: `https://cdn.britannica.com/82/65482-050-E43AB312/Flag-detail-Germany-crest.jpg`,
    Category: "Berlin",
    info: `Germany: With its fascinating history, diverse landscapes, and vibrant cities, Germany appeals to travelers with its cultural festivals, medieval towns, scenic countryside, and renowned beer culture.`,
    popu: `Over 83 million`
  },
  {
    name: "Ghana",
    img: `https://t3.ftcdn.net/jpg/00/91/60/26/360_F_91602676_KQhO9mf1iW1yQxP7Nwr2kGocQLQqXRBi.jpg`,
    Category: "Accra",
    info: `Ghana: With its vibrant culture, historic forts, and scenic coastline, Ghana offers travelers opportunities for cultural immersion, heritage tourism, and beach relaxation.`,
    popu: `Over 33.1 million`
  },
  {
    name: "Greece",
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZUKVPHUZcp768-zOfW5kFQtHwB19HIx5o8i1Ipmt3tg&s`,
    Category: "Athens",
    info: `Greece: Famed for its ancient ruins, stunning islands, and Mediterranean cuisine, Greece beckons visitors with its picturesque landscapes, historic landmarks, and idyllic beaches.`,
    popu: `Over 10.4 million`
  },
  {
    name: "Grenada",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/1200px-Flag_of_Grenada.svg.png`,
    Category: "St. George's",
    info: `Grenada: Grenada is a Caribbean island nation known for its stunning beaches, lush rainforests, and spice plantations. Attractions include Grand Anse Beach, the underwater sculpture park, and the historic capital city of St. George's.`,
    popu: `Over 120,000`
  },
  {
    name: "Guatemala",
    img: `https://media.istockphoto.com/id/528744491/photo/guatemala-flag.jpg?s=612x612&w=0&k=20&c=GeUbWBxpMMWoHSa6e6QZ0ZQfelGYI-50yVE7HJjGc3M=`,
    Category: "Guatemala City",
    info: `Guatemala: Guatemala is a Central American country known for its Mayan ruins, colonial architecture, and natural beauty. Highlights include the ancient city of Tikal, Lake Atitlán, and the colorful markets of Chichicastenango.`,
    popu: `Over 18.4 million`
  },
  {
    name: "Guinea",
    img: `https://cdn.britannica.com/56/5056-004-0E251CE7/Flag-Guinea.jpg`,
    Category: "Conakry",
    info: `Guinea: Guinea is a West African country known for its diverse landscapes, including savannas, mountains, and rainforests. Attractions include Mount Nimba Strict Nature Reserve, the Fouta Djallon highlands, and the vibrant capital city of Conakry.`,
    popu: `Over 13.1 million`
  },
  {
    name: "Guinea-Bissau",
    img: `https://cdn.britannica.com/58/5058-050-35649F16/Flag-Guinea-Bissau.jpg`,
    Category: "Bissau",
    info: `Guinea-Bissau: Guinea-Bissau is a West African country known for its tropical coastline, mangrove forests, and diverse wildlife. Highlights include the Bijagós Archipelago, Bissau's historic center, and the Cacheu River Natural Park.`,
    popu: `Over 2 million`
  },
  {
    name: "Guyana",
    img: `https://t3.ftcdn.net/jpg/00/51/10/06/360_F_51100600_CmrLTUUgA1w0nmcOkTywU4lr8jjKt3hv.jpg`,
    Category: "Georgetown",
    info: `Guyana: Guyana is a South American country known for its vast rainforests, savannas, and diverse wildlife. Attractions include Kaieteur Falls, the Iwokrama Forest Reserve, and the capital city of Georgetown.`,
    popu: `Over 790,000`
  },
  {
    name: "Haiti",
    img: `https://media.istockphoto.com/id/479206714/photo/haitian-flag.jpg?s=612x612&w=0&k=20&c=LYAHRgMunlCYo-4hZHBU6aD-CYgLPGwljw1mcg4FV4o=`,
    Category: "Port-au-Prince",
    info: `Haiti: Haiti is a Caribbean country known for its vibrant culture, historic landmarks, and scenic landscapes. Highlights include the Citadelle Laferrière, the historic district of Jacmel, and the beaches of Île-à-Vache.`,
    popu: `Over 11.4 million`
  },
  {
    name: "Holy See",
    img: `https://www.vaticancitytours.it/wp-content/uploads/2019/06/Vatican-City-flag.jpg`,
    Category: "Vatican City",
    info: `Holy See: The Holy See, also known as Vatican City, is an independent city-state and the spiritual center of the Roman Catholic Church. Highlights include St. Peter's Basilica, the Vatican Museums, and the Sistine Chapel.`,
    popu: `Over 524`
  },
  {
    name: "Honduras",
    img: `https://media.istockphoto.com/id/541867462/vector/flat-honduras-flag-vector.jpg?s=612x612&w=0&k=20&c=bBd8gIQ90OanjZ9qZ42m9KHyVUx7T0ERx-JyzL6V9DE=`,
    Category: "Tegucigalpa",
    info: `Honduras: Honduras is a Central American country known for its Mayan ruins, pristine beaches, and diverse ecosystems. Attractions include the Copán archaeological site, the Bay Islands, and the Cusuco National Park.`,
    popu: `Over 10.3 million`
  },
  {
    name: "Hungary",
    img: `https://t4.ftcdn.net/jpg/00/62/18/69/360_F_62186912_auBGPuvWCYqinSYKnDqg2yNwzPJ0wVpN.jpg`,
    Category: "Budapest",
    info: `Hungary: Famed for its thermal baths, Baroque architecture, and rich cultural heritage, Hungary entices visitors with attractions such as Budapest's Parliament, Buda Castle, and the Danube River.`,
    popu: `Over 9.6 million`
  },
  {
    name: "Iceland",
    img: `https://media.istockphoto.com/id/182822998/photo/iceland-flag.jpg?s=612x612&w=0&k=20&c=5g43Ze0mVkSQKmg6u-jZHAuKBEpP2sKjANo0foYwFYo=`,
    Category: "Reykjavik",
    info: `Iceland: Known for its dramatic landscapes, geothermal wonders, and vibrant culture, Iceland captivates visitors with attractions such as the Blue Lagoon, Golden Circle route, and the magical Northern Lights.`,
    popu: `Over 343,000`
  },
  {
    name: "India",
    img: `https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png`,
    Category: "New Delhi",
    info: `India: With its vibrant colors, diverse cultures, and rich heritage, India offers travelers an immersive experience through its bustling cities, majestic temples, and scenic landscapes such as the Taj Mahal.`,
    popu: `Over 1.39 billion`
  },
  {
    name: "Indonesia",
    img: `https://upload.wikimedia.org/wikipedia/commons/0/0b/Flag_of_Indonesia.png`,
    Category: "Jakarta",
    info: `Indonesia: Comprising thousands of islands, Indonesia boasts tropical beaches, lush rainforests, and cultural diversity, making it a popular destination for beach lovers, adventure seekers, and cultural enthusiasts alike.`,
    popu: `Over 276 million`
  },
  {
    name: "Iran",
    img: `https://media.istockphoto.com/id/652754650/photo/flag-of-iran.jpg?s=612x612&w=0&k=20&c=DYE5u7_4K_JtEQML2qduy1Ge3InkpmUvBHx03sWhizc=`,
    Category: "Tehran",
    info: `Iran: With its ancient history, stunning mosques, and Persian hospitality, Iran offers travelers a unique blend of cultural treasures, culinary delights, and breathtaking landscapes.`,
    popu: `Over 84 million`
  },
  {
    name: "Iraq",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/1280px-Flag_of_Iraq.svg.png`,
    Category: "Baghdad",
    info: `Iraq: Iraq is a Middle Eastern country known for its historic sites, including the ancient city of Babylon and the ruins of Nineveh. Attractions include the Ziggurat of Ur, the Marshlands of Mesopotamia, and the Kurdistan Region.`,
    popu: `Over 41 million`
  },
  {
    name: "Ireland",
    img: `https://media.istockphoto.com/id/185154229/photo/irish-flag.jpg?s=612x612&w=0&k=20&c=jAvuPx2kunS220SiSPw8u7Dlg0oTh5ujRIvFi867TKU=`,
    Category: "Dublin",
    info: `Ireland: Famed for its lush green countryside, historic castles, and lively pub culture, Ireland offers travelers opportunities to explore Dublin's literary heritage, the Cliffs of Moher, and the scenic Ring of Kerry.`,
    popu: `Over 4.9 million`
  },
  {
    name: "Israel",
    img: `https://cdn.britannica.com/53/1753-004-03582EDA/Flag-Israel.jpg`,
    Category: "Jerusalem",
    info: `Israel: Israel is a Middle Eastern country known for its religious significance, historic sites, and diverse landscapes. Attractions include Jerusalem's Old City, the Dead Sea, Masada, and the ancient city of Petra.`,
    popu: `Over 9.3 million`
  },
  {
    name: "Italy",
    img: `https://media.istockphoto.com/id/516545774/photo/italian-flag.jpg?s=612x612&w=0&k=20&c=tOUXkrfuzBIk511-3HzYDZM2ZMvk87rCm8eKFgvtgqU=`,
    Category: "Rome",
    info: `Italy: Famous for its ancient ruins, Renaissance art, picturesque landscapes, and delicious cuisine, Italy is a favorite destination for travelers seeking history, culture, and gastronomic experiences.`,
    popu: `Over 60 million`
  },
  {
    name: "Jamaica",
    img: `https://media.istockphoto.com/id/1336216536/vector/jamaica-caribbean-flag.jpg?s=612x612&w=0&k=20&c=TYr_K3oMsiuddnESI9QQcRElv6i1PIgwNcx2BS5v4Os=`,
    Category: "Kingston",
    info: `Jamaica: Jamaica is a Caribbean island nation known for its vibrant culture, stunning beaches, and reggae music. Attractions include Dunn's River Falls, the Blue Mountains, and the Bob Marley Museum in Kingston.`,
    popu: `Over 2.9 million`
  },
  {
    name: "Japan",
    img: `https://t3.ftcdn.net/jpg/00/62/19/54/360_F_62195416_wfzM4Baz70OjEU54EhsCpvuQWlIhukPg.jpg`,
    Category: "Tokyo",
    info: `Japan: Known for its blend of ancient traditions and cutting-edge technology, Japan offers visitors a unique cultural experience, from historic temples and gardens to futuristic cities and culinary delights.`,
    popu: `Over 126 million`
  },
  {
    name: "Jordan",
    img: `https://media.istockphoto.com/id/1309094429/vector/highly-detailed-flag-of-jordan-jordan-flag-high-detail-national-flag-jordan-vector-of-jordan.jpg?s=612x612&w=0&k=20&c=t8f7w9A7sw1QV5LWZKWlclq46fkKT38beay_O0CBMwg=`,
    Category: "Amman",
    info: `Jordan: Jordan is a Middle Eastern country known for its ancient ruins, desert landscapes, and warm hospitality. Attractions include Petra, the Dead Sea, Wadi Rum desert, and the ancient city of Jerash.`,
    popu: `Over 10.3 million`
  },
  {
    name: "Kazakhstan",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/1000px-Flag_of_Kazakhstan.svg.png`,
    Category: "Nur-Sultan",
    info: `Kazakhstan: Kazakhstan is a Central Asian country known for its vast steppes, rugged mountains, and modern cities. Highlights include the Charyn Canyon, Lake Kaindy, and the futuristic capital city of Nur-Sultan (formerly Astana).`,
    popu: `Over 19.9 million`
  },
  {
    name: "Kenya",
    img: `https://cdn.britannica.com/15/15-004-B5D6BF80/Flag-Kenya.jpg`,
    Category: "Nairobi",
    info: `Kenya: Known for its diverse wildlife, Maasai culture, and scenic landscapes such as the Masai Mara and Mount Kenya, Kenya is a top safari destination in Africa. She is an East African country known for its diverse wildlife, stunning landscapes, and vibrant culture. Attractions include the Maasai Mara National Reserve, Amboseli National Park, and the Great Rift Valley.`,
    popu: `Over 54 million`
  },
  {
    name: "Kiribati",
    img: `https://media.istockphoto.com/id/1292186444/photo/fabric-national-flag-of-the-republic-of-kiribati-close-up.jpg?s=612x612&w=0&k=20&c=_mdQIP6Ek-9j-wzAldh9rBFuoZ-4TP-qRJno95CTFNk=`,
    Category: "South Tarawa",
    info: `Kiribati: Kiribati is a Pacific island nation known for its pristine beaches, coral atolls, and rich marine life. Highlights include Christmas Island, Tarawa Atoll, and the Phoenix Islands Protected Area.`,
    popu: `Over 130,000`
  },
  {
    name: "Kuwait",
    img: `https://t3.ftcdn.net/jpg/00/62/19/64/360_F_62196448_NVw1URMkFDUuJ7XUxPRdf0UoLk05ykIB.jpg`,
    Category: "Kuwait City",
    info: `Kuwait: Kuwait is a small Middle Eastern country known for its modern architecture, oil reserves, and rich cultural heritage. Attractions include the Kuwait Towers, the Grand Mosque, and the Souq Al-Mubarakiya.`,
    popu: `Over 4.3 million`
  },
  {
    name: "Kyrgyzstan",
    img: `https://cdn.britannica.com/41/7241-004-8C3C72DB/Flag-Kyrgyzstan.jpg`,
    Category: "Bishkek",
    info: `Kyrgyzstan is a Central Asian country known for its stunning mountain landscapes, nomadic culture, and historic Silk Road sites. Attractions include the breathtaking Issyk-Kul Lake, the mountainous landscapes of Ala Archa National Park, and the ancient city of Osh with its bustling bazaars and sacred Sulaiman-Too Mountain. Visitors can also experience traditional yurt stays, horseback riding excursions, and cultural festivals celebrating Kyrgyz heritage.`,
    popu: `Over 6.5 million`
  },
  {
    name: "Laos",
    img: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAACUCAMAAABSgr46AAAAe1BMVEXOESYAKGj////UDyKaG0IAKmzh4+kAGmIAAFgAJWYAAFv29/kAHWMAGGIAFWAAIGQAAFIAEF8AAE5rdpelqr3V1uDo6O3v7/KqsMJRV4KVl64wPHJ8hKEqLGbCx9MADF6FjKZcaY5UX4dlZooyQ3coN3B/f5xtbpIzN2492ICJAAACb0lEQVR4nO3c2XaCMBQFUExbGSoEVKog1Uon//8LC53bhRZoDi5uzn7w1ZxFEm4gwXGIiIiIiIiIiIiIiIiIiIhG40I651I650o6ZyIdE44fExrnD/2HwyXUiRfP4yAJql8v0YP97zAJfR3E/mKZ3qxqN+ly4cfBbJjLOURC1z1k65X6abXODqE7wL/jE2ovy1PVJM0zD99b4QmDzXLamK82XW4CdAPACbVXHM/3mrFAX0ZswvB2ezJfbXsbQtuATOhH5e/5pcmqjJCzKjCh7xbXLQIqdV24wIjAhLu7dgGriHc7XDNwCb2iZb5a4cHaAUu423cIqNQedhVRCZOybRd976hlAmoJKOFs01zGHJduZpimgBKGeceASuWg2yImoXvfOaBS95g6HJMw6dpHaylmJEISRt3m0Q/7CNEYSML56Wr7mOkc0RhEwqjsFVCpEnEREQm9vxcUzbaIygaQUD/066RVN30ArBUBCdtX3L9BKnBAwmDdM6BSa8AzDfMJ9WPfYVgNxEfz3dR8wlnWdxhWAzEzX5yaTxg+9x2G1UB8Nl+cmk8YPfUOqNST+TsiIGGXtf0oE7rdF05fcvPrC8BM86+EY5hp5CeU30vlzzTy7xby7/jyqzb5lbf81ZMFK2D5TzHkP4my4Gmi/CfCFjzVl/9mxoK3a/LfkFrwllv+TgULdptYsGPIgl1fFuzck7/7shK12kELKdY+cRf0v0nfyT6x4DTC5MSJElfGiZJafSpI/zgVpONAyzkV9Eb2ya5vBJ/OOxcmHD8LEp77gwBwFnw14twf5oA796dViIiIiIiIiIiIiIiIiIiI2nsBqS17/H9H5r8AAAAASUVORK5CYII=`,
    Category: "Vientiane",
    info: `Laos: With its tranquil Buddhist temples, lush landscapes, and Mekong River scenery, Laos offers travelers a serene and spiritual escape in Southeast Asia. A Southeast Asian country known for its mountainous landscapes, Buddhist temples, and traditional way of life. Highlights include the ancient city of Luang Prabang, the Plain of Jars, and the Kuang Si Falls.`,
    popu: `Over 7.9 million`
  },
  {
    name: "Latvia",
    img: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQwAAACUCAMAAABREOc7AAAAD1BMVEWdIjX///+bFy6nRVLhx8pBxGoBAAAAgElEQVR4nO3auRGAABDEsOPpv2ayG1cAAVIJTndnAAAAAAAAAAAAAAAAAACAd52suVhzs+ZgiRFihBghRogRYoQYIUaIEWKEGCFGiBFihBghRogRYoQYIUaIEWKEGCFGiBFihBhheA6XhHBWia+PQwAAAAAAAAAAAAAAAAAA8DsP/UMwKfkr+dgAAAAASUVORK5CYII=`,
    Category: "Riga",
    info: `Latvia: Latvia is a Baltic country known for its historic cities, stunning coastline, and dense forests. Attractions include Riga's Old Town, the Gauja National Park, and the beaches of Jurmala.`,
    popu: `Over 1.8 million`
  },
  {
    name: "Lebanon",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/2560px-Flag_of_Lebanon.svg.png`,
    Category: "Beirut",
    info: `Lebanon: Lebanon is a Middle Eastern country known for its ancient ruins, vibrant cities, and Mediterranean cuisine. Highlights include the ancient city of Byblos, the ruins of Baalbek, and the nightlife of Beirut.`,
    popu: `Over 6.8 million`
  },
  {
    name: "Lesotho",
    img: `https://media.istockphoto.com/id/1141056954/vector/lesotho-flag-icon-in-flat-style-national-sign-vector-illustration-politic-business-concept.jpg?s=612x612&w=0&k=20&c=RSq_O65qDCyNFRL-oFKimfxQ8sv5mj4dRJtlQpU4Grs=`,
    Category: "Maseru",
    info: `Lesotho: Lesotho is a landlocked country in Southern Africa known for its mountainous landscapes, traditional culture, and outdoor adventures. Attractions include the Drakensberg Mountains, Sani Pass, and the Maletsunyane Falls.`,
    popu: `Over 2.2 million`
  },
  {
    name: "Liberia",
    img: `https://media.istockphoto.com/id/1181619967/photo/republic-liberia-national-fabric-flag-textile-background-symbol-of-world-african-country.jpg?s=612x612&w=0&k=20&c=ySQ8Ayaj7hWGn_IvIlpu3x0YO3U_33G077lMVAVh6to=`,
    Category: "Monrovia",
    info: `Liberia: Liberia is a West African country known for its rainforests, beaches, and cultural diversity. Highlights include the Sapo National Park, the Firestone Rubber Plantation, and the historic city of Monrovia.`,
    popu: `Over 5.2 million`
  },
  {
    name: "Libya",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/1280px-Flag_of_Libya.svg.png`,
    Category: "Tripoli",
    info: `Libya: Libya is a North African country known for its ancient ruins, desert landscapes, and Mediterranean coastline. Attractions include the ancient city of Leptis Magna, the Sahara Desert, and the Roman ruins of Sabratha.`,
    popu: `Over 7.1 million`
  },
  {
    name: "Liechtenstein",
    img: `https://www.fotw.info/images/l/li.gif`,
    Category: "Vaduz",
    info: `Liechtenstein: Liechtenstein is a tiny landlocked country in Central Europe known for its alpine scenery, historic castles, and low taxes. Attractions include Vaduz Castle, the Malbun ski resort, and the Liechtenstein National Museum.`,
    popu: `Over 39,000`
  },
  {
    name: "Lithuania",
    img: `https://media.istockphoto.com/id/472330931/vector/flag-of-lithuania.jpg?s=612x612&w=0&k=20&c=88gKTou_Qq4AQPQRQw3cvGGzUqTAZScm3lzqIPE3qb4=`,
    Category: "Vilnius",
    info: `Lithuania: Lithuania is a Baltic country known for its historic cities, scenic landscapes, and cultural heritage. Highlights include Vilnius' Old Town, the Curonian Spit, and the Hill of Crosses.`,
    popu: `Over 2.8 million`
  },
  {
    name: "Luxembourg",
    img: `https://img.freepik.com/free-vector/illustration-netherlands-flag_53876-27103.jpg`,
    Category: "Luxembourg City",
    info: `Luxembourg: Luxembourg is a small European country known for its medieval castles, picturesque villages, and vibrant cultural scene. Attractions include Luxembourg City's Old Town, Vianden Castle, and the Mullerthal region.`,
    popu: `Over 634,000`
  },
  {
    name: "Madagascar",
    img: `https://cdn.britannica.com/46/2246-004-17A6E838/Flag-Madagascar.jpg`,
    Category: "Antananarivo",
    info: `Madagascar: Madagascar is an island nation located off the southeast coast of Africa known for its unique wildlife, lush rainforests, and stunning landscapes. Highlights include the Avenue of the Baobabs, the rainforests of Masoala National Park, and the lemurs of Andasibe-Mantadia National Park.`,
    popu: `Over 29.4 million`
  },
  {
    name: "Malawi",
    img: `https://cdn.britannica.com/21/4221-004-93C8B4EC/Flag-Malawi.jpg`,
    Category: "Lilongwe",
    info: `Malawi: Malawi is a landlocked country in southeastern Africa known for its scenic landscapes, including Lake Malawi, the third-largest lake in Africa. Attractions include Liwonde National Park, Mount Mulanje, and the historic city of Zomba.`,
    popu: `Over 20.1 million`
  },
  {
    name: "Malaysia",
    img: `https://media.istockphoto.com/id/657672748/vector/flag-of-malaysia.jpg?s=612x612&w=0&k=20&c=UoU4BgTTdhrdedryBeyhQZOadnPrhRDLIaWm5TcnD00=`,
    Category: "Kuala Lumpur",
    info: `Malaysia: Home to bustling cities, tropical rainforests, and multicultural heritage, Malaysia entices visitors with attractions such as Kuala Lumpur's Petronas Towers, Penang's street food, and Borneo's wildlife.`,
    popu: `Over 32.8 million`
  },
  {
    name: "Maldives",
    img: `https://media.istockphoto.com/id/501997943/vector/maldives-flag.jpg?s=612x612&w=0&k=20&c=gNAM9uBftTF6mbdVt8Zji7xPMSkxibPEIsXz47irhYM=`,
    Category: "Malé",
    info: `Maldives: The Maldives is a tropical archipelago in the Indian Ocean known for its luxury resorts, crystal-clear waters, and vibrant coral reefs. Attractions include underwater restaurants, overwater bungalows, and world-class diving and snorkeling sites.`,
    popu: `Over 540,000`
  },
  {
    name: "Mali",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mali.svg/1280px-Flag_of_Mali.svg.png`,
    Category: "Bamako",
    info: `Mali: Mali is a landlocked country in West Africa known for its historic cities, ancient mosques, and rich cultural heritage. Highlights include the UNESCO-listed city of Timbuktu, the Dogon Country, and the Great Mosque of Djenné.`,
    popu: `Over 20.5 million`
  },
  {
    name: "Malta",
    img: `https://www.shutterstock.com/image-vector/malta-flag-260nw-308691134.jpg`,
    Category: "Valletta",
    info: `Malta: Malta is a small island nation in the Mediterranean known for its historic sites, stunning beaches, and clear blue waters. Attractions include the ancient city of Valletta, the megalithic temples of Ħaġar Qim and Mnajdra, and the Blue Lagoon on the island of Comino.`,
    popu: `Over 514,000`
  },
  {
    name: "Marshall Islands",
    img: `https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg`,
    Category: "Majuro",
    info: `Marshall Islands: The Marshall Islands is a Micronesian country in the Pacific Ocean known for its pristine beaches, coral atolls, and World War II history. Highlights include the Bikini Atoll, the underwater wrecks of Kwajalein Atoll, and traditional Marshallese culture.`,
    popu: `Over 59,000`
  },
  {
    name: "Mauritania",
    img: `https://cdn.britannica.com/64/5064-050-C2F7A773/Flag-Mauritania.jpg`,
    Category: "Nouakchott",
    info: `Mauritania: Mauritania is a West African country known for its vast desert landscapes, ancient caravan routes, and rich nomadic culture. Attractions include the Banc d'Arguin National Park, the ancient city of Chinguetti, and the Iron Ore Train.`,
    popu: `Over 4.7 million`
  },
  {
    name: "Mauritius",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritius.svg/1280px-Flag_of_Mauritius.svg.png`,
    Category: "Port Louis",
    info: `Mauritius: Mauritius is an island nation in the Indian Ocean known for its stunning beaches, lush rainforests, and diverse marine life. Highlights include Black River Gorges National Park, Chamarel's Seven Colored Earths, and the vibrant capital city of Port Louis.`,
    popu: `Over 1.3 million`
  },
  {
    name: "Mexico",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mexico.jpg/1200px-Flag_of_Mexico.jpg`,
    Category: "Mexico City",
    info: `Mexico: Known for its vibrant culture, ancient civilizations, and delicious cuisine, Mexico attracts visitors with its archaeological sites, colonial cities, and pristine beaches along the Caribbean and Pacific coasts.`,
    popu: `Over 130.2 million`
  },
  {
    name: "Micronesia",
    img: `https://media.istockphoto.com/id/1450188454/photo/flag-of-micronesia.jpg?s=612x612&w=0&k=20&c=60NSDMQxSIuCG3zfg-SKFTqUKepiJ9qVzzJvUkCo8MY=`,
    Category: "Palikir",
    info: `Micronesia: Micronesia is a region of Oceania comprising thousands of small islands in the western Pacific Ocean. The Federated States of Micronesia is one of the countries within this region, known for its beautiful coral reefs, traditional culture, and World War II relics.`,
    popu: `Over 116,000`
  },
  {
    name: "Moldova",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/2000px-Flag_of_Moldova.svg.png`,
    Category: "Chișinău",
    info: `Moldova: Moldova is a landlocked country in Eastern Europe known for its scenic vineyards, historic monasteries, and cultural traditions. Attractions include the Milestii Mici wine cellars, Orheiul Vechi monastery complex, and the capital city of Chișinău.`,
    popu: `Over 2.6 million`
  },
  {
    name: "Monaco",
    img: `https://cdn.britannica.com/50/2750-050-688E6E49/Flag-Monaco.jpg`,
    Category: "Monaco",
    info: `Monaco is a small sovereign city-state located on the French Riviera in Western Europe. Known for its glamorous reputation, Monaco is famous for its luxurious casinos, prestigious yacht-filled harbor, and Formula One Grand Prix motor race. Despite its small size, Monaco boasts several cultural attractions, including the opulent Monte Carlo Casino, the Prince's Palace of Monaco, and the Oceanographic Museum. Visitors can also explore the picturesque streets of Monaco-Ville, the historic old town perched on a rocky promontory overlooking the Mediterranean Sea. With its sunny climate, stunning scenery, and high-end shopping and dining options, Monaco is a playground for the rich and famous and a popular destination for luxury travelers from around the world.
  `,
    popu: `Over 39,000`
  },
  {
    name: "Mongolia",
    img: `https://cdn.pixabay.com/photo/2012/04/10/23/02/mongolia-26821_1280.png`,
    Category: "Ulaanbaatar",
    info: `Mongolia: Known for its vast steppes, nomadic culture, and Gobi Desert landscapes, Mongolia offers travelers opportunities for horseback riding, eagle hunting, and exploring ancient traditions.`,
    popu: `Over 3.3 million`
  },
  {
    name: "Montenegro",
    img: `https://media.istockphoto.com/id/1269275411/vector/vectorial-illustration-of-the-flag-of-montenegro-concept-of-the-homeland.jpg?s=612x612&w=0&k=20&c=gdkPCjG1VyIlg3B1p0KyuMoHfKx7Zg_et3is6XMgIcY=`,
    Category: "Podgorica",
    info: `Montenegro: Montenegro is a Balkan country known for its stunning Adriatic coastline, rugged mountains, and medieval towns. Highlights include the Bay of Kotor, Durmitor National Park, and the old town of Kotor.`,
    popu: `Over 622,000`
  },
  {
    name: "Morocco",
    img: `https://media.istockphoto.com/id/1334705699/vector/morocco-african-country-flag.jpg?s=612x612&w=0&k=20&c=bGd03v1OWUllEI-Vvp30L57eR59nUVCqGwHT7Qv17Uc=`,
    Category: "Rabat",
    info: `Morocco: Bridging Africa and Europe, Morocco entices travelers with its exotic markets, medieval medinas, and Sahara Desert adventures, as well as historic cities like Marrakech, Fes, and Casablanca.`,
    popu: `Over 37.4 million`
  },
  {
    name: "Mozambique",
    img: `https://cdn.britannica.com/23/4223-004-76407A84/Flag-Mozambique.jpg`,
    Category: "Maputo",
    info: `Mozambique: Mozambique is a country located in Southeast Africa known for its stunning coastline, diverse wildlife, and rich cultural heritage. Highlights include the Bazaruto Archipelago, Gorongosa National Park, and the historic island of Mozambique.`,
    popu: `Over 33.2 million`
  },
  {
    name: "Myanmar (formerly Burma)",
    img: `https://t3.ftcdn.net/jpg/01/08/88/60/360_F_108886024_0bql9hHGk8d9XhReRXNZyPs4oN6K4yKu.jpg`,
    Category: "Naypyidaw",
    info: `Myanmar (formerly Burma): Myanmar is a Southeast Asian country known for its ancient temples, diverse ethnic cultures, and lush landscapes. Attractions include the temples of Bagan, the floating gardens of Inle Lake, and the historic city of Mandalay.`,
    popu: `Over 54 million`
  },
  {
    name: "Namibia",
    img: `https://media.istockphoto.com/id/1334705734/vector/republic-of-namibia-african-country-flag.jpg?s=612x612&w=0&k=20&c=iX6CUZeY0rn2AMhYANf_eSvU73b4Iv-MBbhAlhZXO7U=`,
    Category: "Windhoek",
    popu: `Over 2.6 million`,
    info: `Namibia: Famed for its otherworldly landscapes, including the Namib Desert and Fish River Canyon, Namibia offers travelers opportunities for desert safaris, star gazing, and adventure activities. It is a Southern African country known for its dramatic desert landscapes, wildlife reserves, and indigenous cultures. Highlights include the Namib Desert, Etosha National Park, and the coastal town of Swakopmund.`,
  },
  {
    name: "Nauru",
    img: `https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg`,
    Category: "Yaren",
    popu: `Over 10,000`,
    info: `Nauru: Nauru is a small island nation in the Pacific Ocean known for its phosphate mining industry and stunning coral reefs. Despite its small size, Nauru offers opportunities for diving, snorkeling, and birdwatching.`,
  },
  {
    name: "Nepal",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/1200px-Flag_of_Nepal.svg.png`,
    Category: "Kathmandu",
    popu: `Over 30 million`,
    info: `Nepal: Home to the world's highest peaks, including Mount Everest, Nepal captivates visitors with its Himalayan trekking routes, ancient temples, and rich cultural heritage.`,
  },
  {
    name: "Netherlands",
    img: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAACUCAMAAADLemePAAAAGFBMVEWuHCghRov+//ynAADiwb/////BxtYAKoBaKezKAAAAo0lEQVR4nO3awQ2DAAzAwBRa2H9jpqiQo7sN/PcMAAAAAAAAAAAAAK86V5vvavNbbY7V5JXJK5NXJq9MXpm8Mnll8srklckrk1cmr0xembwyeWXyyuSVySuTVyavTF6ZvLLteW8vif8112pzrzaf1eSVySuTVyavTF6ZvDJ5ZfLK5JXJK5NXJq9MXpm8Mnll8srklckrk1cmr0xembwyeWXL8x4pLJNtLuLTRAAAAABJRU5ErkJggg==`,
    Category: "Amsterdam",
    popu: `Over 17.5 million`,
    info: `Netherlands: Famous for its picturesque canals, historic windmills, and vibrant tulip fields, the Netherlands captivates travelers with its charming cities, cultural heritage, and cycling-friendly landscapes.`,
  },
  {
    name: "New Zealand",
    img: `https://qph.cf2.quoracdn.net/main-qimg-7df92c83cfc0197e6cf2bd038073e8cd-lq`,
    Category: "Wellington",
    popu: `Over 5.1 million`,
    info: `New Zealand: New Zealand is an island country in the southwestern Pacific Ocean known for its stunning landscapes, including mountains, fjords, and beaches. Highlights include Milford Sound, the Tongariro Alpine Crossing, and the cities of Auckland and Wellington.`,
  },
  {
    name: "Nicaragua",
    img: `https://media.istockphoto.com/id/1318415287/vector/vector-illustration-of-nicaragua-flag-patriotic-concept.jpg?s=612x612&w=0&k=20&c=zZk2ImgbEyuOrSdEcY25A34knYmBikVG0CJaipku9ac=`,
    Category: "Managua",
    popu: `Over 6.8 millionn`,
    info: `Nicaragua is a Central American country known for its diverse landscapes, including volcanoes, lakes, and beaches. The country offers a mix of natural beauty and cultural heritage, with attractions such as the colonial city of Granada, the volcanic island of Ometepe, and the surf town of San Juan del Sur. Nicaragua is also home to several nature reserves and national parks, including the UNESCO-listed Biosphere Reserve of Bosawás and the cloud forests of Miraflor. Visitors can enjoy outdoor activities such as hiking, wildlife spotting, and exploring indigenous communities.`,
  },
  {
    name: "Niger",
    img: `https://media.istockphoto.com/id/472334679/vector/flag-of-niger.jpg?s=612x612&w=0&k=20&c=tECjxs415Vb1YJpCYQcuFY9qUxCRFRLnipRCz3tlKxc=`,
    Category: "Niamey",
    popu: `Over 25.9 million`,
    info: `Niger is a landlocked country located in West Africa, bordered by Algeria, Libya, Chad, Nigeria, Benin, Burkina Faso, Mali, and Niger. The country is known for its vast desert landscapes, including the Sahara Desert, which covers much of its territory. Niger is home to diverse ethnic groups, including the Hausa, Tuareg, Fulani, and Zarma-Songhai people. The capital city, Niamey, sits on the banks of the Niger River and is known for its vibrant markets, mosques, and cultural festivals. Attractions in Niger include the ancient city of Agadez, the W National Park, and the historic Sultanate of Damagaram.`,
  },
  {
    name: "Nigeria",
    img: `https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg`,
    Category: "Abuja",
    popu: `Over 233 million`,
    info: `Nigeria, situated in West Africa, stands as the continent's most populous nation, boasting over 200 million inhabitants encompassing a mosaic of ethnic groups and cultures. With a bustling economy anchored by its oil and gas industry, Nigeria is also diversifying into telecommunications, banking, and services. Abuja, the centrally located capital, serves as the country's political hub. Nigeria operates as a federal republic with a presidential system of government, facing challenges such as political instability, corruption, poverty, and security concerns, notably the Boko Haram insurgency. Despite these challenges, Nigeria's rich cultural heritage shines through its traditional music, dance, festivals, and vibrant fashion industry. Endowed with abundant natural resources beyond oil and gas, Nigeria continues to grapple with issues surrounding resource management and distribution, yet its development remains pivotal not just for the region but for the entire continent.`,
  },
  {
    name: "North Korea",
    img: `https://cdn.britannica.com/47/1947-004-44F4E790/Flag-North-Korea.jpg`,
    Category: "Pyongyang",
    popu: `Over 25.8 million`,
    info: `North Korea, officially known as the Democratic People's Republic of Korea (DPRK), is a secretive East Asian country located on the northern part of the Korean Peninsula. The nation is known for its authoritarian regime, isolated status, and military presence. Pyongyang, the capital city, is home to monumental architecture, including the towering Ryugyong Hotel and the Juche Tower. Attractions for tourists are limited and tightly controlled, but visitors can explore some historical sites such as the Kumsusan Palace of the Sun, the Korean War Museum, and the demilitarized zone (DMZ) bordering South Korea.`,
  },
  {
    name: "North Macedonia",
    img: `https://media.istockphoto.com/id/1205694806/vector/vector-north-macedonia-flag-design.jpg?s=612x612&w=0&k=20&c=QZsfkvIP8GzMGsKEMqpwa_8jOsvs8uFbSXn2qu013Y0=`,
    Category: "Skopje",
    popu: `Over 2.1 million`,
    info: `North Macedonia, formerly known as the Republic of Macedonia, is a landlocked country in the Balkan Peninsula of Southeast Europe. The country is known for its rich history, diverse culture, and stunning natural landscapes. Skopje, the capital city, is home to a mix of Ottoman, Byzantine, and modern architecture, including the iconic Skopje Fortress and the Stone Bridge. Other attractions include the UNESCO-listed Ohrid Lake and town, the ancient city of Bitola, and the Matka Canyon. North Macedonia is also known for its delicious cuisine, influenced by Mediterranean, Turkish, and Balkan flavors.`,
  },
  {
    name: "Norway",
    img: `https://media.istockphoto.com/id/460134109/photo/red-white-and-blue-norwegian-flag.jpg?s=612x612&w=0&k=20&c=1vdjiWb8L-vmyn_KTeSahOr2bf3zg02_Gy1eBlBDh3I=`,
    Category: "Oslo",
    popu: `Over 5.4 million`,
    info: `Norway: Known for its stunning fjords, northern lights, and outdoor adventures, Norway offers travelers opportunities for scenic drives along the Atlantic Road, hiking in the Lofoten Islands, and exploring Oslo's museums.`,
  },
  {
    name: "Oman",
    img: `https://t4.ftcdn.net/jpg/00/62/19/67/360_F_62196709_uPCwjkfHL8K9qq5l0I0uGuKOaAqSrR8b.jpg`,
    Category: "Muscat",
    popu: `Over 5.1 million`,
    info: `Oman is a country located on the southeastern coast of the Arabian Peninsula in Southwest Asia. Known for its stunning desert landscapes, rugged mountains, and historic forts, Oman offers a rich tapestry of cultural heritage and natural beauty. The capital city, Muscat, is a bustling metropolis with a blend of traditional and modern architecture, including the Sultan Qaboos Grand Mosque and the Royal Opera House. Other attractions in Oman include the ancient city of Nizwa, the Wahiba Sands desert, and the fjords of Musandam. Oman is also famous for its warm hospitality, traditional souqs, and delicious cuisine.`,
  },
  {
    name: "Pakistan",
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXoeuIHmwQ5dGP07iAzrUuHf_-iXzNJDnM1J9ViqEdfQ&s`,
    Category: "Islamabad",
    popu: `Over 225.2 million`,
    info: `Pakistan: Pakistan is a South Asian country known for its diverse landscapes, ancient civilizations, and rich cultural heritage. Attractions include the ancient city of Mohenjo-Daro, the Karakoram Highway, and the Hunza Valley.`,
  },
  {
    name: "Palau",
    img: `https://cdn.britannica.com/49/3349-050-D1D56792/Flag-Palau.jpg`,
    Category: "Ngerulmud",
    popu: `Over 18,000`,
    info: `Palau: Palau is an island country in the western Pacific Ocean known for its crystal-clear waters, vibrant coral reefs, and World War II history. Highlights include Jellyfish Lake, the Rock Islands, and the historic sites of Peleliu.Panama is a Central American country known for its iconic canal, lush rainforests, and diverse wildlife. Attractions include the Panama Canal, the San Blas Islands, and the colonial old town of Panama City.`,
  },
  {
    name: "Palestine State",
    img: `https://media.istockphoto.com/id/657672844/vector/flag-of-state-of-palestine.jpg?s=612x612&w=0&k=20&c=g0quwdGePUr6CpXcnBxIjr07t_a_FhNH2VY5KBYTIwA=`,
    Category: "Jerusalem",
    popu: `Over  5.3 million`,
    info: `Palestine, officially known as the State of Palestine, is a region located in the Eastern Mediterranean, primarily situated in Western Asia with smaller portions in the Eastern Mediterranean. The region has a complex political and historical context, with the Israeli-Palestinian conflict being central to its identity. Palestine is recognized by the United Nations and many countries around the world as an independent state, although its sovereignty remains a subject of dispute. The territory includes the West Bank, Gaza Strip, and East Jerusalem.`,
  },
  {
    name: "Panama",
    img: `https://p1.hiclipart.com/preview/704/365/198/flag-flag-of-paraguay-flag-of-panama-blue-red-commonwealth-of-independent-states-bulgaria-white-png-clipart.jpg`,
    Category: "Panama City",
    popu: `Over 4.4 million`,
    info: `Panama: Known for its canal connecting the Atlantic and Pacific Oceans, Panama offers travelers opportunities for eco-tourism, jungle adventures, and exploring colonial architecture.`,
  },
  {
    name: "Papua New Guinea",
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4JFF2k0rPKPbQzid69o2Q5HMd9wwE6AgUlDW55DxRA3rIRWRdYJkzpVsaf9c9CGXWPdA&usqp=CAU`,
    Category: "Port Moresby",
    popu: `Over 9.1 million`,
    info: `Papua New Guinea: Papua New Guinea is a country in the southwestern Pacific Ocean known for its tribal cultures, remote jungles, and active volcanoes. Highlights include the Kokoda Track, the Sepik River, and the Tari Basin.`,
  },
  {
    name: "Paraguay",
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMhe5NDqEHQeR5fuVP25gFdByUdtjWOEwqwSg4T9J6yLZB1xiGJ6gttA56cDgAYoUwAPw&usqp=CAU`,
    Category: "Asunción",
    popu: `Over 7.3 million`,
    info: `Paraguay: Paraguay is a landlocked country in South America known for its Guarani culture, Jesuit ruins, and pristine wilderness. Attractions include the Jesuit Missions of La Santísima Trinidad de Paraná and the Pantanal wetlands.`,
  },
  {
    name: "Peru",
    img: `https://t4.ftcdn.net/jpg/01/74/77/55/360_F_174775591_q9doFJ4Mw5Q7gybisw3LHUiY8FnPQzY7.jpg`,
    Category: "Lima",
    popu: `Over 33.2 million`,
    info: `Peru: Home to ancient civilizations such as the Incas, Peru offers travelers opportunities to explore Machu Picchu, the Sacred Valley, and the Amazon Rainforest, as well as vibrant cities like Lima and Cusco.`,
  },
  {
    name: "Philippines",
    img: `https://media.istockphoto.com/id/878591552/photo/philippines-flag-a-series-of-flags-of-the-world.jpg?s=612x612&w=0&k=20&c=cAUFX9GeZfS_GJAYWF0ELpEYhAdNJCCwYsQrFI0lPcM=`,
    Category: "Manila",
    popu: `Over 113.4 million`,
    info: `Philippines: With its stunning beaches, vibrant festivals, and diverse marine life, the Philippines attracts visitors with its island-hopping tours, historic landmarks, and warm hospitality.`,
  },
  {
    name: "Poland",
    img: `https://cdn.britannica.com/52/3552-004-83ABA964/Flag-Poland.jpg`,
    Category: "Warsaw",
    popu: `Over 37.8 million`,
    info: `Poland: Famed for its medieval towns, Gothic castles, and rich history, Poland offers travelers opportunities for cultural exploration, culinary delights, and outdoor adventures.`,
  },
  {
    name: "Portugal",
    img: `https://media.istockphoto.com/id/669426148/vector/national-flag-of-portugal-country.jpg?s=612x612&w=0&k=20&c=XkwqiQO61j0LM4fxTJ2PthP4a6CBnEAAjv8Y_P70ZDI=`,
    Category: "Lisbon",
    popu: `Over 10.3 million`,
    info: `Portugal: Famed for its historic landmarks, charming villages, and scenic coastline, Portugal captivates visitors with attractions such as Lisbon's colorful neighborhoods, Porto's wine cellars, and the Algarve's beaches.`,
  },
  {
    name: "Qatar",
    img: `https://t3.ftcdn.net/jpg/01/07/55/26/360_F_107552619_a171Nedp416hbFa7p2ETRxhDa1ZGGAGh.jpg`,
    Category: "Doha",
    popu: `Over 2.8 million`,
    info: `Qatar is a small, wealthy country located on the northeastern coast of the Arabian Peninsula in Western Asia. Known for its modern skyline, luxurious shopping malls, and cultural heritage, Qatar has rapidly transformed into a major global hub in recent decades. The capital city, Doha, is a vibrant metropolis with iconic landmarks such as the futuristic Doha Corniche, the Museum of Islamic Art, and the Katara Cultural Village.
  One of Qatar's most famous attractions is the Pearl-Qatar, an artificial island featuring luxury residences, shops, and restaurants built on reclaimed land. Additionally, Qatar is home to the Aspire Zone, a sports complex that hosted events during the 2006 Asian Games and continues to attract athletes and visitors with its world-class facilities.`,
  },
  {
    name: "Romania",
    img: `https://media.istockphoto.com/id/1205694699/vector/vector-romanian-flag-design.jpg?s=612x612&w=0&k=20&c=BYw3ozNDg8wdHkIiglJVZBkGXxjfxZi4_xV4au6oV3k=`,
    Category: "Bucharest",
    popu: `Over 19.1 million`,
    info: `Romania: With its picturesque landscapes, medieval castles, and folklore traditions, Romania entices visitors with attractions such as Transylvania's Dracula's Castle, Bucharest's architecture, and the Carpathian Mountains.`,
  },
  {
    name: "Russia",
    img: `https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png`,
    Category: "Moscow",
    popu: `Over 145.9 million`,
    info: `Russia: Spanning two continents, Russia boasts iconic landmarks such as the Kremlin, Red Square, and the Hermitage Museum, as well as diverse landscapes ranging from snowy Siberia to the historic streets of St. Petersburg.`,
  },
  {
    name: "Rwanda",
    img: `https://media.istockphoto.com/id/1362311986/vector/national-rwanda-flag-official-colors-and-proportion-correctly-national-rwanda-flag-vector.jpg?s=612x612&w=0&k=20&c=ni3Y6-FoccjmL5p1kCpiZWN5knqMqEHQyDgFRnh_hQ4=`,
    Category: "Kigali",
    popu: `Over 13.1 million`,
    info: `Rwanda: Known for its mountain gorillas, lush rainforests, and genocide memorial sites, Rwanda offers travelers opportunities for wildlife encounters, cultural immersion, and eco-tourism.`,
  },
  {
    name: "Saint Kitts and Nevis",
    img: `https://cdn.britannica.com/22/5122-050-9813E394/Flag-Saint-Kitts-and-Nevis.jpg`,
    Category: "Basseterre",
    popu: `Over 53,000`,
    info: `Saint Kitts and Nevis: Saint Kitts and Nevis is a dual-island nation located in the Caribbean known for its stunning beaches, lush rainforests, and colonial heritage. Attractions include Brimstone Hill Fortress, the beaches of Frigate Bay, and the scenic railway tour.`,
  },
  {
    name: "Saint Lucia",
    img: `https://cdn.britannica.com/24/5124-050-8F6BCAC8/Flag-Saint-Lucia.jpg`,
    Category: "Castries",
    popu: `Over 184,000`,
    info: `Saint Lucia: Saint Lucia is a sovereign island country in the Eastern Caribbean known for its volcanic landscapes, lush rainforests, and beautiful beaches. Attractions include the Pitons, Sulphur Springs, and the Diamond Botanical Gardens.`,
  },
  {
    name: "Saint Vincent and the Grenadines",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/2560px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png`,
    Category: "Kingstown",
    popu: `Over 111,000`,
    info: `Saint Vincent and the Grenadines: Saint Vincent and the Grenadines is an island country in the Caribbean known for its picturesque landscapes, coral reefs, and sailing opportunities. Highlights include the Tobago Cays Marine Park, Bequia Island, and the Falls of Baleine.`,
  },
  {
    name: "Samoa",
    img: `https://cdn.britannica.com/08/3308-050-9DB345F2/Flag-Samoa.jpg`,
    Category: "Apia",
    popu: `Over 200,000`,
    info: `Samoa: Samoa is an island country in the South Pacific known for its pristine beaches, lush rainforests, and vibrant Polynesian culture. Attractions include the To Sua Ocean Trench, Lalomanu Beach, and the Robert Louis Stevenson Museum.`,
  },
  {
    name: "San Marino",
    img: `https://cdn.britannica.com/07/4207-050-78A7C297/flag-one-few-San-Marino-Europe-design.jpg`,
    Category: "San Marino",
    popu: `Over 34,000`,
    info: `San Marino: San Marino is a microstate surrounded by Italy known for its medieval architecture, mountainous landscapes, and rich history. Highlights include the UNESCO-listed Historic Centre of San Marino, Mount Titano, and the Three Towers of San Marino.`,
  },
  {
    name: "Sao Tome and Principe",
    img: `https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg`,
    Category: "São Tomé",
    popu: `Over 219,000`,
    info: `Sao Tome and Principe: Sao Tome and Principe is an island nation in the Gulf of Guinea known for its biodiverse rainforests, secluded beaches, and cocoa plantations. Attractions include Obo National Park, Pico Cão Grande, and the Bom Bom Island Resort. Known for its lush rainforests, volcanic landscapes, and cocoa plantations, the country offers opportunities for eco-tourism, hiking, and beach relaxation.`,
  },
  {
    name: "Saudi Arabia",
    img: `https://cdn.britannica.com/79/5779-050-46C999AF/Flag-Saudi-Arabia.jpg`,
    Category: "Riyadh",
    popu: `Over 35.5 million`,
    info: `Saudi Arabia: Saudi Arabia is a Middle Eastern country known for its vast deserts, ancient landmarks, and modern cities. Attractions include the ancient Nabatean city of Petra, the Red Sea coast, and the futuristic city of Riyadh.`,
  },
  {
    name: "Senegal",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/2560px-Flag_of_Senegal.svg.png`,
    Category: "Dakar",
    popu: `Over 17.9 million`,
    info: `Senegal: Senegal is a West African country known for its vibrant culture, diverse landscapes, and historic sites. Highlights include the Pink Lake, Goree Island, and the Bandia Wildlife Reserve.`,
  },
  {
    name: "Serbia",
    img: `https://media.istockphoto.com/id/652785340/vector/serbia.jpg?s=612x612&w=0&k=20&c=euFQWUdS3TXhkPqpqa57o5JL0TqTAFJYphCSGmS2zHA=`,
    Category: "Belgrade",
    popu: `Over 6.9 million`,
    info: `Serbia: Serbia is a landlocked country in Southeast Europe known for its rich history, vibrant culture, and stunning natural beauty. Attractions include Belgrade's historic sites, the Drina River Canyon, and the medieval monasteries of Studenica and Sopoćani.`,
  },
  {
    name: "Seychelles",
    img: `https://cdn.britannica.com/93/4093-050-E48CBA8F/Flag-Seychelles.jpg`,
    Category: "Victoria",
    popu: `Over 98,000`,
    info: `Seychelles: Seychelles is an archipelago nation in the Indian Ocean known for its pristine beaches, crystal-clear waters, and lush jungles. Highlights include Anse Lazio, Vallee de Mai Nature Reserve, and La Digue Island.`,
  },
  {
    name: "Sierra Leone",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Sierra_Leone.svg/2560px-Flag_of_Sierra_Leone.svg.png`,
    Category: "Freetown",
    popu: `Over 8.3 million`,
    info: `Sierra Leone: Sierra Leone is a West African country known for its beautiful beaches, tropical rainforests, and vibrant culture. Attractions include Banana Islands, Tiwai Island Wildlife Sanctuary, and Bunce Island.`,
  },
  {
    name: "Singapore",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1200px-Flag_of_Singapore.svg.png`,
    Category: "Singapore",
    popu: `Over 5.7 million`,
    info: `Singapore: With its modern skyline, multicultural cuisine, and lush gardens, Singapore offers visitors a blend of urban sophistication and natural beauty, including attractions such as Gardens by the Bay and Sentosa Island.It is also a sovereign city-state and island country in Southeast Asia known for its modern skyline, multicultural society, and efficient infrastructure. Highlights include Gardens by the Bay, Marina Bay Sands, and Sentosa Island.`,
  },
  {
    name: "Slovakia",
    img: `https://media.istockphoto.com/id/463394155/photo/slovakian-flag.jpg?s=612x612&w=0&k=20&c=CRkF7znTzyfs-cYaYEOFpf-d_YKwq12VKelCSUuvHM8=`,
    Category: "Bratislava",
    popu: `Over 5.5 million`,
    info: `Slovakia: Slovakia is a landlocked country in Central Europe known for its medieval castles, charming towns, and scenic landscapes. Attractions include Bratislava Castle, the High Tatras mountains, and the Slovak Paradise National Park.`,
  },
  {
    name: "Slovenia",
    img: `https://media.istockphoto.com/id/657673072/vector/flag-of-slovenia.jpg?s=612x612&w=0&k=20&c=eZtK5DY1xan-mCpOgc7KcMFaFz5lwMXLNHtF_CrGkbo=`,
    Category: "Ljubljana",
    popu: `Over 2.1 million`,
    info: `Slovenia: Slovenia is a Central European country known for its stunning alpine scenery, historic cities, and outdoor activities. Highlights include Lake Bled, Ljubljana's Old Town, and the Julian Alps.`,
  },
  {
    name: "Solomon Islands",
    img: `https://media.istockphoto.com/id/1063902726/vector/flag-of-solomon-islands.jpg?s=612x612&w=0&k=20&c=b-nSuqKtGCPhvA_m7VoYfAnSWqSxQqxeFbSJIueHv9U=`,
    Category: "Honiara",
    popu: `Over 715,000`,
    info: `Solomon Islands: The Solomon Islands is a sovereign country in Oceania known for its pristine coral reefs, tropical rainforests, and World War II history. Attractions include the Marovo Lagoon, Guadalcanal Island, and the Mataniko Falls.`,
  },
  {
    name: "Somalia",
    img: `https://cdn.britannica.com/18/18-004-43399622/Flag-Somalia.jpg`,
    Category: "Mogadishu",
    popu: `Over 15.9 million`,
    info: `Somalia: Somalia is a country located in the Horn of Africa known for its long coastline, ancient port cities, and nomadic culture. Attractions include the historic town of Mogadishu, the beaches of Kismayo, and the cave paintings of Laas Geel.`,
  },
  {
    name: "South Africa",
    img: `https://cdn.britannica.com/27/4227-004-32423B42/Flag-South-Africa.jpg`,
    Category: "Pretoria",
    popu: `Over 60 million`,
    info: `South Africa: South Africa is a country located at the southern tip of the African continent known for its diverse landscapes, wildlife reserves, and cultural heritage. Highlights include Kruger National Park, Table Mountain, Robben Island, and the Cape Winelands. Known for its diverse wildlife, stunning landscapes, and vibrant cities, South Africa offers travelers opportunities for safaris, wine tasting, and exploring iconic landmarks such as Table Mountain and Robben Island.`,
  },
  {
    name: "South Korea",
    img: `https://cdn.britannica.com/49/1949-004-8818300C/Flag-South-Korea.jpg`,
    Category: "Seoul",
    popu: `Over 51.8 million`,
    info: `South Korea: South Korea is a country located in East Asia known for its modern cities, traditional culture, and stunning landscapes. Attractions include Seoul's Gyeongbokgung Palace, the DMZ, Jeju Island, and the historic city of Gyeongju. With its dynamic cities, ancient temples, and delicious cuisine, South Korea entices visitors with its blend of traditional culture and modern innovations, showcased in cities like Seoul and historic sites like Gyeongbokgung Palace.`,
  },
  {
    name: "South Sudan",
    img: `https://cdn.britannica.com/37/150637-004-5D1F2321/Bandera-de-Sudan-del-Sur.jpg`,
    Category: "Juba",
    popu: `Over 11.1 million`,
    info: `South Sudan: South Sudan is a landlocked country in East-Central Africa known for its vast swamps, wildlife reserves, and tribal cultures. Attractions include Boma National Park, Nimule National Park, and the White Nile River.`,
  },
  {
    name: "Spain",
    img: `https://cdn.pixabay.com/photo/2017/10/31/23/52/spain-2906824_640.png`,
    Category: "Madrid",
    popu: `Over 47.3 million`,
    info: `Spain: Spain is a country located in southwestern Europe known for its rich history, diverse culture, and stunning architecture. Highlights include the Alhambra in Granada, the Sagrada Familia in Barcelona, the Prado Museum in Madrid, and the beaches of the Costa del Sol. With its vibrant cities, stunning beaches, historic landmarks, and lively festivals, Spain offers a diverse range of attractions, from the architectural wonders of Barcelona to the flamenco dance of Andalusia.`,
  },
  {
    name: "Sri Lanka",
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc-sjrBz0-bgWnTKNApGYlQJQzziWNkY1p7DEtKZigqQ&s`,
    Category: "Colombo",
    popu: `Over 21.8 million`,
    info: `Sri Lanka: Sri Lanka is an island country in South Asia known for its ancient ruins, lush tea plantations, and diverse wildlife. Attractions include Sigiriya Rock Fortress, the ancient city of Anuradhapura, Yala National Park, and the beaches of Mirissa and Unawatuna. With its ancient ruins, tea plantations, and golden beaches, Sri Lanka captivates visitors with attractions such as Sigiriya Rock Fortress, Kandy's Temple of the Tooth, and Mirissa's whale watching.`,
  },
  {
    name: "Sudan",
    img: `https://cdn.britannica.com/96/4496-004-278A6211/Flag-Sudan.jpg`,
    Category: "Khartoum",
    popu: `Over 44.9 million`,
    info: `Sudan: Sudan is a country located in northeastern Africa known for its ancient history, diverse cultures, and natural wonders. Highlights include the pyramids of Meroe, the Nubian Desert, and the Red Sea coast.`,
  },
  {
    name: "Suriname",
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRkoP1sePVtvQFT5iZ54L87HsNnbnPZVjrxPb5LDjFXQ&s`,
    Category: "Paramaribo",
    popu: `Over 592,000`,
    info: `Suriname: Suriname is a country located on the northeastern Atlantic coast of South America known for its dense rainforests, diverse wildlife, and multicultural society. Attractions include the Central Suriname Nature Reserve, Brownsberg Nature Park, and the historic city of Paramaribo.`,
  },
  {
    name: "Sweden",
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6p2-sfJgRM6WbhZIIvEnuvJzTC3lDcz3cDr6QlYVAwg&s`,
    Category: "Stockholm",
    popu: `Over 10.5 million`,
    info: `Sweden: Known for its sleek design, natural beauty, and progressive values, Sweden offers travelers opportunities to explore Stockholm's archipelago, Lapland's northern lights, and historic landmarks like the Vasa Museum.`,
  },
  {
    name: "Switzerland",
    img: `https://w7.pngwing.com/pngs/648/91/png-transparent-flag-of-switzerland-flag-of-spain-switzerland-angle-flag-text-thumbnail.png`,
    Category: "Bern",
    popu: `Over  8.7 million`,
    info: `Switzerland: Famed for its picturesque Alps, pristine lakes, and charming villages, Switzerland offers travelers opportunities for skiing, hiking, and exploring cultural treasures such as the Matterhorn and Jungfraujoch.`,
  },
  {
    name: "Syria",
    img: `https://cdn.britannica.com/50/4550-004-7B368E09/Flag-Syria.jpg`,
    Category: "Damascus",
    popu: `Over 18.3 million`,
    info: `Syria: Syria is a country in Western Asia known for its ancient history, rich cultural heritage, and archaeological sites. Attractions include the ancient city of Damascus, the ruins of Palmyra, and the Crusader castles of Krak des Chevaliers and Saladin's Castle.`,
  },
  {
    name: "Taiwan",
    img: `https://cdn.britannica.com/62/4562-050-A3B1915F/Flag-Taiwan.jpg`,
    Category: "Taipei City",
    popu: `Over 23.5 million`,
    info: `Taiwan, officially known as the Republic of China, is an island country located in East Asia. It is known for its bustling cities, delicious street food, stunning natural landscapes, and rich cultural heritage. Taiwan has a diverse population, with influences from Chinese, Japanese, and indigenous cultures.`,
  },
  {
    name: "Tajikistan",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/800px-Flag_of_Tajikistan.svg.png`,
    Category: "Dushanbe",
    popu: `Over 9.5 million`,
    info: `Tajikistan: Tajikistan is a Central Asian country known for its rugged mountains, ancient Silk Road cities, and vibrant culture. Attractions include the Pamir Highway, Iskanderkul Lake, and the historic city of Khujand.`,
  },
  {
    name: "Tanzania",
    img: `https://cdn.britannica.com/20/20-004-EB20A026/Flag-Tanzania.jpg`,
    Category: "Dodoma",
    popu: `Over 61.5 million`,
    info: `Tanzania: Home to Africa's highest peak, Mount Kilimanjaro, and the Serengeti National Park, Tanzania offers travelers opportunities for safari adventures, beach relaxation, and cultural experiences with Maasai tribes.`,
  },
  {
    name: "Thailand",
    img: `https://cdn.britannica.com/38/4038-050-BDDBA6AB/Flag-Thailand.jpg`,
    Category: "Bangkok",
    popu: `Over 69.8 million`,
    info: `Thailand: Known for its vibrant street life, ancient temples, and tropical islands, Thailand captivates visitors with its bustling cities, golden temples, and exotic cuisine, as well as its renowned hospitality.`,
  },
  {
    name: "Timor-Leste",
    img: `https://cdn.britannica.com/60/72760-050-4F87197C/Flag-of-East-Timor.jpg`,
    Category: "Dili",
    popu: `Over 1.4 million`,
    info: `Timor-Leste: Timor-Leste, also known as East Timor, is a Southeast Asian country known for its rugged landscapes, rich culture, and tumultuous history. Attractions include the beaches of Atauro Island, the mountains of Maubisse, and the colonial architecture of Dili.`,
  },
  {
    name: "Togo",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_Togo.svg/1200px-Flag_of_Togo.svg.png`,
    Category: "Lomé",
    popu: `Over 8.3 million`,
    info: `Togo: Togo is a West African country known for its palm-fringed beaches, traditional villages, and vibrant markets. Highlights include the Togoville Shrine, the Koutammakou UNESCO World Heritage Site, and the Fazao-Malfakassa National Park.`,
  },
  {
    name: "Tonga",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Tonga.svg/2560px-Flag_of_Tonga.svg.png`,
    Category: "Nukuʻalofa",
    popu: `Over 105,000`,
    info: `Tonga: Tonga is a Polynesian kingdom located in the South Pacific known for its stunning beaches, coral reefs, and traditional culture. Attractions include the Ha'amonga 'a Maui Trilithon, 'Eua National Park, and the Hufangalupe Natural Land Bridge.`,
  },
  {
    name: "Trinidad and Tobago",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/320px-Flag_of_Trinidad_and_Tobago.svg.png`,
    Category: "Port of Spain",
    popu: `Over 1.4 million`,
    info: `Trinidad and Tobago: Trinidad and Tobago is a twin-island nation located in the Caribbean known for its vibrant carnival celebrations, diverse culture, and lush landscapes. Highlights include Maracas Bay, the Asa Wright Nature Centre, and the Pitch Lake.`,
  },
  {
    name: "Tunisia",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/2560px-Flag_of_Tunisia.svg.png`,
    Category: "Tunis",
    popu: `Over 11.8 million`,
    info: `Tunisia: Famed for its ancient ruins, Mediterranean beaches, and desert landscapes, Tunisia offers travelers a blend of history, culture, and relaxation along its coastlines and in its historic cities.`,
  },
  {
    name: "Turkey",
    img: `https://cdn.britannica.com/82/4782-004-4119489D/Flag-Turkey.jpg`,
    Category: "Ankara",
    popu: `Over 84 million`,
    info: `Turkey: Bridging Europe and Asia, Turkey boasts a rich tapestry of history, culture, and natural beauty, with attractions such as the Hagia Sophia, Cappadocia's fairy chimneys, and the Mediterranean coastline. It is a transcontinental country located at the crossroads of Europe and Asia known for its rich history, stunning architecture, and vibrant culture. Highlights include Istanbul's Hagia Sophia and Blue Mosque, the ancient city of Ephesus, the fairy chimneys of Cappadocia, and the turquoise coast of Antalya.

  `,
  },
  {
    name: "Turkmenistan",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/2560px-Flag_of_Turkmenistan.svg.png`,
    Category: "Ashgabat",
    popu: `Over 6 million`,
    info: `Turkmenistan: Turkmenistan is a Central Asian country known for its vast deserts, ancient ruins, and eccentric architecture. Attractions include the Darvaza Gas Crater, the ancient city of Merv, and the marble-clad capital city of Ashgabat.`,
  },
  {
    name: "Tuvalu",
    img: `https://cdn.britannica.com/03/3303-050-D72C968A/Flag-Tuvalu.jpg`,
    Category: "Funafuti",
    popu: `Over 12,000`,
    info: `Tuvalu: Tuvalu is a Polynesian island nation located in the Pacific Ocean known for its remote location, coral atolls, and traditional way of life. Highlights include Funafuti Atoll, the Nanumea Atoll, and the Falekaupule Building.`,
  },
  {
    name: "Uganda",
    img: `https://cdn.britannica.com/22/22-050-E5AD8F85/Flag-Uganda.jpg`,
    Category: "Kampala",
    popu: `Over 47.5 million`,
    info: `Uganda is an East African country known for its diverse landscapes, including lush rainforests, expansive savannahs, and the iconic Lake Victoria. Attractions include the endangered mountain gorillas of Bwindi Impenetrable National Park, the majestic Murchison Falls, and the adrenaline-inducing whitewater rafting on the Nile River. Uganda is also rich in cultural heritage, with vibrant markets, traditional dance performances, and historical sites such as the Kasubi Tombs.`,
  },
  {
    name: "Ukraine",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/800px-Flag_of_Ukraine.svg.png`,
    Category: "Kyiv",
    popu: `Over 41.5 million`,
    info: `Ukraine: With its historic cities, Orthodox churches, and Black Sea coastlines, Ukraine offers travelers opportunities for exploring UNESCO World Heritage Sites, vibrant street art scenes, and cultural festivals.`,
  },
  {
    name: "United Arab Emirates (UAE)",
    img: `https://i.pinimg.com/736x/24/d3/01/24d30114f48a93aba99d3c6cf493c0fc.jpg`,
    Category: "Abu Dhabi",
    popu: `Over 9.9 million`,
    info: `UAE (United Arab Emirates): Home to futuristic cities like Dubai and Abu Dhabi, the UAE dazzles visitors with its skyscrapers, luxury shopping malls, and desert adventures, offering a blend of modernity and traditional Arabian hospitality.`,
  },
  {
    name: "United Kingdom (UK)",
    img: `https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg`,
    Category: "London",
    popu: `Over 68 million`,
    info: `United Kingdom: Home to iconic landmarks such as Big Ben, Buckingham Palace, and Stonehenge, the United Kingdom attracts visitors with its rich history, royal heritage, cultural institutions, and charming countryside.`,
  },
  {
    name: "United States of America (USA)",
    img: `https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg`,
    Category: "Washington, D.C.",
    popu: `Over 333 million`,
    info: `United States: Known for its diverse landscapes, iconic cities, cultural attractions, and global influence in areas such as entertainment, technology, and politics, the United States is a top destination for travelers worldwide.`,
  },
  {
    name: "Uruguay",
    img: `https://static.vecteezy.com/system/resources/previews/002/450/300/non_2x/illustration-of-uruguay-flag-free-vector.jpg`,
    Category: "Montevideo",
    popu: `Over 3.5 million`,
    info: `Uruguay: Known for its laid-back lifestyle, pristine beaches, and historic districts, Uruguay attracts visitors with attractions such as Montevideo's colonial architecture, Punta del Este's resorts, and Colonia del Sacramento's cobbled streets.`,
  },
  {
    name: "Uzbekistan",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png`,
    Category: "Tashkent",
    popu: `Over 34.8 million`,
    info: `Uzbekistan: With its Silk Road heritage, ancient cities, and Islamic architecture, Uzbekistan offers travelers a journey through history with attractions such as Samarkand's Registan Square, Bukhara's old town, and Khiva's walled city.`,
  },
  {
    name: "Vanuatu",
    img: `https://cdn.britannica.com/05/3305-050-94F53891/Flag-Vanuatu.jpg`,
    Category: "Port Vila",
    popu: `Over 314,000`,
    info: `Vanuatu is a South Pacific island nation known for its stunning tropical scenery, vibrant coral reefs, and unique Melanesian culture. Attractions include the volcanic landscapes of Tanna Island, the underwater wonders of Espiritu Santo's Million Dollar Point, and the traditional villages of Pentecost Island where visitors can witness land diving ceremonies. Vanuatu offers a range of outdoor activities, from snorkeling and diving to hiking through lush rainforests and relaxing on pristine beaches.`,
  },
  {
    name: "Venezuela",
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/1280px-Flag_of_Venezuela.svg.png`,
    Category: "Caracas",
    popu: `Over 28.5 million`,
    info: `Venezuela is a country located on the northern coast of South America known for its diverse landscapes, including the Andes Mountains, the Amazon rainforest, and the Caribbean coastline. Attractions include Angel Falls, the world's tallest waterfall, the historic cities of Caracas and Mérida, and the stunning beaches of Isla Margarita. Despite its natural beauty, Venezuela has faced political and economic challenges in recent years, impacting tourism infrastructure and safety concerns.`,
  },
  {
    name: "Vietnam",
    img: `https://flagsworld.org/img/cflags/vietnam-flag.png`,
    Category: "Hanoi",
    popu: `Over 98 million`,
    info: `Vietnam: Offering a rich tapestry of history, culture, and natural beauty, Vietnam beckons visitors with its ancient temples, lush landscapes, and vibrant cities like Hanoi and Ho Chi Minh City.`,
  },
  {
    name: "Yemen",
    img: `https://cdn.britannica.com/85/5785-004-B65441FA/Flag-Yemen.jpg`,
    Category: "Sana'a",
    popu: `Over 30.8 million`,
    info: `Yemen is a country located on the southern tip of the Arabian Peninsula known for its ancient history, rich cultural heritage, and stunning landscapes. Attractions include the historic city of Sana'a with its distinctive architecture, the ancient ruins of Shibam, and the unique Socotra Island, known for its endemic flora and fauna. Yemen's cultural heritage includes traditional handicrafts, cuisine, and music, although ongoing conflicts have impacted tourism in recent years, affecting accessibility and safety.`,
  },
  {
    name: "Zambia",
    img: `https://cdn.britannica.com/31/4231-004-F1DBFAE7/Flag-Zambia.jpg`,
    Category: "Lusaka",
    popu: `Over 18.9 million`,
    info: `Zambia is a landlocked country in Southern Africa known for its diverse wildlife, stunning natural scenery, and the majestic Victoria Falls, one of the largest waterfalls in the world. Attractions include South Luangwa National Park, home to a variety of wildlife including elephants, lions, and leopards, and the Lower Zambezi National Park, offering opportunities for safari adventures and river cruises. Zambia also boasts rich cultural heritage, with traditional ceremonies, arts, and crafts showcasing the country's vibrant cultures and traditions.`,
  },
  {
    name: "Zimbabwe",
    img: `https://cdn.britannica.com/33/4233-004-30998E1D/Flag-Zimbabwe.jpg`,
    Category: "Harare",
    popu: `Over 14.9 million`,
    info: `Zimbabwe: Known for its majestic Victoria Falls, wildlife reserves, and Great Zimbabwe ruins, Zimbabwe offers travelers opportunities for safari adventures, adrenaline activities, and exploring ancient civilizations.`,
  },
];

data.forEach((country) => {
  country.name1 = `<div class="text-center"><img class="mx-auto" style="border: 1.5px solid white; transition: 1.3s ease-in;" src="${country.img}" width="40%" alt=""></div><h1 class="text-center" style="color: blue; margin-bottom: 30px;">${country.name}</h1>`;
  country.Category = `<div class="d-flex mb-2"><div><span class="fs-4 mt-5">Capital:</span><br><span class="fs-3 fw-bold text-primary">${country.Category}</span></div><div class="ms-auto"><span class="fs-4 mt-5 text-end">Population :</span><br><span class="fs-3 fw-bold text-primary"> ${country.popu}</span></div></div>`;
  country.infom = `<div class="fw-bold text-center">${country.info}</div>`;
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


      resultItem.addEventListener("click", () => {
        let count = document.getElementById("count");
        // alert(item.Category);
        count.style.display = "block";
        carouselExampleSlidesOnly.style.display = "none"
        countryCategory.innerHTML = item.Category;
        resultItems.innerHTML = item.name1;
        countryInfo.innerHTML = item.infom;

        countryCard.innerHTML = "";

        countryCard.appendChild(resultItems);
        countryCard.appendChild(countryCategory);
        countryCard.appendChild(countryInfo);
      });
      
      cancel.addEventListener("click", () => {
        count.style.display = "none";
        carouselExampleSlidesOnly.style.display = "block"
      })
      resultItem.style.cursor = "pointer"; 
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

const myCarouselElement = document.querySelector('#myCarousel')
const carouselId = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})