import PersonalImage from "./reusable/PersonalImage";
import Typist from "react-typist";
import {motion} from 'framer-motion';

function Introduction() {
  return (
    <div className={'container-fluid text-capitalize mt-2'}>
      <PersonalImage/>
      <div className={'text-center mt-4'}>
        <Typist avgTypingDelay={75} cursor={{show: false}}>
          <h2>Hello, I'm <strong className={'greeting-color'}>Mohieddin</strong></h2>
        </Typist>
      </div>
      <motion.div animate={{ scale: 1.05 }} transition={{ duration: 0.5 }} className={"container mt-4"}>
        <h3 className={'mt-2'}>An Innovative Software development engineer
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a className={'text-decoration-none link-color'} href='https://supahands.ai'
             target={'_blank'}><strong> @Supahands</strong></a>
          , offering five years of experience in the software development lifecycle
          from concept through delivery of next-generation applications and customizable solutions.
        </h3>
        <h3>
          Beside my professional career, I'm Husband and father to be.
        </h3>
      </motion.div>
    </div>
  );
}

export default Introduction;