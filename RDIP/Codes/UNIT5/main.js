  
function ForSelection() {
    
    if (document.getElementById("AllCorpuses").selectedIndex == 1) {
        document.getElementById("FirstText").innerHTML = 'A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. " How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in."';
        document.getElementById("FirstLine").innerHTML = "Enter the number of tokens and types for the above corpus:"
        ShowFirstBTN()
    }
    if (document.getElementById("AllCorpuses").selectedIndex == 2) {
        document.getElementById("FirstText").innerHTML = 'A wolf carried off a lamb. The lamb said, " I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.'
        document.getElementById("FirstLine").innerHTML = "Enter the number of tokens and types for the above corpus:"
        ShowSecBTN()
    }
    if (document.getElementById("AllCorpuses").selectedIndex == 3) {
        document.getElementById("FirstText").innerHTML = "A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. \"Why does he not make a pet of me?\" said the donkey. \"It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master's knee. It is not fair.\" Then the donkey said to himself, \"If I do what the dog does, he may make a pet of me.\" So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master's knee. The master thought the donkey was mad, and he shouted, \"Help! Help!\" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. \"I only did what the dog does,\" said the donkey,\" and yet they make a pet of the dog, and they beat me with sticks. It is not fair.\""
        document.getElementById("FirstLine").innerHTML = "Enter the number of tokens and types for the above corpus:"
        ShowThirdBTN()
    }

}

function ShowFirstBTN() {
    document.getElementById("FirstButton").innerHTML = ""
    document.getElementById("Right").innerHTML = ""
    document.getElementById("Wrong").innerHTML = ""
    document.getElementById("SecondButton").innerHTML = ""
    document.getElementById("SecondButton").innerHTML = ""
    document.getElementById("LastText").innerHTML = ""
    document.getElementById("LastSpace").innerHTML = ""
    document.getElementById("Last").innerHTML = '';
    document.getElementById("ThirdButton").innerHTML = ""
    document.getElementById("TokenCounter").value = ""
    document.getElementById("TypeCounter").value = ""
    document.getElementById("Right2").innerHTML = ""
    document.getElementById("Wrong2").innerHTML = ""
    document.getElementById("TokenCounter").style.background = "white";
    document.getElementById("TypeCounter").style.background = "white"
    var Table1 = document.getElementById("FirstTable");
    Table1.style.display = "block";
    var BTN = document.createElement("BUTTON");
    var SubBTN = document.createTextNode("Submit");
    BTN.id = "button1"
    BTN.appendChild(SubBTN);
    document.getElementById("FirstButton").appendChild(BTN);
    BTN.onclick = ANSCorpus1;

}


corpus1 = 'A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in."';
corpus1Small = corpus1.replace(/[^a-zA-Z ]/g, "")
corpus1Small = corpus1Small.toLowerCase()
corpus1TokensCNT = corpus1Small.split(" ")


var Corpus1TknCntOP = [];
var count = 0;
var value = false;


function ANSCorpus1() {

    var Corpus1TknCntOP = [];
    var count = 0;
    var value = false;

    for (j = 0; j < corpus1TokensCNT.length; j++) {
        for (k = 0; k < Corpus1TknCntOP.length; k++) {
            if (corpus1TokensCNT[j] == Corpus1TknCntOP[k]) {
                value = true;
            }
        }
        count++;
        if (count == 1 && value == false) {
            Corpus1TknCntOP.push(corpus1TokensCNT[j]);
        }
        value = false;
        count = 0;
    }

   TokenCounter = document.getElementById("TokenCounter").value
   TypeCounter = document.getElementById("TypeCounter").value
    if (TokenCounter == corpus1TokensCNT.length && TypeCounter == Corpus1TknCntOP.length) {
        document.getElementById("Right").innerHTML = "Right Answer"
        document.getElementById("TokenCounter").style.background = "green";
        document.getElementById("TypeCounter").style.background = "green"
        document.getElementById("FirstButton").innerHTML = ""
        document.getElementById("Wrong").innerHTML = ""
        var BTN = document.createElement("BUTTON");
        var SubBTN = document.createTextNode("Submit");
        BTN.id = "button1"
        BTN.appendChild(SubBTN);
        document.getElementById("FirstButton").appendChild(BTN);
        var BTN1 = document.createElement("BUTTON");
        var SubBTN1 = document.createTextNode("Continue");
        BTN1.id = "button1"
        BTN1.appendChild(SubBTN1);
        document.getElementById("SecondButton").appendChild(BTN1);
        BTN1.onclick = Corpus1calc;
    }
    else {
        document.getElementById("Right").innerHTML = ""
        document.getElementById("Wrong").innerHTML = "Wrong Answer"
        document.getElementById("TokenCounter").style.background = "red";
        document.getElementById("TypeCounter").style.background = "red"
    }
}

