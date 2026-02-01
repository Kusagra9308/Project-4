const postListContainer = document.querySelector<HTMLElement>(".post-list-container");

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
}

type posts = {
  title: string;
  body: string;
};


function display(posts  : posts[]) {
  if (postListContainer){
postListContainer.innerHTML = posts.map(
    (postItem) => `
        <div class="Post Item"> </div>
        <h3>${postItem.title}</h3>
<p> ${postItem.body}</p>
        `,
     )
    .join(""); 
}
  }
  

fetchUsingXhr();
