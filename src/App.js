import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import styled from 'styled-components/macro'

import {Route, Link, Switch} from 'react-router-dom'

// Components
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import CloseIcon from '@material-ui/icons/Close'

function App() {
  const [page, setPage] = useState(0)

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
          <h1 className="header_text">Next Page</h1>
          <IconButton aria-label="return" size="small" onClick={() => setPage(0)}>
            <ArrowUpwardIcon fontSize="inherit" />
          </IconButton>
        </header>
        <div css={`width: 100%; overflow-y: auto;`}>
          <div className="questions_grid">
            <QuestionCard questionString="How does the flu vaccine work?"/>
            <QuestionCard questionString="How does the flu vaccine work?"/>
            <QuestionCard questionString="How does the flu vaccine work?"/>
            <QuestionCard questionString="How does the flu vaccine work?"/>
            <QuestionCard questionString="How does the flu vaccine work?"/>
          </div>
        </div>
      </div>
    </div>
  );
}

const QuestionCard = (props) => {
  const [showPage, setShowPage] = useState(false)
  return (
    <>
    <button className="question_card" onClick={() => setShowPage(!showPage)}>
      <h2 className="question_text">
        {props.questionString}
      </h2>
    </button>
    {
      showPage &&
      <div className="info_popup_bg">
        <div className="info_container">
          <header>
            <h3>The question</h3>
            <IconButton aria-label="return" size="small" onClick={() => setShowPage(!showPage)}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </header>

          <div className="info_container_content">
            The content
          </div>

        </div>
      </div>
    }
    </>
  )
}

export default App;
