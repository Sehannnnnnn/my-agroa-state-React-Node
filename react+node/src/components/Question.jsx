import React from 'react'

function Question() {
  return (
    <section className="form__container">
        <form action="" method="get" className="form">
        <div className="form__input--wrapper">
            <div className="form__header">🤔 질문하기</div>
            <div className="form__input--name">
                <label>name.</label>
                <input type="text" name="name" id="name" required />
            </div>
            <div className="form__input--title">
                <label>title.</label>
                <input type="text" name="title" id="title" required />
            </div>
            <div className="form__textbox">
                <label>question.</label>
                <textarea id="story" name="story" placeholder="질문을 작성하세요" rows="8"required></textarea>
            </div>
            <div className="form__submit">
                <input id="submit__button" type="submit" value="submit" />
            </div>
        </div>
        </form>
    </section>
  )
}

export default Question