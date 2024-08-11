import React from 'react'

export const GenderCheckbox = ({onCheckboxChange,selectedGender}) => {
    return (
        <div className='flex'>
           <div className="form-control mt-2">
                <label className={`cursor-pointer label ${selectedGender==='male'?"selected":""}`}>
                    <span className="label-text mx-2">Male</span>
                    <input type="checkbox" className="checkbox checkbox-warning" checked={selectedGender==="male"}
                    onChange={()=> onCheckboxChange("male")} />
                </label>
            </div>

            <div className="form-control mt-2">
                <label className={`cursor-pointer label ${selectedGender==='female'?"selected":""}`}>
                    <span className="label-text mx-2">Female</span>
                    <input type="checkbox" className="checkbox checkbox-warning" checked={selectedGender==="female"}
                    onChange={()=> onCheckboxChange("female")}  />
                </label>
            </div>
        </div>
    )
}
