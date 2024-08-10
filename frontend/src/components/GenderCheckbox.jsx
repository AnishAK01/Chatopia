import React from 'react'

export const GenderCheckbox = () => {
    return (
        <div className='flex'>
           <div className="form-control mt-2">
                <label className="cursor-pointer label">
                    <span className="label-text mx-2">Male</span>
                    <input type="checkbox" className="checkbox checkbox-warning" />
                </label>
            </div>

            <div className="form-control mt-2">
                <label className="cursor-pointer label">
                    <span className="label-text mx-2">Female</span>
                    <input type="checkbox" className="checkbox checkbox-warning" />
                </label>
            </div>
        </div>
    )
}
