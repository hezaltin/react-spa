import React from 'react';
import PropTypes from 'prop-types';
import SignInForm from './signInForm';
import toastr from 'toastr';

export class SignInPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        console.log(this.props)
       // this.props.countrys=['india','china','unitedStates']
        this.state = {
          course: Object.assign({}, {username:'',password:''}),
          countrys:[{text:'india',value:'IND'},{text:'China',value:'CNA'},{text:'United States',value:'US'}],
          errors: {},
          saving: false
        };
    
         this.updateSigninState = this.updateSigninState.bind(this);
         this.submitForm = this.submitForm.bind(this);
      }

      updateSigninState(event){
        const field= event.target.name;
        let course= this.state.course;
        course[field]=event.target.value;
        return this.setState({course:course})
      }
      submitForm(event){
          event.preventDefault();
         console.log(this.state.course);
         this.state.course.logs=JSON.parse(localStorage.getItem('signUp'))
         console.log(this.props);
         fetch('http://localhost:3001/api/login',{
            method:'POST',
            body: JSON.stringify(this.state.course),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }

         })
         .then(response=> {
           return response.json();
         })
         .then(response => {
            console.log('Success:', response);
            if(response.status===200){
                toastr.success('way to go!!');
                this.props.router.push('/home');
            }
            else{
                toastr.error('Invalid Data!');
                console.log('Invalid Data')
            }
           
         })
         
      }
      render() {
        return (
          <SignInForm
            allCountrys={this.state.countrys}
            onChange={this.updateSigninState}
            onSave={this.submitForm}
            course={this.state.course}
            errors={this.state.errors}
            saving={this.state.saving} />


        );
      }


}

export default SignInPage