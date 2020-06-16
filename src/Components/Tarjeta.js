import React, {Component} from 'react';
import chip from '../img/chip.png';


export default class Tarjeta extends Component{
    render(){
      const {nombre,numero,mes,año} = this.props
        return(
            <div onClick={this.change} className="tarjeta ">
        <div className="date">
        <img className="img" src={chip}/>
          <div className="groupOne">
            <h4>
              Numero Tarjeta
            </h4>
            <h2>{this.props.numero}</h2>
          </div>
          <div className="contentGroup">
            
          
            <div className="groupTwo">
              <div className="left">
                  <h4>
                    Nombre Tarjeta
                  </h4>
                  <h2>{this.props.nombre}</h2>
              </div>
              <div className="right">
                <h4>
                  Expiracion
                </h4>
                <p>
                  <span>{this.props.mes}</span>/
                  <span>{this.props.año}</span>
                </p>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
            
        )
    }
}