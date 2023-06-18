import Student_form from './components/myform';
import Student_table from './components/mytable';

import './App.css';
import Student_form1 from './components/example_form';


function App() {
  return (

<div className="container">
<div class="row">
  <div id="studentform" class="col-sm-4">
  {/* <Student_form /> */}


  <Student_form1 />
  </div>
  <div id="studenttable" class="col-sm-8">
  <Student_table />
  </div>
  
</div>
</div>



  );
}

export default App;
