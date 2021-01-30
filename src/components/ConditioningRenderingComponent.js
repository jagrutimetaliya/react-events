import React, { Component } from 'react'

class ConditioningRenderingComponent extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            isLoggedIn : true
       }
   }
   
    render() {
        /** 1. IF ELSE APPROACH 
         * 
         if(this.state.isLoggedIn){
            return (
                <div> Welcome JAgruti</div>
            )
        }else {
            return (
                <div> welcome Guest</div>
            )
        }
        */
        

        /** 2. element veriable approach 
         * 
      let message 
        if(this.state.isLoggedIn){
            message = <div> WElcome JAgruti</div>
        }else {
            message = <div> Welcome Guest</div>
        }

        return <div>{message}</div>
        */
      
        /** 3. Turnury conditioning approach 
         return (
            this.state.isLoggedIn ?  <div> Welcome Jagruti </div>
                : <div> Welcome Guest</div>
        ) 
        */ 

        /** 4. Short circuit Operator approach 
        
        */
       return  this.state.isLoggedIn &&  <div> Welcome Jagruti </div>

    

       
    }
}

export default ConditioningRenderingComponent
