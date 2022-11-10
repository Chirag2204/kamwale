import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from '../layout/Spinner'

export const AdminScreen = () => {
    const [filter, setFilter] = useState("PENDING")
    const [isLoading, setIsLoading] = useState(false)
    const [profiles, setProfiles] = useState([])
    async function getProfiles() {
        setIsLoading(true)
        try {
            const profilesToSet = await axios.get(`/api/profile?verificationStatus=${filter}`);
            setProfiles(profilesToSet.data)
        } catch (error) {
            if (error.status === 401) {
                console.log("redirect");
            }
        }
        setIsLoading(false)
    }
    useEffect(() => {
        getProfiles()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter])
    return (
        <div>
            <div >
                <div className='form-text'>*Service Location (eg. Indore, Pune, Bangalore etc)</div>
                <select name='location' value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value='ALL'>ALL</option>
                    <option value='VERIFIED'>VERIFIED</option>
                    <option value='PENDING'>PENDING</option>
                    <option value='REJECTED'>REJECTED</option>
                </select>
            </div>
            <div>
                {
                    isLoading ?
                        <Spinner />
                        : profiles.map(profile => <div>{profile.user.email}</div>)
                }
            </div>
        </div>
    )
}
