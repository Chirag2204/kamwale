import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { AccordionComponent } from '../components/accordion'
import Education from '../dashboard/Education'
import Spinner from '../layout/Spinner'

export const ProfileModal = ({ profileId, refreshFunction }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [profile, setProfile] = useState(null)
    const [displayContactlInputs, toggleContactInputs] = useState(true);

    const changeProfileStatus = async (verificationStatus) => {
        setIsLoading(true)
        try {
            await axios.post('api/profile/admin/user', { userId: profileId, verificationStatus })
            getProfile()
            refreshFunction()
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false)
    }


    async function getProfile() {
        setIsLoading(true)
        try {
            const profilesToSet = await axios.get('api/profile/admin/user/' + profileId);
            setProfile(profilesToSet.data)
        } catch (error) {
            if (error.status === 401) {
                console.log("redirect");
            }
        }
        setIsLoading(false)
    }
    useEffect(() => {
        getProfile()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (

        <div style={{ color: 'white', background: '#333', padding: '50px' }}>
            {
                isLoading ? <Spinner /> : profile && <div>
                    <div className='text-center'>
                        {' '}
                        <img
                            class='round-img avatar-img my-1'
                            src={profile?.image}
                            alt='profile-image'
                        />
                    </div>
                    <form className='form' >

                        <div className='form-group'>

                            <div className='form-group'>
                                <select name='skills' value={profile.skills} >
                                    <option value='0'>
                                        * Select the Service you want to provide.
                                    </option>
                                    <option value='Baby sitting'>Baby sitting</option>
                                    <option value='Plumbing'>Plumbing</option>
                                    <option value='House Keeping'>House Keeping</option>
                                    <option value='Tutoring'>Tutoring</option>
                                    <option value='Electrical Services'>Electrical Services</option>
                                    <option value='Moving and delivery'>Moving and delivery</option>
                                    <option value='Personal Care'>
                                        Personal Care(like haicut, manicure)
                                    </option>
                                    <option value='Catering Services'>Catering Services</option>
                                    <option value='Other'>Other</option>
                                </select>
                            </div>

                            <div className='form-group'>
                                <div className='form-text'>*Price you wanna ask(per hour).</div>
                                <input
                                    type='text'
                                    name='price'
                                    value={profile.price}
                                />
                            </div>


                            <div className='form-group'>
                                <div className='form-text'>*Service Location (eg. Indore, Pune, Bangalore etc)</div>
                                <select name='location' value={profile.location} >
                                    <option value='Indore'>Indore</option>
                                    <option value='Pune'>Pune</option>
                                    <option value='Bangalore'>Bangalore</option>
                                </select>
                            </div>

                            <div>
                                {profile?.locationArray && <><div>Locations in {profile.location}</div>
                                    <div style={{
                                        display: "flex",
                                        flexWrap: "wrap"
                                    }}>
                                        {Object.keys(profile.locationArray).map(locationName => {
                                            return <div style={{ flexGrow: "1" }}>
                                                <input type="checkbox" id="locationArray" name="locationArray" value={locationName} checked={profile.locationArray[locationName]}
                                                />
                                                <label for="locationArray">{locationName}</label><br></br>
                                            </div>
                                        })}
                                    </div>
                                </>}
                            </div>

                            <div className='form-group'>
                                <div className='form-text'>
                                    A brief description of yours services
                                </div>
                                <textarea
                                    name='bio'
                                    value={profile.bio}
                                    cols='30'
                                    rows='5'
                                />
                            </div>
                            <AccordionComponent title='Addhar Card' imageSrc={profile?.addharImage} />
                            <br></br>
                            <AccordionComponent title='Police Verification Documents' imageSrc={profile?.policeVerificationImage} />

                            <div className='my-2'>
                                <button
                                    onClick={() => toggleContactInputs(!displayContactlInputs)}
                                    type='button'
                                    className='btn btn-light'
                                >
                                    <i className='fas fa-pen text-primary' /> Contact Details
                                </button>
                            </div>

                            {displayContactlInputs && (
                                <Fragment>
                                    <div className='form-group contact-input'>
                                        <i className='fas fa-phone fa-2x' />
                                        <input
                                            type='text'
                                            placeholder='Phone Number'
                                            name='phone'
                                            value={profile?.info?.phone}
                                        />
                                    </div>

                                    <div className='form-group contact-input'>
                                        <i className='far fa-envelope fa-2x' />
                                        <input
                                            type='text'
                                            placeholder='Email ID'
                                            name='email'
                                            value={profile?.info?.email}
                                        />
                                    </div>
                                </Fragment>
                            )}


                            <Education education={profile.education} action={false} />
                        </div>
                        {profile.verificationStatus === 'PENDING' && <>
                            <button onClick={() => { changeProfileStatus("VERIFIED") }} style={{ margin: '10px', padding: '10px', border: '10px', borderRadius: '50px', background: 'green', color: 'white', fontWeight: 700 }}>
                                Verify Profile
                            </button>
                            <button onClick={() => { changeProfileStatus("REJECTED") }} style={{ margin: '10px', padding: '10px', border: '10px', borderRadius: '50px', background: 'yellow', color: 'black', fontWeight: 700 }}>
                                Reject Profile
                            </button>
                        </>
                        }

                        {profile.verificationStatus === 'VERIFIED' && <>
                            <button onClick={() => { changeProfileStatus('PENDING') }} style={{ margin: '10px', padding: '10px', border: '10px', borderRadius: '50px', background: 'green', color: 'white', fontWeight: 700 }}>
                                Pending Profile
                            </button>
                            <button onClick={() => { changeProfileStatus("REJECTED") }} style={{ margin: '10px', padding: '10px', border: '10px', borderRadius: '50px', background: 'yellow', color: 'black', fontWeight: 700 }}>
                                Reject Profile
                            </button>
                        </>
                        }

                        {/* {profile.verificationStatus === 'REJECTED' && <>
                            <button onClick={() => { changeProfileStatus('PENDING') }} style={{ margin: '10px', padding: '10px', border: '10px', borderRadius: '50px', background: 'green', color: 'white', fontWeight: 700 }}>
                                Pending Profile
                            </button>
                        </>
                        } */}

                    </form>
                </div>
            }
        </div>
    )
}
