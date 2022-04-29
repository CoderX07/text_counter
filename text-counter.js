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
var colors = ["#000000", "#ffffff"];
var colorToggle = true;
// var json = require('./data.json');
// JSON Currently Unavaliable

function count(text_input){
  alert('This is what you inputted: {}'.format(text_input));
  let all_words = text_input.split(" ");
  let all_sent = text_input.split(".");
  let len_all_sent = all_sent.length;
  let len_all_words = all_words.length;
  for (var i = 0; i < len_all_sent; i++){
    if ((all_sent[i] == " ") || (all_sent[i] == "")){
      len_all_sent--;
    };
  };
  for (var i = 0; i < len_all_words; i++){
    if ((all_words[i] == ".") || (all_words[i] == '"')) {
      len_all_words--;
    };
  };
  nom.innerHTML = "The Number Of Words In Your Text: {}".format(len_all_words);
  nos.innerHTML = "The Number Of Sentences In Your Text: {}".format(len_all_sent);
};

open.addEventListener('click', () => {
  modal_container.classList.add('show');
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

function light_dark(choice){
  var currentColor = document.getElementById('title');
  var temp_colors = light_dark_setting.innerHTML;
  if (choice == "Light"){
    document.body.style.background = "white";
    light_dark_setting.innerHTML = "Color Theme: Light";
    if (temp_colors == "Color Theme: Dark"){
      currentColor.style.color = colors[+colorToggle];
      colorToggle = !colorToggle;
    }
  } else if (choice == "Dark"){
    document.body.style.background = "#292C35";
    light_dark_setting.innerHTML = "Color Theme: Dark";
    if (temp_colors == "Color Theme: Light"){
      currentColor.style.color = colors[+colorToggle];
      colorToggle = !colorToggle;
    }
  };
};