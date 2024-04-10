// Translate

function portuguese() {
    // Home section
    document.getElementById("greetings").innerHTML=`Oi, meu nome é <span class="name">João Victor</span>`;
    document.querySelector(".hello span.name").textContent = "João Victor";
    document.getElementById("egosum").innerHTML = "Eu sou ";
    document.getElementById("description").textContent = "Sou um Desenvolvedor de Sistemas. Trago uma sólida formação acadêmica e experiência em projetos como esse. Este é o meu portfólio, onde compartilho minhas habilidades :)";
    document.querySelector(".hire-me").textContent = "Ver minhas notas";
    

    // About section
    document.querySelector(".section-title h2").textContent = "Sobre Mim";
    document.querySelector(".about-content h3").innerHTML = "Eu sou João Victor e <span>Desenvolvedor</span>";
    document.querySelector(".about-content p").innerHTML = `Oi, eu sou o João Victor, um nobre rapaz dominando a programação. \
     Nos últimos dois anos, mergulhei no mundo do estudo e da programação, comecei minha jornada acadêmica em 2022, anteriormente, em 2021, estudei bancos de dados com MySQL e linguagem de programação com Java. \ 
     Esses estudos me deram uma base sólida para começar em ADS e também para aprender outras inguagens de programação. <br><i>Falo mais sobre esse curso abaixo.</i><br> \
     Desde 2022 eu estudo e desenvolvo códigos, sendo uma boa parte, no início, projetos mais simples até chegar nesse aqui, onde eu fiquei um bom tempo desenvolvendo. \ 
     Minha jornada linguística também fora em 2021, onde comecei pelo Italiano e por fim o Inglês. Muito mais pela facilidade e o multi-culturismo do inglês eu pude aprender de forma mais fluente. \
     Também tenho proficiência em espanhol que foi uma lingua que acabei aprendendo "sem querer". <br>\
     Em resumo posso dizer que esses últimos dois anos foram muito produtivos para minha carreira profissional, busquei aprender a programar com pessoas de outros países, onde eu ampliei muito essa parte de lógica e resolução de problemas.`;
    
    document.querySelector(".info-item:nth-child(1) span").textContent = "26 Dez 2002";
    document.querySelector(".info-item:nth-child(6) span").textContent = "ADS";
    document.querySelector(".info-item:nth-child(7) span").textContent = "Certamente";

    document.querySelector(".buttons .btn:nth-child(1)").textContent = "Baixar Currículo";
    document.querySelector(".buttons .btn:nth-child(2)").textContent = "Me Contrate";

    const labels = {
        Birthday: "Aniversário",
        City: "Cidade",
        Age: "Idade",
        Degree: "Formação"
    };


    document.querySelector(".info-item:nth-child(1)").innerHTML = `<p>${labels.Birthday} : <span>26 Dez 2002</span></p>`;
    document.querySelector(".info-item:nth-child(8)").innerHTML = `<p>${labels.City} : <span>Brasília, DF</span></p>`;
    document.querySelector(".info-item:nth-child(6)").innerHTML = `<p>${labels.Degree} : <span>Engenharia de Software</span></p>`;


    document.querySelector(".education .title").textContent = "Educação";
    document.querySelectorAll(".education .timeline-title")[0].textContent = "Análise e Desenvolvimento de Sistemas";
    document.querySelectorAll(".education .timeline-title")[1].textContent = "Engenharia de Software";

    document.querySelector(".experience .title").textContent = "Experiência";
    document.querySelectorAll(".experience .timeline-title")[0].textContent = "Desenvolvedor";

    document.getElementById("tec").innerHTML = "Serviços";
    document.getElementById("engineering").innerHTML = "Nesse ano, iniciarei minha jornada em Engenharia de Software.";
    document.getElementById("xP").innerHTML = `Trabalhei com projetos, desde os mais simples até os mais complexos com Orientação a Objetos. Usei especialmente: <br><strong>Linguagens de Programação:</strong> <br><i> JavaScript (Web) </i><br><i> Java (Desktop e Web)</i> <br><i> Python (Desktop)</i>  <br><br><strong>Bancos de Dados: </strong><br><i> Desenvolvi e otimizei bancos de dados utilizando tecnologias como MySQL e PostgreSQL. </i> <br><strong>Modelagem de Dados: </strong><br><i> Possuo habilidades avançadas em modelagem de dados e estruturação eficiente de informações. </i> <br><br><strong>Microserviços:</strong>  <br><i> Mais recentemente, adquiri experiência na implementação de arquiteturas de microserviços, utilizando os serviços da AWS (Amazon Web Services).</i> `;
    document.getElementById("ads").innerHTML = "Dentro do curso de Análise e Desenvolvimento de Sistemas, tive constância em minhas notas atingindo 9 e 10. Aprofundei-me nos fundamentos da análise de sistemas, desenvolvimento de software e resolução de problemas complexos. \
    Adquiri habilidades sólidas em diversas linguagens de programação, estruturas de dados e design de algoritmos. Participando de projetos práticos, pude aplicar meu conhecimento teórico em soluções do mundo real.\
     O curso fortaleceu minha base técnica, resolução de desafios e pensamento crítico.";


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
