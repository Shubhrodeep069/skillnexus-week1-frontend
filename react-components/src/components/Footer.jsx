function Footer({ year, name }) {
    return (
        <footer className="footer">
            <p>
                © {year} {name}. All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;