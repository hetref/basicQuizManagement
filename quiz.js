const questions = [
    { question: "The harmful materials in the environment are called:", options: ["Harmtants", "Pollution", "Pollutants", "Polants"], correctAnswer: 2 },
    { question: "Which of the following is not a Natural pollution?", options: ["Natural pollutions", "Man-made pollutions", "Both a) and b)", "None of the above"], correctAnswer: 1 },
    { question: "Causes of land pollution are:", options: ["Industrialization", "Mining", "Agriculture", "All of the above"], correctAnswer: 3 },
    { question: "The Negative Impact Of Land Pollution is:", options: ["Soil erosion", "Shifting of habitat", "Water pollution", "All of the above"], correctAnswer: 3 },
    { question: "Need of water treatment is:", options: ["To remove dissolved gases", "To remove dissolved oxygen", "To enhance odor", "To enhance color"], correctAnswer: 0 },
    { question: "The object of coagulation is:", options: ["To remove suspended particles", "To remove colloidal particles", "To remove dissolved particles", "To remove bacteria"], correctAnswer: 1 },
    { question: "On earth ________ is freshwater.", options: ["3%", "4%", "5%", "6%"], correctAnswer: 0 },
    { question: "Spring is a _________ source of water.", options: ["Surface", "Sub-surface", "Both a) and b)", "All of the above"], correctAnswer: 1 },
    { question: "Effects of water pollution on human beings are:", options: ["Typhoid", "HIV", "Dengue", "Plague"], correctAnswer: 0 },
    { question: "The impact of wastewater on the environment is:", options: ["Noise pollution", "Nuisance", "Diseases", "All of the above"], correctAnswer: 2 },
    { question: "Which of the following is not a tertiary treatment of wastewater?", options: ["Filtration", "Removal of nutrients", "Chlorination", "Aeration"], correctAnswer: 3 },
    { question: "Which of the following is not a waterborne disease?", options: ["Jaundice", "Cholera", "Nirmal", "Amoebiasis"], correctAnswer: 2 },
    { question: "Which of the following is not a primary pollutant of air pollution?", options: ["Ash", "Pollen", "Smoke", "Smog"], correctAnswer: 3 },
    { question: "Which of the following is not a secondary pollutant of air pollution?", options: ["Acid rain", "Ozone", "Smog", "Dust"], correctAnswer: 3 },
    { question: "Effects of air pollution on the environment is:", options: ["Global warming", "Acid rain", "Greenhouse effect", "All of the above"], correctAnswer: 3 },
    { question: "The particulate matter suspended in air is:", options: ["Dust", "Pollen", "Liquid droplets", "All of the above"], correctAnswer: 3 },
    { question: "Settling chambers collect dust of size:", options: ["Less than 10µm", "More than 10µm", "Equal to 10µm", "None of the above"], correctAnswer: 0 },
    { question: "Gaseous pollutants are controlled by:", options: ["Absorption", "Adsorption", "Combustion", "All of the above"], correctAnswer: 3 },
    { question: "The permissible range of PM10 for residential areas is:", options: ["60 - 100", "70 - 100", "80 - 100", "90 - 100"], correctAnswer: 0 },
    { question: "_______ is a process where gases, vapors, or liquids are concentrated on a solid surface.", options: ["Absorption", "Adsorption", "Combustion", "All of the above"], correctAnswer: 1 },
    { question: "The World Health Organization (WHO) defines noise above _________ (dB) as noise pollution.", options: ["45 decibels", "55 decibels", "65 decibels", "75 decibels"], correctAnswer: 2 },
    { question: "Which of the following is not a physiological effect on human beings?", options: ["Rise in blood pressure", "Reduction in vision", "Heart pain", "Damage to the nervous system"], correctAnswer: 3 },
    { question: "Artificial sources of noise pollution are:", options: ["Thunder", "Landslides", "Earthquake", "None of the above"], correctAnswer: 3 },
    { question: "Which of the following is not solid waste?", options: ["Rubber", "Cloth", "Wastewater", "Paper"], correctAnswer: 2 },
    { question: "High-level radioactive waste can be managed in which of the following ways?", options: ["Open dumping", "Incineration", "Composting", "Deep burial"], correctAnswer: 3 },
    { question: "Which of the following is a biodegradable waste?", options: ["Plastic", "Polythene", "Glass", "None of the above"], correctAnswer: 3 },
    { question: "Biomedical waste may be disposed of by:", options: ["Incineration", "Autoclaving", "Landfilling", "Both a) and b)"], correctAnswer: 3 },
    { question: "Which of the following is a biodegradable organic chemical/substance?", options: ["Plastic", "Oil", "Pesticide", "Garbage"], correctAnswer: 3 },
    { question: "Which one of the following is not biodegradable?", options: ["Vegetable waste", "Fruit waste", "Leaves", "Aluminum foil"], correctAnswer: 3 },
    { question: "Which of the following is not municipal solid waste?", options: ["Market waste", "Agriculture waste", "Domestic waste", "Commercial waste"], correctAnswer: 1 },
    { question: "Municipal solid waste includes:", options: ["Domestic waste", "Commercial waste", "Institutional waste", "All of the above"], correctAnswer: 3 },
    { question: "The highest heating value is of:", options: ["Garbage", "Rubbish", "Hospital waste", "Industrial waste"], correctAnswer: 0 },
    { question: "The unit of sound is:", options: ["Decibel", "Maribel", "Sensible", "Pedicel"], correctAnswer: 0 },
    { question: "Primary treatment of sewage includes:", options: ["Screening", "Grit removal", "Primary clarifier", "All of the above"], correctAnswer: 3 },
    { question: "Types of grit in sewage treatment include:", options: ["Sand", "Silt", "Egg shell", "All of the above"], correctAnswer: 3 },
    { question: "_______ can be used to remove the nitrates.", options: ["Renitrification", "Gentrification", "Denitrification", "All of the above"], correctAnswer: 2 },
    { question: "Smog is:", options: ["A natural phenomenon", "A combination of smoke and fog", "Is colorless", "All of the above"], correctAnswer: 1 },
    { question: "Fluoride pollution mainly affects:", options: ["Kidney", "Brain", "Heart", "Teeth"], correctAnswer: 3 },
    { question: "Which of the following is a non-point source of water pollution?", options: ["Factories", "Sewage treatment plants", "Urban and suburban lands", "All of the above"], correctAnswer: 2 },
    { question: "Fugitive emissions consist of:", options: ["Street dust", "Dust from construction activities", "Dust from farm cultivation", "All of the above"], correctAnswer: 3 },
    { question: "Water management includes:", options: ["Rainwater harvesting", "Groundwater recharge", "Green belt development", "All of the above"], correctAnswer: 3 },
    { question: "Green Belt Development benefits in:", options: ["Reducing air pollution", "Water conservation", "Reducing soil erosion", "All of the above"], correctAnswer: 3 },
    { question: "Formal environmental education represents education:", options: ["Within the classroom", "Outside the classroom", "Both a) and b)", "None of the above"], correctAnswer: 0 },
    { question: "Maharashtra Pollution Control Board is established on:", options: ["7 September 1980", "7 September 1990", "7 September 1970", "7 September 1960"], correctAnswer: 2 },
    { question: "The responsibilities of the pollution control board are:", options: ["Create public awareness", "Inspect sewage", "Inspect air control systems", "All of the above"], correctAnswer: 3 },
    { question: "NGO stands for:", options: ["Non Governance Organization", "Non Government Optimization", "Non Government Organization", "Non Government Organizer"], correctAnswer: 2 },
    { question: "EIA can be seen as a:", options: ["Measuring tool", "Product", "Multiplying tool", "None of the above"], correctAnswer: 0 },
    { question: "Watershed within crop fields is called:", options: ["Micro watershed", "Small watershed", "Large watershed", "All of the above"], correctAnswer: 0 },
    { question: "Formal environmental education begins at:", options: ["Research level", "College level", "High school level", "Primary school level"], correctAnswer: 3 },
    { question: "Adult education is:", options: ["Formal education", "Non-formal education", "Primary education", "Group education"], correctAnswer: 1 },
    { question: "GIS stands for:", options: ["Geographical Information Systems", "Geological Information Systems", "Geographical Importation Systems", "Geographical Information Solutions"], correctAnswer: 0 },
    { question: "Sustainable Development includes:", options: ["Economical development", "Generate resources", "Maintain balance between human and environment", "None"], correctAnswer: 2 },
    { question: "Which of the following is an aspect of Sustainable Development?", options: ["Social", "Environmental", "Economical", "All of the above"], correctAnswer: 3 },
    { question: "Central Pollution Control Board is formed to:", options: ["Prevent environmental pollution", "Promote environmental pollution", "Practice environmental pollution", "All of the above"], correctAnswer: 0 },
    { question: "Which of the following is not an IT tool used for environment and public health?", options: ["Arogya Setu App", "Artificial Intelligence", "MS Word", "GIS"], correctAnswer: 2 },
    { question: "Supposed to be working not for 'profit' but for a 'cause(s)' is:", options: ["NGO", "CGO", "GOO", "MGO"], correctAnswer: 0 },
    { question: "The main components of the watershed program are:", options: ["Water conservation", "Soil conservation", "Crop management", "All of the above"], correctAnswer: 3 },
    { question: "Both formal and non-formal environmental education must have _________ goals:", options: ["Different", "Common", "Two", "All of the above"], correctAnswer: 1 },
    { question: "Narmada Bachao Andolan is initiated by:", options: ["Nana Patekar", "Amir Khan", "Medha Patkar", "Sardar Patel"], correctAnswer: 2 },
];

