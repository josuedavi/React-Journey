import './App.css';
import Joke from './Components/Joke';
import Jumbo from './Components/Jumbo';
function App() {
  return (
    <div>
      <Jumbo />
         <div className="card-deck">
            <Joke 
            question="Why are gay people always smiling?" 
            punchline="Because they can’t keep a straight face."
            />
            <Joke 
            question="What do you call a sad cup of coffee?" 
            punchline="Depresso"
            />
            <Joke 
            question="What do you do when your hot pants catch on fire?" 
            punchline="Put them out with your pantyhose."
            />
         </div>
     


<div className="card-deck">
      <Joke 
      question="Why don’t chickens wear underwear?" 
      punchline="Because their pecker is on their face."
      />
      <Joke 
      question="A naked guy just dunked his balls in glitter."
       punchline="That’s pretty nuts."
       />
      <Joke 
      question="A naked guy just dunked his balls in glitter."
       punchline="That’s pretty nuts."
       />  
</div>
     
    </div>
  );
}

export default App;
