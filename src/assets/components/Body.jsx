function Body(){
 return (
  <section className="home section" id="home">
        <div className="home__container container grid">
          <h1 className="home__name">Exemple_Model</h1>

          <div className="home__perfil">
            <div className="home__image">
              <img alt="image" className="home__img" />
              <div className="home__shadow"></div>

              <img
                src="assets/img/curved-arrow.svg"
                alt=""
                className="home__arrow"
              />
              <img
                src="assets/img/random-lines.svg"
                alt=""
                className="home__line"
              />

              <div className="geometric-box"></div>
            </div>

            <div className="home__social">
              <a
                href=""
                target="_blank"
                className="home__social-link"
              >
                <i className="ri-instagram-line"></i>
              </a>

              <a
                href=""
                target="_blank"
                className="home__social-link"
              >
                <i className="ri-facebook-circle-line"></i>
              </a>

              <a
                href=""
                target="_blank"
                className="home__social-link"
              >
                <i className="ri-whatsapp-line"></i>
              </a>
              
            </div>
          </div>
           

          <div className="home__info">
            <p className="home__description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit nesciunt maxime ea, nulla fuga unde dignissimos adipisci qui quam. Doloremque iste eum modi odio ea esse nulla facere velit?
            </p>

            <a href="#about" className="home__scroll">
              <div className="home__scroll-box">
                <i className="ri-arrow-down-s-line"></i>
              </div>

              <span className="home__scroll-text">Scroll Down</span>
            </a>
          </div>
        </div>
      </section>
 )
}
export default Body