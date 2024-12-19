
const Header=()=> {
    // @ts-ignore
    return (
        <header className=" bg-[#ffffff]">
            <div className="blog-post-reading-progress"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="header-left">
                            <div className="mainmenu-mobile-toggle" aria-label="Toggle menu"><i className="fa fa-bars" aria-hidden="true"></i>
                            </div>
                            <div className="logo">
                                <a className="logo-link" href="/blog"><img fetchPriority="high" width="135" height="26"
                                src="https://blog.apilayer.com/wp-content/uploads/2023/12/logo-1.png"
                                alt="APILayer Blog - All About APIs: AI, ML, Finance, &amp; More APIs" className="regular-logo"/></a>
                            </div>
                        </div>
                        <div className="text-black">
                            <div
                                 role="navigation">
                                <div id="navbar" >
                                    <div className="navbar-inner">
                                        <div>
                                            <div data-toggle="collapse"
                                                 data-target=".collapse">Menu
                                            </div>
                                            <div >
                                                <div >
                                                    <ul id="menu-header-menu-2" className="nav">
                                                        <li id="mgt-menu-item-3805"
                                                            className="text-black">
                                                            <a href="https://apilayer.com/marketplace">API
                                                                Marketplace</a></li>
                                                        <li id="mgt-menu-item-181"
                                                            className="menu-item menu-item-type-custom menu-item-object-custom">
                                                            <a target="_blank" href="https://apilayer.com/">Home</a>
                                                        </li>
                                                        <li id="mgt-menu-item-3806"
                                                            className="menu-item menu-item-type-custom menu-item-object-custom">
                                                            <a href="https://apilayer.com/docs">Docs</a></li>
                                                        <li id="mgt-menu-item-3807"
                                                            className="menu-item menu-item-type-custom menu-item-object-custom">
                                                            <a href="/sign-in">
                                                                <button className="sign_up">Sign in</button>
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="search-toggle-wrapper search-header">
                                <form method="get" role="search" id="searchform_p" className="searchform"
                                      action="https://blog.apilayer.com/">
                                    <input type="search" aria-label="Search" className="field" name="s" value=""
                                           id="s_p" placeholder="Type keyword(s) here…"/>
                                    <input type="submit" className="submit btn" id="searchsubmit_p" value="Search"/>
                                </form>
                                <a className="search-toggle-btn" aria-label="Search toggle"><i className="fa fa-search" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;