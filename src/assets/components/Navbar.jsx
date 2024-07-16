function Navbar() {

 return (
   <div className="header" id="header">
     <nav className="nav container">
       <a href="#" className="nav__logo">
         <span className="nav__logo-circle">E</span>

         <span className="nav__logo-name">Exemple</span>
       </a>

       <div className="nav__menu" id="nav-menu">
         <span className="nav__title">Menu</span>

         <ul className="nav__list">
           <li className="nav__item">
             <a href="#home" className="nav__link active-link">Inicio</a>
           </li>

           <li className="nav__item">
             <a href="#about" className="nav__link">Sobre Nós</a>
           </li>

           <li className="nav__item">
             <a href="#projects" className="nav__link">Depoimentos</a>
           </li>

           <li className="nav__item">
             <a href="#contact" className="nav__link nav__link-button">Contato</a>
           </li>
         </ul>

         <div className="nav__close" id="nav-close">
           <i className="ri-close-line"></i>
         </div>
       </div>

       <div className="nav__buttons">
         <i className="ri-moon-line change-theme" id="theme-button"></i>

         <div className="nav__toggle" id="nav-toggle">
           <i className="ri-menu-4-line"></i>
         </div>
       </div>
     </nav>
   </div>
 )
}

export default Navbar
