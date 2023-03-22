//Type Master (JS/CSS web browser version)
//Originally a pygame application
//Created by Pierce Renio
//With help from Hans Husurianto and Thomas Ruff


// Buttons
const startBtn = document.getElementById("StartBtn");
const quitBtn = document.getElementById("QuitBtn");
const aboutBtn = document.getElementById("AboutBtn");
const nextBtn = document.getElementById("NextBtn");
const backBtn = document.getElementById("BackBtn");
const atkBtn1 = document.getElementById("AtkBtn1");
const atkBtn2 = document.getElementById("AtkBtn2");
const atkBtn3 = document.getElementById("AtkBtn3");
const atkBtn4 = document.getElementById("AtkBtn4");

// Containers
const startBtnContainer = document.getElementById("StartBtnContainer");
const quitBtnContainer = document.getElementById("QuitBtnContainer");
const aboutBtnContainer = document.getElementById("AboutBtnContainer");
const nextBtnContainer = document.getElementById("NextBtnContainer");
const backBtnContainer = document.getElementById("BackBtnContainer");
const defTypeContainer = document.getElementById("DefTypeContainer");
const atkTypeContainer = document.getElementById("AtkTypeContainer");
const atkTypeContainer2 = document.getElementById("AtkTypeContainer2");

// Text and images
const hometitle = document.getElementById("title");
const homeText = document.getElementById("HomeText");
const aboutText = document.getElementById("AboutText");
const gameQuestion = document.getElementById("GameQuestion");
const streak = document.getElementById("Streak");
const defPic1 = document.getElementById("DefPic1");
const defPic2 = document.getElementById("DefPic2");
const atkPic1 = document.getElementById("AtkPic1");
const atkPic2 = document.getElementById("AtkPic2");
const atkPic3 = document.getElementById("AtkPic3");
const atkPic4 = document.getElementById("AtkPic4");
const resultsScreen = document.getElementById("ResultsScreen");
const resultText = document.getElementById("ResultText");
const defTablePic1 = document.getElementById("DefTablePic1");
const defTablePic2 = document.getElementById("DefTablePic2");
const atkTablePic1 = document.getElementById("AtkTablePic1");
const atkTablePic2 = document.getElementById("AtkTablePic2");
const atkTablePic3 = document.getElementById("AtkTablePic3");
const atkTablePic4 = document.getElementById("AtkTablePic4");
const result1a = document.getElementById("Result1a");
const result2a = document.getElementById("Result2a");
const result3a = document.getElementById("Result3a");
const result4a = document.getElementById("Result4a");
const result1b = document.getElementById("Result1b");
const result2b = document.getElementById("Result2b");
const result3b = document.getElementById("Result3b");
const result4b = document.getElementById("Result4b");
const result1Total = document.getElementById("Result1Total");
const result2Total = document.getElementById("Result2Total");
const result3Total = document.getElementById("Result3Total");
const result4Total = document.getElementById("Result4Total");

// Event Listeners
startBtn.addEventListener("click", ()=>{
    // Types
    type_list = randomizeTypes();
    def1 = type_list[0], def2 = type_list[1], atk1 = type_list[2], atk2 = type_list[3], atk3 = type_list[4], atk4 = type_list[5];
    defPic1.src = "static/images/" + jpgFiles[def1];
    if (def2 == 0){
        defPic2.hidden = true;
        defTablePic2.hidden = true;
    }else{
        defPic2.hidden = false;
        defPic2.src = "static/images/" + jpgFiles[def2];
        defTablePic2.hidden = false;
        defTablePic2.src = "static/images/" + jpgFiles[def2];
    }
    atkPic1.src = "static/images/" + jpgFiles[atk1];
    atkPic2.src = "static/images/" + jpgFiles[atk2];
    atkPic3.src = "static/images/" + jpgFiles[atk3];
    atkPic4.src = "static/images/" + jpgFiles[atk4];
    defTablePic1.src = "static/images/" + jpgFiles[def1];
    atkTablePic1.src = "static/images/" + jpgFiles[atk1];
    atkTablePic2.src = "static/images/" + jpgFiles[atk2];
    atkTablePic3.src = "static/images/" + jpgFiles[atk3];
    atkTablePic4.src = "static/images/" + jpgFiles[atk4];
    calculateEffectiveness(def1,def2,atk1,atk2,atk3,atk4);


    // Buttons
    startBtnContainer.style.display = "none";
    quitBtnContainer.style.display = "flex";
    aboutBtnContainer.style.display = "none";
    nextBtnContainer.style.display = "flex";
    nextBtn.setAttribute("disabled", "disabled")
    defTypeContainer.style.display = "flex";
    atkTypeContainer.style.display = "flex";
    atkTypeContainer2.style.display = "flex";

    // Content
    hometitle.style.display = "none";
    homeText.style.display = "none";
    gameQuestion.style.display = "flex"
    streak.style.display = "flex";
    str = 0;
    streak.innerHTML = "<b>Streak: " + str.toString() + "</b>";

})

