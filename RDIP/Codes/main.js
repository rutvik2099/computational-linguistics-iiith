var eng = [
  [
    'John ate an apple before afternoon',
    'before afternoon John ate an apple',
    'John before afternoon ate an apple',
  ],
  [
    'some students like to study in the night',
    'at night some students like to study',
  ],
  ['John and Mary went to church', 'Mary and John went to church'],
  [
    'John went to church after eating',
    'after eating John went to church',
    'John after eating went to church',
  ],
  ['did he go to market', 'he did go to market'],
  [
    'the woman who called my sister sells cosmetics',
    'the woman who sells cosmetics called my sister',
    'my sister who sells cosmetics called the woman',
    'my sister who called the woman sells cosmetics',
  ],
  [
    'John goes to the library and studies',
    'John studies and goes to the library',
  ],
  ['John ate an apple so did she', 'she ate an apple so did John'],
  [
    'the teacher returned the book after she noticed the error',
    'the teacher noticed the error after she returned the book',
    'after the teacher returned the book she noticed the error',
    'after the teacher noticed the error she returned the book',
    'she returned the book after the teacher noticed the error',
    'she noticed the error after the teacher returned the book',
    'after she returned the book the teacher noticed the error',
    'after she noticed the error the teacher returned the book',
  ],
  [
    'I told her that I bought a book yesterday',
    'I told her yesterday that I bought a book',
    'yesterday I told her that I bought a book',
    'I bought a book that I told her yesterday',
    'I bought a book yesterday that I told her',
    'yesterday I bought a book that I told her',
  ],
];

var hin = [
  [
        'राम और श्याम बाजार गयें',
        'राम और श्याम गयें बाजार',
        'बाजार गयें राम और श्याम',
        'गयें बाजार राम और श्याम',
  ],
  [
    'राम सोया और श्याम भी',
    'श्याम सोया और राम भी',
    'सोया श्याम और राम भी',
    'सोया राम और श्याम भी',
  ],
  [
       'मैंने उसे बताया कि राम सो रहा है',
        'मैंने उसे बताया कि सो रहा है राम',
        'उसे मैंने बताया कि राम सो रहा है',
        'उसे मैंने बताया कि सो रहा है राम',
        'मैंने बताया उसे कि राम सो रहा है',
         'मैंने बताया उसे कि सो रहा है राम',
         'उसे बताया मैंने कि राम सो रहा है',
         'उसे बताया मैंने कि सो रहा है राम',
         'बताया मैंने उसे कि राम सो रहा है',
       'बताया मैंने उसे कि सो रहा है राम',
       'बताया उसे मैंने कि राम सो रहा है',
       'बताया उसे मैंने कि सो रहा है राम',
  ],
  [
    'राम खाकर सोया',
    'खाकर राम सोया',
    'राम सोया खाकर',
    'खाकर सोया राम',
    'सोया राम खाकर',
    'सोया खाकर राम',
  ],
  [
      'बिल्लियों को मारकर कुत्ता सो गया',
      'मारकर बिल्लियों को कुत्ता सो गया',
      'बिल्लियों को मारकर सो गया कुत्ता',
      'मारकर बिल्लियों को सो गया कुत्ता',
      'कुत्ता सो गया बिल्लियों को मारकर',
      'कुत्ता सो गया मारकर बिल्लियों को',
      'सो गया कुत्ता बिल्लियों को मारकर',
       'सो गया कुत्ता मारकर बिल्लियों को',
  ],
  [
    'एक लाल किताब वहाँ है',
    'एक लाल किताब है वहाँ',
    'वहाँ है एक लाल किताब',
    'है वहाँ एक लाल किताब',
  ],
  [
    'एक बड़ी सी किताब वहाँ है',
    'एक बड़ी सी किताब है वहाँ',
    'बड़ी सी एक किताब वहाँ है',
    'बड़ी सी एक किताब है वहाँ',
    'वहाँ है एक बड़ी सी किताब',
    'वहाँ है बड़ी सी एक किताब',
    'है वहाँ एक बड़ी सी किताब',
    'है वहाँ बड़ी सी एक किताब',
  ],
];
/* ---------- */

