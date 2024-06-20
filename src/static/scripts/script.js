var handlers = document.querySelectorAll('.handle');
var main = document.querySelector('main');
var left = main.querySelector('.left_params');
var right = main.querySelector('.right_params');
var isDragging = false;
var activeHandler = null;

document.addEventListener('mousedown', function(e) {
  handlers.forEach(handler => {
    if (e.target === handler) {
      isDragging = true;
      activeHandler = handler;
    }
  });
});

document.addEventListener('mousemove', function(e) {
  if (!isDragging) {
    return false;
  }

  var containerOffsetLeft = main.offsetLeft;
  var containerOffsetRight = main.offsetLeft + main.offsetWidth;

  if (activeHandler.classList.contains('left-handle')) {
    var pointerRelativeXpos = e.clientX - containerOffsetLeft;
    var boxMinWidth = 100;
    left.style.width = (Math.max(boxMinWidth, pointerRelativeXpos - 5)) + 'px';
    left.style.flexGrow = 0;
  }

  if (activeHandler.classList.contains('right-handle')) {
    var pointerRelativeXpos = containerOffsetRight - e.clientX;
    var boxMinWidth = 100;
    right.style.width = (Math.max(boxMinWidth, pointerRelativeXpos - 5)) + 'px';
    right.style.flexGrow = 0;
  }
});

document.addEventListener('mouseup', function(e) {
  isDragging = false;
  activeHandler = null;
});