quitBtn.addEventListener("click", () => {
    // Buttons
    startBtnContainer.style.display = "flex";
    quitBtnContainer.style.display = "none";
    aboutBtnContainer.style.display = "flex";
    nextBtnContainer.style.display = "none";
    defTypeContainer.style.display = "none";
    atkTypeContainer.style.display = "none";
    atkTypeContainer2.style.display = "none";

    // Content
    hometitle.style.display = "initial";
    homeText.style.display = "initial";
    gameQuestion.style.display = "none";
    streak.style.display = "none";
    resultsScreen.style.display = "none";
    toggleTableColor("off");

})

aboutBtn.addEventListener("click", () => {
    // Buttons
    startBtnContainer.style.display = "none";
    backBtnContainer.style.display = "flex";
    aboutBtnContainer.style.display = "none";

    // Content
    hometitle.style.display = "none";
    homeText.style.display = "none";
    aboutText.style.display = "initial";

})

backBtn.addEventListener("click", () => {
    // Buttons
    startBtnContainer.style.display = "flex";
    backBtnContainer.style.display = "none";
    aboutBtnContainer.style.display = "flex";

    // Content
    hometitle.style.display = "initial";
    homeText.style.display = "initial";
    aboutText.style.display = "none";

})

nextBtn.addEventListener("click", () => {
    // Types
    toggleTableColor("off");
    type_list = randomizeTypes();
    def1 = type_list[0], def2 = type_list[1], atk1 = type_list[2], atk2 = type_list[3], atk3 = type_list[4], atk4 = type_list[5];
    defPic1.src = "static/images/" + jpgFiles[def1];
    if (def2 == 0){
        defPic2.hidden = true;
        defTablePic2.hidden = true;
    }else{
        defPic2.hidden = false;
        defPic2.src = "static/images/" + jpgFiles[def2];
        defTablePic2.hidden = false;
        defTablePic2.src = "static/images/" + jpgFiles[def2];
    }
    atkPic1.src = "static/images/" + jpgFiles[atk1];
    atkPic2.src = "static/images/" + jpgFiles[atk2];
    atkPic3.src = "static/images/" + jpgFiles[atk3];
    atkPic4.src = "static/images/" + jpgFiles[atk4];
    defTablePic1.src = "static/images/" + jpgFiles[def1];
    defTablePic2.src = "static/images/" + jpgFiles[def2];
    atkTablePic1.src = "static/images/" + jpgFiles[atk1];
    atkTablePic2.src = "static/images/" + jpgFiles[atk2];
    atkTablePic3.src = "static/images/" + jpgFiles[atk3];
    atkTablePic4.src = "static/images/" + jpgFiles[atk4];
    calculateEffectiveness(def1,def2,atk1,atk2,atk3,atk4);


    // Buttons
    nextBtn.setAttribute("disabled", "disabled")
    defTypeContainer.style.display = "flex";
    atkTypeContainer.style.display = "flex";
    atkTypeContainer2.style.display = "flex";

    // Content
    resultsScreen.style.display = "none";
    gameQuestion.style.display = "flex";

})

atkBtn1.addEventListener("click", () => {
    toggleTableColor("on");
    calculateResults(0);
    defTypeContainer.style.display = "none";
    atkTypeContainer.style.display = "none";
    atkTypeContainer2.style.display = "none";
    resultsScreen.style.display = "flex";
    nextBtn.removeAttribute("Disabled");
    gameQuestion.style.display = "none";
})

