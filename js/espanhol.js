
function espanhol() {
    // Seção inicial
    document.getElementById("greetings").innerHTML = `Hola, mi nombre es <span class="name">João Victor</span>`;
    document.querySelector(".hello span.name").textContent = "João Victor";
    document.getElementById("egosum").innerHTML = "Yo soy ";
    document.getElementById("description").textContent = "Soy un Desarrollador de Sistemas. Aporto una sólida formación académica y una experiencia in proyectos como este :)";
    document.querySelector(".hire-me").textContent = "Ver mis Calificaciones";


    // Sección Acerca de mí
    document.querySelector(".section-title h2").textContent = "Acerca de Mí";
    document.querySelector(".about-content h3").innerHTML = "Soy João Victor y <span>Desarrollador</span>";
    document.querySelector(".about-content p").innerHTML = `Hola, soy João Victor, un noble hombre dominando la programación. \ 
    En los últimos dos años, me sumergí en el mundo del estudio y la programación, comencé mi viaje académico en 2022, anteriormente, en 2021, estudié bases de datos con MySQL y lenguaje de programación con Java. \
    Estos estudios me dieron una base sólida para comenzar en Análisis Y Desarrollo De Sistemas y también para aprender otros lenguajes de programación. <br> <i>Hablo más sobre este curso a continuación.</i><br>\
     Desde 2022 estudio y desarrollo códigos, siendo una buena parte, al principio, proyectos más simples hasta llegar a este aquí, donde pasé mucho tiempo haciendo. \
     Mi viaje lingüístico también fue en 2021, donde comencé por el italiano y finalmente el inglés. Mucho más por la facilidad y el multiculturalismo del inglés pude aprender de manera más fluida. \
      También tengo competencia en español que fue un idioma que terminé aprendiendo “sin querer”. <br> \
      En resumen, puedo decir que estos últimos dos años han sido muy productivos para mi carrera profesional, busqué aprender a programar con personas de otros países, donde amplié mucho esta parte de lógica y resolución de problemas.`;

    document.querySelector(".info-item:nth-child(1) span").textContent = "26 Dic 2002";
    document.querySelector(".info-item:nth-child(6) span").textContent = "Análisis y Desarrollo de Sistemas";
    document.querySelector(".info-item:nth-child(7) span").textContent = "Seguramente";

    document.querySelector(".buttons .btn:nth-child(1)").textContent = "Descargar CV";
    document.querySelector(".buttons .btn:nth-child(2)").textContent = "Contrátame";

    const labels = {
        Birthday: "Cumpleaños",
        City: "Ciudad",
        Age: "Edad",
        Degree: "Formación"
    };

    document.querySelector(".info-item:nth-child(1)").innerHTML = `<p>${labels.Birthday} : <span>26 Dic 2002</span></p>`;
    document.querySelector(".info-item:nth-child(8)").innerHTML = `<p>${labels.City} : <span>Brasilia, DF</span></p>`;
    document.querySelector(".info-item:nth-child(6)").innerHTML = `<p>${labels.Degree} : <span>Ingeniería de Software</span></p>`;

    // Sección Educación
    document.querySelector(".education .title").textContent = "Educación";
    document.querySelectorAll(".education .timeline-title")[0].textContent = "Análisis y Desarrollo de Sistemas";
    document.querySelectorAll(".education .timeline-title")[1].textContent = "Ingeniería de Software";

    // Sección Experiencia
    document.querySelector(".experience .title").textContent = "Experiencia";
    document.querySelectorAll(".experience .timeline-title")[0].textContent = "Desarrollador";
    //document.querySelectorAll(".experience .timeline-title")[1].textContent = "Próximamente...";

    // Otros elementos
    document.getElementById("tec").innerHTML = "Servicios";
    document.getElementById("engineering").innerHTML = "El próximo año daré otro paso y comenzaré en Ingeniería de Software.";
    document.getElementById("xP").innerHTML = `He trabajado en proyectos, desde los más simples hasta los más complejos con Orientación a Objetos. Usé especialmente: <br> <strong>Lenguajes de Programación:</strong> <br> <i> JavaScript (Web) </i><br> <i> Java (Escritorio y Web)</i> <br> <i> Python (Escritorio)</i>  <br><br> <strong>Bases de Datos: </strong><br> <i> Desarrollé y optimicé bases de datos utilizando tecnologías como MySQL y PostgreSQL. </i> <br> <strong>Modelado de Datos: </strong><br> <i> Tengo habilidades avanzadas en modelado de datos y estructuración eficiente de información. </i> <br><br> <strong>Microservicios:</strong>  <br> <i> Más recientemente, adquirí experiencia en la implementación de arquitecturas de microservicios, utilizando los servicios de AWS (Amazon Web Services).</i>`;
    document.getElementById("ads").innerHTML = "Dentro del curso de Análisis y Desarrollo de Sistemas, busqué constantemente la excelencia académica, manteniendo mis calificaciones entre 9 y 10. Profundicé en los fundamentos del análisis de sistemas, el desarrollo de software y la resolución de problemas complejos. Adquirí habilidades sólidas en varios lenguajes de programación, estructuras de datos y diseño de algoritmos. Participar en proyectos prácticos me permitió aplicar mis conocimientos teóricos a soluciones del mundo real. El curso fortaleció mi base técnica y también mis habilidades interpersonales, resolución de problemas y pensamiento crítico.";

    document.getElementById("back").innerHTML = "Trabajo con desarrollo de back-end utilizando lenguajes como Java, Python y C#. Mi experiencia incluye trabajar con bases de datos como MySql, PostgreSQL y MongoDB.";
    document.getElementById("desktop").innerHTML = "Mi trabajo con aplicaciones de escritorio involucra el uso de Java, Python y C#. Tengo conocimiento con JavaFX y PyQt5. Actualmente, estoy explorando más sobre el uso de C# para aplicaciones de desktop.";
    document.getElementById("analyst").innerHTML = "Como Analista de Sistemas, me destaco por la capacidad de analizar y comprender sistemas de información. Tengo habilidad para identificar requisitos, modelar procesos y crear soluciones eficientes me permite contribuir al desarrollo de sistemas robustos.";
    document.getElementById("developer").innerHTML = "Como Desarrollador, demuestro proficiencia en los lenguajes Java, Python y C#. Mi experiencia se extiende al desarrollo back-end, desktop y microservices con AWS. Me destaco por la capacidad de traducir requisitos en soluciones de software, con énfasis en la eficiencia y mantenibilidad del código.";

    document.getElementById("portf").innerHTML = "Portafolio";
    document.getElementById("lastPro").innerHTML = "Mis últimos proyectos";

    document.getElementById("contactMe").innerHTML = "Contáctame";
    document.getElementById("questions").innerHTML = "¿Tienes alguna pregunta?";
    document.getElementById("somehow").innerHTML = "Estoy aquí, de alguna manera";
    document.getElementById("zap").innerHTML = "mensaje en el WhatsApp";
    document.getElementById("git").innerHTML = "otros proyectos aquí";
}
