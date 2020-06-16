import React,{Component,Fragment} from 'react';

export default class FormDates extends Component{
    
    render(){
        const {numero,nombre} = this.props
        return(
    <Fragment>
        <div className="form-group">
            <label>Numero de tarjeta</label>
            <input name="numero" onChange={this.props.numero} type="text" placeholder="numero" className="form-control"/>
        </div>
        <div className="form-group">
            <label>Nombre de tarjeta</label>
            <input name="nombre" onChange={this.props.nombre} type="text" placeholder="nombre" className="form-control"/>
        </div>
    </Fragment>
        )
                 
        
        
        }
}