import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import styled from 'styled-components/macro'

import {Route, Link, Switch} from 'react-router-dom'

// Components
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import { QuestionCard } from './components'

import autTable from './images/autism_table.png'

import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label
} from 'recharts';

const illnesses18 = [
  {age: "0-4", illnesses: 3.6, visits: 2.4},
  {age: "5-17", illnesses: 7.6, visits: 3.9},
  {age: "18-49", illnesses: 11.9, visits: 4.4},
  {age: "50-64", illnesses: 9.2, visits: 3.9},
  {age: "65", illnesses: 3.1, visits: 1.7}
];

const deaths18 = [
  {age: "0-4", hospitalizations: 25328 , deaths: 266},
  {age: "5-17", hospitalizations: 21012 , deaths: 211},
  {age: "18-49", hospitalizations: 66869 , deaths: 2450},
  {age: "50-64", hospitalizations: 97967 , deaths: 5676},
  {age: "65", hospitalizations: 279384 , deaths: 25555 }

]

const avertedIlVis = [
  {years: "2010-2011", illnesses: 5.6, visits: 2.800000},
  {years: "2011-2012", illnesses: 2.200000, visits: 1.100000},
  {years: "2012-2013" , illnesses: 5.500000, visits: 2.700000},
  {years: "2013-2014", illnesses: 7.500000, visits: 3.500000},
  {years: "2014-2015", illnesses: 1.400000, visits: 7.00000},
  {years: "2015-2016", illnesses: 5.300000, visits: 2.700000},
  {years: "2016-2017", illnesses: 5.300000, visits: 2.700000},
  {years: "2017-2018", illnesses: 6.200000, visits: 3.200000},
  {years: "2018-2019", illnesses: 4.400000, visits: 2.300000}
];

const avertedHosDea = [
  {years: "2010-2011", hospitalizations: 80000 , deaths: 9800},
  {years: "2011-2012", hospitalizations: 44000 , deaths: 4200},
  {years: "2012-2013" , hospitalizations: 60000 , deaths: 3700},
  {years: "2013-2014", hospitalizations: 100000 , deaths: 12000},
  {years: "2014-2015", hospitalizations: 39000 , deaths: 3700 },
  {years: "2015-2016", hospitalizations: 70000 , deaths: 5900 },
  {years: "2016-2017", hospitalizations: 72000 , deaths: 5200 },
  {years: "2017-2018", hospitalizations: 91000 , deaths: 5700 },
  {years: "2018-2019", hospitalizations: 58000 , deaths: 3500 }
];




