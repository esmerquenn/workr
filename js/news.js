document.addEventListener('DOMContentLoaded', function() {
    const cardsData = [
        {
            id: 1,
            image: './assets/img/news3.jpeg',
            title: 'Bu il əhalinin icbari tibbi sığortalanması üçün ayrılan vəsaitin bölgüsü müəyyənləşdiriləcək',
            description: 'Maliyyə Nazirliyinə qanunvericilikdə nəzərdə tutulmuş qaydada əhalinin dövlət büdcəsinin vəsaiti hesabına icbari tibbi sığortalanması və icbari tibbi sığorta tətbiq olunmayan inzibati ərazi vahidləri üzrə səhhiyə.',
            link: '#'
        },
        {
            id: 2,
            image: './assets/img/news2.jpeg',
            title: 'Azərbaycanda sığorta şirkətinin əmlakı hərracda satılıb',
            description: 'Bu gün ləğvetmə prosesində olan ASC "Standard Insurance" sığorta şirkətinin əmlaklarının satışı ilə bağlı növbəti hərrac keçirilib. Fins.az İcbari Sığorta Bürosuna istinadən xəbər verir ki, hərracda.',
            link: '#'
        },
        {
            id: 3,
            image: './assets/img/news1.jpeg',
            title: 'Dövlət Dəniz Agentliyi sığortaçı seçib',
            description: 'Nəqliyyat, Rabitə və Yüksək Texnologiyalar Nazirliyi yanında Dövlət Dəniz Agentliyi inzibati binasının və əmlakının sığortalanmasına dair elan etdiyi açıq tenderə yekun vurub. "Report" vahid dövlət satınalmaları.',
            link: '#'
        }
        // Daha fazla kart eklemek için buraya obje ekleyebilirsiniz
    ];

    const cardsContainer = document.getElementById('news-container');

    cardsData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'bg-white dark:bg-gray-800 flex flex-col justify-between items-center shadow-lg rounded-lg overflow-hidden';
        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.title}" class="w-full h-48 object-cover">
            <div class="p-6 h-full flex flex-col justify-between">
                <h2 class="text-xl font-bold mb-2">${card.title}</h2>
                <p class="text-gray-700 dark:text-gray-300 mb-4">${card.description}</p>
                <a href="${card.link}" class="text-blue-900 hover:underline">DAHA ƏTRAFLI »</a>
            </div>
        `;
        cardsContainer.appendChild(cardElement);
    });
});
