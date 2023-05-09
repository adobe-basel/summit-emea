export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      } else {
        col.classList.add('class', 'columns-text-col');
        const p = col.querySelector('p');
        const h2 = document.createElement('h2');
        h2.textContent = p.textContent;
        h2.setAttribute('class', 'pod-title');
        p.replaceWith(h2);
      }
    });
  });
}
