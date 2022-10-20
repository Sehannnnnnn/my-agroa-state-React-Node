import React from 'react'

function DiscussionElement({ discussion }) {
    const {
        id, author, createdAt, avatarUrl, url, title, bodyHTML
    } = discussion
  return (
    <li className="discussion__container">
            <div className='discussion__avatar--wrapper'>
              <img src={avatarUrl} alt={"avatar of " + author} className='discussion__avatar--image'></img>
              <div className="discussion__information">{`${id}. ${author} / ${new Date(createdAt).toLocaleString()}`}</div>
            </div>
            <div className="discussion__content">
                <h3 className="discussion__title"><a href={url}>{title}</a></h3>
                <div className="discussion__body">{bodyHTML}</div>
            </div>
            
          </li>
  )
}

export default DiscussionElement