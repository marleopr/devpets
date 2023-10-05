const Menu = () => {
    return (
        <div>
            <input type="checkbox" id="burger-toggle" />
            <label htmlFor="burger-toggle" className="burger-menu">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </label>
            <nav className="menu">
                <div className="menu-inner">
                    <ul className="menu-nav">
                        <li className="menu-nav-item"><a className="menu-nav-link" href="/"><span>
                            <div>Tela inicial</div>
                        </span></a>
                        </li>
                        <li className="menu-nav-item"><a className="menu-nav-link" href="/info"><span>
                            <div>Idade animal</div>
                        </span></a>
                        </li>
                        <li className="menu-nav-item"><a className="menu-nav-link" href="/dogs"><span>
                            <div>Pesquisar cães</div>
                        </span></a>
                        </li>
                        <li className="menu-nav-item"><a className="menu-nav-link" href="/cats"><span>
                            <div>Pesquisar gatos</div>
                        </span></a>
                        </li>
                        <li className="menu-nav-item"><a className="menu-nav-link" href="https://marleo-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer"><span>
                            <div>Portfólio</div>
                        </span></a>
                        </li>
                        <li className="menu-nav-item"><a className="menu-nav-link" href="https://github.com/marleopr" target="_blank" rel="noopener noreferrer"><span>
                            <div>GitHub</div>
                        </span></a>
                        </li>
                        <li className="menu-nav-item"><a className="menu-nav-link" href="https://www.linkedin.com/in/marleopiber/" target="_blank" rel="noopener noreferrer"><span>
                            <div>LinkedIn</div>
                        </span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Menu