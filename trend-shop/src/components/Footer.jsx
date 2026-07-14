function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="for-the-footer">
            <p>
                © {currentYear} Trend Shop. All rights reserved.
            </p>
        </div>
    );
}
export default Footer;