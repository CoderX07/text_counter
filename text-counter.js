String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};

var nom = document.getElementById("num-of-words");
var nos = document.getElementById("num-of-sent");

function count(text_input){
  alert('This is what you inputted: {}'.format(text_input));
  let all_words = text_input.split(" ");
  let all_sent = text_input.split(".");
  let len_all_sent = all_sent.length;
  let len_all_words = all_words.length;
  alert("{}, {}".format(len_all_sent, all_sent));
  for (var i = 0; i < len_all_sent; i++){
    if (all_sent[i] == " "){
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