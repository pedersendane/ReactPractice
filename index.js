import React from 'react'
import ReactDOM from 'react-dom'

// Another strong convention is the idea of a root component called App at the top of the component tree of the application.
//  Nevertheless, as we will learn in part 6, there are situations where the component App is not exactly the root, but is wrapped within 
//  an appropriate utility component.



// Because the function consists of only a single expression we have used a shorthand, which represents this piece of code:

// const App = () => {
//     console.log('Hello from component')
//     return(
//   <div>
//     <p>Hello world</p>
//   </div>
//   )
// }




//////////////////////////////////NEXT Example//////////////////////
// const App = () => {
//     const now = new Date()
//     const a = 10
//     const b = 20
  
//     return (
//       <div>
//         <p>Hello world, it is {now.toString()}</p>
//         <p>
//           {a} plus {b} is {a + b}
//         </p>
//       </div>
//     )
//   }

// The above function actually returns:
// import React from 'react'
// import ReactDOM from 'react-dom'

// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   return React.createElement(
//     'div',
//     null,
//     React.createElement(
//       'p', null, 'Hello world, it is ', now.toString()
//     ),
//     React.createElement(
//       'p', null, a, ' plus ', b, ' is ', a + b
//     )
//   )
// }

// ReactDOM.render(
//   React.createElement(App, null),
//   document.getElementById('root')
// )
//////////////////////////////////////////////////Next Example//////////////////////////////

// ReactDOM.render(<App />, document.getElementById('root'))


////////////////////////////////////////////////////Next Example//////////////////////////
// const Hello = () => {
//     return (
//       <div>
//         <p>Hello world</p>
//       </div>
//     )
//   }
//   const App = () => {
//     return (
//       <div>
//         <h1>Greetings</h1>
//         <Hello />
//       </div>
//     )
//   }
  
//   ReactDOM.render(<App />, document.getElementById('root'))
  ////////////////////////////////////////////////////Next Example//////////////////////////

const Hello = (props) => {
    return(
        <div>
            <p>
                Hello {props.name}, you are {props.age} years old
            </p>
        </div>
    )
}
const App = () => {
    const name = 'Peter'
    const age = 21
    return (
<div>
    <h1>Greetings</h1>
    <Hello name = "Maya" age = {26 + 10} />
    <Hello name = {name} age = {age} />
</div>

    )
}
ReactDOM.render(<App />, document.getElementById('root'))








