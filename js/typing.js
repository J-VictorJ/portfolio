
var typedInstance;  // Declare uma variável global para armazenar a instância Typed

function setLanguage(language) {
    // Desativa a instância Typed atual, se existir
    if (typedInstance) {
        typedInstance.destroy();
    }

    // Ativa a tradução específica para o idioma escolhido
    if (language === 'portuguese') {
        typedInstance = new Typed(".typing", {
            strings: ["Programador Java", "Desenvolvedor de Sistemas", "Programador Python", "Programador C#", "Engenheiro de Software"],
            typeSpeed: 100,
            backSpeed: 65,
            loop: true
        });
    } else if (language === 'ingles') {
        typedInstance = new Typed(".typing", {
            strings: ["Java Programmer", "C# Programmer", "Systems Developer", "Python Programmer", "Software Engineer"],
            typeSpeed: 100,
            backSpeed: 65,
            loop: true
        });
    } else if (language === 'italiano') {
        typedInstance = new Typed(".typing", {
            strings: [ "Programmatore in Java", "Programmatore in C#", "Sviluppatore di sistemi", "Programmatore Python"],
            typeSpeed: 100,
            backSpeed: 65,
            loop: true
        });
    } else if (language === 'espanhol') {
        typedInstance = new Typed(".typing", {
            strings: ["Desarrollador Back-end", "Programador en Java", "Analista de sistemas", "Programador en C#", "Desarrollador de Sistemas", "Programador Python"],
            typeSpeed: 100,
            backSpeed: 65,
            loop: true
        });
    }

}
document.addEventListener("DOMContentLoaded", function() {
    typedInstance = new Typed(".typing", {
        strings: ["Back-end Developer", "Java Programmer", "Systems Analyst", "C# Programmer", "Systems Developer", "Python Programmer", "Software Engineer"],
        typeSpeed: 100,
        backSpeed: 65,
        loop: true
    });
    ingles();
});
document.getElementById('translateButtonPortuguese').addEventListener('click', function() {
    setLanguage('portuguese');
});

document.getElementById('translateButtonEnglish').addEventListener('click', function() {
    setLanguage('ingles');
});

document.getElementById('translateButtonItalian').addEventListener('click', function() {
    setLanguage('italiano');
});

document.getElementById('translateButtonSpanish').addEventListener('click', function() {
    setLanguage('espanhol');
});
