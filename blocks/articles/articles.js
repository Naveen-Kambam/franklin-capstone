async function loadJson(path) {
  console.log(path);
  if (path) {
    const resp = await fetch(path, {
      method: "GET",
      headers: {
        mode: "cors",
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (resp.ok) {
      let data = await resp.json();
      let parentDiv = document.createElement("div");
      let ul = document.createElement("ul");
      data["data"].forEach((element) => {
        if (element["path"].startsWith("/articles")) {
          let li = document.createElement("li");
          let liData = `<a href="${element.path}">
                        <picture class='article-img'>
                            <source type="image/webp" srcset="${element.image}" width='260px'
                            height='200px'>
                            <img loading="lazy" alt="" src="${element.image}" width='260px'
                            height='200px'>
                        </picture>
                        <span>${element.title}</span>
                      </a> 
                      <span>${element.description}</span>`;
          li.classList = "list-item";
          li.innerHTML = liData;
          ul.appendChild(li);
        }
      });
      ul.classList = "articles-list";
      //parentDiv.appendChild(ul);
      //parentDiv.classList = "articles-list";
      block.appendChild(ul);
    }
  } else {
    let defaultData = document.createElement("p");
    defaultData.innerHTML = "No Data Found";
    block.appendChild(defaultData);
  }
}

export default async function decorate(block) {
  const resp = loadJson("/query-index.json");
}

let block = document.getElementsByClassName("articles")[0];
