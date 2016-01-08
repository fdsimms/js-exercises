/**
 * Initializes the Piece with its color.
 */
function Piece (color) {
  this.pieceColor = color;
}

/**
 * Returns the color opposite the current piece.
 */
Piece.prototype.oppColor = function () {
  if ( this.pieceColor == "white") {
    return "black";
  } else {
    return "white";
  }
};

/**
 * Changes the piece's color to the opposite color.
 */
Piece.prototype.flip = function () {
  if ( this.pieceColor == "white") {
    this.pieceColor = "black";
  } else {
    this.pieceColor = "white";
  }
};

/**
 * Returns a string representation of the string
 * based on its color.
 */
Piece.prototype.toString = function () {
  if ( this.pieceColor == "white") {
    return "X";
  } else {
    return "O";
  }
};

module.exports = Piece;
