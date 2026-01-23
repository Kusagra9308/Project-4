const postListContainer = document.querySelector(".post-list-container");

function fetchUsingXhr() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.responseType = "json";

    xhr.onload = () => {
    if (xhr.status === 200) {
      display(xhr.response);
    }
  };

  xhr.send();
  xhr.send();
}

function display(posts) {
  postListContainer.innerHTML = posts.map(
    (postItem) => `
        <div class="Post Item"> </div>
        <h3>${postItem.title}</h3>
<p> ${postItem.body}</p>
        `,
     )
    .join(""); 
}

fetchUsingXhr();
