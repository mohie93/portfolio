import personalImage from '../../assets/images/mohie.jpeg';
import {motion} from 'framer-motion';

function PersonalImage() {
  return <div className={"container-fluid text-center mt-4"}>
    <motion.img animate={{scale: 1.05}} transition={{duration: 0.5}} whileHover={{ scale: 1.07 }} src={personalImage} className={'personal-image'}
                alt={"avatar"}/>
  </div>
}

export default PersonalImage