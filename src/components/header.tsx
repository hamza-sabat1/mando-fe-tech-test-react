type HeaderProps = {
  logoSrc: string;                 
  logoAlt: string;                
  logoUrl: string;               
  logoSrText: string;             

  linkLabel1: string;
  linkUrl1: string;
  linkLabel2: string;
  linkUrl2: string;
};


function Header({
  logoSrc,
  logoAlt,
  logoUrl,
  logoSrText,
  linkLabel1,
  linkUrl1,
  linkLabel2,
  linkUrl2,
}: HeaderProps) {
  return (
    <header className="c-header" role="banner">
      <div className="o-container c-header__inner">
        <a href={logoUrl} className="c-header__brand" aria-label={logoSrText}>
          <img className="c-header__logo" src={logoSrc} alt={logoAlt} />
        </a>

        <nav className="c-header__nav" aria-label="Primary">
          <ul className="c-header__list">
            <li><a className="c-header__link" href={linkUrl1}>{linkLabel1}</a></li>
            <li><a className="c-header__link" href={linkUrl2}>{linkLabel2}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header
