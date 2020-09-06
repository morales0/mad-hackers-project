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
            Question.
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
          <h1 className="header_text">Vaccines</h1>
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
                  Across all age groups, millions of Americans fall ill with the flu each year. 
                  Of these millions of people, tens of thousands will need hospitalization and many 
                  eventually die. While the elderly are most susceptible, millions of children younger 
                  than the age of 4 become very sick with the flu every year. *add immunocompromised, 
                  people who cannot get vaccine, and pregnant women * Vaccines are a critical way to 
                  protect these vulnerable members of our community as well as safeguard your own health.
                </p>
              </section>
            </QuestionCard>

            <QuestionCard questionString="What do I have to gain?">
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
                  thousands of lives. Even though it may feel redundant to go back each year for a new vaccine,
                  it is the best thing that you can do to reduce your chances of getting the virus. Remember, 
                  last years’ vaccine does not necessarily provide immunity to this years’ seasonal strains.
                </p>
              </section>
            </QuestionCard>

            <QuestionCard questionString="Will my child get autism if they get a flu vaccine?">
              <section className="graphs">
                  <img id="autism_table" alt="Autism Graph" src={autTable} width="550" height="400"/>
              </section>
              <section className="blurb">
                <p>
                  The National Vaccine Advisory Committee reviews vaccinations along with the FDA and other 
                  advisory commissions: each year the safety and efficacy of vaccinations are scrutinized and 
                  carefully monitored. While concerns have spread through the years linking thimerosal--a 
                  preservative in some vaccines--with autism, the data above shows the contrary. Even as thimerosal 
                  has been phased out of most vaccines, autism rates have continued to climb.
                </p>
              </section>
            </QuestionCard>
            <QuestionCard questionString="I already got a flu vaccine last year. Why do I have to get a new one?">
              <section className="blurb">
                <p>
                  Even though it may feel redundant to go back each year for a new vaccine, it is the best thing that 
                  you can do to reduce your chances of getting the virus. Remember, last years’ vaccine does not necessarily 
                  provide immunity to this years’ seasonal strains. 
                </p>
              </section>
            </QuestionCard>
            <QuestionCard questionString="Are there alternative options to getting an injection?">
              <section className="blurb">
                <p>
                  Pending
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
