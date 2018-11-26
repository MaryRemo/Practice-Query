
// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

document.querySelector(".article__header").textContent = "Welcome to the Mary Remo Blog";

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

const headers = document.querySelectorAll(".article__header")
for (i=0; i<headers.length; i++) {
  headers[i].classList.add("Important")
 console.log(i,headers[i])
}

// Obtain a reference the element with a class of dashed and remove it.

const asideBox= document.querySelector(".dashed");
   asideBox.classList.remove("dashed"); 

//    Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

const author= document.querySelector(".article__footer");
   author.classList.add("goldenrod");

