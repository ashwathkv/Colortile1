/*var reference = {
    "tile-1" : ["tile-2","tile-6"],
    "tile-2" : ["tile-1","tile-3","tile-7"],
    "tile-3" : ["tile-2","tile-4","tile-8"],
    "tile-4" : ["tile-3","tile-5","tile-9"],
    "tile-5" : ["tile-4","tile-10"],
    "tile-6" : ["tile-1","tile-7","tile-11"],
    "tile-7" : ["tile-6","tile-8","tile-2","tile-12"],
    "tile-8" : ["tile-7","tile-9","tile-3","tile-13"],
    "tile-9" : ["tile-8","tile-10","yile-4","tile-14"],
    "tile-10" : ["tile-9","tile-5","tile-15"],
    "tile-11" : ["tile-12","tile-6","tile-16"],
    "tile-12" : ["tile-11","tile-13","tile-7","tile-17"],
    "tile-13" : ["tile-12","tile-14","tile-8","tile-18"],
    "tile-14" : ["tile-13","tile-15","tile-9","tile-19"],
    "tile-15" : ["tile-14","tile-10","tile-20"],
    "tile-16" : ["tile-17","tile-11","tile-21"],
    "tile-17" : ["tile-16","tile-18","tile-12","tile-22"],
    "tile-18" : ["tile-17","tile-19","tile-13","tile-23"],
    "tile-19" : ["tile-18","tile-20","tile-14","tile-24"],
    "tile-20" : ["tile-19","tile-15","tile-25"],
    "tile-21" : ["tile-22","tile-16"],
    "tile-22" : ["tile-21","tile-23","tile-17"],
    "tile-23" : ["tile-22","tile-24","tile-18"],
    "tile-24" : ["tile-23","tile-25","tile-19"],
    "tile-25" : ["tile-24","tile-20"]
};
*/
/*function checkReference(string1,string2){
    let flag = 0;
    if(reference.hasOwnProperty(string1)){
        reference[string1].forEach(checkFunction);
        function checkFunction(string){
            if(string2==string)
                flag++;
        }
    }
    if(flag>0)
        return true;
    else
        return false;
}


function clickingTile(clickingElementId){
    let clickingElement = document.getElementById(clickingElementId);
    let emptyElement = document.getElementsByClassName("empty")[0];
    let emptyElementId = emptyElement.id;
    if(!(clickingElement==emptyElement) && checkReference(clickingElementId,emptyElementId))
    {
        emptyElement.className = clickingElement.className;
        clickingElement.className = "empty";
    }
}
clickingTile("tile-24");
*/




var moves=0;


function swapTiles(cell1,cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
}


function shuffleq() {
    //Use nested loops to access each cell of the 5x5 grid
    for (var row=1;row<=5;row++) { //For each row of the 5x5 grid
       for (var column=1;column<=5;column++) { //For each column in this row
      
        var row2=Math.floor(Math.random()*5 + 1); //Pick a random row from 1 to 5
        var column2=Math.floor(Math.random()*5 + 1); //Pick a random column from 1 to 5
         
        swapTiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells
        } 
    } 
}

function shufflea() {
  //Use nested loops to access each cell of the 3x3 grid
  for (var row=1;row<=3;row++) { //For each row of the 3x3 grid
     for (var column=1;column<=3;column++) { //For each column in this row
    
      var row2=Math.floor(Math.random()*3 + 1); //Pick a random row from 1 to 3
      var column2=Math.floor(Math.random()*3 + 1); //Pick a random column from 1 to 3
       
      swapTiles("cella"+row+column,"cella"+row2+column2); //Swap the look & feel of both cells
      } 
  } 
}

function clickTile(row,column) {
    var cell = document.getElementById("cell"+row+column);
    var tile = cell.className;

    if(tile!="empty") { 
         //Checking if white tile on the right
         if (column<5) {
           if ( document.getElementById("cell"+row+(column+1)).className=="empty") {
             swapTiles("cell"+row+column,"cell"+row+(column+1));
             moves++;
             document.getElementById("moves").innerHTML=moves;
             return;
           }
         }
         //Checking if white tile on the left
         if (column>1) {
           if ( document.getElementById("cell"+row+(column-1)).className=="empty") {
             swapTiles("cell"+row+column,"cell"+row+(column-1));
             moves++;
             document.getElementById("moves").innerHTML=moves;
             return;
           }
         }
           //Checking if white tile is above
         if (row>1) {
           if ( document.getElementById("cell"+(row-1)+column).className=="empty") {
             swapTiles("cell"+row+column,"cell"+(row-1)+column);
             moves++;
             document.getElementById("moves").innerHTML=moves;
             return;
           }
         }
         //Checking if white tile is below
         if (row<5) {
           if ( document.getElementById("cell"+(row+1)+column).className=="empty") {
             swapTiles("cell"+row+column,"cell"+(row+1)+column);
             moves++;
             document.getElementById("moves").innerHTML=moves;
             return;
           }
        } 
    }    
}
function movesReinit(){
  moves=0;
  document.getElementById("moves").innerHTML=moves;
}
var x = [[0,0,0],
         [0,0,0],
         [0,0,0]]
// function gameOver(){
  
//   for(let i=2;i<=4;i++){
//     for(let j=2;j<=4;j++){
//       if( document.getElementById("cell"+i+j).style.background==document.getElementById("cella"+(i-1)+(j-1)).style.background){
//           x[i-2][j-2]=1;
//           console.log(document.getElementById("cell"+i+j).style.background,document.getElementById("cella"+(i-1)+(j-1)).style.background);
//       }
//       else{
//           x[i-2][j-2]=0;
//       }
      
//     }
//   }
//   check(x);
// }
// function gameOver(){
//   for(let i=7;i<=19;i++){
//     if(document.getElementsByClassName("tile-"+i)==document.getElementsByClassName("tilea-"))
//   }
// }
function check(x){
  var count = 0;
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      if(x[i][j]==1)
        count+=1;
    }
  }
  if(count==9){
    alert("GAME OVER, CONGRATULATIONS");
  }
}