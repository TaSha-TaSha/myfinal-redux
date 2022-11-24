const Footer = () => {

    return(<div>
        <div className="last">
        <div className="blockOne">
        <h3>Skin Shop</h3>
        </div>
        <div className="blockTwo">
            <p><img src={`./whatsapp.jpg`} alt='whatsapp' className="iconFooter" /></p>
            <p><img src={`./facebook.jpg`} alt='facebook' className="iconFooter" /></p>
            <p><img src={`./instagram.jpg`} alt='instagram' className="iconFooter" /></p>
        </div>
        <div className="blockThree">
            <h5>Contacts</h5>
            <p>Email Us: info@skinShop.com</p>
            <p>Text Us: (000) 000-00077</p>
            <p>Call Us: (000) 000-7700</p>
        </div>
        <div className="blockFour">
            <h5>Information</h5>
            <p>Privacy Policy</p>
            <p>Shipping Policy</p>
            <p>Terms of Service</p>
        </div>
        <div className="blockFive">
            <p>Designed and Developed by <a href="https://www.linkedin.com/in/natalia-krainova-6731a41a3" target='_blank' rel="noreferrer" className="name">🌸Natalia Krainova🌸</a> ©️2022</p>
            <p>All images and descriptions on this website have been taken from the Internet for education purpose only and it is not a real offer.</p>
    </div>
    </div>
    </div>)
}

export default Footer;