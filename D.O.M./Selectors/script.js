const importantItem = document.querySelectorAll(".important");

for (let item of importantItem) {
  item.title = "This is an important item";
}

const imgs = document.querySelectorAll("img");

imgs.forEach((image) => {
  if (!image.classList.contains("important")) {
    image.style.display = "none";
  }
});

const paragraphs = document.querySelectorAll("p");
paragraphs.forEach(paragraph => {
  const item = paragraph.textContent;
  console.log(item);

  if (!paragraph.classList.length) {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    paragraph.style.color = randomColor;
  } else {
    console.log(`Classname: ${paragraph.className}`);
  }
});