function Corpus1calc() {

    document.getElementById('LastText').innerHTML = "Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types."
    document.getElementById('LastSpace').innerHTML = "#new types:"
    document.getElementById('Right').innerHTML = '';
    document.getElementById('FirstButton').innerHTML = '';
    document.getElementById('SecondButton').innerHTML = '';
    var BTN = document.createElement("INPUT");
    BTN.setAttribute("type", "text");
    BTN.setAttribute("size", 6);
    BTN.id = "LastV"
    document.getElementById("Last").appendChild(BTN);
    var BTN1 = document.createElement("BUTTON");
    var SubBTN1 = document.createTextNode("Submit");
    BTN1.id = "button5"
    BTN1.appendChild(SubBTN1);
    document.getElementById("ThirdButton").appendChild(BTN1);
    BTN1.onclick = Corpus1Fun;

}

function Corpus1Fun() {
    var MaxValue = []
    var stemmer = new Snowball('English');
    for (i in corpus1TokensCNT) {
        stemmer.setCurrent(corpus1TokensCNT[i]);
        stemmer.stem();
        MaxValue.push((stemmer.getCurrent(corpus1TokensCNT[i])))


    }

    var Corpus1TknCntOP = [];
    var count = 0;
    var value = false;

    for (j = 0; j < MaxValue.length; j++) {
        for (k = 0; k < Corpus1TknCntOP.length; k++) {
            if (MaxValue[j] == Corpus1TknCntOP[k]) {
                value = true;
            }
        }
        count++;
        if (count == 1 && value == false) {
            Corpus1TknCntOP.push(MaxValue[j]);

        }
        value = false;
        count = 0;
    }

    LastVal = document.getElementById("LastV").value
    if (LastVal == Corpus1TknCntOP.length) {
        document.getElementById("Wrong2").innerHTML = ""
        document.getElementById("Right2").innerHTML = "Right Answer"
        document.getElementById("LastV").style.background = "green";
    }
    else {
        document.getElementById("Right2").innerHTML = ""
        document.getElementById("Wrong2").innerHTML = "Wrong Answer"
        document.getElementById("LastV").style.background = "red";
    }
}



function ShowSecBTN() {
    document.getElementById("FirstButton").innerHTML = ""
    document.getElementById("Right").innerHTML = ""
    document.getElementById("Wrong").innerHTML = ""
    document.getElementById("SecondButton").innerHTML = ""
    document.getElementById("SecondButton").innerHTML = ""
    document.getElementById("LastText").innerHTML = ""
    document.getElementById('Last').innerHTML = '';
    document.getElementById("LastSpace").innerHTML = ""
    document.getElementById("ThirdButton").innerHTML = ""
    document.getElementById("TokenCounter").value = ""
    document.getElementById("TypeCounter").value = ""
    document.getElementById("Right2").innerHTML = ""
    document.getElementById("Wrong2").innerHTML = ""
    document.getElementById("TokenCounter").style.background = "white";
    document.getElementById("TypeCounter").style.background = "white"
    var Table1 = document.getElementById("FirstTable");
    Table1.style.display = "block";
    var BTN = document.createElement("BUTTON");
    var SubBTN = document.createTextNode("Submit");
    BTN.id = "button2"
    BTN.appendChild(SubBTN);
    document.getElementById("FirstButton").appendChild(BTN);
    BTN.onclick = ANSCorpus2;
}

corpus2 = 'A wolf carried off a lamb. The lamb said, "I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.'
corpus2Small = corpus2.replace(/[^a-zA-Z ]/g, "")
corpus2Small = corpus2Small.toLowerCase()
corpus2TokensCNT = corpus2Small.split(" ")

var Corpus2TknCntOP = [];


