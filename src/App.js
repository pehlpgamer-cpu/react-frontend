import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Card from './components/ui/Card';
import Form_2 from './components/ui/Form_2';
import Form from './components/ui/Form';
import Counter from './components/ui/Counter';
import List from './components/ui/List';




function App() {
  


  // const productCards = Map.
  
  return (
    <>
      <List/>
      <Form />
      
      <section>
        <Card 
          name="RTX 3060 24gb" 
          description="njdsjfgsjcv jvdsj vbdsjvb vdj vjsdjxnjchywqf ui"
        />
        <Card 
          name="Raspberry Pi-4 8gb" 
          description="njdsjfgsjcv jvdsj vbdsjvb vdj vjsdjxnjchywqf ui"
        />
      </section>
      <Counter/>
      
    </>
  );
}

export default App;
