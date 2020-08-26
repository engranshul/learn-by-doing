// chessboard printing with the help of string

/* The concat() method is used to join two or more strings.This
method does not change the existing strings, but returns a new 
string containing the text of the joined strings. */

// my solution
let printChessBoard = (chessBoardLen) => {
    let flag = true;
    for (i = 1; i <= chessBoardLen; i++) {

        let str = "";
        flag = !flag;

        for (j = 1; j <= chessBoardLen; j++) {
            if (flag) {
                if (j % 2 == 0) {
                    str = str.concat(" ") // earlier i was not assigning that was leading to bug
                }
                else {
                    str = str.concat("#")
                }
            }
            else {
                if (j % 2 == 0) {
                    str = str.concat("#")
                }
                else {
                    str = str.concat(" ")
                }
            }
        }
        console.log("value is", str);
    }
}

printChessBoard(16);

/* book solution learning :
plus operator can be used instead of concat
\n appending for printing next line
x+y concept to shorten program

let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board); 
*/
