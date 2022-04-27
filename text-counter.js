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
  let all_chars = text_input.split(" ");
  let all_sent = text_input.split(".");
  nom.innerHTML = "The Number Of Words In Your Text: {}".format(all_chars.length);
  nos.innerHTML = "The Number Of Sentences In Your Text: {}".format(all_sent.length);
};