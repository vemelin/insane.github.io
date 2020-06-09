const styles = () => {
  const style = document.createElement('style');
  style.id = 'accordion-styles';
  style.type = 'text/css';
  style.textContent = `
    /* Main navigation */
    .selected {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  `;
  document.head.appendChild(style);
};

const mainNav = () => {

  styles();

  const open = document.querySelector('.menu'),
    modal = document.querySelector('.popup-dialog-menu'),
    wrapper = document.querySelector('.popup-menu');

  open.addEventListener('click', () => modal.classList.toggle('selected'));

  modal.addEventListener('click', e => {
    if (e.target.classList.contains('close-menu')) {
      modal.classList.toggle('selected');
    } else if (e.target.closest('.popup-dialog-menu')) {
      modal.classList.toggle('selected');
    }
  });

};

export default mainNav;


    
// .visible {
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex; }
//   .visible-content {
//     display: block; }
//     @media (max-width: 1024px) and (min-width: 576px) {
//       .visible-content {
//         display: -webkit-box;
//         display: -ms-flexbox;
//         display: flex;
//         -webkit-box-orient: horizontal;
//         -webkit-box-direction: normal;
//         -ms-flex-direction: row;
//         flex-direction: row;
//         -ms-flex-pack: distribute;
//         justify-content: space-around; } }
//     .visible-content-block {
//       display: block; }