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

import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList
} from 'recharts';

const illnesses18 = [
  {age: "0-4", illnesses: 3.6, visits: 2.4},
  {age: "5-17", illnesses: 7.6, visits: 3.9},
  {age: "18-49" , illnesses: 11.9, visits: 4.4},
  {age: "50-64", illnesses: 9.2, visits: 3.9},
  {age: "65", illnesses: 3.1, visits: 1.7}
];

const deaths18 = [
  {age: "0-4", hospitalizations: 25328 , deaths: 266},
  {age: "5-17", hospitalizations: 21012 , deaths: 211},
  {age: "18-49" , hospitalizations: 66869 , deaths: 2450},
  {age: "50-64", hospitalizations: 97967 , deaths: 5676},
  {age: "65", hospitalizations: 279384 , deaths: 25555 }

]



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
            <QuestionCard questionString="How does the flu vaccine work?">
              <p>
                The flu vaccine saves lives through magic.
              </p>
            </QuestionCard>
            <QuestionCard questionString="Are vaccines really safe?">
              <p>
                Yes, ofc... most of the time
              </p>
            </QuestionCard>
            <QuestionCard questionString="Why do people not take vaccines?">
              <p>
                Because they think it causes birth defects
              </p>
            </QuestionCard>
            <QuestionCard questionString="Am I at risk if I don't vaccinate?">
              <p>
                Most of the time yes
              </p>
            </QuestionCard>
            <QuestionCard questionString="Why do vaccines take a long time to make?">
              <p>
                Currently, they need large clinical trials.
              </p>
            </QuestionCard>
          </div>
        </div>
      </div>
    </div>
  );
}



export default App;
