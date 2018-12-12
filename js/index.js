// JS goes here

// -------- js for menu
class HamburgerMenu {
  constructor(element) {
    // assign this.element to the nav-container element
    this.element = element;
    // assign hamburger-menu (div)
    this.hamburgerDiv = this.element.querySelector('.hamburger-menu');
    // assign hamburger and close imgs
    this.hamburgerImg = this.element.querySelector('.hamburger');
    this.closeImg = this.element.querySelector('.hamburger-close');
    // get active page, set active page
    this.currentPage = this.element.dataset.page;
    this.element.querySelector(`a[data-page="${this.currentPage}"]`).classList.add('current-page');
    // add event listener for hamburger click
    this.hamburgerDiv.addEventListener('click', () => this.toggleHamburger());
  }

  toggleHamburger() {
    this.hamburgerImg.classList.toggle('hide');
    this.closeImg.classList.toggle('hide');
    this.element.classList.toggle('show');
  }
}

let hamburgerMenu = new HamburgerMenu(document.querySelector('.nav-container'));
