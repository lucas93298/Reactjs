
import React,{Component,Fragment} from 'react';

export default class FormDates extends Component{
    
    render(){
        const {mes,año} = this.props
        return(
    <Fragment>
        <div className="groupThree">
            <div className="label">
              <label>Expiracion</label>
            </div>
            <div className="groupTwo">
              <select onChange={this.props.mes} className="form-control" name="mes" placeholder="Mes">
                <option value="enero">enero</option>
                <option value="febrero">febrero</option>
                <option value="marzo">marzo</option>
                <option value="marzo">marzo</option>
                <option value="abri">abril</option>
                <option value="mayo">mayo</option>
                <option value="junio">junio</option>
                <option value="julio">julio</option>
                <option value="agosto">agosto</option>
                <option value="septiembre">septiembre</option>
                <option value="octubre">octubre</option>
                <option value="noviembre">noviembre</option>
                <option value="diciebre">diciembre</option>
              </select>
              <select onChange={this.props.año}  className="form-control" name="año" placeholder="Año">
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
              
              <div className="form-group">
                
                <input type="text" placeholder="CCV" className="form-control"/>
              </div>
            </div> 
          </div>
    </Fragment>
        )  
        }
}

