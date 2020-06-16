import React,{Component} from 'react';
import FormDates from './FormDates'
import FormDatesTwo from './FormDatesTwo'
import {Button,Grid,Box} from '@material-ui/core'



export default class Form extends Component{

    render(){
      
      const {number,name,year,month,onSubmit} = this.props
        return(
        <div className="content-form">
            <form onSubmit={this.props.onSubmit}>
          <FormDates 
            numero={this.props.number}
            nombre={this.props.name}
          />
          <FormDatesTwo
            mes={this.props.month}
            año={this.props.year}
          />
          <div className="form-group">
          <Grid container>
            <Grid item xs={12}>
              <Box>
                <Button style={{
                  
                  "width" : "100%"
                }} size="large" variant="outlined" color="secondary">
                          ENVIAR
                </Button>
              </Box>
            </Grid>
          </Grid>     
           </div>
            </form>
        </div>
            
        
        )
    }
}

