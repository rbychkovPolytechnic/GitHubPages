function popWindow() {
  
  const element = document.getElementById('for_test');
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  element.style.color = randomColor;
}


