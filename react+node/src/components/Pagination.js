import React from 'react'

function Pagination({totalCount, countByPage, changePage, selectedIdx}) {
    const pages = Array.from({length: parseInt(totalCount/countByPage)}, (_,i) => i+1)
    
    const goOnPage = (event) => {
        event.preventDefault();
        changePage(event.target.value);
    }

  return (
        pages.map((idx) => {
                if (idx === selectedIdx) {
                    return (<button key={idx} className="selected" onClick={goOnPage} value={idx}>{idx}</button>)
                } else {
                    return (<button key={idx} className="unselected" onClick={goOnPage} value={idx}>{idx}</button>)
                }
        })
  )
}

export default Pagination