var header = document.getElementById('subheader');
var info = document.getElementById('information');
var info2 = document.getElementById('furInfo');
var select = document.getElementById('ForSelection');
var selinfo = document.getElementById('SelectionInfo');
var info3 = document.getElementById('blankInfo');
var info4 = document.getElementById('blankInfo2');
var sent = document.getElementById('showSentence');
var reform = document.getElementById('reformation');
var correct = document.getElementById('correction');
var outp = document.getElementById('output');
var correctop = document.getElementById('correctparaop');
var j, buttonCount, r;
var correctSent = '';
var clickcount = 0;
var x;
var FinalAns = '';

function introduction() {
  header.innerHTML = 'Introduction:-';
  info.innerHTML = 'A sentence can become more complex, if more than one verb is present or by joining two sentences or words using conjunctions or by some other methods.';
  info2.innerHTML = '<br>In this experiment also, you will make more difficult sentences using the given words.';
  info3.innerHTML = '';
  select.innerHTML = '';
  selinfo.innerHTML = '';
  info2.style.textAlign = 'left';
  info4.innerHTML = '';
  info4.style.textAlign = 'left';
  sent.innerHTML = '';
  reform.innerHTML = '';
  correct.innerHTML = '';
  outp.innerHTML = '';
  FinalAns = '';
  correctop.innerHTML = '';
}

function theory() {
  header.innerHTML = 'Theory :-';
  info.innerHTML ='<u><b>Clause</b></U><br>A clause typically contains a subject noun phrase and a finite verb. Some languages allow subjects to be omitted. There are two types of subclauses:<ol><li>independent clause</li><li>subordinate clause</li></ol>Independent clause shows the complete meaning in it. For example: Ram eats. A subordinate clause is not a complete sentence. For example: because I am sick. Sentences can also be classified on the basis of clauses.';
  info2.innerHTML = '<br>Classification on the basis of clauses are:<br><ol><li>A <b>simple sentence</b> consists of only one independent clause. There are no subordinate clauses.</li><li>A <b>compound sentence</b> consists of more than one independent clauses joined ny conjunctions or punctuations. There are no subordinate clauses.</li><li>A <b>complex sentence</b> consists of atleast one indpendent clause and a single subordinate clause</li><li>A <b>complex-compound sentence</b> consists of more than one independent clauses and atleast one of the independent clauses has one or more than one subordinate clauses</li></ol>';
  info3.innerHTML = '';
  select.innerHTML = '';
  selinfo.innerHTML = '';
  info2.style.textAlign = 'left';
  info4.innerHTML = '';
  sent.innerHTML = '';
  info4.style.textAlign = 'left';
  reform.innerHTML = '';
  correct.innerHTML = '';
  outp.innerHTML = '';
  FinalAns = '';
  correctop.innerHTML = '';
}


function randomSelection(input) {
  var output = input.split(' ');
  var i = output.length,
    temp,
    randomval;
  while (0 !== i) {
    randomval = Math.floor(Math.random() * i);
    i -= 1;
    temp = output[i];
    output[i] = output[randomval];
    output[randomval] = temp;
  }
  return output;
}


function toChange() {
  correctop.style.display = '';
  outp.innerHTML = "<center><font color = 'red'>Wrong Answer!!!</font><br><button id='AnsButton' onclick='toHide()'>Hide correct sentence</button></center>";
}




function toHide(){
  outp.innerHTML = "<center><font color = 'red'>Wrong Answer!!!</font><br><button id='AnsButton' onclick='toChange()'>Get answers</button></center>";
  correctop.style.display = 'none';
}



function toCheck() {
  var csent = correctSent.trim();
  var result;
  correctop.innerHTML = '';
  
  if (x == 'english') result = eng[r].includes(csent);
  else if (x == 'hindi') result = hin[r].includes(csent);

  if (result == true)
    outp.innerHTML ="<center><font color = 'green'>Right Answer!!!</font></center>";
  else
    outp.innerHTML ="<center><font color = 'red'>Wrong Answer!!!</font><br><button id='AnsButton' onclick='toGetcorrect() '>Get correct sentence</button></center>";
}








