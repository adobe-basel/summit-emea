export default async function decorate(block) {
    const blockWrapper = block.parentElement;
    const blockContainer = blockWrapper.parentElement;

    const videUrl = blockContainer.getAttribute("data-videourl");
    const startAndLocation = blockContainer.getAttribute("data-startdateandlocation");

    const section = document.createElement('div');

}