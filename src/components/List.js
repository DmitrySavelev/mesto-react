import React from "react";

// class List extends React.Component {
//   state = {
//     numbers: [1, 2, 3],
//   }

//   addRandomNumber = () => {
//     const randNumber = Math.round(Math.random() * 10);
//     this.setState({
//       numbers: [...this.state.numbers, randNumber],
//     });
//   }

//   componentDidMount() {
//     console.log('был монтирован');
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('prevState', prevState);
//     console.log('this.state', this.state);
//   }

//   componentWillUnmount() {
//     console.log("будет удален");
//   }

//   render() {
//     return (
//       <div>

//         <button onClick={this.addRandomNumber}>Новое число</button>
//         <ul>
//           {this.state.numbers.map((num, index) => (
//             <li key={index}>{num}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

const List = () => {
  const [numbers, setNumbers] = React.useState([1, 2, 3]);
  const [count, setCount] = React.useState(0);

  const plusOne = () => {
    setCount(count + 1);
  }

  const addNumber = () => {
    const randNum = Math.round(Math.random() * 10);
    setNumbers([...numbers, randNum]);
  };

  React.useEffect(() => {
    console.log('did mount');
    return () => {
      console.log('will unmount');
    }
  }, [])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={plusOne}>Прибавить</button>
      <button onClick={addNumber}>Новое число</button>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  )


};

export default List;