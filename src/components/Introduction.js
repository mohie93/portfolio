import PersonalImage from "./PersonalImage";
import Typist from "react-typist";

function Introduction() {
  return (
    <div className={'container-fluid text-capitalize mt-2'}>
      <PersonalImage/>
      <div className={'text-center mt-4'}>
        <Typist avgTypingDelay={50} cursor={{show: false}}>
          <h2>Hello, I'm <strong className={'greeting-color'}>Mohieddin</strong></h2>
        </Typist>
      </div>
      <h2 className={'mt-2'}>An Innovative Software development engineer
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a className={'text-decoration-none link-color'} href='https://supahands.ai'
           target={'_blank'}><strong> @Supahands</strong></a>
        , offering five years of experience in the software development lifecycle
        from concept through delivery of next-generation applications and customizable solutions.
      </h2>
    </div>
  );
}

export default Introduction;