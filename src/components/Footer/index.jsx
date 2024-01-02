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
                <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6072.760423342191!2d71.019074!3d40.444721!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI2JzQxLjAiTiA3McKwMDEnMDguNyJF!5e0!3m2!1sen!2s!4v1704216590221!5m2!1sen!2s" width="400vw" style={{border: "none"}} height="300vw" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </span>
            </div>
            <p>{t("Footer.0")}</p>
        </div>
    )
}