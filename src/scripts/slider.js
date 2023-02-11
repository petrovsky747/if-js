export default function addSlider() {
  const elem = document.querySelector('.main-carousel');
  // eslint-disable-next-line no-undef
  const flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    draggable: false,
    groupCells: true,
    pageDots: false,
    percentPosition: false,
    arrowShape: {
      x0: 35,
      x1: 60,
      y1: 35,
      x2: 70,
      y2: 35,
      x3: 45,
    },
  });
  flkty.next();
  flkty.select(4);
}
