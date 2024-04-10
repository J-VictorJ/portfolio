function ingles() {
    // Home section
    document.getElementById("greetings").innerHTML = `Hello, my name is <span class="name">João Victor</span>`;
    document.querySelector(".hello span.name").textContent = "João Victor";
    document.getElementById("egosum").innerHTML = "I'm a ";
    document.getElementById("description").textContent = "I'm a System Developer. I bring a solid academic background and experience on projects like this one. This is my portfolio, where I share my skills :)";
    document.querySelector(".hire-me").textContent = "Check my Grades";

    // About section
    document.querySelector(".section-title h2").textContent = "About Me";
    document.querySelector(".about-content h3").innerHTML = "I'm João Victor and <span>Developer</span>";
    document.querySelector(".about-content p").innerHTML = `Hi, I am João Victor, a noble Gentleman mastering programming. In last two years, I've dived into the world of study and programming,\ 
    starting my academic journey in 2022, previously, in 2021, I studied data bases with MySQL and programming language with Java. \
    These studies gave me a solid base to start System Develop and also to learn other programming languages <br><i>I'll talk more about it later.</i><br>\
    Since 2022 I've been studying and developing code, with a good part of it, in beggining, being simpler projects until I make this one, which I spent a good time on.\
    My linguistic journey also started in 2021, where I began with Italian and finally English. For the reason of the English is more multicultural I was able to learn more fluently.\
    I have also proeficience in spanish witch was a language that I learned "without wantint to". In summary I can say that these last two years have been extremly productive for my professional carrer,\
    I sought to learn programming with people from other countries, where I greatly expanded this part of logical and problem solving.`;

    document.querySelector(".info-item:nth-child(1) span").textContent = "26 Dec 2002";
    document.querySelector(".info-item:nth-child(6) span").textContent = "Systems Analysis and Development";
    document.querySelector(".info-item:nth-child(7) span").textContent = "Certainly";

    document.querySelector(".buttons .btn:nth-child(1)").textContent = "Download CV";
    document.querySelector(".buttons .btn:nth-child(2)").textContent = "Hire me";

    const labels = {
        Birthday: "Birthday",
        City: "City",
        Age: "Age",
        Degree: "Degree"
    };

    document.querySelector(".info-item:nth-child(1)").innerHTML = `<p>${labels.Birthday} : <span>26 Dec 2002</span></p>`;
    document.querySelector(".info-item:nth-child(8)").innerHTML = `<p>${labels.City} : <span>Brasilia, DF</span></p>`;
    document.querySelector(".info-item:nth-child(6)").innerHTML = `<p>${labels.Degree} : <span>Software Engineering</span></p>`;

    // Education section
    document.querySelector(".education .title").textContent = "Education";
    document.querySelectorAll(".education .timeline-title")[0].textContent = "Systems Analysis and Development";
    document.querySelectorAll(".education .timeline-title")[1].textContent = "Software Engineering";

    // Experience section
    document.querySelector(".experience .title").textContent = "Experience";
    document.querySelectorAll(".experience .timeline-title")[0].textContent = "Developer";
    document.querySelectorAll(".experience .timeline-title")[1].textContent = "Fill";

    // Additional sections
    document.getElementById("tec").innerHTML = "Services";
    document.getElementById("engineering").innerHTML = "This year, I'll give another step and I'll start on Software Engineering.";
    document.getElementById("xP").innerHTML = `I have worked on projects, from the simplest to the most complex with Object Orientation. I especially used: <br> <strong>Programming Languages:</strong> <br> <i> JavaScript (Web) </i><br> <i> Java (Desktop and Web)</i> <br> <i> Python (Desktop)</i> <br><br> <strong>Databases: </strong><br> <i> I developed and optimized databases using technologies like MySQL and PostgreSQL. </i> <br> <strong>Data Modeling: </strong><br> <i> I have advanced skills in data modeling and efficient structuring of information. </i> <br><br> <strong>Microservices:</strong> <br> <i> More recently, I gained experience in implementing microservices architectures, using AWS (Amazon Web Services) services.</i>`;
    document.getElementById("ads").innerHTML = "Within the course of Systems Analysis and Development, I constantly sought academic excellence, maintaining my grades between 9 and 10. I delved into the fundamentals of system analysis, software development, and solving complex problems. I acquired solid skills in various programming languages, data structures, and algorithm design. Participating in practical projects allowed me to apply my theoretical knowledge to real-world solutions. The course strengthened my technical foundation also my interpersonal skills, problem-solving, and critical thinking.";

    document.getElementById("back").innerHTML = "I work with back-end in languages such as Java, Python, and C#. I had some contact in development with databases like MySql, PostgreSQL, and MongoDB, and for now, I'm about to use more C# with these databases also Java.";
    document.getElementById("desktop").innerHTML = "My work with desktop applications involves the use of Java, Python, and C#. I have knowledge in JavaFX and PyQt5. Currently, I'm exploring the possibilities of using C# for desktop applications.";
    document.getElementById("analyst").innerHTML = "As a Systems Analyst, I stand out for the ability to analyze and understand information systems. I am skilled in identifying requirements, modeling processes, and creating efficient solutions allows me to contribute to the development of robust systems.";
    document.getElementById("developer").innerHTML = "As a Developer, I demonstrate proficiency in languages such as Java, Python, and C#. My experience extends back-end, desktop development and microservices using AWS. I stand out for the ability to translate requirements, with an emphasis on code efficiency and maintainability.";

    document.getElementById("portf").innerHTML = "Portfolio";
    document.getElementById("lastPro").innerHTML = "My Latest Projects";

    document.getElementById("contactMe").innerHTML = "Contact Me";
    document.getElementById("questions").innerHTML = "Do you have any questions?";
    document.getElementById("somehow").innerHTML = "I'm here, somehow";
    document.getElementById("zap").innerHTML = "Zap me";
    document.getElementById("git").innerHTML = "other projects here";
}
