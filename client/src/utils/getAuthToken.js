import jwt_decode from 'jwt-decode';



const getIsAdminFromToken = () => {
    const token = localStorage.getItem('token')
    if (!token || token === '') return false
    const payload = jwt_decode(token)
    return payload.user.isAdmin
}

export {
    getIsAdminFromToken
};