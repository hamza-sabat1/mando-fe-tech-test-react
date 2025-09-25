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
    <header className="header">
      <nav>
        <h1>Test</h1>
      </nav>
    </header>
  )
}
export default Header
