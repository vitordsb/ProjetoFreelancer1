export default function Footer(){
 return (
  <footer className="footer">
      <div className="footer__container container grid">
        <ul className="footer__links">
          <li>
            <a href="#home" className="footer__link">Home</a>
          </li>

          <li>
            <a href="termos_de_uso.html" className="footer__link" target="_blank"
              >Termos de Uso</a
            >
          </li>

          <li>
            <a
              href="politicas_de_privacidade.html"
              className="footer__link"
              target="_blank"
              >Políticas de Privacidade</a
            >
          </li>
        </ul>

        <span className="footer__copy">
          &#169; All Rights Reserved By Exemple
        </span>
      </div>
      <div className="footer__fbdisclaimer">
        Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.
        Depois que você sair do Facebook, a responsabilidade não é deles e sim
        do nosso site. Fazemos todos os esforços para indicar claramente e
        mostrar todas as provas do produto e usamos resultados reais. Nós não
        vendemos o seu e-mail ou qualquer informação para terceiros. Jamais
        fazemos nenhum tipo de spam. Se você tiver alguma dúvida, sinta-se à
        vontade para usar o link de contato e falar conosco em horário comercial
        de Segunda a Sextas das 09h00 ás 18h00. Lemos e respondemos todas as
        mensagens por ordem de chegada.
      </div>
    </footer>
 )
}