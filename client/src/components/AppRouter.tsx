import React from 'react';
import {Routes, Route} from 'react-router-dom';



import Auth from '../pages/Auth';
import MainPage from '../pages/MainPage';



const AppRouter = () => {
    // const user: any = useContext(Context);

    // console.log(user)
    return (
        <Routes>
            <Route path='/MainPage' element={<MainPage />}/>
            <Route path='/Auth' element={<Auth />}/>
        </Routes>
    );
};

export default AppRouter;