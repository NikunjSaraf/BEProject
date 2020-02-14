import React from 'react';
import "../../App.css";
import fire from '../../config/fire';
function Test(){

    return(
        <div className="container">
            <p>Hi</p><br></br>
            <button onClick={retrive}>click here</button>
        </div>
    )
    function retrive(){

        var ref = fire.databse.ref().child("Test").child("SurveyTest")
        ref.on('value', function(snapshot){
            console.log(snapshot.val())
        })
    }
    
}

export default Test;