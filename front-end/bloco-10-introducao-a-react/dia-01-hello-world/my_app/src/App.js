import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const tarefas = ['criar uma lista', 'essa lista deve ser um array', 'dar um map no array', 'redenrisar na tela'];

function App() {
  return (
    <ol>
      {tarefas.map((tarefa) => Task(tarefa))}
    </ol>
  );
}

export default App;
