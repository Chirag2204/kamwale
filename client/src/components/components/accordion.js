import React, { useState } from 'react'

export const AccordionComponent = ({ title, imageSrc }) => {
    const [isOpen, setisOpen] = useState(true)
    return (
        <div>
            {imageSrc && imageSrc !== "" &&
                <>
                    <div onClick={() => { setisOpen(!isOpen) }} style={{
                        border: '3px solid white',
                        padding: '10px', display: 'flex',
                        justifyContent: 'space-between'
                    }} >
                        <div>{title}</div>
                        <div>{isOpen ? '^' : '>'}</div>
                    </div>
                    {isOpen && <div style={{ height: '50%', alignContent: 'center' }}>
                        <img
                            style={{ height: '80vh', "objectFit": "contain" }}
                            src={imageSrc}
                        />
                    </div>}</>
            }
        </div>
    )
}
