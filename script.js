class Country {
    constructor(countryName, population, economicalBudget) {
        this.name = countryName,
            this.pop = population,
            this.ecoBgt = economicalBudget
    }
}

let nigeria = new Country('NIGERIA', 'Over 200 Million', '427 Billion Dollars')
console.log(nigeria);

// All Countries Listed
const data = [
    { name: 'Afghanistan', category: 'Category A' },
    { name: 'Albania', category: 'Category B' },
    { name: 'Algeria', category: 'Category A' },
    { name: 'Andorra', category: 'Category A' },
    { name: 'Angola', category: 'Category A' },
    { name: 'Antigua and Barbuda', category: 'Category A' },
    { name: 'Argentina', category: 'Category A' },
    { name: 'Armenia', category: 'Category A' },
    { name: 'Australia', category: 'Category A' },
    { name: 'Austria', category: 'Category A' },
    { name: 'Azerbaijan', category: 'Category A' },
    { name: 'Bahamas', category: 'Category A' },
    { name: 'Bahrain', category: 'Category A' },
    { name: 'Bangladesh', category: 'Category A' },
    { name: 'Barbados', category: 'Category A' },
    { name: 'Belarus', category: 'Category A' },
    { name: 'Belgium', category: 'Category A' },
    { name: 'Belize', category: 'Category A' },
    { name: 'Benin', category: 'Category A' },
    { name: 'Bhutan', category: 'Category A' },
    { name: 'Bolivia', category: 'Category A' },
    { name: 'Bosnia and Herzegovina', category: 'Category A' },
    { name: 'Botswana', category: 'Category A' },
    { name: 'Brazil', category: 'Category A' },
    { name: 'Brunei', category: 'Category A' },
    { name: 'Bulgaria', category: 'Category A' },
    { name: 'Burkina Faso', category: 'Category A' },
    { name: 'Burundi', category: 'Category A' },
    { name: 'Cabo Verde', category: 'Category A' },
    { name: 'Cambodia', category: 'Category A' },
    { name: 'Cameroon', category: 'Category A' },
    { name: 'Canada', category: 'Category A' },
    { name: 'Central African Republic', category: 'Category A' },
    { name: 'Chad', category: 'Category A' },
    { name: 'Chile', category: 'Category A' },
    { name: 'China', category: 'Category A' },
    { name: 'Colombia', category: 'Category A' },
    { name: 'Comoros', category: 'Category A' },
    { name: 'Congo (Congo-Brazzaville)', category: 'Category A' },
    { name: 'Costa Rica', category: 'Category A' },
    { name: 'Cote dIvoire', category: 'Category A' },
    { name: 'Croatia', category: 'Category A' },
    { name: 'Cuba', category: 'Category A' },
    { name: 'Cyprus', category: 'Category A' },
    { name: 'Czechia (Czech Republic)', category: 'Category A' },
    { name: 'Democratic Republic of the Congo', category: 'Category A' },
    { name: 'Denmark', category: 'Category A' },
    { name: 'Djibouti', category: 'Category A' },
    { name: 'Dominica', category: 'Category A' },
    { name: 'Dominican Republic', category: 'Category A' },
    { name: 'Ecuador', category: 'Category A' },
    { name: 'Egypt', category: 'Category A' },
    { name: 'El Salvador', category: 'Category A' },
    { name: 'Equatorial Guinea', category: 'Category A' },
    { name: 'Eritrea', category: 'Category A' },
    { name: 'Estonia', category: 'Category A' },
    { name: 'Eswatini (fmr. "Swaziland")', category: 'Category A' },
    { name: 'Ethiopia', category: 'Category A' },
    { name: 'Fiji', category: 'Category A' },
    { name: 'Finland', category: 'Category A' },
    { name: 'France', category: 'Category A' },
    { name: 'Gabon', category: 'Category A' },
    { name: 'Gambia', category: 'Category A' },
    { name: 'Georgia', category: 'Category A' },
    { name: 'Germany', category: 'Category A' },
    { name: 'Ghana', category: 'Category A' },
    { name: 'Greece', category: 'Category A' },
    { name: 'Grenada', category: 'Category A' },
    { name: 'Guatemala', category: 'Category A' },
    { name: 'Guinea', category: 'Category A' },
    { name: 'Guinea-Bissau', category: 'Category A' },
    { name: 'Guyana', category: 'Category A' },
    { name: 'Haiti', category: 'Category A' },
    { name: 'Holy See', category: 'Category A' },
    { name: 'Honduras', category: 'Category A' },
    { name: 'Hungary', category: 'Category A' },
    { name: 'Iceland', category: 'Category A' },
    { name: 'India', category: 'Category A' },
    { name: 'Indonesia', category: 'Category A' },
    { name: 'Iran', category: 'Category A' },
    { name: 'Iraq', category: 'Category A' },
    { name: 'Ireland', category: 'Category A' },
    { name: 'Israel', category: 'Category A' },
    { name: 'Italy', category: 'Category A' },
    { name: 'Jamaica', category: 'Category A' },
    { name: 'Japan', category: 'Category A' },
    { name: 'Jordan', category: 'Category A' },
    { name: 'Kazakhstan', category: 'Category A' },
    { name: 'Kenya', category: 'Category A' },
    { name: 'Kiribati', category: 'Category A' },
    { name: 'Kuwait', category: 'Category A' },
    { name: 'Kyrgyzstan', category: 'Category A' },
    { name: 'Laos', category: 'Category A' },
    { name: 'Latvia', category: 'Category A' },
    { name: 'Lebanon', category: 'Category A' },
    { name: 'Lesotho', category: 'Category A' },
    { name: 'Liberia', category: 'Category A' },
    { name: 'Libya', category: 'Category A' },
    { name: 'Liechtenstein', category: 'Category A' },
    { name: 'Lithuania', category: 'Category A' },
    { name: 'Luxembourg', category: 'Category A' },
    { name: 'Madagascar', category: 'Category A' },
    { name: 'Malawi', category: 'Category A' },
    { name: 'Malaysia', category: 'Category A' },
    { name: 'Maldives', category: 'Category A' },
    { name: 'Mali', category: 'Category A' },
    { name: 'Malta', category: 'Category A' },
    { name: 'Marshall Islands', category: 'Category A' },
    { name: 'Mauritania', category: 'Category A' },
    { name: 'Mauritius', category: 'Category A' },
    { name: 'Mexico', category: 'Category A' },
    { name: 'Micronesia', category: 'Category A' },
    { name: 'Moldova', category: 'Category A' },
    { name: 'Monaco', category: 'Category A' },
    { name: 'Mongolia', category: 'Category A' },
    { name: 'Montenegro', category: 'Category A' },
    { name: 'Morocco', category: 'Category A' },
    { name: 'Mozambique', category: 'Category A' },
    { name: 'Myanmar (formerly Burma)', category: 'Category A' },
    { name: 'Namibia', category: 'Category A' },
    { name: 'Nauru', category: 'Category A' },
    { name: 'Nepal', category: 'Category A' },
    { name: 'Netherlands', category: 'Category A' },
    { name: 'New Zealand', category: 'Category A' },
    { name: 'Nicaragua', category: 'Category A' },
    { name: 'Niger', category: 'Category A' },
    { name: 'Nigeria', category: 'Category A' },
    { name: 'North Korea', category: 'Category A' },
    { name: 'North Macedonia', category: 'Category A' },
    { name: 'Norway', category: 'Category A' },
    { name: 'Oman', category: 'Category A' },
    { name: 'Pakistan', category: 'Category A' },
    { name: 'Palau', category: 'Category A' },
    { name: 'Palestine State', category: 'Category A' },
    { name: 'Panama', category: 'Category A' },
    { name: 'Papua New Guinea', category: 'Category A' },
    { name: 'Paraguay', category: 'Category A' },
    { name: 'Peru', category: 'Category A' },
    { name: 'Philippines', category: 'Category A' },
    { name: 'Poland', category: 'Category A' },
    { name: 'Portugal', category: 'Category A' },
    { name: 'Qatar', category: 'Category A' },
    { name: 'Romania', category: 'Category A' },
    { name: 'Russia', category: 'Category A' },
    { name: 'Rwanda', category: 'Category A' },
    { name: 'Saint Kitts and Nevis', category: 'Category A' },
    { name: 'Saint Lucia', category: 'Category A' },
    { name: 'Saint Vincent and the Grenadines', category: 'Category A' },
    { name: 'Samoa', category: 'Category A' },
    { name: 'San Marino', category: 'Category A' },
    { name: 'Sao Tome and Principe', category: 'Category A' },
    { name: 'Saudi Arabia', category: 'Category A' },
    { name: 'Senegal', category: 'Category A' },
    { name: 'Serbia', category: 'Category A' },
    { name: 'Seychelles', category: 'Category A' },
    { name: 'Sierra Leone', category: 'Category A' },
    { name: 'Singapore', category: 'Category A' },
    { name: 'Slovakia', category: 'Category A' },
    { name: 'Slovenia', category: 'Category A' },
    { name: 'Solomon Islands', category: 'Category A' },
    { name: 'Somalia', category: 'Category A' },
    { name: 'South Africa', category: 'Category A' },
    { name: 'South Korea', category: 'Category A' },
    { name: 'South Sudan', category: 'Category A' },
    { name: 'Spain', category: 'Category A' },
    { name: 'Sri Lanka', category: 'Category A' },
    { name: 'Sudan', category: 'Category A' },
    { name: 'Suriname', category: 'Category A' },
    { name: 'Sweden', category: 'Category A' },
    { name: 'Switzerland', category: 'Category A' },
    { name: 'Syria', category: 'Category A' },
    { name: 'Tajikistan', category: 'Category A' },
    { name: 'Tanzania', category: 'Category A' },
    { name: 'Thailand', category: 'Category A' },
    { name: 'Timor-Leste', category: 'Category A' },
    { name: 'Togo', category: 'Category A' },
    { name: 'Tonga', category: 'Category A' },
    { name: 'Trinidad and Tobago', category: 'Category A' },
    { name: 'Tunisia', category: 'Category A' },
    { name: 'Turkey', category: 'Category A' },
    { name: 'Turkmenistan', category: 'Category A' },
    { name: 'Tuvalu', category: 'Category A' },
    { name: 'Uganda', category: 'Category A' },
    { name: 'Ukraine', category: 'Category A' },
    { name: 'United Arab Emirates', category: 'Category A' },
    { name: 'United Kingdom', category: 'Category A' },
    { name: 'United States of America', category: 'Category A' },
    { name: 'Uruguay', category: 'Category A' },
    { name: 'Uzbekistan', category: 'Category A' },
    { name: 'Vanuatu', category: 'Category A' },
    { name: 'Venezuela', category: 'Category A' },
    { name: 'Vietnam', category: 'Category A' },
    { name: 'Yemen', category: 'Category A' },
    { name: 'Zambia', category: 'Category A' },
    { name: 'Zimbabwe', category: 'Category A' }
];

// Function to render filtered results
function renderResults(results) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        document.getElementById('noResultsMessage').style.display = 'block';
    } else {
        document.getElementById('noResultsMessage').style.display = 'none';
        results.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.textContent = item.name;
            resultsContainer.appendChild(resultItem);
        });
    }
}

// Function to perform filtering
function filterResults(query) {
    const filteredResults = data.filter(item => {
        // Perform case-insensitive search
        return item.name.toLowerCase().includes(query.toLowerCase());
    });
    renderResults(filteredResults);
}

// Event listener for search input
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function () {
    filterResults(this.value);
});

// Event listener for search button
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', function () {
    filterResults(searchInput.value);
});

// Initial rendering
filterResults('');

function createResultsContainer(data) {
    const resultsContainer = document.getElementById('resultsContainer');
    data.forEach(country => {
        const divItem = document.createElement('div'); 
        divItem.textContent = country.name;
        resultsContainer.appendChild(divItem);
    });
}


createResultsContainer(data);
