import React from 'react'
import { useState, useEffect } from 'react';
import DiscussionElement from './DiscussionElement';
import sanitize from 'sanitize-html';

function DiscussionList() {
  const [discussions, setdiscussions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/discussions')
    .then((res) => res.json())
    .then((data) => [...data].map((discussion) => {
      if (discussion.answer) {
        return {
          ...discussion,
          bodyHTML: sanitize(discussion.bodyHTML),
          answer: {
            ...discussion.answer,
            bodyHTML: sanitize(discussion.answer.bodyHTML)
          }
        }
      }
      return {
        ...discussion,
        bodyHTML: sanitize(discussion.bodyHTML)
      }
    }))
    .then(data => setdiscussions(data));
  }, [])

  return (
    <section className="discussion__wrapper">
    <div className="pagination">
    </div>
    <ul className="discussion__container" style={{backgroundColor: "white", opacity: "0.9", height: "0.5rem"}}>
      {discussions.map((discussion) => {
        return (
          <DiscussionElement key={discussion.id} discussion={discussion}/>
        )
      })}
    </ul>
    <ul className="discussions__container">
    </ul>
  </section>
  )
}

export default DiscussionList