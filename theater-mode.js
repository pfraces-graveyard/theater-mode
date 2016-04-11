(function (hide, show, background, dom) {
  dom(hide, 'body *');
  dom(show, 'video, object');
  dom(background('#000', '3s'), 'body');
})(
  function hide (node) { node.style.visibility = 'hidden'; },
  function show (node) { node.style.visibility = 'visible'; },
  function background (color, transition) {
    return function (node) {
      node.style.transition = 'background-color ' + transition;
      node.style.backgroundColor = color;
    };
  },
  function dom (iteratee, selector) {
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) { iteratee(elements[i]); }
  }
);
