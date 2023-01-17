let comments = [];

loadComments();

let button = (document.querySelector("button").onclick = function () {
  let inputName = document.querySelector(".nameinput");
  let textareaComments = document.querySelector(".comment");

  let comment = {
    name: inputName.value,
    body: textareaComments.value,
  };
  inputName.value = " ";
  textareaComments.value = " ";

  comments.push(checkspam(comment));
  showComments();
});

function loadComments() {
  if (localStorage.getItem("comments"))
    comments = JSON.parse(localStorage.getItem("comments"));
  showComments();
}

function checkspam(comment) {
  comment.body = comment.body
    .replaceAll("viagra", "***")
    .replaceAll("xxx", "***");
  comment.name = comment.name
    .replaceAll("viagra", "***")
    .replaceAll("xxx", "***");

  return comment;
}

function showComments() {
  localStorage.setItem("comments", JSON.stringify(comments));

  let resultNode = document.querySelector(".result");
  let out = "";
  comments.forEach(function (item) {
    out += `Имя: ${item.name} <br>`;
    out += `коммент: ${item.body}<br>`;
  });

  resultNode.innerHTML = out;
}
