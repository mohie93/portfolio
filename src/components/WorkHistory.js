// import {motion} from 'framer-motion';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const displayWorkingPeriod = company => {
  if (!company.stillWorkingHere) {
    return <small className={"item-title text-white"}>From:{company.joinedDate} To: {company.resignDate} </small>
  } else {
    return <small className={"item-title text-white"}>Since:{company.joinedDate}</small>
  }
};

const companies = [
  {
    "name": "Supahands dotcom sdn bhd",
    "joinedDate": "November 2017",
    "resignDate": null,
    "stillWorkingHere": true,
    "techStack": "expressjs, nodejs, reactjs, ruby on rails, golang, python, aws, serverless, microservices, Docker",
    "role": "Senior Software Development Engineer",
    "workStyle": "full time"
  },
  {
    "name": "Avana Asia",
    "joinedDate": "November 2020",
    "resignDate": null,
    "stillWorkingHere": true,
    "techStack": "expressjs, nodejs, aws, serverless, mySql, Reactjs",
    "role": "Senior Software Development Engineer",
    "workStyle": "Contract - Project based"
  },
  {
    "name": "RedNet Sdn bhd (E-Rider)",
    "joinedDate": "October 2020",
    "resignDate": "Jun 2021",
    "stillWorkingHere": false,
    "techStack": "expressjs, nodejs, GCP, Firebase, FireStore, Docker",
    "role": "Senior Software Development Engineer",
    "workStyle": "Contract - Project based"
  },
  {
    "name": "The Black Lily",
    "joinedDate": "August 2019",
    "resignDate": "May 2020",
    "stillWorkingHere": false,
    "techStack": "MongoJs, ExpressJs, ReactJs, NodeJs, Docker",
    "role": "Software Development Engineer",
    "workStyle": "Contract - Project based"
  },
  {
    "name": "Iwan media sdn bhd",
    "joinedDate": "October 2018",
    "resignDate": "May 2019",
    "stillWorkingHere": false,
    "techStack": "MongoJs, ExpressJs, ReactJs, NodeJs, AWS, PugJs, Payment via mastercard",
    "role": "Software Development Engineer",
    "workStyle": "Contract - Project based"
  }
];

function WorkIcon() {
  return <i className="fa fa-briefcase fa-2x icon-margin" aria-hidden="true"/>
}

function WorkHistory() {
  return <div className={"text-capitalize"}>
    <VerticalTimeline>
      {
        companies.map((company, index) => (

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{background: '#264753', color: 'white'}}
            contentArrowStyle={{borderRight: '7px solid  #264753'}}
            iconStyle={{background: '#A6C6CD', color: 'white'}}
            icon={<WorkIcon/>}
            key={index}
          >
            <strong
              className="vertical-timeline-element-title text-white">{company.name} | {displayWorkingPeriod(company)}</strong>
            <h4 className="vertical-timeline-element-subtitle text-white">{company.role}</h4>
            <div>
              <p className="text-white">Tech Stack</p>
              {
                company.techStack.split(',').map((item, index) => {
                  return <span className="badge bg-dark mx-1" key={index}>{item}</span>
                })
              }
            </div>
          </VerticalTimelineElement>
        ))
      }
    </VerticalTimeline>
  </div>
}

export default WorkHistory