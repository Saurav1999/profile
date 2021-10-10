import React,{useEffect} from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe title ="Address Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.905460568814!2d77.71902305961518!3d12.964608736871911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11f35d0dfc83%3A0x30cfa512d80115f9!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1632589687658!5m2!1sen!2sin"  width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+91 8904478462'} text2={'+91 9916836250'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'singhsaurav1999@gmail.com'}  title={'Email'}/>
                    <ContactItem icon={location} text1={'Whitefield, Bengaluru,'} text2={' Karnataka, India.'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
