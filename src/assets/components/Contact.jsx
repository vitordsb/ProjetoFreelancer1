export default function Contact(){
 return (
  <section className="contact section" id="contact">
        <div className="contact__container grid">
          <div className="contact__data">
            <h2 className="section__title-2">
              <span>Contato.</span>
            </h2>

            <p className="contact__description-1">
              Leio todos os e-mails. Me envie qualquer mensagem e ficarei feliz
              em te responder.
            </p>

            <p className="contact__description-2">
              Preciso do seu <b>Nome</b> e <b>Email</b>, você não receberá
              nenhum spam, somente a sua resposta.
            </p>

            <div className="geometric-box"></div>
          </div>

          <div className="contact__mail">
            <h2 className="contact__title">Me envie uma mensagem</h2>

            <form action="" className="contact__form" id="contact-form" method="POST">
              <div className="contact__group">
                <div className="contact__box">
                  <input type="text"name="name"className="contact__input"id="name"required placeholder="Nome"/>
                  <label className="contact__label">Primeiro Nome</label>
                </div>

                <div className="contact__box">
                  <input type="email"name="email"className="contact__input"id="email"required placeholder="Email"/>
                  <label className="contact__label">Email</label>
                </div>
              </div>

              <div className="contact__box contact__area">
                <textarea name="__subject"className="contact__input"id="message"required placeholder="Menssagem"></textarea>
                <label className="contact__label" value="Novo contato">Menssagem</label>
              </div>

              <p className="contact__message" id="contact-message"></p>

              <button type="submit" className="contact__button button">
                <i className="ri-send-plane-line"></i> Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="contact__social">
            <img
              src="assets/img/curved-arrow.svg"
              alt=""
              className="contact__social-arrow"
            />

            <div className="contact__social-data">
              <div>
                <p className="contact__social-description-1">
                  Se não quiser enviar emails
                </p>

                <p className="contact__social-description-2">
                  Entre em contato pelas nossas redes sociais
                </p>
              </div>

              <div className="contact__social-links">
                <a
                  href=""
                  className="contact__social-link"
                  target="_blank"
                >
                  <i className="ri-facebook-circle-line"></i>
                </a>
                <a
                  href=""
                  className="contact__social-link"
                  target="_blank"
                >
                  <i className="ri-whatsapp-line"></i>
                </a>

                <a
                  href=""
                  className="contact__social-link"
                  target="_blank"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
 )
}