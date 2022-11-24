import { motion } from 'framer-motion';

const boxAnimation = {
    hidden: {
        x: 20,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {
            duration: .7,
            delay: custom * .5,
            type: 'spring',
            bounce: 0.5,
        }
    }),
}

const Box = () => {
    return(
    <motion.div className="boxMain" initial='hidden' whileInView='visible' viewport={{amount: 0.6, once: true}}>
        <motion.div custom={1} variants={boxAnimation} className="box">
            <img src={`./leaf.jpg`} className='leaf' alt='leaf' />
        </motion.div>
        <motion.div custom={2} variants={boxAnimation} className="box">
            <img src={`./paraben.jpg`} className='paraben' alt='paraben' />
        </motion.div>
        <motion.div custom={3} variants={boxAnimation} className="box">
            <img src={`./toxic.jpg`} className='toxic' alt='toxic' />
        </motion.div>
    </motion.div>
        )
};

export default Box;