import React from 'react';

function Faq() {
  return (
    <div>
      <h1 className='faq-header'>Frequently Asked Questions</h1>
      <ul>
        <li>
          <h3>Find a Stray? Will we help?</h3>
          <hr className='text-breakFaq'></hr>
          <p className='faq-text'>If you find a stray animal and are unable to keep or care for it we will gladly take them in!</p>
        </li>
        <li>
          <h3>Do we give free memberships?</h3>
          <hr className='text-breakFaq'></hr>
          <p className='faq-text'>If you are interested in getting a trial for one of basic memberships please contact us!</p>
        </li>
        <li>
          <h3>Where are you located?</h3>
          <hr className='text-breakFaq'></hr>
          <p className='faq-text'>We have multiple locations across the country please reach out if you need help finding us!</p>
        </li>
        <li>
            <h3>What hours are you open?</h3>
            <hr className='text-breakFaq'></hr>
            <p className='faq-text'>We are open from 8am to 8pm.</p>
        </li>
        <li className='faq-finalQuestion'>
            <h3>What animals do you shelter?</h3>
            <hr className='text-breakFaq'></hr>
            <p className='faq-text'>We manly house and work with cats and dogs however we can make expceptions. Please contact us through email with further questions.</p>
        </li>
      </ul>
    </div>
  );
}

export default Faq;