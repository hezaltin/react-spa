import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from './signUpForm';
import toastr from 'toastr';

export class SignUpPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        console.log(this.props)
       // this.props.authors=['india','china','unitedStates']
        this.state = {
          course: Object.assign({}, {username:'',password:'',email:'',firstName:'',lastName:'',country:''}),
          authors:[{text:'india',value:'IND'},{text:'China',value:'CNA'},{text:'United States',value:'US'}],
          errors: {},
          saving: false
        };
    
         this.updateSignupState = this.updateSignupState.bind(this);
         this.saveCourse = this.saveCourse.bind(this);
      }

      updateSignupState(event){
        const field= event.target.name;
        let course= this.state.course;
        course[field]=event.target.value;
        return this.setState({course:course})
      }
      saveCourse(event){
          event.preventDefault();
          if(this.state.course.username==""||this.state.course.password===""){
              return false
          }
          let getsignUpLocalStorage=localStorage.getItem('signUp')
          console.log('newSignUp=>',getsignUpLocalStorage)
         
          if(getsignUpLocalStorage){
            let parseVal=JSON.parse(getsignUpLocalStorage);
            parseVal.push(this.state.course);
            localStorage.setItem('signUp',JSON.stringify(parseVal))
          }else{
            let pushVal=[];
            pushVal.push(this.state.course)
            localStorage.setItem('signUp',JSON.stringify(pushVal))
          }
         
          fetch('http://localhost:3001/api/signup',{
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
            if(response.status==200){
                toastr.success('way to go!!');
                this.props.router.push('/home');
              //  this.context.router.push('/');
            }
            else{
                toastr.error('Invalid data!!');
                console.log('Invalid Data')
            }
           
         })

          console.log(this.state)

        //   this.context.router.push('/');
          
      }

      render() {
        return (
          <SignUpForm
            allAuthors={this.state.authors}
            onChange={this.updateSignupState}
            onSave={this.saveCourse}
            course={this.state.course}
            errors={this.state.errors}
            saving={this.state.saving} />
        );
      }


}

export default SignUpPage