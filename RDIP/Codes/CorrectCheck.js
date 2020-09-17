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



