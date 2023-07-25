import "./styles.css";

function buttonStuff() {
  //alert("btn"); //testing purposes coz dis function wasnt working, see below
  console.log("hello world");
  document.getElementById("my-heading").innerHTML = "My notebook";
}
window.buttonStuff = buttonStuff; /*  dunno what this does,
                                      dont't care,
                                      I spent way too much time
                                      for a function to work in this code-web-made-easy-paradise
                                      (had this laying around from an old project)
                                  */

function addStuff() {
  let ul = document.getElementById("my-ul-list");
  let li = document.createElement("li");
  li.appendChild(
    document.createTextNode(document.getElementById("my-textarea").value)
  );
  ul.appendChild(li);
}
window.addStuff = addStuff; // see above
