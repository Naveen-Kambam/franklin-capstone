export default function decorate(block) {
  console.log(block);
  let img = block.firstElementChild.children;
  [...img].forEach((div) => {
    div.className = "social-img";
  });
}
