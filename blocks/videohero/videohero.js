export default async function decorate(block) {
    const blockWrapper = block.parentElement;
    const blockContainer = blockWrapper.parentElement;

    const videoUrl = blockContainer.getAttribute("data-videourl");
    const startAndLocation = blockContainer.getAttribute("data-startdateandlocation");

    const divVdeo = document.createElement('div');
    divVdeo.innerHTML = `
    <video class="home-video-banner" autoplay="" loop="" muted="">
        <source src="${videoUrl}" type="video/mp4">
    </video>
    `;

    divVdeo.classList.add("heroVideo");

    const divRow = block.querySelector(':scope > div ');
    const divContent = divRow.querySelector(':scope > div');
    divContent.classList.add("heroContent");
    divRow.append(divVdeo);
}