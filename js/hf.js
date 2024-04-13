const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
<div class="menu-conteudos">
        
<div class="logo">    
    <a href="index.html">
        <img src="assets/images/logonomade.png" alt="Logo do site">
    </a>
</div>

<nav class="menu-d">
    <div class="alt-menu">
            <ul>
                <li><a class="links" href="index.html" target="_self">Home</a></li>
                <li><a class="links" href="Dica_viajante.html" target="_self">Dicas Viajantes</a></li>
                <li><a class="links" href="dia-a-dia.html" target="_self">Dia a dia</a></li>
                <li><a class="links" href="vagasremotas.html" target="_self">Vagas Remotas</a></li>
                <li><a class="links" href="https://tinyurl.com/nomadesmundo" target="_blank">Contato</a></li>
            </ul>
            </div>
</nav>
     <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul class="menu-mobile">
              <li><a class="links-m" href="index.html"><span class="material-icons">other_houses</span>Home</a></li>
              <li><a class="links-m" href="Dica_viajante.html"><span class="material-icons">diversity_1</span>Dicas Viajantes</a></li>
              <li><a class="links-m" href="dia-a-dia.html"><span class="material-icons">explore</span>Dia a dia</a></li>
              <li><a class="links-m" href="vagasremotas.html"><span class="material-icons">flight_takeoff</span>Vagas Remotas</a></li>
              <li><a class="links-m" href="https://tinyurl.com/nomadesmundo"><span class="material-icons">perm_phone_msg</span>Contato</a></li>
            </ul>
          </div>
    
    </div>
`;

footer.innerHTML = `
<div class="rodape-area">
            <div class="rodape-conteudos"><img src="assets/images/logotipo.png" alt="Logotipo nomades"></div>
            <div class="rodape-conteudos">
                <h4 class="titulo-footer termos">Termos e Privacidade</h4>
                <ul class="lista-footer">
                    <li><a class="links-footer" href="#" target="_self">Termos de uso</a></li>
                    <li><a class="links-footer" href="#" target="_self">Política de Cookies</a></li>
                    <li><a class="links-footer" href="#" target="_self">Privacidade</a></li>
                </ul>
            </div>
            <div class="rodape-conteudos">
                <h4 class="titulo-footer canais">Canais para contato</h4>
                <p>(84) 99640-1000</p>
                <p>contato@nomadespelomundo.com.br</p>
                <div class="area-sociais">
                    <div class="icone-sociais"><img src="assets/images/sociais/face.png" alt="Logo facebook"></div>
                    <div class="icone-sociais"><img src="assets/images/sociais/insta.png" alt="Logo instagram"></div>
                    <div class="icone-sociais"><img src="assets/images/sociais/link.png" alt="Logo linkedin"></div>
                    <div class="icone-sociais"><img src="assets/images/sociais/whats.png" alt="Logo whatsapp"></div>
                </div>
                
            </div>
        </div>
`;
