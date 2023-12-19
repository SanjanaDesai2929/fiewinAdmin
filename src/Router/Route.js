import React from 'react'
import Login from '../Components/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../Components/Dashboard/Dashboard'
import Fastparity from '../Components/Fast-parity/Fastparity'
import Perioddata from '../Components/Fast-parity/Perioddata'
import Profile from '../Components/Profile/Profile'
import Changepassword from '../Components/Profile/Changepassword'
import Minesweeper from '../Components/MineSweeper/Minesweeper'
import Recharge from '../Components/Recharge/Recharge'
import Transaction from '../Components/Recharge/Transaction'
import Upidetails from '../Components/UPI/Upidetails'
import Editupi from '../Components/UPI/Editupi'
import Addupi from '../Components/UPI/Addupi'
import Taskreword from '../Components/TaskReword/Taskreword'
import Addtask from '../Components/TaskReword/Addtask'
import Editreword from '../Components/TaskReword/Editreword'
import Withdraw from '../Components/Withdraw/Withdraw'
import Crash from '../Components/Crash/Crash'
import Rounddata from '../Components/Crash/Rounddata'
import InviteDetails from '../Components/Dashboard/InviteDetails'
import Setting from '../Components/Setting/Setting'
import EditGames from '../Components/Allgames/EditGames'
import AllGames from '../Components/Allgames/AllGames'


const PrivateRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('name');
    if (isAuthenticated) {
        return children
    }
    return <Navigate to="/"/>
}

const route = (props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="*" element={<Login />} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /> </PrivateRoute>} />
                <Route path="/fastparity" element={<PrivateRoute><Fastparity /> </PrivateRoute>} />
                <Route path="/perioddata" element={<PrivateRoute><Perioddata /> </PrivateRoute>} />
                <Route path="/profile" element={<PrivateRoute><Profile /> </PrivateRoute>} />
                <Route path="/changepassword" element={<PrivateRoute><Changepassword /> </PrivateRoute>} />
                <Route path="/minessweeper" element={<PrivateRoute><Minesweeper /> </PrivateRoute>} />
                <Route path="/recharge" element={<PrivateRoute><Recharge /> </PrivateRoute>} />
                <Route path="/transaction" element={<PrivateRoute><Transaction /> </PrivateRoute>} />
                <Route path="/invitedetails" element={<PrivateRoute><InviteDetails /> </PrivateRoute>} />
                <Route path="/upidetail" element={<PrivateRoute><Upidetails /> </PrivateRoute>} />
                <Route path="/editupi" element={<PrivateRoute><Editupi /> </PrivateRoute>} />
                <Route path="/addupi" element={<PrivateRoute><Addupi /> </PrivateRoute>} />
                <Route path="/taskreword" element={<PrivateRoute><Taskreword /> </PrivateRoute>} />
                <Route path="/addtask" element={<PrivateRoute><Addtask /> </PrivateRoute>} />
                <Route path="/editreword" element={<PrivateRoute><Editreword /> </PrivateRoute>} />
                <Route path="/withdraw" element={<PrivateRoute><Withdraw /> </PrivateRoute>} />
                <Route path="/crash" element={<PrivateRoute><Crash /> </PrivateRoute>} />
                <Route path="/rounddata" element={<PrivateRoute><Rounddata /> </PrivateRoute>} />
                <Route path="/setting" element={<PrivateRoute><Setting /> </PrivateRoute>} />
                <Route path="/allGames" element={<PrivateRoute><AllGames /> </PrivateRoute>} />
                <Route path="/editGame" element={<PrivateRoute><EditGames /> </PrivateRoute>} />
            </Routes>
        </>
    )
}

export default route