function ANSCorpus2() {

    var Corpus2TknCntOP = [];
    var count = 0;
    var value = false;

    for (j = 0; j < corpus2TokensCNT.length; j++) {
        for (k = 0; k < Corpus2TknCntOP.length; k++) {
            if (corpus2TokensCNT[j] == Corpus2TknCntOP[k]) {
                value = true;
            }
        }
        count++;
        if (count == 1 && value == false) {
            Corpus2TknCntOP.push(corpus2TokensCNT[j]);
        }
        value = false;
        count = 0;
    }

    TokenCounter = document.getElementById("TokenCounter").value
    TypeCounter = document.getElementById("TypeCounter").value
    if (TokenCounter == corpus2TokensCNT.length && TypeCounter == Corpus2TknCntOP.length) {
        document.getElementById("Right").innerHTML = "Right Answer"
        document.getElementById("TokenCounter").style.background = "green";
        document.getElementById("TypeCounter").style.background = "green"
        document.getElementById("FirstButton").innerHTML = ""
        document.getElementById("Wrong").innerHTML = ""
        var BTN = document.createElement("BUTTON");
        var SubBTN = document.createTextNode("Submit");
        BTN.id = "button1"
        BTN.appendChild(SubBTN);
        document.getElementById("FirstButton").appendChild(BTN);
        var BTN1 = document.createElement("BUTTON");
        var SubBTN1 = document.createTextNode("Continue");
        BTN.appendChild(SubBTN1);
        document.getElementById("SecondButton").appendChild(BTN);
        BTN.onclick = Corpus2calc;
    }
    else {
        document.getElementById("Right").innerHTML = ""
        document.getElementById("Wrong").innerHTML = "Wrong Answer"
        document.getElementById("TokenCounter").style.background = "red";
        document.getElementById("TypeCounter").style.background = "red"
    }
}
function Corpus2calc() {

    document.getElementById('LastText').innerHTML = "Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types."
    document.getElementById('LastSpace').innerHTML = "#new types:"
    document.getElementById('Right').innerHTML = '';
    document.getElementById('FirstButton').innerHTML = '';
    document.getElementById('SecondButton').innerHTML = '';
    var BTN = document.createElement("INPUT");
    BTN.setAttribute("type", "text");
    BTN.setAttribute("size", 6);
    BTN.id = "LastV"
    document.getElementById("Last").appendChild(BTN);
    var BTN1 = document.createElement("BUTTON");
    var SubBTN1 = document.createTextNode("Submit");
    BTN1.id = "button5"
    BTN1.appendChild(SubBTN1);
    document.getElementById("ThirdButton").appendChild(BTN1);
    BTN1.onclick = Corpus2Fun;

}

function Corpus2Fun() {
    var MaxValue = []
    var stemmer = new Snowball('English');
    for (i in corpus2TokensCNT) {
        stemmer.setCurrent(corpus2TokensCNT[i]);
        stemmer.stem();
        MaxValue.push((stemmer.getCurrent(corpus2TokensCNT[i])))


    }

    var Corpus2TknCntOP = [];
    var count = 0;
    var value = false;

    for (j = 0; j < MaxValue.length; j++) {
        for (k = 0; k < Corpus2TknCntOP.length; k++) {
            if (MaxValue[j] == Corpus2TknCntOP[k]) {
                value = true;
            }
        }
        count++;
        if (count == 1 && start == false) {
            Corpus2TknCntOP.push(maxx[j]);

        }
        value = false;
        count = 0;
    }

        LastVal = document.getElementById("LastV").value
    if (LastVal == outputcorpus2Tokens.length) {
        document.getElementById("Wrong2").innerHTML = ""
        document.getElementById("Right2").innerHTML = "Right Answer"
        document.getElementById("LastV").style.background = "green";
    }
    else {
        document.getElementById("Right2").innerHTML = ""
        document.getElementById("Wrong2").innerHTML = "Wrong Answer"
        document.getElementById("LastV").style.background = "red";
    }
}



function ShowThirdBTN() {
    document.getElementById("FirstButton").innerHTML = ""
    document.getElementById("Right").innerHTML = ""
    document.getElementById("Wrong").innerHTML = ""
    document.getElementById("SecondButton").innerHTML = ""
    document.getElementById("SecondButton").innerHTML = ""
    document.getElementById("LastText").innerHTML = ""
    document.getElementById("LastSpace").innerHTML = ""
    document.getElementById('Last').innerHTML = '';
    document.getElementById("ThirdButton").innerHTML = ""
    document.getElementById("TokenCounter").value = ""
    document.getElementById("TypeCounter").value = ""
    document.getElementById("Right2").innerHTML = ""
    document.getElementById("Wrong2").innerHTML = ""
    document.getElementById("TokenCounter").style.background = "white";
    document.getElementById("TypeCounter").style.background = "white"
    var Table1 = document.getElementById("FirstTable");
    Table1.style.display = "block";
    var BTN = document.createElement("BUTTON");
    var SubBTN = document.createTextNode("Submit");
    BTN.id = "button3"
    BTN.appendChild(SubBTN);
    document.getElementById("FirstButton").appendChild(BTN);
    BTN.onclick = ANSCorpus3;

}


