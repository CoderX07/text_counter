String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};

var nom = document.getElementById("num-of-words");
var nos = document.getElementById("num-of-sent");
const open = document.getElementById('settings');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');
const light_dark_setting = document.getElementById('light-dark-set');
const menuitem = document.getElementById('demo1');
var currentColor = document.getElementById('title');
var pTagWordsColor = document.getElementById('num-of-words');
var pTagSentColor = document.getElementById('num-of-sent');
var pTagViewsColor = document.getElementById('views');
var pTagLikesColor = document.getElementById('likes');
var heartColor = document.getElementsByClassName('material-icons md-24');
var colors = ["#000000", "#ffffff"];
var colorToggle = true;
var light_dark_store = localStorage.getItem('Light_Dark');
const json = require('./data.json');
// JSON Currently Unavaliable
heartColor = heartColor[0];
pTagViewsColor.innerHTML = "Views | {}".format(json.views.toString());
console.log(json.views.toString());

if (light_dark_store == null){ light_dark_store = "true"; }
light_dark_store = JSON.parse(light_dark_store);
if (!light_dark_store){
  document.body.style.background = "#292C35";
  light_dark_setting.innerHTML = "Color Theme: Dark";
  currentColor.style.color = colors[+colorToggle];
  pTagWordsColor.style.color = colors[+colorToggle];
  pTagSentColor.style.color = colors[+colorToggle];
  pTagViewsColor.style.color = colors[+colorToggle];
  pTagLikesColor.style.color = colors[+colorToggle];
  heartColor.style.color = colors[+colorToggle];
  document.body.classList.toggle('dark');
  colorToggle = !colorToggle;
}

function count(text_input){
  alert('This is what you inputted: {}'.format(text_input));
  let all_words = text_input.split(" ");
  let all_sent = text_input.split(".");
  let len_all_sent = all_sent.length;
  let len_all_words = all_words.length;
  for (var i = 0; i < len_all_words; i++){
    for (var j = 0; j < all_words[i].length; j++){
      if (all_words[i][j] == "\n"){
        all_words[i] = all_words[i].split("\n");
      }
    }
  }
  all_words = [].concat.apply([], all_words);
  len_all_words = all_words.length;
  for (var i = 0; i < len_all_sent; i++){
    if ((all_sent[i] == " ") || (all_sent[i] == "") || (all_sent[i] == '"') || (all_sent[i] == "???")){
      len_all_sent--;
    };
  };
  for (var i = 0; i < len_all_words; i++){
    if ((all_words[i] == ".") || (all_words[i] == '"') || (all_words[i] == "-") || (all_words[i] == "")) {
      len_all_words--;
    };
  };
  nom.innerHTML = "The Number Of Words In Your Text: {}".format(len_all_words);
  nos.innerHTML = "The Number Of Sentences In Your Text: {}".format(len_all_sent);
};

open.addEventListener('click', () => {
  modal_container.classList.add('show');
  document.getElementById('temp-vis').style.display = "block";
  document.getElementById('temp-vis').style.opacity = 1;
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});



function light_dark(choice){
  var temp_colors = light_dark_setting.innerHTML;
  if ((choice == "Light")){
    document.body.style.background = "white";
    light_dark_setting.innerHTML = "Color Theme: Light";
    if (temp_colors == "Color Theme: Dark"){
      currentColor.style.color = colors[+colorToggle];
      pTagWordsColor.style.color = colors[+colorToggle];
      pTagSentColor.style.color = colors[+colorToggle];
      pTagViewsColor.style.color = colors[+colorToggle];
      pTagLikesColor.style.color = colors[+colorToggle];
      heartColor.style.color = colors[+colorToggle];
      document.body.classList.toggle('dark');
      colorToggle = !colorToggle;
      light_dark_store = !light_dark_store;
    }
  } else if ((choice == "Dark")){
    document.body.style.background = "#292C35";
    light_dark_setting.innerHTML = "Color Theme: Dark";
    if (temp_colors == "Color Theme: Light"){
      currentColor.style.color = colors[+colorToggle];
      pTagWordsColor.style.color = colors[+colorToggle];
      pTagSentColor.style.color = colors[+colorToggle];
      pTagViewsColor.style.color = colors[+colorToggle];
      pTagLikesColor.style.color = colors[+colorToggle];
      heartColor.style.color = colors[+colorToggle];
      document.body.classList.toggle('dark');
      colorToggle = !colorToggle;
      light_dark_store = !light_dark_store;
    }
  };
};

window.addEventListener("beforeunload", function () { localStorage.setItem("Light_Dark", '{}'.format(light_dark_store.toString())); });