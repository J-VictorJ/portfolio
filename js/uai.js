// Translate

function mineires_formal_contemporaneo() {
    // Home section
    document.getElementById("greetings").innerHTML=`Bão, sou fi de <span class="name">Suely</span>`;
    document.querySelector(".hello span.name").textContent = "Suely";
    document.getElementById("egosum").innerHTML = "Eu sou ";
    document.getElementById("description").textContent = `Eu sou o rapaz que arruma os trem pros'outros. Eu mexo com essas treinhaiada toda faz um 'cadin de tempo, aí eu montei ess' trem aqui pra fala' pro'sotro que eu coiso o trem bem feito :)`;
    document.querySelector(".hire-me").textContent = "Me arrumar uma vaguinha";
    

    // About section
    document.querySelector(".section-title h2").textContent = "Sobre Mim";
    document.querySelector(".about-content h3").innerHTML = "Eu sou João Victor e <span>Mexo com trem</span>";
    document.querySelector(".about-content p").innerHTML = `Cêtábão, meu nome é João Victor, sou o rapaz que sabe mexer nos trem de "esperto". Aí nesses últimos 02 anos eu comecei a querer vencer na vida e aí eu comecei a fazer faculdade de ADS. Um cadin de temp'antes eu já fazia uns trem, comecei a coisar Banc' de dado' daí eu vi o MySQL depois eu 'mecei a ve' Java. \
    E fazendo essa' trenheira aí ficou bão demai' da conta preu 'meçar a mexe' nesses trem de programação. <br> <i>Dipois eu chego lá na parte da faculdade, guenta a mão um cadin.</i><br> \
    Desd' 2022 eu estud' essas treinhaida toda aí, comecei com uns trem mais calmin depois fui coisando mais e quando pensa que não, eu cabei negoçando esse portfoio aqui, pensa numa trabaiera, sô(sa). \
    E também eu sei falar difíc' eu falo o Português e Inglês ess's dois eu desde menino, só que o Inglês eu xuxei mais pr'agora e, também fiz uma manota de aprender Italiano lá pra 2021 por modo de filme. \
    E o Espanhol eu nem sei, dev' te' sido por modo de que eu 'sistia muito trem em espanhol e cabei coisan'. Deixan' de enrrola' eu poss' fala' que ez'último dois ano' foi bom cum borra, eu vi os menin' fazen'e coisei também, falei com os menino que mora log'alí. E aprendi a coisa' mais coisa que eu já coisava antes de começ'a  coisar.`;
    
    document.querySelector(".info-item:nth-child(1) span").textContent = "26 Dez 2002";
    document.querySelector(".info-item:nth-child(6) span").textContent = "ADS";
    document.querySelector(".info-item:nth-child(7) span").textContent = "Clar' Uai!";

    document.querySelector(".buttons .btn:nth-child(1)").textContent = "Baixar Currículo";
    document.querySelector(".buttons .btn:nth-child(2)").textContent = "Me arrumar um serviço";

    const labels = {
        Birthday: "Aniversário",
        City: "Cidade",
        Degree: "Formação"
    };


    document.querySelector(".info-item:nth-child(1)").innerHTML = `<p>${labels.Birthday} : <span>26 Dez 2002</span></p>`;
    document.querySelector(".info-item:nth-child(8)").innerHTML = `<p>${labels.City} : <span>Pedra Azul, MG</span></p>`;
    document.querySelector(".info-item:nth-child(6)").innerHTML = `<p>${labels.Degree} : <span>ADS</span></p>`;


    document.querySelector(".education .title").textContent = "Educação";
    document.querySelectorAll(".education .timeline-title")[0].textContent = "Análise e Desenvolvimento de Sistemas";
    document.querySelectorAll(".education .timeline-title")[1].textContent = "Engenharia de Software";

    document.querySelector(".experience .title").textContent = "Experiência";
    document.querySelectorAll(".experience .timeline-title")[0].textContent = "Desenvolvedor";
    //document.querySelectorAll(".experience .timeline-title")[1].textContent = "Oportunidade em Breve...";

    document.getElementById("tec").innerHTML = "Serviços";
    document.getElementById("engineering").innerHTML = "Aí ness'ano eu tô queren'o entra noutra faculdade de Engenharia de Software dessa vez.";
    document.getElementById("xP").innerHTML = `Trabalhei com projetos, desde os mais simples até os mais complexos com Orientação a Objetos. Usei especialmente: <br><strong>Linguagens de Programação:</strong> <br><i> JavaScript (Web) </i><br><i> Java (Desktop e Web)</i> <br><i> Python (Desktop)</i>  <br><br><strong>Bancos de Dados: </strong><br><i> Desenvolvi e otimizei bancos de dados utilizando tecnologias como MySQL e PostgreSQL. </i> <br><strong>Modelagem de Dados: </strong><br><i> Possuo habilidades avançadas em modelagem de dados e estruturação eficiente de informações. </i> <br><br><strong>Microserviços:</strong>  <br><i> Mais recentemente, adquiri experiência na implementação de arquiteturas de microserviços, utilizando os serviços da AWS (Amazon Web Services).</i> `;
    document.getElementById("ads").innerHTML = `Dent' dess trem eu tirava nota boa mod' de mãinha. Dai eu c'mecei a cavuca' mais e 'prendi uns trem qu'eu num ia prende só nesse trem de Internett. Falan mais eu tive estrutura e modelagem de dados, um 'cado de trem de matemática e um monte de coisa que eu só vo'usa' mexendo cum'ess' trem. E como eu falei lá enrriba, eu tô 'custumado a mexer nessa treinhaiada toda aí, as manota dos'otro eu custumei arruma'.`;


    document.getElementById("back").innerHTML = "Atuo no desenvolvimento de back-end utilizando linguagens como Java, Python e C#. Minha experiência inclui o trabalho com bancos de dados, como MySql, PostgreSQL e MongoDB.";
    document.getElementById("desktop").innerHTML = "Meu trabalho com aplicações desktop envolve o uso de Java, Python e C#. Tenho conhecimento em JavaFX e PyQt5. Atualmente, estou explorando as possibilidades de usar C# para aplicações desktop.";
    document.getElementById("analyst").innerHTML = "Como Analista de Sistemas, destaco-me pela capacidade de analisar e compreender sistemas de informação. Habilidade em identificar requisitos, modelar processos e criar soluções eficientes permite-me contribuir para o desenvolvimento de sistemas robustos.";
    document.getElementById("developer").innerHTML = "Como Desenvolvedor, demonstro proficiência nas linguagens Java, Python e C#. Minha experiência estende-se para o desenvolvimento back-end, desktop e microservices com AWS. Destaco-me pela capacidade de traduzir requisitos soluções de software, com ênfase na eficiência e manutenibilidade do código.";


    document.getElementById("portf").innerHTML = "Portifolio";
    document.getElementById("lastPro").innerHTML = "Meus últimos projetos";

    document.getElementById("contactMe").innerHTML = "Entre em contato";
    document.getElementById("questions").innerHTML = "Você tem alguma dúvida?";
    document.getElementById("somehow").innerHTML = "Eu estou aqui, de alguma forma";
    document.getElementById("zap").innerHTML = "mensagem no Zap-Zap";
    document.getElementById("git").innerHTML = "outros projetos aqui";
}
