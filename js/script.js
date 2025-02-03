var allIcons = document.querySelectorAll('div[class^=icon]');
console.log("Found", allIcons.length, "div which class starts with icon");

for (var i = 0; i < allIcons.length; i++) {
    allIcons[i].addEventListener('click', function(icon) {
    console.clear();
    console.log("You clicked: ", icon.target.id);
  });
}

