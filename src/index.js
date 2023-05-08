import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// function Greeting() {
//   return (
//     <>
//       <Message />
//       <h2>Hello its my first component</h2>
//     </>
//   )
// }

// const Message = () => {
//   return (
//     <>
//       <h1>Hey im a new Message</h1>
//       <Person />
//     </>
//   )
// }

// const Person = () => {
//   return (
//     <>
//       <p>Good job message</p>
//     </>
//   )
// }

const BookList = () => {
  return (
    <section className='bookList'>
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img src='./images/book-1.jpg' alt='Interesting Facts For Curious Minds' />
)
const Title = () => {
  return (
    <>
      <h3>Book of Ages</h3>
    </>
  )
}

const Author = () => {
  return (
    <>
      <h4>Jill Lepore</h4>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

export default BookList
