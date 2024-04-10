function italiano() {
    // Sezione iniziale
    document.getElementById("greetings").innerHTML = `Ciao, mi chiamo <span class="name">João Victor</span>`;
    document.querySelector(".hello span.name").textContent = "João Victor";
    document.getElementById("egosum").innerHTML = "Io sono ";
    document.getElementById("description").textContent = "Sono un Sviluppatore di Sistemi. Porto con me una solida formazione accademica e esperienza in progetti como questo. Questo è il mio portfolio dove presento la mie abilità :)";
    document.querySelector(".hire-me").textContent = "Consultare le mie Votazioni";
  

    // Sezione Su di me
    document.querySelector(".section-title h2").textContent = "Su di Me";
    document.querySelector(".about-content h3").innerHTML = "Sono João Victor e <span>Sviluppatore</span>";
    document.querySelector(".about-content p").innerHTML = `Ciao, sono João Victor, un nobile ragazzo che domina la programmazione. Negli ultimi due anni, mi sono immerso nel mondo dello studio e della programmazione, ho iniziato il mio percorso accademico nel 2022, precedentemente, nel 2021, ho studiato database con MySQL e linguaggio di programmazione con Java. \
     Questi studi mi hanno dato una solida base per iniziare in Analisi E Sviluppo Di Sistemi e anche per imparare altri linguaggi di programmazione. <br><i>Parlo di più di questo corso qui sotto.</i><br> \
     Dal 2022 studio e sviluppo codici, essendo una buona parte, all’inizio, progetti più semplici fino a raggiungere questo qui, dove ho passato molto tempo a farlo.\
      Il mio viaggio linguistico è stato anche nel 2021, dove ho iniziato con l’italiano e infine l’inglese. \
      Molto più per la facilità e il multiculturalismo dell’inglese ho potuto imparare in modo più fluido. Ho anche competenza in spagnolo che è stata una lingua che ho finito per imparare “senza volerlo”. <br>\
       In sintesi, posso dire che questi ultimi due anni sono stati molto produttivi per la mia carriera professionale, ho cercato di imparare a programmare con persone di altri paesi, dove ho ampliato molto questa parte di logica e risoluzione dei problemi.`;

    document.querySelector(".info-item:nth-child(1) span").textContent = "26 Dic 2002";
    document.querySelector(".info-item:nth-child(6) span").textContent = "Analisi e Sviluppo di Sistemi";
    document.querySelector(".info-item:nth-child(7) span").textContent = "Certamente";

    document.querySelector(".buttons .btn:nth-child(1)").textContent = "Scarica CV";
    document.querySelector(".buttons .btn:nth-child(2)").textContent = "Assumimi";

    const labels = {
        Birthday: "Compleanno",
        City: "Città",
        Age: "Età",
        Degree: "Titolo di studio"
    };

    document.querySelector(".info-item:nth-child(1)").innerHTML = `<p>${labels.Birthday} : <span>26 Dic 2002</span></p>`;
    document.querySelector(".info-item:nth-child(8)").innerHTML = `<p>${labels.City} : <span>Brasilia, DF</span></p>`;
    document.querySelector(".info-item:nth-child(6)").innerHTML = `<p>${labels.Degree} : <span>Ingegneria del software</span></p>`;

    // Sezione Istruzione
    document.querySelector(".education .title").textContent = "Istruzione";
    document.querySelectorAll(".education .timeline-title")[0].textContent = "Analisi e Sviluppo di Sistemi";
    document.querySelectorAll(".education .timeline-title")[1].textContent = "Ingegneria del Software";

    // Sezione Esperienza
    document.querySelector(".experience .title").textContent = "Esperienza";
    document.querySelectorAll(".experience .timeline-title")[0].textContent = "Sviluppatore";
    //document.querySelectorAll(".experience .timeline-title")[1].textContent = "Prossimamente...";

    // Altri elementi
    document.getElementById("tec").innerHTML = "Servizi";
    document.getElementById("engineering").innerHTML = "L'anno prossimo farò un altro passo e inizierò in Ingegneria del Software.";
    document.getElementById("xP").innerHTML = `Ho lavorato su progetti, dai più semplici ai più complessi con Orientamento agli Oggetti. Ho usato soprattutto: <br> <strong>Linguaggi di Programmazione:</strong> <br> <i> JavaScript (Web) </i><br> <i> Java (Desktop e Web)</i> <br> <i> Python (Desktop)</i>  <br><br> <strong>Database: </strong><br> <i> Ho sviluppato e ottimizzato database utilizzando tecnologie come MySQL e PostgreSQL. </i> <br> <strong>Modellazione dei Dati: </strong><br> <i> Ho competenze avanzate nella modellazione dei dati e nella strutturazione efficiente delle informazioni. </i> <br><br> <strong>Microservizi:</strong>  <br> <i> Più recentemente, ho acquisito esperienza nell'implementazione di architetture di microservizi, utilizzando i servizi di AWS (Amazon Web Services).</i>`;
    document.getElementById("ads").innerHTML = `Nel corso di Analisi e Sviluppo di Sistemi, ho costantemente cercato l’eccellenza accademica, mantenendo i miei voti tra 9 e 10. Mi sono immerso nei fondamenti dell’analisi dei sistemi, dello sviluppo del software e della risoluzione di problemi complessi. Ho acquisito solide competenze in vari linguaggi di programmazione, strutture dati e progettazione di algoritmi. Partecipare a progetti pratici mi ha permesso di applicare le mie conoscenze teoriche a soluzioni del mondo reale. Il corso ha rafforzato la mia base tecnica e anche le mie competenze interpersonali, risoluzione dei problemi e pensiero critico.`;
    document.getElementById("back").innerHTML = "Lavoro nel back-end utilizzando linguaggi come Java, Python e C#. Ho avuto alcuni contatti nello sviluppo con database come MySql, PostgreSQL e MongoDB, e ora sto per utilizzare di più C# con questi database anche Java.";
    document.getElementById("desktop").innerHTML = "Il mio lavoro con le applicazioni desktop coinvolge l'uso di Java, Python e C#. Ho conoscenza con JavaFX e PyQt5. Attualmente, sto esplorando le possibilità di utilizzare C# per le applicazioni desktop.";
    document.getElementById("analyst").innerHTML = "Come Analista di Sistemi, mi distingo per la capacità di analizzare e comprendere sistemi di informazione. Ho abilità nell'identificare requisiti, modellare processi e creare soluzioni efficienti mi permette di contribuire allo sviluppo di sistemi robusti.";
    document.getElementById("developer").innerHTML = "Come Sviluppatore, dimostro competenza nei linguaggi Java, Python e C#. La mia esperienza si estende sia allo sviluppo back-end, desktop e microservices con la AWS. Mi distingo per la capacità di tradurre requisiti in soluzioni software.";

    document.getElementById("portf").innerHTML = "Portfolio";
    document.getElementById("lastPro").innerHTML = "I miei ultimi progetti";

    document.getElementById("contactMe").innerHTML = "Contattami";
    document.getElementById("questions").innerHTML = "Hai delle domande?";
    document.getElementById("somehow").innerHTML = "Sono qui, in qualche modo";
    document.getElementById("zap").innerHTML = "messaggio su WhatsApp";
    document.getElementById("git").innerHTML = "altri progetti qui";
}
