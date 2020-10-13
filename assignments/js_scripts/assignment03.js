let elem = [19];
var tag = false;

// assign each table row a variable, elem
for(var i = 1; i < 19; i++) {
  elem[i] = document.getElementById(i);
  console.log(elem[i].children.length);
  console.log(elem[i].children[4].children[0]); 
}
  elem[19] = document.getElementById("totals");

// assign each table row (but not the totals row) onClick events for add and subtract buttons 
elem[1].children[4].children[0].onclick = function(){
  add1(elem[1], elem[19], tag);
  tag = true;
};
elem[1].children[4].children[1].onclick = function(){
  sub1(elem[1], elem[19]);
  tag = true;
};
elem[1].children[4].children[2].onclick = function(){
  clear1(elem[1], elem[19]);
  if(elem[19].children[2].innerHTML == 0 && elem[19].children[3].innerHTML == 0) 
    tag = false;
  else
    tag = true;
};
elem[2].children[4].children[0].onclick = function(){
  add1(elem[2], elem[19], tag);
  tag = true;
};
elem[2].children[4].children[1].onclick = function(){
  sub1(elem[2], elem[19]);
  tag = true;
};
elem[3].children[4].children[0].onclick = function(){
  add1(elem[3], elem[19], tag);
  tag = true;
};
elem[3].children[4].children[1].onclick = function(){
  sub1(elem[3], elem[19]);
  tag = true;
};
elem[4].children[4].children[0].onclick = function(){
  add1(elem[4], elem[19], tag);
  tag = true;
};
elem[4].children[4].children[1].onclick = function(){
  sub1(elem[4], elem[19]);
  tag = true;
};
elem[5].children[4].children[0].onclick = function(){
  add1(elem[5], elem[19], tag);
  tag = true;
};
elem[5].children[4].children[1].onclick = function(){
  sub1(elem[5], elem[19]);
  tag = true;
};
elem[6].children[4].children[0].onclick = function(){
  add1(elem[6], elem[19], tag);
  tag = true;
};
elem[6].children[4].children[1].onclick = function(){
  sub1(elem[6], elem[19]);
  tag = true;
};
elem[7].children[4].children[0].onclick = function(){
  add1(elem[7], elem[19], tag);
  tag = true;
};
elem[7].children[4].children[1].onclick = function(){
  sub1(elem[7], elem[19]);
  tag = true;
};
elem[8].children[4].children[0].onclick = function(){
  add1(elem[8], elem[19], tag);
  tag = true;
};
elem[8].children[4].children[1].onclick = function(){
  sub1(elem[8], elem[19]);
  tag = true;
};
elem[9].children[4].children[0].onclick = function(){
  add1(elem[9], elem[19], tag);
  tag = true;
};
elem[9].children[4].children[1].onclick = function(){
  sub1(elem[9], elem[19]);
  tag = true;
};
elem[10].children[4].children[0].onclick = function(){
  add1(elem[10], elem[19], tag);
  tag = true;
};
elem[10].children[4].children[1].onclick = function(){
  sub1(elem[10], elem[19]);
  tag = true;
};
elem[11].children[4].children[0].onclick = function(){
  add1(elem[11], elem[19], tag);
  tag = true;
};
elem[11].children[4].children[1].onclick = function(){
  sub1(elem[11], elem[19]);
  tag = true;
};
elem[12].children[4].children[0].onclick = function(){
  add1(elem[12], elem[19], tag);
  tag = true;
};
elem[12].children[4].children[1].onclick = function(){
  sub1(elem[12], elem[19]);
  tag = true;
};
elem[13].children[4].children[0].onclick = function(){
  add1(elem[13], elem[19], tag);
  tag = true;
};
elem[13].children[4].children[1].onclick = function(){
  sub1(elem[13], elem[19]);
  tag = true;
};
elem[14].children[4].children[0].onclick = function(){
  add1(elem[14], elem[19], tag);
  tag = true;
};
elem[14].children[4].children[1].onclick = function(){
  sub1(elem[14], elem[19]);
  tag = true;
};
elem[15].children[4].children[0].onclick = function(){
  add1(elem[15], elem[19], tag);
  tag = true;
};
elem[15].children[4].children[1].onclick = function(){
  sub1(elem[15], elem[19]);
  tag = true;
};
elem[16].children[4].children[0].onclick = function(){
  add1(elem[16], elem[19], tag);
  tag = true;
};
elem[16].children[4].children[1].onclick = function(){
  sub1(elem[16], elem[19]);
  tag = true;
};
elem[17].children[4].children[0].onclick = function(){
  add1(elem[17], elem[19], tag);
  tag = true;
};
elem[17].children[4].children[1].onclick = function(){
  sub1(elem[17], elem[19]);
  tag = true;
};
elem[18].children[4].children[0].onclick = function(){
  add1(elem[18], elem[19], tag);
  tag = true;
};
elem[18].children[4].children[1].onclick = function(){
  sub1(elem[18], elem[19]);
  tag = true;
};

