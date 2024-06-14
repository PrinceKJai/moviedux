import Footer from './components/Footer';
import Header from './components/Header';
import './styles.css';

function App() {

  const restOperator = (arg1, arg2, ...otherArgs) => {
    console.log("arg1", arg1);
    console.log("arg2", arg2);
    console.log("otherArgs", otherArgs);
    console.log("otherArgs", otherArgs[0]);
  }
  restOperator(2, 3, 4, 5);

  const fruits = ["apple", "banana"];
  const otherFruits = ["orange", "guava"];
  const spread = [...fruits, ...otherFruits];
  console.log("Spread opeartor", spread);

  return (
    <div className="App">
      <div className='container'>
        <Header />
      </div>
      <Footer />
    </div>
  );
}

export default App;
