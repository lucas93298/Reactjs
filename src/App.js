import React, {Component}  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form'
import Tarjeta from './Components/Tarjeta'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export default class App extends Component{
  constructor(props){
    super(props)
     this.state = {
        numero: '#########',
        nombre: 'Lucas Fernandez',
        mes: 'MM',
        año: 'AA',
        isVisible: false
  }

  }
    

 onChange = (e) => {
  this.setState({
    [e.target.name] : e.target.value
    })
  }
  onSubmit = (e) =>{
    e.preventDefault();
  } 
  onChangeNumber = (e) => {
    const number =  e.target.value
    this.setState({
          numero: number
      })
     if(number === ''){
      this.setState({numero: "#########"})
     }
      
    }
    onChangeName = (e) => {
      const name =  e.target.value
      this.setState({
            nombre: name
        })
       if(name === ''){
        this.setState({nombre: "Lucas Fernandez"})
       }
        
      }

invisible = () =>{
  this.setState({isVisible: false})
}    
visible = () =>{
  if(this.state.isVisible){
    this.setState({isVisible: false})
  }else{
    this.setState({isVisible: true})
  } 
}
render(){
  
  return (
  
  <div className="content">
    
    <div className="contain">
      <Tarjeta
       numero={this.state.numero}
       nombre={this.state.nombre}
       mes={this.state.mes}
       año={this.state.año}
       />
      <button onClick={this.visible} className="btnP btn-warning">
        
      
        {this.state.isVisible ? <ArrowUpwardIcon/> : <ArrowDownwardIcon/> }
        
        
        </button>
      
        {this.state.isVisible && <Form
           number={this.onChangeNumber}
           name={this.onChangeName}
           month={this.onChange}
           year={this.onChange}
           onSubmit={this.onSubmit}
         />}
      </div>
    </div>
  
    
    
    );
}
}
