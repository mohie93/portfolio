import {motion} from 'framer-motion';

const displayWorkingPeriod = company => {
  if (!company.stillWorkingHere) {
    return <h5 className="card-subtitle mb-2 text-muted">
      <strong className={"item-title"}>From:</strong> {company.joinedDate}, <strong
      className={"item-title"}>To:</strong> {company.resignDate} </h5>
  } else {
    return <h5 className="card-subtitle mb-2 text-muted"><strong
      className={"item-title"}>Since:</strong> {company.joinedDate} </h5>
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

function WorkHistory() {
  return <div className={"container-fluid mt-4 items-list text-center text-capitalize"}>
    {
      companies.map((company, index) => (
        <motion.div key={index} className={"item"} whileHover={{scale: 1.02}}>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center"><strong>{company.name}</strong></h4>
              {displayWorkingPeriod(company)}
              <h5 className="card-subtitle mb-2 text-muted"><strong
                className={"item-title"}>Role:</strong> {company.role}
              </h5>
              <h5 className="card-subtitle mb-2 text-muted"><strong className={"item-title"}>Work
                Type:</strong> {company.workStyle} </h5>
              <h5 className="card-subtitle mb-2 text-muted text-center mt-4"><strong className={"item-title"}>Tech
                Stack </strong></h5>
              <div className="card-title text-center">
                {company.techStack.split(',').map((item, index) => {
                  return <span key={index} className="btn bt-sml btn-round btn-trq m-2">{item}</span>
                })}
              </div>
            </div>
          </div>
        </motion.div>
      ))
    }
  </div>
}

export default WorkHistory