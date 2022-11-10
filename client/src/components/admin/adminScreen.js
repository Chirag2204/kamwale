import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from '../layout/Spinner'
import Modal from 'react-modal';
import { ProfileModal } from './profileModal';

export const AdminScreen = () => {
    const [filter, setFilter] = useState("PENDING")
    const [isLoading, setIsLoading] = useState(false)
    const [profiles, setProfiles] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [profileId, setProfileId] = useState(null)
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
                <div className='form-text'>Verification Status</div>
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
                        : (profiles.length === 0 ? <div>No Profile found</div> : profiles.map(profile => <div onClick={() => { setProfileId(profile.user._id); setIsModalOpen(true) }}>{profile.user.email}</div>))
                }
            </div>

            <Modal isOpen={isModalOpen} onRequestClose={() => {
                setIsModalOpen(false)
            }}>
                <ProfileModal profileId={profileId} refreshFunction={getProfiles} />
            </Modal>
        </div>
    )
}
