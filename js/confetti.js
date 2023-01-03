function createConfettiPiece(parent) {
  // create the confetti piece element
  let confettiPiece = document.createElement("div");

  // set the CSS styles for the confetti piece
  confettiPiece.style.position = "absolute";
  confettiPiece.style.width = "10px";
  confettiPiece.style.height = "10px";
  confettiPiece.style.backgroundColor = getRandomColor(); // set the background color to a random color
  confettiPiece.style.borderRadius = "50%";

  // add the confetti piece to the parent element
  parent.appendChild(confettiPiece);

  // set the initial position of the confetti piece
  let x = Math.floor(Math.random() * window.innerWidth);
  let y = -10;
  confettiPiece.style.left = x + "px";
  confettiPiece.style.top = y + "px";

  // set the initial velocity of the confetti piece
  let velocity = {
    x: (Math.random() - 0.5) * 5,
    y: (Math.random() + 1) * 5,
  };

  // update the position of the confetti piece
  this.update = function () {
    x += velocity.x;
    y += velocity.y;

    // if the confetti piece is off the screen, reset its position
    if (y > window.innerHeight) {
      x = Math.floor(Math.random() * window.innerWidth);
      y = -10;
    }

    confettiPiece.style.left = x + "px";
    confettiPiece.style.top = y + "px";
  };

  // draw the confetti piece
  this.draw = function () {
    // the draw function does not need to do anything in this case because the confetti piece is a div element with CSS styles applied to it
  };
}

// generate a random color
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function startConfetti() {
  // get the body element
  let body = document.body;

  // create an array to store the confetti pieces
  let pieces = [];

  // create the particle objects and add them to the pieces array
  for (let i = 0; i < 50; i++) {
    pieces.push(new createConfettiPiece(body));
  }

  // start the animation loop
  animate();

  function animate() {
    // loop through the pieces array and update the positions of the confetti pieces
    for (let i = 0; i < pieces.length; i++) {
      let piece = pieces[i];
      piece.update();
      piece.draw();
    }

    // request another animation frame
    requestAnimationFrame(animate);
  }
}