function objective() {
  header.innerHTML = 'Objective :-';
  info.innerHTML ='<br><hr><br>The objective of this experiment is to know how to form logically correct sentences from the given words.<br>';
  info2.innerHTML = '<br><hr>';
  info3.innerHTML = '';
  select.innerHTML = '';
  selinfo.innerHTML = '';
  info2.style.textAlign = 'left';
  info4.innerHTML = '';
  info4.style.textAlign = 'left';
  sent.innerHTML = '';
  reform.innerHTML = '';
  correct.innerHTML = '';
  outp.innerHTML = '';
  FinalAns = '';
  correctop.innerHTML = '';
}


function toReform() {
  for (i = 0; i <= j.length - 1; i++) {
    document.getElementById('btn' + i).style.display = '';
  }
  correctSent= '';
  sent.innerHTML = correctSent ;
  reform.innerHTML = '';
  info4.innerHTML = '';
  correct.innerHTML = '';
  clickcount = 0;
  outp.innerHTML = '';
  FinalAns = '';
  correctop.innerHTML = '';
}



function toGetcorrect() {
  FinalAns = '';
  var total = 0;
  correctop.innerHTML = '';
  if (x == 'english') {
    total= eng[r].length - 1;
    outp.innerHTML ="<center><font color = 'red'>Wrong Answer!!!</font><br><button id='AnsButton' onclick='toHide()'>Hide correct sentence</button></center>";
    for (i = 0; i <= total; i++) {
      FinalAns += '<center>' + eng[r][i] + '<br></center>';
    }
    correctop.style.display = '';
    correctop.innerHTML = FinalAns ;
  } else if (x == 'hindi') {
    total = hin[r].length - 1;
    outp.innerHTML =
      "<center><font color = 'red'>Wrong Answer!!!</font><br><button id='AnsButton' onclick='toHide()'>Hide correct sentence</button></center>";
    for (i = 0; i <= total; i++) {
      FinalAns += '<center>' + hin[r][i] + '<br></center>';
    }
    correctop.style.display = '';
    correctop.innerHTML = FinalAns;
  }
}




function toForm(id, value) {
  info4.style.textAlign = 'center';
  info4.innerHTML =
    "<br><font color='darkblue'><b>Formed Sentence</b></font><font color='blue'> <i>(after selecting words):</i></font><br>";
  correctSent += value + ' ';
  sent.style.textAlign = 'center';
  sent.innerHTML = correctSent;
  document.getElementById(id).style.display = 'none';
  reform.innerHTML =
    "<center><button id='Reformbtn' onclick='toReform()'>Re-form the sentence</button></center>";
  clickcount++;
  if (buttonCount == clickcount) {
    correct.innerHTML =
      "<center><button id='correctBtn' onclick='toCheck()'>Check the correctness of this sentence</button></center>";
  }
}
function toDropdownchoices() {
  x = '';
  x = document.getElementById('langOption').value;
  if (x == 'select') {
    FinalAns  = '';
    correctop.innerHTML = '';
    clickcount = 0;
    buttonCount = 0;
    selinfo.innerHTML = '';
    info3.innerHTML = '';
    info2.innerHTML = '';
    info4.innerHTML = '';
    info4.style.textAlign = 'left';
    sent.innerHTML = '';
    reform.innerHTML = '';
    correct.innerHTML = '';
    outp.innerHTML = '';
  }
  if (x == 'english') {
    FinalAns = '';
    correctop.innerHTML = '';
    reform.innerHTML = '';
    sent.innerHTML = '';
    correct.innerHTML = '';
    info4.innerHTML = '';
    correctSent= '';
    outp.innerHTML = '';
    selinfo.innerHTML =
      '<br><br><b>Form a sentence (Declarative or Interrogative or any other type) from the given words</b>';
    info3.style.color = 'blue';
    info3.innerHTML =
      '<center><i>(select the buttons in proper order)</i></center>';
    r = Math.floor(Math.random() * 9);
    var word = eng[r][0];
    j = randomSelection(word);
    info2.style.textAlign = 'center';
    var cnt = '';
    var cntstatus= '';
    clickcount = 0;
    buttonCount = 0;
    for (i = 0; i <= j.length - 1; i++) {
      val = j[i];
      cnt ="  <button id='btn" + i + "'onclick='toForm(this.id,this.value)' value='" + val +"'>" +val +  '</button>  ';
      cntstatus += cnt;
      buttonCount++;
    }
    info2.innerHTML = cntstatus.trim();
  }
  if (x == 'hindi') {
    FinalAns = '';
    correctop.innerHTML = '';
    reform.innerHTML = '';
    sent.innerHTML = '';
    correct.innerHTML = '';
    info4.innerHTML = '';
    correctSent = '';
    outp.innerHTML = '';
    selinfo.innerHTML ='<br><br><b>Form a sentence (Declarative or Interrogative or any other type) from the given words</b>';
    info3.style.color = 'blue';
    info3.innerHTML ='<center>(select the buttons in proper order)</center>';
    r = Math.floor(Math.random() * 6);
    var word = hin[r][0];
    j = randomSelection(word);
    info2.style.textAlign = 'center';
    var cnt = '';
    var cntstatus = '';
    buttonCount = 0;
    clickcount = 0;
    for (i = 0; i <= j.length - 1; i++) {
      val = j[i];
      cnt ="  <button id='btn" +i +"'onclick='toForm(this.id,this.value)' value='" + val + "'>" +val +  '</button>  ';
      cntstatus += cnt;
      buttonCount++;
    }
    info2.innerHTML = cntstatus.trim();
  }
}
function experiment() {
  header.innerHTML = 'Experiment:-';
  select.innerHTML ="<select id='langOption' onchange = 'toDropdownchoices()'><option value='select'>---Select Language---</option><option value='english'>English</option><option value='hindi'>Hindi</option></select>";
  selinfo.innerHTML = '';
  info3.innerHTML = '';
  info.innerHTML = '';
  info2.innerHTML = '';
  info4.innerHTML = '';
  info4.style.textAlign = 'left';
  sent.innerHTML = '';
  reform.innerHTML = '';
  correct.innerHTML = '';
  outp.innerHTML = '';
  FinalAns = '';
  correctop.innerHTML = '';
}