corpus3 = 'A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair."'
corpus3Small = corpus3.replace(/[^a-zA-Z ]/g, "")
corpus3Small = corpus3Small.toLowerCase()
corpus3TokensCNT = corpus3Small.split(" ")

var Corpus3TknCntOP = [];

function ANSCorpus3() {

    var Corpus3TknCntOP = [];
    var count = 0;
    var value = false;

    for (j = 0; j < corpus3TokensCNT.length; j++) {
        for (k = 0; k < Corpus3TknCntOP.length; k++) {
            if (corpus3TokensCNT[j] == Corpus3TknCntOP[k]) {
                value = true;
            }
        }
        count++;
        if (count == 1 && value == false) {
            Corpus3TknCntOP.push(corpus3TokensCNT[j]);

        }
        value = false;
        count = 0;
    }

    TokenCounter = document.getElementById("TokenCounter").value
    TypeCounter = document.getElementById("TypeCounter").value
    if (TokenCounter == corpus3TokensCNT.length && TypeCounter == Corpus3TknCntOP.length) {
        document.getElementById("Right").innerHTML = "Right Answer"
        document.getElementById("TokenCounter").style.background = "green";
        document.getElementById("TypeCounter").style.background = "green"
        document.getElementById("FirstButton").innerHTML = ""
        document.getElementById("Wrong").innerHTML = ""
        var BTN = document.createElement("BUTTON");
        var SubBTN = document.createTextNode("Submit");
        BTN.id = "button1"
        BTN.appendChild(SubBTN);
        document.getElementById("FirstButton").appendChild(BTN);
        var BTN1 = document.createElement("BUTTON");
        var SubBTN1 = document.createTextNode("Continue");
        BTN1.appendChild(SubBTN1);
        document.getElementById("SecondButton").appendChild(BTN1);
        BTN1.onclick = Corpus3calc;
    }
    else {
        document.getElementById("Right").innerHTML = ""
        document.getElementById("Wrong").innerHTML = "Wrong Answer"
        document.getElementById("TokenCounter").style.background = "red";
        document.getElementById("TypeCounter").style.background = "red"
    }
}

function Corpus3calc() {

    document.getElementById('LastText').innerHTML = "Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types."
    document.getElementById('LastSpace').innerHTML = "#new types:"
    document.getElementById('Right').innerHTML = '';
    document.getElementById('FirstButton').innerHTML = '';
    document.getElementById('SecondButton').innerHTML = '';
    var BTN = document.createElement("INPUT");
    BTN.setAttribute("type", "text");
    BTN.setAttribute("size", 6);
    BTN.id = "LastV"
    document.getElementById("Last").appendChild(BTN);
    var BTN1 = document.createElement("BUTTON");
    var SubBTN1 = document.createTextNode("Submit");
    BTN1.id = "button5"
    BTN1.appendChild(SubBTN1);
    document.getElementById("ThirdButton").appendChild(BTN1);
    BTN1.onclick = Corpus3Fun;

}


function Corpus3Fun() {
    var MaxValue = []
    var stemmer = new Snowball('English');
    for (i in corpus3TokensCNT) {
        stemmer.setCurrent(corpus3TokensCNT[i]);
        stemmer.stem();
        MaxValue.push((stemmer.getCurrent(corpus3TokensCNT[i])))


    }

    var Corpus3TknCntOP = [];
    var count = 0;
    var value = false;

    for (j = 0; j < MaxValue.length; j++) {
        for (k = 0; k < Corpus3TknCntOP.length; k++) {
            if (MaxValue[j] == Corpus3TknCntOP[k]) {
                value = true;
            }
        }
        count++;
        if (count == 1 && start == false) {
            Corpus3TknCntOP.push(MaxValue[j]);

        }
        value = false;
        count = 0;
    }

    LastVal = document.getElementById("LastV").value
    if (LastVal == outputcorpus3Tokens.length) {
        document.getElementById("Wrong2").innerHTML = ""
        document.getElementById("Right2").innerHTML = "Right Answer"
        document.getElementById("LastV").style.background = "green";
    }
    else {
        document.getElementById("Right2").innerHTML = ""
        document.getElementById("Wrong2").innerHTML = "Wrong Answer"
        document.getElementById("LastV").style.background = "red";
    }
}