let currentQuestionIndex = 0;
let userScore = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = ""; // Clear previous options

    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.classList.add("option-btn");
        optionButton.onclick = () => handleOptionClick(index, optionButton);
        optionsContainer.appendChild(optionButton);
    });

    // Reset feedback and disable next button initially
    document.getElementById("feedback-container").innerHTML = "";
    document.getElementById("next-btn").disabled = true;

    updateProgressBar();
}

function handleOptionClick(selectedOption, optionButton) {
    const currentQuestion = questions[currentQuestionIndex];
    const feedbackContainer = document.getElementById("feedback-container");

    // Disable all buttons after selection
    const optionButtons = document.querySelectorAll(".option-btn");
    optionButtons.forEach(btn => btn.disabled = true);

    if (selectedOption === currentQuestion.correctAnswer) {
        feedbackContainer.textContent = "Correct!";
        feedbackContainer.className = "correct";
        userScore++;
    } else {
        feedbackContainer.textContent = "Wrong! The correct answer is: " + currentQuestion.options[currentQuestion.correctAnswer];
        feedbackContainer.className = "wrong";
    }

    // Add styling to the selected button
    optionButton.classList.add(selectedOption === currentQuestion.correctAnswer ? "correct" : "wrong");

    // Enable the Next button after selecting an option
    document.getElementById("next-btn").disabled = false;
}

function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

    progressBar.value = progressPercentage;
    progressText.textContent = `${Math.round(progressPercentage)}%`;
}

document.getElementById("next-btn").addEventListener("click", () => {
    // Move to the next question if there are more questions
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert(`Quiz Finished! Your score: ${userScore}/${questions.length}`);
        // Optionally, reset for a new quiz:
        currentQuestionIndex = 0;
        userScore = 0;
        loadQuestion();
    }
});


// Initial load of the first question
loadQuestion();
