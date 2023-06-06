import { RoutePaths } from "../../utils/enum"
import { Link } from "react-router-dom"
import siteLogo from "../../assets/images/tatvasoftLogo.svg"
import footerStyles from "./footerStyles.module.css"

export const Footer = () => {
    return(
        <div className={footerStyles.footerContainer}>
            <footer>
                <Link to={RoutePaths.Login}>
                    <img src={siteLogo} width="160" alt="tatvasoft.svg"></img>
                </Link>
            </footer>
            <div className={footerStyles.footerContent}>
                 	&#169;TatvaSoft.com. All rights reserved.
            </div>
        </div>
        
    )
}