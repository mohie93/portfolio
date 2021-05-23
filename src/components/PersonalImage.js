import personalImage from '../assets/images/mohie.jpeg';

function PersonalImage() {
  return <div className={"container-fluid text-center mt-4"}>
    <img src={personalImage} className={'personal-image'} alt={"avatar"}/>
  </div>
}

export default PersonalImage