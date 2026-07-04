['copy', 'cut', 'paste', 'contextmenu', 'selectstart', 'keydown'].forEach(type => {
  window.addEventListener(type, e => {
    e.stopImmediatePropagation();
  }, true);
});

document.oncopy = null;
document.oncut = null;
document.onpaste = null;
document.oncontextmenu = null;
document.onselectstart = null;
document.onkeydown = null;

document.querySelectorAll('*').forEach(el => {
  el.style.userSelect = 'text';
  el.style.webkitUserSelect = 'text';
});
