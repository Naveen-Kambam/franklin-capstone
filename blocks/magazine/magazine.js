export default function decorate(block) {
  let card = block.children[0];
  let textSection = card.children[0];
  textSection.classList.add("text-section");
  console.log(textSection);
}
