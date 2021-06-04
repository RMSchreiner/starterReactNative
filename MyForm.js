import React, {useState} from 'react';
import { Content, Form, Item, Input, Text, Button, Badge, Toast} from 'native-base';

export default function MyForm(){

const [email, setEmail] = useState("")
const [password,setPassword] = useState("")
const [emailError, setEmailError] = useState("")
const [passwordError, setPasswordError] = useState("")

const handleSubmit = () =>{

let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
var emailValid = false;

if(email.length == 0){
    setEmailError("Email is required");
}
else if (email.length < 6){
    setEmailError("Email should be minimum of 6 characters");
}
else if(email.indexOf(' ') >= 0) {
    setEmailError ('Email cannot contain spaces');
}
else if (password.length == 0){
    setPasswordError ('Password is Required');
}
else if (password.length < 8){
    setPasswordError("Password must be at least 8 characters");
}
else if(password.indexOf(' ') >= 0) {
    setPasswordError ("Password cannot contain spaces");
}
else if(!password.match(regex)){
    setPasswordError ("Password: 1 Capital, 8 Letters, 1 #, and 1 Special")
}
else {setEmailError("");
setPasswordError("");
emailValid = true
}
if(emailValid){
    alert('Email:' + email + '\nPassword:' + password);
 }
}
    return (
        <Content>

             {emailError.length > 0 && <Badge danger>
            <Text>{emailError}</Text>
            </Badge>}

            {passwordError.length > 0 && <Badge danger>
            <Text>{passwordError}</Text>
            </Badge>}

          <Form>
            <Item>
              <Input placeholder="Enter Email" onChangeText= {text => setEmail(text)}/>
            </Item>
            <Item last>
              <Input placeholder="Enter Password" onChangeText = {text => setPassword(text)}/>
            </Item>
            <Button onPress = {handleSubmit}>
            <Text> Submit </Text>
            </Button>

            
         
          </Form>
          
          
          <Text>
              Email Entered: {email}
          </Text>
          <Text>
              Password entered: {password}
          </Text>
          </Content>
    );

}