// create an "add1" function
function add1 (elem, totals, tag) {
  // if row is untouched
  if(elem.children[2].innerHTML == "-") {
    // update rows
      elem.children[2].innerHTML = 1;
      let par = Number.parseInt(elem.children[1].innerHTML);
      elem.children[3].innerHTML = 1 - par;
    // update totals
      let addScore = 1;
      let addOver = 0 - 3;
      addOver = Number.parseInt(addOver);
      if(tag == false){  
        totals.children[2].innerHTML = addScore;
        totals.children[3].innerHTML = addOver;
      } else {
        let currentTScore = Number.parseInt(totals.children[2].innerHTML);
        currentTScore = currentTScore + addScore;
        totals.children[2].innerHTML = currentTScore;
        let currentTOver = Number.parseInt(totals.children[3].innerHTML);
        currentTOver = currentTOver + addOver;
        totals.children[3].innerHTML = currentTOver;
      }
  }
  // if row has been touched
  else {
    // update rows
      let currentScore = elem.children[2].innerHTML;
      currentScore = Number.parseInt(currentScore);
      currentScore++;
      elem.children[2].innerHTML = currentScore;
      let par = Number.parseInt(elem.children[1].innerHTML);
      elem.children[3].innerHTML = currentScore - par;
      let currentOver = elem.children[3].innerHTML;
      currentOver = Number.parseInt(currentOver);
    // update totals
      let totalScore = totals.children[2].innerHTML;
      totalScore++;
      totals.children[2].innerHTML = totalScore;
      let totalOver = totals.children[3].innerHTML;
      totalOver++;
      totals.children[3].innerHTML = totalOver;
  }
}

// create an "sub1" function
function sub1 (elem, totals, tag) {
  if(elem.children[2].innerHTML > 1) {
    // update rows
      let currentScore = elem.children[2].innerHTML;
      currentScore = Number.parseInt(currentScore);
      currentScore--;
      elem.children[2].innerHTML = currentScore;
      let par = Number.parseInt(elem.children[1].innerHTML);
      elem.children[3].innerHTML = currentScore - par;
      let currentOver = elem.children[3].innerHTML;
      currentOver = Number.parseInt(currentOver);
    // update totals
      let totalScore = totals.children[2].innerHTML;
      totalScore--;
      totals.children[2].innerHTML = totalScore;
      let totalOver = totals.children[3].innerHTML;
      totalOver--;
      totals.children[3].innerHTML = totalOver;
  } else {
    if(elem.children[2].innerHTML == "-"){ 
      // update rows
      elem.children[2].innerHTML = 0;
      let par = Number.parseInt(elem.children[1].innerHTML);
      elem.children[3].innerHTML = 0 - par;
      // update totals
      if(tag == false){  
        totals.children[2].innerHTML = 0;
        totals.children[3].innerHTML = 0 - 4;
      } else {
        let currentTScore = Number.parseInt(totals.children[2].innerHTML);
        let addScore = Number.parseInt(elem.children[2].innerHTML);
        currentTScore = currentTScore + addScore;
        totals.children[2].innerHTML = currentTScore;
        let currentTOver = Number.parseInt(totals.children[3].innerHTML);
        let addOver = Number.parseInt(elem.children[3].innerHTML);
        currentTOver = currentTOver + addOver;
        totals.children[3].innerHTML = currentTOver;
      }
      
      
    }else{
      // update rows
        elem.children[2].innerHTML = 0;
        let currentScore = elem.children[2].innerHTML;
        currentScore = Number.parseInt(currentScore);
        let par = Number.parseInt(elem.children[1].innerHTML);
        elem.children[3].innerHTML = 0 - par;
        let currentOver = elem.children[3].innerHTML;
        currentOver = Number.parseInt(currentOver);
      // update totals
        let totalScore = totals.children[2].innerHTML;
        totalScore--;
        totals.children[2].innerHTML = totalScore;
        let totalOver = totals.children[3].innerHTML;
        totalOver--;
        totals.children[3].innerHTML = totalOver;
    }
  }
}

function clear1 (elem, totals) {
  // update rows
  if (elem.children[2].innerHTML != "-") {
      let subScore = elem.children[2].innerHTML;
      elem.children[2].innerHTML = "-";
      let currentTScore = Number.parseInt(totals.children[2].innerHTML);
      currentTScore = currentTScore - subScore;
      totals.children[2].innerHTML = currentTScore;
  }
  if (elem.children[3].innerHTML != "-") {
      let subOver = elem.children[3].innerHTML
      elem.children[3].innerHTML = "-";
      let currentTOver = Number.parseInt(totals.children[3].innerHTML);
      if(subOver < 0) {
          var subCount;
          for (var x = 0; x > subOver; x--){
            subCount++;
          }
          currentTOver = currentTOver + subCount;
      }
      else {
          currentTOver = currentTOver - subOver;
          totals.children[3].innerHTML = currentTOver;
      }
  }
}