export default async function decorate(block) {
  const blockWrapper = block.parentElement;
  const blockContainer = blockWrapper.parentElement;

  const videoUrl = blockContainer.getAttribute('data-videourl');

  const divVdeo = document.createElement('div');
  divVdeo.innerHTML = `
    <video class="home-video-banner" autoplay="" loop="" muted="">
        <source src="${videoUrl}" type="video/mp4">
    </video>
    `;

  divVdeo.classList.add('hero-video');

  const divRow = block.querySelector(':scope > div ');
  const divContent = divRow.querySelector(':scope > div');
  divContent.classList.add('hero-content');
  divRow.append(divVdeo);
}
