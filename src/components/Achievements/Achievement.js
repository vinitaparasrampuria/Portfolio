import React from "react";
import Card from "react-bootstrap/Card";

function Achievement() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}> 
          <br />
          <br />
          <br />
                    Below are some of my achievements!
          </p>
          <ul style={{textAlign:"left"}}>
          <li className="achievement" >
              2022: Awarded First prize in Morgan Stanley "Code to Give" Hackathon.
            </li>
            <li className="achievement" >
              2021: Merit based scholarship at New York University.
            </li>
            <li className="achievement">
             2021: CAFE award for efficiently carrying out shutdown activities and ICS system maintenance jobs within stipulated time frame.
            </li>
            <li className="achievement">
              2020: Chairman’s award- Awarded with the highest award in the company and was the first in the Business Unit to bag Chairman’s award for ”Process Improvement through Innovation” from amongst 75000 employees at Vedanta.
            </li>
            <li className="achievement">
              2020: Young leader talent- Identified for executing a project on ”Media Relations and Content Strategy for Cairn in Rajasthan” from a pool of 3-5 years experience employees. Upon successful completion of project was recognised as a Young Leader for taking up higher responsibility roles.
            </li>
            <li className="achievement">
              2020-19: Received several CAFE awards for exceptional performance in execution of large scale projects.          
            </li>
            <li className="achievement">
              2019: CAFE award for showing exemplary performance in Asset Optimization.
            </li>
            <li className="achievement">
              2017: Going the Extra Mile for Commissioning of new oil well pad.
            </li>
            <li className="achievement">
             2016: University medal for securing First Position in 4th Year University Examination, 2016.
            </li>
            <li className="achievement">
              2016: Dr B.C. Roy Memorial Gold centred silver medal for securing highest aggregate of marks amongst sixteen Engineering departments, 2016.
            </li>
            <li className="achievement">
              2016: M.N. Chakraborty Memorial Bronze medal for securing highest percentage of marks at Intermediate Engineering Examinations, 2014.
            </li>
            <li className="achievement">
              2015: Meera Rani Mitra Memorial Award-2015 for securing First Position in 3rd Year University Examination, 2015.
            </li>
            <li className="achievement">
             2014: Indu Bhusan and Shanti Sudha Putananda Memorial Award for securing highest marks in 2nd Year University Examination held in 2014.
            </li>
            <li className="achievement">
              2014: The Best Student of the Year award with Supriya Basu Scholarship for securing highest percentage in Engineering Faculty in 2nd Year.
            </li>
            <li className="achievement">
              2010: Secured 96.48 %.in standard Xth standing 1st in the city and fourth in the state.
            </li>
            <li className="achievement">
              2009: 1st prize in 36th Jawaharlal Nehru Young Scientist’s Exhibition at State Level.
            </li>           
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Achievement is not about ‘doing something.’ Rather, it’s about ‘being someone."{" "}
          </p>
          <footer className="blockquote-footer">Craig D. Lounsbrough</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Achievement;