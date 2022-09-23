class AppFooter extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
      this.render();
    }
   
    render() {
        this.shadowDOM.innerHTML =`
        <style>
        #footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 12rem;
            background-color: #212529;
            text-align: center;
            color:white;
          }
          
          footer a {
            text-decoration: none;
          }
          
          footer a:hover{
            color: white;
          }
          
          @media screen and (max-width: 800px) {
            #footer {
              position: absolute;
              padding-top:1rem;
              bottom: 0;
              width: 100%;
              height: 10rem;
              font-size: 10px;
            }

            #footer p{
              font-size:12px;
            }
          }
        </style>

        <footer id="footer" class="bg-dark text-white text-center pb-5";">
        <br>
        <p>&copy; 2022 Hagi Azzam Azzikri</p>
        <p>Final Project Kelas Belajar Fundamental Front-End Web - Dicoding Academy</p>
        <p>
            <a href=#>Back To Top</a>
        </p>
        </footer>`;
    }
}

customElements.define('app-footer', AppFooter);