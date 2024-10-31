document.addEventListener("DOMContentLoaded", function () {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "az"; // Varsayılan dil 'az'

  const params = new URLSearchParams(window.location.search);
  const page = params.get("page");

  updateContent(page, selectedLanguage);
});

function updateContent(page, language) {
  const content = {
    melumat: {
      az: ` <div class="container md:w-[80%] mx-auto py-10 px-5 md:px-20">
        <h1 data-key="info" class="text-3xl md:text-4xl font-bold text-[#E2C445] inline-block  border-b-2 pb-2 border-[#EA1918] dark:text-gray-300 mb-8">
   Məlumat
  </h1>
        <p class="mt-5 md:text-[1.2rem] text-white">
          www.1sigorta.az saytı 19.07.2024-cü il tarixində Mircəfər Mirəli oğlu Cəfərov tərəfindən təsis edilmiş, Azərbaycan
          Respublikası Mərkəzi Bankı tərəfindən verilmiş SA – 0337 saylı lisenziya əsasında sayt üzərindən sığorta fəaliyyətinə
          başlanmışdır. Saytın təsis edilməsində məqsəd sığorta şirkətləri ilə müştərilər arasında sığorta vasitəçiliyi etməklə
          asan, operativ və peşəkar xidmət göstərməkdir. Əsas üstünlüyümüz Azərbaycanda fəaliyyət göstərən sığorta şirkətlərinin
          20-dən artıq sığorta məhsullarını müştərilərə təqdim etmək və satışını həyata keçirmək imkanını yaratmaqdır.
        </p>

        <p class="mt-3 md:text-[1.2rem] text-white">
          Saytımızın 17 ilə yaxın sığorta sahəsində peşəkar iş təcrübəsinə malik olan əməkdaşları vardır. Peşəkarlar tərəfindən
          professional şəkildə hazırlanmış saytımız sizin vaxtınıza və enerjinizə qənaət etməyinizə kömək edəcək. Hər birinizə
          sığortalı həyat arzulayırıq.
        </p>
      </div>`,
      ru: ` <div class="container md:w-[80%] mx-auto py-10 px-5 md:px-20">
        <h1 data-key="info" class="text-3xl md:text-4xl font-bold text-[#E2C445] inline-block  border-b-2 pb-2 border-[#EA1918] dark:text-gray-300 mb-8">
   Информация
  </h1>
        <p class="mt-5 md:text-[1.2rem] text-white">
          Сайт www.1sigorta.az был основан 19.07.2024 года Мирджафаром Мирели оглы Джафаровым и начал свою деятельность в области страхования на основании лицензии SA – 0337, выданной Центральным банком Азербайджанской Республики. Целью создания сайта является предоставление легкого, оперативного и профессионального обслуживания клиентов через посредничество между страховыми компаниями и клиентами. Нашим основным преимуществом является возможность предложить клиентам более 20 страховых продуктов от страховых компаний, действующих в Азербайджане, и организовать их продажу.
        </p>

        <p class="mt-3 md:text-[1.2rem] text-white">
          У нашего сайта есть сотрудники с профессиональным опытом работы в области страхования на протяжении почти 17 лет. Наш сайт, профессионально подготовленный специалистами, поможет вам сэкономить ваше время и энергию. Желаем всем застрахованной жизни.
        </p>
      </div>`,
    },
    rehberlik: {
      az: `<div class=" container md:w-[80%]  mx-auto py-10 px-5 md:px-20">
  <h1   class="text-2xl font-semibold border-b-2 pb-3 border-red-600 text-center text-white dark:text-slate-50 mb-8">
    Mircəfər Mirəli oğlu Cəfərov – <span class="text-2xl md:text-3xl text-[#EA1918]">1</span>sigorta.az saytının təsisçisi
  </h1>

  <div class="md:flex md:items-start">
    <div class="md:w-1/3 mb-6 md:mb-0">
      <img src="./../assets/img/admin.jpg" alt="Mircəfər Cəfərov" class="w-full h-auto rounded">
    </div>
    <div class="md:w-2/3 md:pl-10">
      <p class="text-lg text-slate-50 leading-8 dark:text-gray-300">
        Mircəfər Cəfərov 28.06.1987-ci ildə Quba şəhərində anadan olmuşdur. Orta təhsilini Quba Özəl Türk Liseyindən almışdır.
        2010-cu ildə Azərbaycan Dövlət İqtisad Universitetinin Beynəlxalq İqtisadi Münasibətlər fakültəsini bitirmişdir. Əmək
        fəaliyyətinə 2007-ci ildə “Damirbank” ASC-də başlamışdır. 2011-ci ildən əmək fəaliyyətini “AXA MBASK” SŞ-də davam
        etdirmişdir. 2017-ci ilin yanvar ayında “MeqaSığorta” ASC-nin Şimal bölgəsinin rəhbəri vəzifəsində çalışmışdır.
        2017-ci ilin iyun ayında “AtaSığorta” ASC-nin İçəri Şəhər filialının müdiri vəzifəsinə təyin edilmişdir.
        19.07.2024-cü il tarixindən 1sigorta.az saytını təsisçisidir.
      </p>
    </div>
  </div>
</div>`,
      ru: `<div class=" container md:w-[80%]  mx-auto py-10 px-5 md:px-20">
  <h1   class="text-2xl font-semibold border-b-2 pb-3 border-red-600 text-center text-white dark:text-slate-50 mb-8">
    Мирджафар Мирели оглы Джафаров – <span class="text-2xl md:text-3xl text-[#EA1918]">1</span>sigorta.az основатель сайта
   
  </h1>

  <div class="md:flex md:items-start">
    <div class="md:w-1/3 mb-6 md:mb-0">
      <img src="./../assets/img/admin.jpg" alt="Мирджафар Джафаров" class="w-full h-auto rounded">
    </div>
    <div class="md:w-2/3 md:pl-10">
      <p class="text-lg text-slate-50 leading-8 dark:text-gray-300">
        Мирджафар Джафаров родился 28.06.1987 года в городе Куба. Среднее образование получил в Кубинском Специальном Турецком Лицее.
        В 2010 году окончил факультет Международных Экономических Отношений Азербайджанского Государственного Экономического Университета. Трудовую
        деятельность начал в 2007 году в ОАО “Дамирбанк”. С 2011 года продолжил трудовую деятельность в ООО “AXA MBASK”.
        В январе 2017 года работал в должности руководителя Северного региона ОАО “МегаСтрахование”.
        В июне 2017 года был назначен на должность директора филиала ОАО “AtaSigorta” в Ичери Шехер. С 19.07.2024 года является основателем сайта 1sigorta.az.
      </p>
    </div>
  </div>
</div>`,
    },
    missiya: {
      az: ` <div class="container md:w-[80%] mx-auto py-10 px-5 md:px-20">
        <h1  data-key="mission" class="text-3xl md:text-4xl font-bold text-[#E2C445] inline-block  border-b-2 pb-2 border-[#EA1918] dark:text-gray-300 mb-8">
    Missiya
  </h1>
        <p class="mt-5 md:text-[1.2rem] text-white">
          www.1sigorta.az saytı müasir texnologiyalara əsaslanmaqla keyfiyyətli və etibarlı universal sığorta xidmətləri göstərən
          güvənli və ictimai əhəmiyyətli vasitəçi sayt olmağı özünün strateji baxışı hesab edir.
        </p>

        <p class="mt-3 md:text-[1.2rem] text-white">
          Keyfiyyət siyasəti olaraq müştərilərin sığorta məhsulu seçimində mümkün qədər bir neçə sığorta şirkətinin arasında az
          itki olmağı düzgün seçim etməsində vasitəçi olur.
        </p>

        <p class="mt-3 md:text-[1.2rem] text-white">
          Müştərilərin ehtiyaclarını qarşılamaq, onlara mükəmməl xidmət göstərmək və onların sığorta tələblərinə cavab vermək.
        </p>

        <p class="mt-3 md:text-[1.2rem] text-white">
          Müştərilərin maliyyə risklərini minimuma endirmək və onlara müxtəlif növ sığorta məhsulları ilə təhlükəsizlik təmin
          etmək.
        </p>

        <p class="mt-3 md:text-[1.2rem] text-white">
          Yenilikçi sığorta məhsulları və xidmətləri təqdim edərək bazar tələblərinə uyğunlaşmaq.
        </p>
      </div>`,
      ru: ` <div class="container md:w-[80%] mx-auto py-10 px-5 md:px-20">
        <h1  data-key="mission" class="text-3xl md:text-4xl font-bold text-[#E2C445] inline-block  border-b-2 pb-2 border-[#EA1918] dark:text-gray-300 mb-8">
    Миссия
  </h1>
        <p class="mt-5 md:text-[1.2rem] text-white">
          Сайт www.1sigorta.az рассматривает свою стратегическую цель как надежный и общественно значимый посреднический сайт, предоставляющий качественные и надежные универсальные страховые услуги на основе современных технологий.
        </p>

        <p class="mt-3 md:text-[1.2rem] text-white">
          В соответствии с политикой качества, сайт выступает посредником в выборе страхового продукта, минимизируя возможные потери и обеспечивая правильный выбор среди нескольких страховых компаний.
        </p>

        <p class="mt-3 md:text-[1.2rem] text-white">
          Удовлетворение потребностей клиентов, предоставление им отличного обслуживания и удовлетворение их страховых требований.
        </p>

        <p class="mt-3 md:text-[1.2rem] text-white">
          Минимизация финансовых рисков клиентов и обеспечение их безопасности с помощью различных страховых продуктов.
        </p>

        <p class="mt-3 md:text-[1.2rem] text-white">
          Приспособление к требованиям рынка путем предоставления инновационных страховых продуктов и услуг.
        </p>
      </div>`,
    },
    biznes: {
      az: ` <div class="container md:w-[80%] mx-auto py-10 px-5 md:px-20">
            <h1  data-key="biznes" class="text-3xl md:text-4xl font-bold text-[#E2C445] inline-block  border-b-2 pb-2 border-[#EA1918] dark:text-gray-300 mb-8">
    Biznesə yanaşma
  </h1>
            <p class="mt-5 md:text-[1.2rem] text-white">
              www.1sigorta.az saytının biznesə yanaşması, bazarda uğur qazanmaq, müştəri bazasını genişləndirmək və effektiv fəaliyyət göstərmək üçün tətbiq etdiyi strategiyaları əhatə edir. 1sigorta.az saytı üçün biznes yanaşması aşağıdakı əsas aspektləri əhatə edir:
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Müştərilərin fərdi ehtiyaclarını müəyyən etmək və uyğun sığorta məhsulları təqdim etmək.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Yüksək keyfiyyətli müştəri xidmətləri ilə müştəri məmnuniyyətini artırmaq.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Riskləri dəqiq qiymətləndirmək və uyğun sığorta həlləri təklif etmək.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Riskləri idarə etmək üçün dəqiq prosedur və alqoritmlər hazırlamaq.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Müasir texnologiyalardan istifadə edərək əməliyyatları optimallaşdırmaq və müştəri təcrübəsini yaxşılaşdırmaq.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Sığorta məhsullarını online platformalar vasitəsilə təqdim etmək və müştəri interfeyslərini inkişaf etdirmək.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Saytın maliyyə resurslarını səmərəli idarə etmək və maliyyə risklərini minimuma endirmək.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Adeqvat sığorta təminatları ilə müştərilərə xidmət etmək.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Sığorta bazarını və müştəri tələblərini tədqiq etmək.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Rəqiblərin fəaliyyətini analiz edərək müştəri cəlb etmək üçün fərqlənən strategiyalar tətbiq etmək.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Sayt əməkdaşlarının peşəkar bacarıqlarını artırmaq üçün təlimlər keçirmək.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Sığorta sahəsindəki yenilikləri və trendleri əməkdaşlara çatdırmaq.
            </p>
          </div>`,
      ru: ` <div class="container md:w-[80%] mx-auto py-10 px-5 md:px-20">
            <h1  data-key="biznes" class="text-3xl md:text-4xl font-bold text-[#E2C445] inline-block  border-b-2 pb-2 border-[#EA1918] dark:text-gray-300 mb-8">
    Подход к бизнесу
  </h1>
            <p class="mt-5 md:text-[1.2rem] text-white">
              Подход сайта www.1sigorta.az к бизнесу охватывает стратегии, применяемые для достижения успеха на рынке, расширения клиентской базы и эффективного ведения деятельности. Для сайта 1sigorta.az бизнес-подход включает следующие основные аспекты:
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Определение индивидуальных потребностей клиентов и предложение соответствующих страховых продуктов.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Повышение удовлетворенности клиентов за счет качественного обслуживания.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Точная оценка рисков и предложение соответствующих страховых решений.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Разработка четких процедур и алгоритмов для управления рисками.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Оптимизация операций и улучшение клиентского опыта с использованием современных технологий.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Предоставление страховых продуктов через онлайн-платформы и развитие клиентских интерфейсов.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Эффективное управление финансовыми ресурсами сайта и минимизация финансовых рисков.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Обслуживание клиентов с адекватным страховым покрытием.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Исследование страхового рынка и требований клиентов.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Применение отличающихся стратегий для привлечения клиентов путем анализа деятельности конкурентов.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Проведение обучения для повышения профессиональных навыков сотрудников сайта.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Информирование сотрудников о новинках и тенденциях в страховой отрасли.
            </p>
          </div>`,
    },
    qanunvericilik: {
      az: `<div class="container mx-auto py-10 px-5 md:px-20">
           <h1  data-key="legislation" class="text-3xl md:text-4xl font-bold text-[#E2C445] inline-block  border-b-2 pb-2 border-[#EA1918] dark:text-gray-300 mb-8">
    Qanunvericilik
  </h1>
            <p class="mt-5 md:text-[1.2rem] text-white">
              Qanunvericilik
            </p>
            
            <ul class="mt-2 md:text-[1.2rem] text-white list-disc pl-5">
              <li class="mb-2"><a class=" pb-1 border-b-2 border-transparent hover:border-white transition duration-300" href="https://e-qanun.az/framework/46944" target="_blank">Azərbaycan Respublikasının Mülki Məcəlləsi </a></li>
              <li class="mb-2"><a class=" pb-1 border-b-2 border-transparent hover:border-white transition duration-300" href="https://e-qanun.az/framework/13983" target="_blank">“Sığorta fəaliyyəti haqqında” Azərbaycan Respublikasının Qanunu </a></li>
              <li class="mb-2"><a class=" pb-1 border-b-2 border-transparent hover:border-white transition duration-300" href="https://e-qanun.az/framework/22228" target="_blank">İcbari Sığortalar haqqında Azərbaycan Respublikasının Qanunu</a></li>
              <li class="mb-2"><a class=" pb-1 border-b-2 border-transparent hover:border-white transition duration-300" href="https://e-qanun.az/framework/80" target="_blank">Tibbi Sığorta haqqında Azərbaycan Respublikasının Qanunu</a></li>
              <li class="mb-2"><a class=" pb-1 border-b-2 border-transparent hover:border-white transition duration-300" href="https://e-qanun.az/framework/19789" target="_blank">İstehsalatda bədbəxt hadisələr və peşə xəstəlikləri nəticəsində peşə əmək qabiliyyətinin itirilməsi hallarından icbari sığorta haqqında Azərbaycan Respublikasının Qanunu</a></li>
              <li class="mb-2"><a class=" pb-1 border-b-2 border-transparent hover:border-white transition duration-300" href="https://e-qanun.az/framework/13678" target="_blank">Auditorun peşə məsuliyyətinin icbari sığortası haqqında Azərbaycan Respublikasının Qanunu</a></li>
              <li class="mb-2"><a class=" pb-1 border-b-2 border-transparent hover:border-white transition duration-300" href="https://e-qanun.az/framework/28422" target="_blank">Fiziki şəxslərə təqdim edilən avtomobil nəqliyyatı vasitələrinin tam sığortası üzrə sığorta qaydaları</a></li>
              
            </ul>
          </div>`,
      ru: `<div class="container mx-auto py-10 px-5 md:px-20">
           <h1  data-key="legislation" class="text-3xl md:text-4xl font-bold text-[#E2C445] inline-block  border-b-2 pb-2 border-[#EA1918] dark:text-gray-300 mb-8">
    Законодательство
  </h1>
            <p class="mt-5 md:text-[1.2rem] text-white">
              Законодательство
            </p>
            
            <ul class="mt-2 md:text-[1.2rem] text-white list-disc pl-5">
              <li>Гражданский Кодекс Азербайджанской Республики</li>
              <li>Закон Азербайджанской Республики «О страховой деятельности»</li>
              <li>Закон Азербайджанской Республики «Об обязательных страхованиях»</li>
              <li>Закон Азербайджанской Республики «О медицинском страховании»</li>
              <li>Закон Азербайджанской Республики «Об обязательном страховании от несчастных случаев на производстве и профессиональных заболеваний»</li>
              <li>Закон Азербайджанской Республики «Об обязательном страховании профессиональной ответственности аудитора»</li>
              <li>Правила страхования по полной страховке транспортных средств, предоставленных физическим лицам</li>
            </ul>
          </div>`,
    },
    sual: {
      az: `<div class="container md:w-[80%] mx-auto py-10 px-5 md:px-20">
  <h1  data-key="questions" class="text-3xl md:text-4xl font-bold text-[#f0f0f0] dark:text-gray-300 mb-8">
    Ən Çox Verilən Suallar
  </h1>

  <div class="mt-5 md:text-[1.2rem] text-[#f0f0f0] dark:text-gray-400">
    <article class="mb-6">
      <h3 class="text-2xl font-semibold text-[#E2C445] inline-block mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Sığorta Nədir?</h3>
      <p>
        Sığorta, risklərin başqasına ötürüldüyü və ya başqası ilə bölüşdürüldüyü bir mexanizmdir. Sığorta, hər hansı bir itkiyə məruz qalmış şəxsi, itkiyə səbəb olmuş hadisədən əvvəlki maliyyə vəziyyətinə qaytarmaq üçün təzminatla təmin edir.
      </p>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold text-[#E2C445] inline-block mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Sığorta Müqaviləsi Nədir?</h3>
      <p>
        Sığorta müqaviləsi, sığortalı ilə sığortaçı arasında əldə edilən bir razılaşmadır. Bu razılaşmaya görə, sığortalı sığorta haqqını ödəməyi, sığortaçı isə göstərilən itkilər baş verdikdə zərəri — sığorta ödənişini ödəməyi öz üzərinə götürür.
      </p>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold text-[#E2C445] inline-block mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Sığorta Haqqı Nədir?</h3>
      <p>
        Sığorta haqqı, sığorta müqaviləsində nəzərdə tutulmuş vaxtda və qaydada sığorta şirkətinə ödədiyiniz pul məbləğidir.
      </p>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold text-[#E2C445] inline-block mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Sığortaçı Kimdir?</h3>
      <p>
        Sığortaçı, sığorta fəaliyyətini həyata keçirən sığorta şirkətidir.
      </p>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold text-[#E2C445] inline-block mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Sığortalı Kimdir?</h3>
      <p>
        Sığortalı, sığorta müqaviləsi əsasında öz həyatını, sağlamlığını, əmlakını, məsuliyyətini sığorta etdirən və bunun qarşılığında sığortaçıya müəyyən məbləğ (sığorta haqqı) ödəyən şəxsdir.
      </p>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold text-[#E2C445] inline-block mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Franşiza Nədir və O, Sığorta Haqqına Necə Təsir Edir?</h3>
      <p>
        Franşiza, sığorta hadisəsi baş verdiyi zaman dəymiş zərərin sığorta ilə təmin olunmayan və sizin tərəfinizdən ödənilməli olan hissəsidir. Tez-tez sığortaçıya müraciət etmədən də özünüzün ödəyə biləcəyiniz xırda zərərlərlə qarşılaşa bilərsiniz. Belə hallar üçün sığorta müqaviləsində azadolma məbləği nəzərdə tutulur. Sığorta hadisəsi nəticəsində dəymiş zərərin azadolma məbləğindən artıq hissəsi sığortaçı tərəfdən ödənilir.
      </p>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold text-[#E2C445] inline-block mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Avtomobil Sığortası Hansı Riskləri Əhatə Edir?</h3>
      <p>
        Avtomobilinizi sığortalayarkən, siz təklif olunan üç təminat növündən hər hansı birini və ya hər üçünü seçə bilərsiniz:
      </p>
      <ul class="list-disc list-inside pl-4">
        <li>Avtomobilin sığortası - Avtomobilinizə dəyən zərərin ödənilməsi (yol-nəqliyyatı hadisəsi, yanğın, partlayış, üçüncü şəxslərin qərəzli hərəkətləri, oğurluq və s.).</li>
        <li>Sizin və sərnişinlərin sağlamlığına dəyən zərərin ödənilməsi - Avtomobildə olan sərnişinlərin sağlamlığına dəyən zərərin ödənilməsi.</li>
        <li>Mülki məsuliyyətin sığortası - Sizin səhviniz nəticəsində ətrafdakılara dəyən zərərin sığortaçı tərəfindən ödənilməsi.</li>
      </ul>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold text-[#E2C445] inline-block mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Avtomobilimi Sığorta Edərkən Avtomobilin Qiyməti Necə Müəyyən Olunur?</h3>
      <p>
        Avtomobilinizin sığortalanması zamanı onun bazar qiyməti əsas götürülür.
      </p>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold text-[#E2C445] inline-block mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Avtomobil Sığortası Zamanı Müqavilə Hansı Müddətə Bağlanılır?</h3>
      <p>
        Adətən sığorta müqaviləsi 1 il müddətinə bağlanılır.
      </p>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold text-[#E2C445] inline-block mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Etibarnamə Əsasında İdarə Etdiyim Avtomobili Sığorta Edə Bilərəmmi?</h3>
      <p>
        Bəli, siz etibarnamə əsasında idarə etdiyiniz avtomobili sığorta etdirə bilərsiniz.
      </p>
    </article>
  </div>
</div>
`,
      ru: `<div class="container md:w-[80%] mx-auto py-10 px-5 md:px-20">
<h1  data-key="questions" class="text-3xl md:text-4xl font-bold text-[#f0f0f0] dark:text-gray-300 mb-8">
  Часто задаваемые вопросы
</h1>

<div class="mt-5 md:text-[1.2rem] text-[#f0f0f0] dark:text-gray-400">
  <article class="mb-6">
    <h3 class="text-2xl font-semibold text-[#E2C445] inline-block mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Что такое страхование?</h3>
    <p>
      Страхование — это механизм передачи рисков другому лицу или их разделения с другим лицом. Страхование предоставляет компенсацию пострадавшему лицу, чтобы вернуть его в финансовое состояние до потери, вызванной событием.
    </p>
  </article>

  <article class="mb-6">
    <h3 class="text-2xl font-semibold text-[#E2C445] inline-block mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Что такое страховой договор?</h3>
    <p>
      Страховой договор — это соглашение, достигнутое между страхователем и страховщиком. В соответствии с этим соглашением, страхователь обязуется платить страховую премию, а страховщик — выплатить страховое возмещение в случае наступления страхового случая, указанного в договоре.
    </p>
  </article>

  <article class="mb-6">
    <h3 class="text-2xl font-semibold text-[#E2C445] inline-block mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Что такое страховая премия?</h3>
    <p>
      Страховая премия — это сумма денег, которую вы платите страховой компании в установленные сроки и в установленном порядке в соответствии со страховым договором.
    </p>
  </article>

  <article class="mb-6">
    <h3 class="text-2xl font-semibold text-[#E2C445] inline-block mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Кто такой страховщик?</h3>
    <p>
      Страховщик — это страховая компания, осуществляющая страховую деятельность.
    </p>
  </article>

  <article class="mb-6">
    <h3 class="text-2xl font-semibold text-[#E2C445] inline-block mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Кто такой страхователь?</h3>
    <p>
      Страхователь — это лицо, которое страхует свою жизнь, здоровье, имущество или ответственность на основании страхового договора и платит страховщику определенную сумму (страховую премию).
    </p>
  </article>

  <article class="mb-6">
    <h3 class="text-2xl font-semibold text-[#E2C445] inline-block mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Что такое франшиза и как она влияет на страховую премию?</h3>
    <p>
      Франшиза — это часть ущерба, не покрываемая страховкой и подлежащая оплате вами при наступлении страхового случая. Вы можете часто сталкиваться с небольшими убытками, которые вы можете оплатить самостоятельно, не обращаясь к страховщику. В таких случаях в страховом договоре предусматривается сумма франшизы. Страховщик покрывает убыток, превышающий сумму франшизы.
    </p>
  </article>

  <article class="mb-6">
    <h3 class="text-2xl font-semibold text-[#E2C445] inline-block mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Какие риски покрывает автомобильное страхование?</h3>
    <p>
      При страховании вашего автомобиля вы можете выбрать один из трех предлагаемых типов покрытия или все три:
    </p>
    <ul class="list-disc list-inside pl-4">
      <li>Страхование автомобиля — покрытие ущерба вашему автомобилю (дорожно-транспортное происшествие, пожар, взрыв, умышленные действия третьих лиц, кража и т. д.).</li>
      <li>Покрытие ущерба здоровью вас и пассажиров — покрытие ущерба здоровью пассажиров в автомобиле.</li>
      <li>Страхование гражданской ответственности — покрытие ущерба, причиненного другим лицам по вашей вине.</li>
    </ul>
  </article>

  <article class="mb-6">
    <h3 class="text-2xl font-semibold text-[#E2C445] inline-block mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Как определяется стоимость автомобиля при его страховании?</h3>
    <p>
      При страховании вашего автомобиля учитывается его рыночная стоимость.
    </p>
  </article>

  <article class="mb-6">
    <h3 class="text-2xl font-semibold text-[#E2C445] inline-block mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">На какой срок заключается договор автомобильного страхования?</h3>
    <p>
      Обычно страховой договор заключается на срок 1 год.
    </p>
  </article>

  <article class="mb-6">
    <h3 class="text-2xl font-semibold text-[#E2C445] inline-block mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Могу ли я застраховать автомобиль, который управляю по доверенности?</h3>
    <p>
      Да, вы можете застраховать автомобиль, который управляете по доверенности.
    </p>
  </article>
</div>
</div>
`,
    },

    vakansiya: {
      az: `<div class="container md:w-[80%] mx-auto py-10 px-5 md:px-20 dark:text-gray-300">
   <h1 data-key="vacancy" class="text-3xl md:text-4xl font-bold text-[#f0f0f0] dark:text-gray-300 mb-8">
    Vakansiyalar
  </h1>

  <div class="mb-10">
    <h2 class="text-2xl md:text-[1.5rem] inline-block font-semibold text-[#E2C445] mb-2 border-b-2 pb-2 border-[#EA1918]  dark:text-gray-300">Sığorta Satış və Müştəri Xidmətləri : </h2>
    <ul class="mt-4 md:text-[1.2rem] text-white dark:text-gray-300 list-disc pl-5">
      <li>Sığorta Agentləri: Müştərilərlə əlaqə qurur və sığorta məhsullarını təqdim edir.</li>
      <li>Müştəri Xidmətləri Meneceri: Müştəri şikayətlərini idarə edir, müştəri məmnuniyyətini artırır və müştəri sorğularını cavablandırır.</li>
    </ul>
  </div>

  <div class="mb-10">
    <h2 class="text-2xl md:text-[1.5rem] inline-block font-semibold text-[#E2C445] mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Maliyyə və İqtisadiyyat : </h2>
    <ul class="mt-4 md:text-[1.2rem] text-white dark:text-gray-300 list-disc pl-5">
      <li>Maliyyə Analitiki: Saytın maliyyə vəziyyətini təhlil edir, büdcə hazırlayır və maliyyə hesabatları təqdim edir.</li>
      <li>Maliyyə Meneceri: Saytın maliyyə strategiyalarını planlaşdırır və icra edir.</li>
    </ul>
  </div>

  <div class="mb-10">
    <h2 class="text-2xl md:text-[1.5rem] inline-block font-semibold text-[#E2C445] mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">İnformasiya Texnologiyaları (İT) : </h2>
    <ul class="mt-4 md:text-[1.2rem] text-white dark:text-gray-300 list-disc pl-5">
      <li>İT Dəstək Mütəxəssisi: Saytın İT sistemlərini dəstəkləyir və texniki problemləri həll edir.</li>
      <li>Sistem İnkişafçısı: Saytın proqram təminatını inkişaf etdirir və mövcud sistemləri təkmilləşdirir.</li>
    </ul>
  </div>

  <div class="mb-10">
    <h2 class="text-2xl md:text-[1.5rem] inline-block font-semibold text-[#E2C445] mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Marketinq və Kommunikasiya : </h2>
    <ul class="mt-4 md:text-[1.2rem] text-white dark:text-gray-300 list-disc pl-5">
      <li>Marketinq Meneceri: Saytın marketinq strategiyalarını hazırlayır və icra edir, reklam və tanıtım fəaliyyətlərini həyata keçirir.</li>
      <li>Kommunikasiya Mütəxəssisi: Sayt ilə müştərilər və ictimaiyyət arasında effektiv kommunikasiya qurur.</li>
    </ul>
  </div>
</div>`,
      ru: `<div class="container md:w-[80%] mx-auto py-10 px-5 md:px-20">
   <h1 data-key="vacancy" class="text-3xl md:text-4xl font-bold text-[#f0f0f0] dark:text-gray-300 mb-8">
    Вакансии
  </h1>

  <div class="mb-10">
    <h2 class="text-2xl md:text-[1.5rem] inline-block font-semibold text-[#E2C445] mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Продажи Страхования и Обслуживание Клиентов : </h2>
    <ul class="mt-4 md:text-[1.2rem] text-white dark:text-gray-300 list-disc pl-5">
      <li>Страховые Агенты: Устанавливают контакт с клиентами и предлагают страховые продукты.</li>
      <li>Менеджер Обслуживания Клиентов: Управляет жалобами клиентов, повышает удовлетворенность клиентов и отвечает на запросы клиентов.</li>
    </ul>
  </div>

  <div class="mb-10">
    <h2 class="text-2xl md:text-[1.5rem] inline-block font-semibold text-[#E2C445] mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Финансы и Экономика : </h2>
    <ul class="mt-4 md:text-[1.2rem] text-white dark:text-gray-300 list-disc pl-5">
      <li>Финансовый Аналитик: Анализирует финансовое состояние сайта, разрабатывает бюджет и предоставляет финансовые отчеты.</li>
      <li>Финансовый Менеджер: Планирует и реализует финансовые стратегии сайта.</li>
    </ul>
  </div>

  <div class="mb-10">
    <h2 class="text-2xl md:text-[1.5rem] inline-block font-semibold text-[#E2C445] mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Информационные Технологии (ИТ) : </h2>
    <ul class="mt-4 md:text-[1.2rem] text-white dark:text-gray-300 list-disc pl-5">
      <li>Специалист по ИТ Поддержке: Поддерживает ИТ системы сайта и решает технические проблемы.</li>
      <li>Разработчик Систем: Разрабатывает программное обеспечение сайта и совершенствует существующие системы.</li>
    </ul>
  </div>

  <div class="mb-10">
    <h2 class="text-2xl md:text-[1.5rem] inline-block font-semibold text-[#E2C445] mb-2 border-b-2 pb-2 border-[#EA1918] dark:text-gray-300">Маркетинг и Коммуникации : </h2>
    <ul class="mt-4 md:text-[1.2rem] text-white dark:text-gray-300 list-disc pl-5">
      <li>Менеджер по Маркетингу: Разрабатывает и реализует маркетинговые стратегии сайта, проводит рекламные и промоакции.</li>
      <li>Специалист по Коммуникациям: Устанавливает эффективные коммуникации между сайтом, клиентами и общественностью.</li>
    </ul>
  </div>
</div>`,
    },
  };

  const images = {
    melumat: "melumat.jpg",
    rehberlik: "time.jpg",
    missiya: "mission.jpg",
    biznes: "biznes.webp",
    qanunvericilik: "korporativ.jpg",
    vakansiya: "about_us.jpg",
    sual: "sual3.jpg",
  };

  let defaultImg = "biznes.webp";
  document.getElementById("content").innerHTML = content[page]?.[language] || "Səhifə tapılmadı.";
  document.querySelector(
    "main"
  ).style.background = ` linear-gradient(rgba(3, 1, 48, 0.605), rgba(3, 1, 48, 0.605)), url(./../assets/img/${
    images[page] || defaultImg
  }) center/cover`;
}
