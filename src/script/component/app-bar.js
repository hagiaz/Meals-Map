class AppBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
        this.innerHTML =`
        <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container">
        <a href="#" class="navbar-brand d-flex align-items-center">
              <img src="https://www.pikpng.com/pngl/b/36-369676_food-court-icon-png-png-download-app-icon.png" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"></img>
              Meals Map
        </a>
        <a id="subtitle">Get your recipes now!</a></div>`;
    }
}

customElements.define('app-bar', AppBar);