function App() {
  const [page, setPage] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="main_page">
      {/* The first page the user sees */}
      <div className="landing_container app_container">
        <header className="main_app_header">
          <h1 className="brand_text">
            Mad Hackers
          </h1>
        </header>

        <div className="front_cover" css={`
          
        `}>
          <span className="front_cover_text">
            i have <span css={`text-decoration: underline;`}>flu vaccine</span> questions 
          </span>
        </div>

        <Button id="find_ans_button" variant="contained" onClick={() => setPage(1)}>
          Find Answers
        </Button>
        
      </div>

      {/* This component will change depending on the information they want to see */}
      <div className="questions_container app_container" css={`
        transform: ${page === 1 ? 'translateY(-100%)' : 'none'};
      `}>
        <header>
          <h1 className="header_text">Mad Hackers</h1>
          <IconButton aria-label="return" size="small" onClick={() => setPage(0)}>
            <ArrowUpwardIcon fontSize="inherit" />
          </IconButton>
        </header>
        <div css={`width: 100%; overflow-y: auto;`}>
          <div className="questions_grid">
            <QuestionCard questionString="Am I at risk for getting the flu?">
              <section className="graphs">
                <BarChart
                  width={400}
                  height={300}
                  data={illnesses18}
                  margin={{
                    top: 20, right: 30, left: 20, bottom: 15,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="age">
                    <Label value="Age Range" offset={-3} position="insideBottom" />
                  </XAxis>
                  <YAxis label={{ value: 'people (in millions)', angle: -90, position: 'left' }}/>
                  <Tooltip />
                  <Legend verticalAlign="top"/>
                  <Bar dataKey="illnesses" stackId="a" fill="#8884d8" />
                  <Bar dataKey="visits" stackId="a" fill="#82ca9d" />
                </BarChart>

                <BarChart
                  width={400}
                  height={300}
                  data={deaths18}
                  margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="age" >
                    <Label value="Age Range" offset={-3} position="insideBottom" />
                  </XAxis>
                  <YAxis label={{ value: 'people', angle: -90, position: 'left' }}/>
                  <Tooltip />
                  <Legend verticalAlign="top"/>
                  <Bar dataKey="hospitalizations" stackId="a" fill="#e6a800" />
                  <Bar dataKey="deaths" stackId="a" fill="#fc4e4e" />
                </BarChart>
              </section>
              <section className="blurb">
                <p>
                  Unfortunately, everyone is at risk for getting the flu. Across all age groups, millions of 
                  Americans fall ill with the flu each year. Of these millions of people, tens of thousands will 
                  need hospitalization and many eventually die. While the elderly are most susceptible, millions 
                  of children younger than the age of 4 become very sick with the flu every year. Many studies 
                  have shown the protective effects of the flu vaccine for children, one study finding that 
                  vaccination reduced flu-related deaths in children under 4 by 51%. Vaccination of pregnant women 
                  also has been found to confer several health benefits, including temporary protection to the newborn 
                  baby and a reduction in flu complications for the mother. Vaccines play a critical role in protecting 
                  vulnerable members of your community as well as safeguarding personal health. 
                </p>
                <p>
                  TL;DR: Yes, you can get the flu. While you personally may not be at risk for dangerous complications, 
                  the flu is never fun. And it’s a patriotic thing to protect others in your community. 
                </p>
              </section>
              <section className="citation">
                  <p>
                    C.D.C. (2019, November 22). Burden Estimates for the 2016-2017 Influenza Season | CDC. CDC. 
                    https://www.cdc.gov/flu/about/burden/2016-2017.html
                  </p>
                  <p>
                    Vaccine Effectiveness: How Well Do the Flu Vaccines Work? | CDC. (2020). CDC. 
                    https://www.cdc.gov/flu/vaccines-work/vaccineeffect.htm
                  </p>
              </section>
            </QuestionCard>

            <QuestionCard questionString="What do I have to gain from getting my flu shot?">
              <section className="graphs">
                <BarChart
                  width={400}
                  height={300}
                  data={avertedIlVis}
                  margin={{
                    top: 20, right: 30, left: 20, bottom: 15,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="years">
                    <Label value="Year Range" offset={-3} position="insideBottom" />
                  </XAxis>
                  <YAxis label={{ value: 'people (in millions)', angle: -90, position: 'left' }}/>
                  <Tooltip />
                  <Legend verticalAlign="top"/>
                  <Bar dataKey="illnesses" stackId="a" fill="#8884d8" />
                  <Bar dataKey="visits" stackId="a" fill="#82ca9d" />
                </BarChart>

                <BarChart
                  width={400}
                  height={300}
                  data={avertedHosDea}
                  margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="years" >
                    <Label value="Year Range" offset={-3} position="insideBottom" />
                  </XAxis>
                  <YAxis label={{ value: 'people', angle: -90, position: 'left' }}/>
                  <Tooltip />
                  <Legend verticalAlign="top"/>
                  <Bar dataKey="hospitalizations" stackId="a" fill="#e6a800" />
                  <Bar dataKey="deaths" stackId="a" fill="#fc4e4e" />
                </BarChart>
              </section>
              
              <section className="blurb">
                <p>
                  Each year, the Center for Disease Control (CDC) estimates the positive impact of the flu 
                  vaccine. Since every year brings a different seasonal flu strain, the numbers vary from 
                  year to year. However, each vaccine has prevented several million infections and saved 
                  thousands of lives. It’s also important to note that individual vaccination has a large 
                  impact on community health by protecting vulnerable populations. There have also been 
                  studies correlating flu shots with a decrease in hospitalizations for chronic diseases 
                  such as diabetes and chronic lung disease. And, in the midst of the COVID-19 pandemic, it 
                  is more important than ever to do everything you can to protect your immune system from pathogens. 
                </p>
                <p>
                  TL;DR: For a shot that takes a few minutes, there are lots of health benefits!
                </p>
              </section>

              <section className="citation">
                  <p>
                    Past Seasons Estimated Influenza Disease Burden Averted by Vaccination | CDC. (2020, January 7).
                    CDC. https://www.cdc.gov/flu/vaccines-work/past-burden-averted-est.html
                  </p>
                  <p>
                    Vaccine Effectiveness: How Well Do the Flu Vaccines Work? | CDC. (2020). CDC. 
                    https://www.cdc.gov/flu/vaccines-work/vaccineeffect.htm
                  </p>
              </section>
            </QuestionCard>

            <QuestionCard questionString="Will my child get autism if they get a flu vaccine?">
              <section className="graphs">
                  <img id="autism_table" alt="Autism Graph" src={autTable} width="550" height="400"/>
              </section>
              <section className="blurb">
                <p>
                  Several groups (the National Vaccine Advisory Committee, the FDA, other advisory commissions) 
                  review the safety of vaccinations with the utmost care. The ingredients and viral targets of 
                  each vaccine are scrutinized and carefully monitored. While concerns have spread through the 
                  years linking thimerosal--a mercury-based preservative used in some vaccines--with autism, the 
                  graph above is just one example of the many scientific studies debunking this myth. The graph 
                  was published in 2003, when concerns about autism were beginning to take root in many communities. 
                  However, the data show that even as thimerosal was phased out of most vaccines, autism rates have 
                  continued to climb as a result of better diagnostics. 
                </p>
                <p>
                  Thimerosal is only present in multi-dose vials of the flu vaccine to keep it sterile in between 
                  injections. If you are concerned about receiving Thimerosal in your flu vaccine, be sure to mention 
                  this to your healthcare provider, and they will vaccinate you with a single-dose vial which does not 
                  have it as an ingredient. 
                </p>
                <p>
                  TL;DR: Vaccines are quite safe, but do talk about concerns you may have with your healthcare provider. 
                  There are a few situations where you may not be eligible for a vaccine (such as having an egg allergy 
                  or certain immune disorders), but for most people the vaccine has been designed to be beneficial to your health.
                </p>
              </section>
              <section className="citation">
                  <p>
                    Stehr-Green, P., Tull, P., Stellfeld, M., Mortenson, P.-B., & Simpson, D. (2003). Autism and 
                    thimerosal-containing vaccines. American Journal of Preventive Medicine, 25(2), 101–106. 
                    https://doi.org/10.1016/s0749-3797(03)00113-2
                  </p>
              </section>
            </QuestionCard>
            <QuestionCard questionString="I already got a flu vaccine last year. Why do I have to get a new one?">
              <section className="blurb">
                <p>
                  Even though it may feel redundant to go back each year for a new vaccine, it is the best thing that you can do to 
                  reduce your chances of getting the virus. Remember, last years’ vaccine does not provide immunity to this years’ 
                  seasonal strains, as the virus mutates quite fast. The quick mutation rate means that the virus is constantly changing, 
                  and you need to have the most current vaccination to keep up with it! Also, the immunity that a flu vaccine gives you is 
                  not long-lasting, and your immune system needs a new reminder each year to stay prepared for the virus. 
                </p>
                <p>
                  TL;DR: Get your new flu shot! 
                </p>
              </section>
              <section className="citation">
                <p>
                  Key Facts About Seasonal Flu Vaccine. (2020, August 31). Centers for Disease Control and Prevention. 
                  https://www.cdc.gov/flu/prevent/keyfacts.htm
                </p>
              </section>
            </QuestionCard>
            <QuestionCard questionString="Are there alternative options to getting an injection?">
              <section className="blurb">
                <p>
                  There are two options for receiving a flu vaccine - a traditional shot and a nasal spray called FluMist. 
                  While they are both acceptable, they are made of different components (FluMist uses a live virus which has 
                  been weakened and the normal shot uses a killed or “inactivated” virus). While both of these vaccines are
                  good choices, research studies have found the traditional flu shot to be more effective at protecting from 
                  flu viruses. Currently, Astrazeneca, the company producing FluMist, is working on improving its efficiency.
                </p>
                <p>
                  TL;DR: If you or your child is afraid of needles, there is still a good option available, FluMist. Keep in 
                  mind that it is not quite as effective as a traditional shot, but still is much better than not getting a flu 
                  vaccine at all.
                </p>
              </section>
              <section className="citation">
                  <p>
                    Chung, J. R., Flannery, B., Ambrose, C. S., Bégué, R. E., Caspard, H., DeMarcus, L., Fowlkes, A. L., 
                    Kersellius, G., Steffens, A., & Fry, A. M. (2019). Live Attenuated and Inactivated Influenza Vaccine 
                    Effectiveness. Pediatrics, 143(2), e20182094. https://doi.org/10.1542/peds.2018-2094
                  </p>
              </section>
            </QuestionCard>
          </div>
        </div>
      </div>
    </div>
  );
}



export default App;
