import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1200,
})

const Map = () => {
    return(<footer className='mapContainer'>
        <div className='findHereContainer'>
            <h2 className='findHere'>Find Us Here</h2>
        </div>
        <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Inokashira%20Pond%204%20Chome-1%20Inokashira,%20Mitaka,%20Tokyo%20181-0001+(My%20Business%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
            title="frame"
            width="100%" 
            height="500px" 
            style={{ border: "0" }}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
        </iframe>
        </footer>)
}

export default Map;