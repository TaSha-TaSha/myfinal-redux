import { motion } from 'framer-motion';

const textAnimation = {
    hidden: {
        x: -100,
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
};

const Middle = () => {
    return(<div className="middle">
            <img src={`./woman.jpg`} alt='woman' className="woman" />
        <motion.div className='middleLeft' initial='hidden' whileInView='visible' viewport={{amount: 0.3, once: true}}>
        <motion.h1 custom={1} variants={textAnimation} className='title'>Skin care collection</motion.h1>
        <motion.p custom={2} variants={textAnimation} className='par'>Cosmetics based on minerals, comfortable experiences</motion.p>
            <a href='#products'><motion.button custom={3} variants={textAnimation} className='middleBtn'>SHOP NOW</motion.button></a>   
        </motion.div>
        </div>)
}

export default Middle;