
import { Container,Row,Col ,Table} from 'react-bootstrap';
import Display from './component/Display';
import Button from './component/Button';
import { useState } from 'react';
function App() {
const [ clickText, setClickText] = useState([]);
const [specialChar,setSpecialChar]=useState(true);

const onClick=(text)=>{
if(text==="1" || text==="2"|| text==="3"|| text==="4"|| text==="5"|| text==="6"|| text==="7"|| text==="8"|| text==="9"|| text==="0") 
  {
    setSpecialChar(true);
   setClickText([...clickText,text])
  }
  if(text==="%"||text==="*"||text==="/"||text==="-"||text==="+"){
    if(specialChar===true){
      setSpecialChar(false);
   setClickText([...clickText,text])
    }
    
  }
  if(text=="C")
  {
    
    setClickText([]);
  }
  if(text=="del")
  {
    
    setClickText(clickText.filter((text,index)=>index!=clickText.length-1))
    

    console.log(clickText)
  }
}

  return (
    <Container  fluid="md" className=" mt-3"  > 
      <Row >
        <Col md={4} className=" mx-auto">
        <div className="mx-auto">
        <h3 class="designer_text">  Calculator using react app<br/> </h3>
      
      </div>
           <Row>
                <Display clickText={clickText} />
                <Col md={12} className="mt-0" >
              <Table  bordered  >
                  <tbody>
                  <tr>
                      <Button color="red" text="C" onClick={onClick} />
                      <Button color="#294156" text="+/-" onClick={onClick} />
                      <Button color="#294156" text="%" onClick={onClick} />
                      <Button color="rgb(58, 5, 107)" onClick={onClick} text="/" />
                  </tr>
                  <tr>
                      <Button color="#294156" text="7" onClick={onClick} />
                      <Button color="#294156" text="8" onClick={onClick} />
                      <Button color="#294156" text="9" onClick={onClick} />
                      <Button color="rgb(58, 5, 107)" onClick={onClick} text="*" />
                  </tr>
                  <tr>
                      <Button color="#294156" text="4" onClick={onClick} />
                      <Button color="#294156" text="5" onClick={onClick} />
                      <Button color="#294156" text="6" onClick={onClick} />
                      <Button color="rgb(58, 5, 107)" text="-"onClick={onClick} />
                  </tr>
                  <tr>
                      <Button color="#294156" text="1" onClick={onClick}/>
                      <Button color="#294156" text="2" onClick={onClick} />
                      <Button color="#294156" text="3" onClick={onClick} />
                      <Button color="rgb(58, 5, 107)" onClick={onClick} text="+" />
                  </tr>
                  <tr>
                      <Button color="#294156" text="0" onClick={onClick} />
                      <Button color="#294156" text="." onClick={onClick} />
                      <Button color="#294156" text="del" onClick={onClick} />
                      <Button color="rgb(58, 5, 107)" text="=" onClick={onClick} />
                  </tr>
                 
                   </tbody>
              </Table>
              
            <div>
              <p className="author_name">Designed by jit rana magar  © 2021</p>
            </div>
              
        </Col>
               
            </Row>
          </Col>
      
      </Row>
     
  </Container>
  );
}

export default App;
