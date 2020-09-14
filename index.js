var text = document.getElementById("text");
var shadow = "";

for (let i = 0; i < 50; i++) {
  shadow += (shadow ? "," : "") + i * 1 + "px " + i * 1 + "px 0 #321d41";
}
console.log(shadow);
text.style.textShadow = shadow;