atkBtn2.addEventListener("click", () => {
    toggleTableColor("on");
    calculateResults(1);
    defTypeContainer.style.display = "none";
    atkTypeContainer.style.display = "none";
    atkTypeContainer2.style.display = "none";
    resultsScreen.style.display = "flex";
    nextBtn.removeAttribute("Disabled");
    gameQuestion.style.display = "none";
})


atkBtn3.addEventListener("click", () => {
    toggleTableColor("on");
    calculateResults(2);
    defTypeContainer.style.display = "none";
    atkTypeContainer.style.display = "none";
    atkTypeContainer2.style.display = "none";
    resultsScreen.style.display = "flex";
    nextBtn.removeAttribute("Disabled");
    gameQuestion.style.display = "none";
})

atkBtn4.addEventListener("click", () => {
    toggleTableColor("on");
    calculateResults(3);
    defTypeContainer.style.display = "none";
    atkTypeContainer.style.display = "none";
    atkTypeContainer2.style.display = "none";
    resultsScreen.style.display = "flex";
    nextBtn.removeAttribute("Disabled");
    gameQuestion.style.display = "none";
})




//------------ Functions -------------//

// Randomizes every type
function randomizeTypes(){
    temp_list = [0,0,0,0,0,0]
    while (temp_list[0] == temp_list[1]){
        temp_list[0] = getRanInt(19);
        temp_list[1] = getRanInt(19);
    }
    if (temp_list[0] == 0 && temp_list[1] != 0){
        temp_list[0] = temp_list[1]
        temp_list[1] = 0
    }
    while (temp_list[2] == temp_list[3] || temp_list[2] == temp_list[4] || temp_list[2] == temp_list[5] || temp_list[3] == temp_list[4] || temp_list[3] == temp_list[5] || temp_list[4] == temp_list[5]){
        temp_list[2] = getRanInt(18) + 1;
        temp_list[3] = getRanInt(18) + 1;
        temp_list[4] = getRanInt(18) + 1;
        temp_list[5] = getRanInt(18) + 1;
    }
    return temp_list;
}

function getRanInt(max){
    return Math.floor(Math.random() * max);
}



// Determines if the guess was correct or not
// Sets the alert and text based on if the guess was correct or not
function calculateResults(choice){
    effectiveness = calculateEffectiveness(def1,def2,atk1,atk2,atk3,atk4);
    winningPosition= strongestType(effectiveness);
    win = (winningPosition[choice] == 1);

    num_of_win = 0;
    for (i in winningPosition){
        if (winningPosition[i] == 1){
            num_of_win = num_of_win + 1;
        }
    }

    if (win){
        if (num_of_win > 1){
            resultText.innerHTML = "You picked one of the correct types!"
            str+=1;
            streak.innerHTML = "<b>Streak: " + str.toString() + "</b>";
        }else {
            resultText.innerHTML = "You picked the correct type!"
            str+=1;
            streak.innerHTML = "<b>Streak: " + str.toString() + "</b>";
        }
    }else if (!win) {
        resultText.innerHTML = "There was a better option..."
        str = 0;
        streak.innerHTML = "<b>Streak: " + str.toString() + "</b>";
    }

    result1a.innerHTML = calculateEffectivenessSingle(def1,atk1);
    result2a.innerHTML = calculateEffectivenessSingle(def1,atk2);
    result3a.innerHTML = calculateEffectivenessSingle(def1,atk3);
    result4a.innerHTML = calculateEffectivenessSingle(def1,atk4);
    result1b.innerHTML = calculateEffectivenessSingle(def2,atk1);
    result2b.innerHTML = calculateEffectivenessSingle(def2,atk2);
    result3b.innerHTML = calculateEffectivenessSingle(def2,atk3);
    result4b.innerHTML = calculateEffectivenessSingle(def2,atk4);
    result1Total.innerHTML = totalText(labels[def1][atk1],labels[def2][atk1]);
    result2Total.innerHTML = totalText(labels[def1][atk2],labels[def2][atk2]);
    result3Total.innerHTML = totalText(labels[def1][atk3],labels[def2][atk3]);
    result4Total.innerHTML = totalText(labels[def1][atk4],labels[def2][atk4]);
    }

