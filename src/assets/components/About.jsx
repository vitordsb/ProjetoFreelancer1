function About (){
 return (
  <section className="about section" id="about">
        <div className="about__container container grid">
          <h2 className="section__title-1">
            <span>Sobre Nós.</span>
          </h2>

          <div className="about__perfil">
            <div className="about__image">
              <img
                src="./assets/img/financeira.png"
                alt="image"
                className="about__img"
              />

              <div className="about__shadow"></div>

              <div className="geometric-box"></div>
              <img
                src=""
                alt=""
                className="about__line"
              />
              <div className="about__box"></div>
            </div>
          </div>

          <div className="about__info">
            <p className="about__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam illo velit maiores voluptate aliquid fugiat? Molestias maiores delectus vero assumenda maxime, ex esse exercitationem nesciunt, soluta, laboriosam sequi magnam omnis!
            </p>

            <ul className="about__list">
              <li className="about__item">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nihil odit quo, quibusdam fugit repudiandae maxime suscipit quos dolorem deleniti vitae eum doloribus libero error obcaecati. Accusamus enim vero magnam?
              </li>
            </ul>

            <div className="about__buttons">
              <a href="#contact" className="button">
                <i className="ri-send-plane-line"></i> Contato
              </a>

            </div>
          </div>
        </div>
      </section>
 )
}

export default About