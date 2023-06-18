import Student_form from './components/myform';
import Student_table from './components/mytable';
import './App.css';


function App() {
  return (

<div className="container">
  <h1>STUDENT APPLICATION FORM</h1>
<div class="row">


  <div id="studentform" class="col-sm-4">
    <Student_form />
  </div>

  <div id="studenttable" class="col-sm-8">
    <Student_table />
  </div>
  
</div>
</div>



  );
}

export default App;
