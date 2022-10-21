function Footer () {
    return (
        <footer className="page-footer green lighten-3">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="https://github.com/codd1e/react-food">Repo</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
