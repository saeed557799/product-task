import React from 'react'
import './ContentSummary.scss';
import { Link } from 'react-router-dom';
function ContentSummary() {
  return (
    <React.Fragment>
      <div className="summaryContent">
      <div className="heading"
        > 
      <h3>Study Next</h3>
        </div>
       <div className="row">
       <div className="col-md-4">
        <Link to='/quiz'>
                <div className="card">
                  <div className="subject">
                  <img src="/images/video.svg" alt="video" />
                    <span>Chemistry</span>
                  </div>
                  <h4>Enviornmental Chemistry</h4>
                 <div className="footer">
                 <p>23 Courses</p>
                 <p>45 Hours</p>
                 </div>

                </div>
                </Link>
              </div>
        </div>
        <div className="heading"
        > 
      <h3>Summary</h3>
        </div>
        <div className="summaryCard">
            <div className='d-flex align-items-center mb-2'>
            <h4>Equivalent weight (E) = </h4>
            <div class="fraction">
            <span class="fup">Atomic or moleculear weight</span>
            <span class="bar">/</span>
            <span class="fdn">v.f.</span>
            </div>
            </div>
            <h4 className='ms-5 mb-2'>(v.f. = valency factor)</h4>
            <h4 className='mb-2'>Concept of number of equivalents :</h4>
            <div className='d-flex align-items-center mb-2'>
            <p>No. of equivalents of solute =</p>
            <div class="fraction d-flex align-items-center">
            <span className='d-grid'>
            <span class="fup">Wt</span>
            <span class="bar">/</span>
            <span class="fdn">Eq.wt.</span>
            </span>
            <span className='mx-2'>=</span>
            <span className='d-grid'>
            <span class="fup">W</span>
            <span class="bar">/</span>
            <span class="fdn">E</span>
            </span>
            <span className='mx-2'>=</span>
            <span className='d-grid'>
            <span class="fup">W</span>
            <span class="bar">/</span>
            <span class="fdn">M/n</span>
            </span>
            </div>
            </div>
            <p className='mb-2 '>No. of equivalents of solute = No. of moles of solute * v.f.</p>
            <h4 className='mb-2'>Normality (N) :</h4>
            <div className='d-flex align-items-center mb-2'>
            <h4>Normality (N) = </h4>
            <div class="fraction">
            <span class="fup">Number of equivalents of solute</span>
            <span class="bar">/</span>
            <span class="fdn">Volume of solution (in litres)</span>
            </div>
            </div>
            <p className='mb-2'>Normality = Molarity « v.f.</p>
            <h4>Calculation of valency Factor :</h4>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ContentSummary
