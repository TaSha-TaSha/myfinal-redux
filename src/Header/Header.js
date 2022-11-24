import { motion } from 'framer-motion';

const textAnimation = {
    hidden: {
        x: -50,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            delay: custom * 0.2,
        }
    }),
}

const Header = () => {
    return(<motion.div initial='hidden' whileInView='visible' className="header">
            <motion.h2 variants={textAnimation} className='shipping'>FREE SHIPPING ON $110!</motion.h2>
        </motion.div>)
}

export default Header;