import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getIsAdminFromToken } from '../../utils/getAuthToken';

const AdminProtectedRoute = ({
    component: Component,
    ...rest
}) => {
    const isAdmin = getIsAdminFromToken()
    return <Route
        {...rest}
        render={(props) =>
            isAdmin ? (
                <Component {...props} />
            ) : (
                <Redirect to='/profiles' />
            )
        }
    />
};



export default AdminProtectedRoute;
