import React from 'react';
import{Container, Header, Content, H1, Text} from 'native-base';

function formatName(user){
    return user.firstName + ' ' + user.lastName;
}

export default function FormatName(){

const user = {
firstName:'Greg',
lastName: 'Lim'
};

return (
    <Container>
        <Header>
        <Content>
            <H1>Hello,</H1>
            <Text>{formatName(user)}</Text>
           </Content>
           </Header>
           </Container>
);
}

