function calculateQuiz() {

    const selectedAnswers = document.querySelectorAll(
        '#quiz input[type="radio"]:checked'
    );

    const result = document.getElementById("quiz-result");

    if (selectedAnswers.length < 5) {

        result.innerHTML =
            "⚠️ Please answer all 5 questions before getting your result.";

        result.style.color = "red";

        return;
    }

    let software = 0;
    let research = 0;
    let hardware = 0;
    let security = 0;

    selectedAnswers.forEach(function (answer) {

        if (answer.value === "software") {
            software++;
        }

        if (answer.value === "research") {
            research++;
        }

        if (answer.value === "hardware") {
            hardware++;
        }

        if (answer.value === "security") {
            security++;
        }

    });

    let highest = Math.max(
        software,
        research,
        hardware,
        security
    );

    let career;
    let description;

    if (software === highest) {

        career = "💻 Quantum Software Developer";

        description =
            "You may enjoy programming, quantum algorithms " +
            "and building quantum applications.";

    } else if (research === highest) {

        career = "🔬 Quantum Researcher";

        description =
            "You may enjoy mathematics, physics and exploring " +
            "new ideas in quantum computing.";

    } else if (hardware === highest) {

        career = "⚙️ Quantum Hardware Engineer";

        description =
            "You may enjoy electronics, engineering and " +
            "working with quantum computing hardware.";

    } else {

        career = "🔐 Quantum Cryptography Specialist";

        description =
            "You may enjoy cybersecurity, cryptography and " +
            "secure quantum communication.";
    }

    result.style.color = "#151b54";

    result.innerHTML =
        "<h3>🎯 Your Suggested Career</h3>" +

        "<p><strong>" + career + "</strong></p>" +

        "<p>" + description + "</p>" +

        "<div class='score-breakdown'>" +

        "<h4>📊 Your Score Breakdown</h4>" +

        "<p>💻 Software: <strong>" +
        software +
        "</strong></p>" +

        "<p>🔬 Research: <strong>" +
        research +
        "</strong></p>" +

        "<p>⚙️ Hardware: <strong>" +
        hardware +
        "</strong></p>" +

        "<p>🔐 Security: <strong>" +
        security +
        "</strong></p>" +

        "</div>";
}


// ================= CAREER SEARCH =================

function searchCareers() {

    const searchText = document
        .getElementById("careerSearch")
        .value
        .toLowerCase();

    const careerCards = document.querySelectorAll(".career-card");

    careerCards.forEach(function (card) {

        const careerText = card.innerText.toLowerCase();

        if (careerText.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


// ================= LEARN MORE =================
function showCareerInfo(career) {

    let title = "";
    let description = "";
    let skills = "";
    let resource1 = "";
    let resource1Link = "";
    let resource2 = "";
    let resource2Link = "";

    if (career === "software") {

        title = "💻 Quantum Software Developer";

        description =
            "Quantum Software Developers create programs, " +
            "quantum circuits and applications that use " +
            "quantum computing technologies.";

        skills =
            "Python, Qiskit, algorithms, programming and " +
            "problem solving.";

        resource1 = "IBM Quantum Learning";
        resource1Link = "https://quantum.cloud.ibm.com/learning/en";

        resource2 = "Microsoft Azure Quantum";
        resource2Link =
            "https://learn.microsoft.com/en-us/training/paths/quantum-computing-fundamentals/";

    } else if (career === "research") {

        title = "🔬 Quantum Researcher";

        description =
            "Quantum Researchers study quantum mechanics, " +
            "quantum information, algorithms and new " +
            "approaches to quantum computing.";

        skills =
            "Mathematics, physics, quantum mechanics, " +
            "research and analytical thinking.";

        resource1 = "IBM Quantum Learning";
        resource1Link =
            "https://quantum.cloud.ibm.com/learning/en/courses";

        resource2 = "IBM Basics of Quantum Information";
        resource2Link =
            "https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information";

    } else if (career === "hardware") {

        title = "⚙️ Quantum Hardware Engineer";

        description =
            "Quantum Hardware Engineers work with quantum " +
            "processors, electronics, control systems and " +
            "the physical technologies behind quantum computers.";

        skills =
            "Electronics, engineering, physics, hardware " +
            "and experimental skills.";

        resource1 = "IBM Quantum Learning";
        resource1Link =
            "https://quantum.cloud.ibm.com/learning/en";

        resource2 = "AWS Amazon Braket";
        resource2Link =
            "https://aws.amazon.com/braket/getting-started/";

    } else if (career === "security") {

        title = "🔐 Quantum Cryptography Specialist";

        description =
            "Quantum Cryptography Specialists study secure " +
            "communication, cryptography and security techniques " +
            "related to quantum technologies.";

        skills =
            "Cryptography, cybersecurity, mathematics, " +
            "network security and problem solving.";

        resource1 = "IBM Quantum Learning";
        resource1Link =
            "https://quantum.cloud.ibm.com/learning/en";

        resource2 = "IBM Quantum Key Distribution Module";
        resource2Link =
            "https://quantum.cloud.ibm.com/learning/en/modules";

    } else if (career === "algorithm") {

        title = "🧮 Quantum Algorithm Designer";

        description =
            "Quantum Algorithm Designers develop and study " +
            "algorithms designed for quantum computers and " +
            "hybrid quantum-classical systems.";

        skills =
            "Linear algebra, probability, algorithms, Python " +
            "and quantum computing.";

        resource1 = "IBM Quantum Learning";
        resource1Link =
            "https://quantum.cloud.ibm.com/learning/en/courses";

        resource2 = "Microsoft Quantum Learning";
        resource2Link =
            "https://learn.microsoft.com/en-us/training/paths/quantum-computing-fundamentals/";

    } else if (career === "consultant") {

        title = "💼 Quantum Consultant";

        description =
            "Quantum Consultants help organizations understand " +
            "quantum computing, possible applications and " +
            "technology strategy.";

        skills =
            "Communication, business strategy, quantum " +
            "technology and problem solving.";

        resource1 = "IBM Quantum Business Foundations";
        resource1Link =
            "https://quantum.cloud.ibm.com/learning/en/courses/quantum-business-foundations/introduction-to-quantum-computing";

        resource2 = "Microsoft Quantum Learning";
        resource2Link =
            "https://learn.microsoft.com/en-us/azure/quantum/further-reading-qdk";

    }


    // Create the popup

    const popup = document.createElement("div");

    popup.className = "career-modal";

    popup.innerHTML =

        "<div class='career-modal-content'>" +

        "<button class='close-modal' onclick='closeCareerInfo()'>" +
        "&times;" +
        "</button>" +

        "<h2>" +
        title +
        "</h2>" +

        "<h3>About this Career</h3>" +

        "<p>" +
        description +
        "</p>" +

        "<h3>Important Skills</h3>" +

        "<p>" +
        skills +
        "</p>" +

        "<h3>📚 Useful Learning Resources</h3>" +

        "<a class='resource-button' " +
        "href='" + resource1Link + "' " +
        "target='_blank'>" +
        "🔗 " + resource1 +
        "</a>" +

        "<a class='resource-button' " +
        "href='" + resource2Link + "' " +
        "target='_blank'>" +
        "🔗 " + resource2 +
        "</a>" +

        "</div>";


    document.body.appendChild(popup);
}


function closeCareerInfo() {

    const popup = document.querySelector(".career-modal");

    if (popup) {
        popup.remove();
    }

}