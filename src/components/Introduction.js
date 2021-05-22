import PersonalImage from "./PersonalImage";
function Introduction() {
  return (
    <div className={'container-fluid text-capitalize mt-2'}>
      <PersonalImage/>
      <h2 className={'text-center mt-4 '}>< strong className={'greeting'}> Hello</strong>, <strong className={'greeting-color'}>I'm Mohieddin</strong></h2>
      <h2>An Innovative Software development engineer
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a className={'text-decoration-none link-color mt-2'} href='https://supahands.ai'
           target={'_blank'}><strong> @Supahands</strong></a>
        , offering five years of experience in the software development lifecycle
        from concept through delivery of next-generation applications and customizable solutions.
      </h2>
    </div>
  );
}

export default Introduction;