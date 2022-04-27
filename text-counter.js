String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};

var nom = document.getElementById("num-of-words");

function count(text_input){
  alert('This is what you inputted: {}'.format(text_input));
  let all_chars = text_input.split(" ");
  nom.innerHTML = "The Number Of Words In Your Text: {}".format(all_chars.length);
};