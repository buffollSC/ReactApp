import classes from './Footer.module.css';
const Footer = () => {
    return (
        <div>
            <div className={classes.footer}>
                <p>&copy; {new Date().getFullYear()}| ItRomjekeProjects | All righht reserved | Terms Of Service | Privacy</p>    
            </div>  
        </div>
    )
}
export default Footer;