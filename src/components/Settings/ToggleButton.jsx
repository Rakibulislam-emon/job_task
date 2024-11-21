import React from 'react'
import './Style.css'
export default function ToggleButton() {
    return (
        <div>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
            </label>
        </div>
    )
}