function quiz() {
  header.innerHTML = 'Quizzes:-';
  info.innerHTML ='Which of these is a valid sentence?<ol><li>Ram came after lunch.</li><li>Ram came after having lunch.</li><li>Sleeping I saw a tiger.</li><li>I saw a sleeping tiger.</li><li>No Parking is allowed.</li></ol>';
  info2.innerHTML ='<br><ol><li>खाते खाते राम सो गया</li><li>राम खाते खाते सो गया </li><li>राम खाता खाते सो गया</li><li>राम खाकर सो गया</li><li>राम और श्याम ने भी खाना खाया</li><li>राम ने और श्याम भी खाना खाया</li></ol>';
  info3.innerHTML = '';
  select.innerHTML = '';
  selinfo.innerHTML = '';
  info2.style.textAlign = 'left';
  info4.innerHTML = '';
  info4.style.textAlign = 'left';
  sent.innerHTML = '';
  reform.innerHTML = '';
  correct.innerHTML = '';
  outp.innerHTML = '';
  FinalAns = '';
  correctop.innerHTML = '';
}


function procedure() {
  header.innerHTML = 'Procedure:-';
  info.innerHTML ='<b><u>STEP 1:</u></b> Select a language which you know better<br><b><u>STEP 2:</u></b> Select the buttons which has words written on it, in a proper order<br><b><u>OUTPUT:</u></b> Group of words in a selected order will be shown<br>';
  info2.innerHTML = '<b><u>NOTE:</u></b><ol><li>If a wrong sentence is formed, <button>Re-form the sentence</button> is available for re-setting.</li><li>You can check whether the formed sentence is a valid or not by clicking <button>Check the correctness of this sentence</button> </li><li>For a wrong sentence, you can get the correct sentence by clicking <button>Get correct sentence</button> </li></ol>';
  info3.innerHTML = '';
  info3.innerHTML = '';
  select.innerHTML = '';
  selinfo.innerHTML = '';
  info2.style.textAlign = 'left';
  info4.innerHTML = '';
  sent.innerHTML = '';
  info4.style.textAlign = 'left';
  reform.innerHTML = '';
  correct.innerHTML = '';
  outp.innerHTML = '';
  FinalAns = '';
  correctop.innerHTML = '';
}