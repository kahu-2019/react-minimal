const React = require('react')
const ReactDOM = require('react-dom')
const Dog = require('./dog')

const data = {
  name: 'humans',
  show: true,
  pets: ['fido', 'lassie']
}

const dogProps = {name: 'fido'}

function helloTemplate (props) {
  return (
    <div className='hello' width='200'>
    { props.pets.map(name => <Dog name={name} />)}
      <div>hello {props.name}</div>
    </div>
  )
}

const view = helloTemplate(data)

const placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)
