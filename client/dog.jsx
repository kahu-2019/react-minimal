const React = require('react')

function Dog(props) {
  console.log(props)
  return <div>
      woof woof - meow - I'm {props.name}
    </div>
}

module.exports = Dog
