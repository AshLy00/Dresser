let front = ["Flequillo_1", "Flequillo_2", "Flequillo_3"];
let front_btn_r = document.getElementById("button_right_1");
front_btn_r.addEventListener("click", nextFront);
let front_btn_l = document.getElementById("button_left_1");
front_btn_l.addEventListener("click", prevFront);

let current_front = 0;
function nextFront() {
  current_front++;
  if (current_front >= front.length) {
    current_front = 0;
  }
  updateFrontImage();
}

function prevFront() {
  current_front--;
  if (current_front < 0) {
    current_front = front.length - 1;
  }
  updateFrontImage();
}

function updateFrontImage() {
  let front_img = document.getElementById("front");
  front_img.src = "./images/" + front[current_front] + ".png";
}

let hair = ["Cabello_1", "Cabello_2", "Cabello_3"];
let hair_btn_r = document.getElementById("button_right_2");
hair_btn_r.addEventListener("click", nextHair);
let hair_btn_l = document.getElementById("button_left_2");
hair_btn_l.addEventListener("click", prevHair);

let current_hair = 0;
function nextHair() {
  current_hair++;
  if (current_hair >= hair.length) {
    current_hair = 0;
  }
  updateHairImage();
}

function prevHair() {
  current_hair--;
  if (current_hair < 0) {
    current_hair = hair.length - 1;
  }
  updateHairImage();
}

function updateHairImage() {
  let hair_img = document.getElementById("hair");
  hair_img.src = "./images/" + hair[current_hair] + ".png";
}

let face = ["Expresion_1", "Expresion_2", "Expresion_3"];
let face_btn_r = document.getElementById("button_right_3");
face_btn_r.addEventListener("click", nextFace);
let face_btn_l = document.getElementById("button_left_3");
face_btn_l.addEventListener("click", prevFace);

let current_face = 0;
function nextFace() {
  current_face++;
  if (current_face >= face.length) {
    current_face = 0;
  }
  updateFaceImage();
}

function prevFace() {
  current_face--;
  if (current_face < 0) {
    current_face = face.length - 1;
  }
  updateFaceImage();
}

function updateFaceImage() {
  let face_img = document.getElementById("face");
  face_img.src = "./images/" + face[current_face] + ".png";
}

let body = ["Ropa_1", "Ropa_2", "Ropa_3"];
let body_btn_r = document.getElementById("button_right_4");
body_btn_r.addEventListener("click", nextBody);
let body_btn_l = document.getElementById("button_left_4");
body_btn_l.addEventListener("click", prevBody);

let current_body = 0;
function nextBody() {
  current_body++;
  if (current_body >= body.length) {
    current_body = 0;
  }
  updateBodyImage();
}

function prevBody() {
  current_body--;
  if (current_body < 0) {
    current_body = body.length - 1;
  }
  updateBodyImage();
}

function updateBodyImage() {
  let body_img = document.getElementById("body");
  body_img.src = "./images/" + body[current_body] + ".png";
}

let background = ["Fondo_1", "Fondo_2", "Fondo_3"];
let background_btn = document.getElementById("button_background");
background_btn.addEventListener("click", nextBackground);

let current_background = 0;
function nextBackground() {
  current_background++;
  if (current_background >= front.length) {
    current_background = 0;
  }
  let background_img = document.getElementById("background");
  background_img.src = "./images/" + background[current_background] + ".png";
}
