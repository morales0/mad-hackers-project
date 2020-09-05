import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

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
             <h3>{props.questionString}</h3>
             <IconButton aria-label="return" size="small" onClick={() => setShowPage(!showPage)}>
               <CloseIcon fontSize="inherit" />
             </IconButton>
           </header>
 
           <div className="info_container_content">
             {props.children}
           </div>
 
         </div>
       </div>
     }
     </>
   )
 }

export default QuestionCard