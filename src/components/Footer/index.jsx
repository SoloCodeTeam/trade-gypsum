import { useTranslation } from "react-i18next"
import "./style.css"
import { useNavigate } from "react-router-dom"

export function Footer() {
    const {t,i18n} = useTranslation()
    const navlink = useNavigate()
    return(
        <div className="Footer">
            <img className="footerMain" src="https://res.cloudinary.com/ds9evspym/image/upload/v1703875742/BNBM%20trade-gypsum/footer_pcbvap.png" alt="simple" />
            <div>
                <span>
                    <img src="https://res.cloudinary.com/ds9evspym/image/upload/v1703694773/BNBM%20trade-gypsum/BNBM_xm0j8g.png" alt="logo" />
                    <div className="social">
                        <a href="https://" class="fa-brands fa-telegram"></a>
                        <a href="https://" class="fa-brands fa-instagram"></a>
                        <a href="https://" class="fa-brands fa-facebook"></a>
                        <a href="tel:+998900000000" class="fa-solid fa-square-phone"></a>
                    </div>
                </span>
                <span>
                    <p onClick={() => window.location.href="/#1"}>{t("Navbar.0")}</p>
                    <p onClick={() => window.location.href="/#2"}>{t("Navbar.1")}</p>
                    <p onClick={() => window.location.href="/#4"}>{t("Navbar.2")}</p>
                </span>
                <span>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.83987083324!2d69.11455528484187!3d41.28273794647117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1693680698334!5m2!1sen!2s" width="400vw" height="300vw"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </span>
            </div>
            <p>{t("Footer.0")}</p>
        </div>
    )
}