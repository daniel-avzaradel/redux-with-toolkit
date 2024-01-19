"use client"
import Counter from "./components/Counter";

// store
interface CounterState {
  value: number
};

interface UserState {
  isSignedIn: boolean
}

// actions
const increaseByAmount = { type: 'INCREMENT', payload: 10 };
const decreaseByAmount = { type: 'DECREASE', payload: 10 };

// reducers

export default function Home() {
  return (
    <main className="main-container">
      <div className="main-card">
      <h1>REDUX WITH TOOLKIT TUTORIAL</h1>
      <br />
      <Counter />
      </div>
    </main>
  );
}
