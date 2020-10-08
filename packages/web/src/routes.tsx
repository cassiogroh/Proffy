import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Register from './pages/Register';
import Login from './pages/Login';

// npm install react-router-dom
// npm install @types/react-router-dom -D

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Landing}/>
            <Route path='/study' component={TeacherList}/>
            <Route path='/give-class' component={TeacherForm}/>
            <Route path='/register' component={Register}/>
            <Route path='/login' component={Login}/>
        </BrowserRouter>
    )
}

export default Routes;