// Determines which attacking type is the strongest against the defending type(s)
function strongestType(list){
    winner = Math.max.apply(Math, list);
    type_win = []
    for (i in list){
        if (list[i] == winner){
            type_win[i] = 1;
        }else {
            type_win[i] = 0;
        }
    }
    return type_win;
    }

// Turns the table cell colors on and off
function toggleTableColor(setting){
    effectivenessToggle = calculateEffectiveness(def1,def2,atk1,atk2,atk3,atk4);
    effectiveness_all = [labels[def1][atk1],labels[def2][atk1],labels[def1][atk2],labels[def2][atk2],labels[def1][atk3],labels[def2][atk3],labels[def1][atk4],labels[def2][atk4],effectivenessToggle[0],effectivenessToggle[1],effectivenessToggle[2],effectivenessToggle[3]]
    highlights = []
    for (i in effectiveness_all){
        if (effectiveness_all[i] == 0.25 || effectiveness_all[i] == 0.5){
            highlights[i] = "table-danger";
        }else if(effectiveness_all[i] == 1){
            highlights[i] = "table-default";
        }else if(effectiveness_all[i] == 2 || effectiveness_all[i]== 4){
            highlights[i] = "table-success";
        }else if(effectiveness_all[i] == 0){
            highlights[i] = "table-dark";
        }
    }
    if (setting == "on"){
        result1a.classList.add(highlights[0]);
        result1b.classList.add(highlights[1]);
        result2a.classList.add(highlights[2]);
        result2b.classList.add(highlights[3]);
        result3a.classList.add(highlights[4]);
        result3b.classList.add(highlights[5]);
        result4a.classList.add(highlights[6]);
        result4b.classList.add(highlights[7]);
        result1Total.classList.add(highlights[8]);
        result2Total.classList.add(highlights[9]);
        result3Total.classList.add(highlights[10]);
        result4Total.classList.add(highlights[11]);
    } else{
        result1a.classList.remove(highlights[0]);
        result1b.classList.remove(highlights[1]);
        result2a.classList.remove(highlights[2]);
        result2b.classList.remove(highlights[3]);
        result3a.classList.remove(highlights[4]);
        result3b.classList.remove(highlights[5]);
        result4a.classList.remove(highlights[6]);
        result4b.classList.remove(highlights[7]);
        result1Total.classList.remove(highlights[8]);
        result2Total.classList.remove(highlights[9]);
        result3Total.classList.remove(highlights[10]);
        result4Total.classList.remove(highlights[11]);
    }
}

// Calculates how effective each attacking type is on the defending type(s)
function calculateEffectiveness(def1,def2,atk1,atk2,atk3,atk4){
    var effectiveness = [];
    effectiveness.push(labels[def1][atk1]*labels[def2][atk1]);
    effectiveness.push(labels[def1][atk2]*labels[def2][atk2]);
    effectiveness.push(labels[def1][atk3]*labels[def2][atk3]);
    effectiveness.push(labels[def1][atk4]*labels[def2][atk4]);
    console.log(effectiveness);
    return(effectiveness);
}

// Calculates how effective a single attacking type is on each defending type
// Returns as a string
function calculateEffectivenessSingle(def, atk){
    eff = labels[def][atk]
    text = "";
    console.log
    if (eff == 0.5){
        text = " Not Very Effective... "; 
    }else if(eff == 1){
        text = " Neutral ";
    }else if(eff == 2){
        text = " Super Effective!";
    }else if(eff == 0){
        text = " Has No Effect ";
    }
    if (def == 0){
        return "--";
    } else {
        return (eff + "<br>" + text);
    }
}

// Calculates the total effectiveness
// Returns as a string
function totalText(eff1,eff2){
    eff_product = eff1*eff2;
    text = "";
    if (eff_product == 0.5){
        text = "Not Very Effective..."; 
    }else if(eff_product == 1){
        text = "Neutral";
    }else if(eff_product == 2){
        text = "Super Effective!";
    }else if(eff_product == 0){
        text = "Has No Effect";
    }else if(eff_product == 4){
        text = "<b>SUPER</b> Effective!";
    }else if(eff_product == 0.25){
        text = "<b>NOT</b> Very Effective...";
    }
    return ("= " + eff_product + "x<br>" + text);
}