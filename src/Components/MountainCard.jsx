// TODO "CREAR LA TARJETA QUE SE VA A MOSTRAR"

import { useState } from "react"

function MountainCard({image, name, height, status}) {

    const [value, setValue] = useState(status)
    
    return (
        <div className="card">
            <img src={image} alt={name} className="card-image"/>
            <h2 className="card-name">{name}</h2>
            <p className="card-height">{height}m</p>
            <div className="card-status">
                <input type="checkbox" checked={value} onChange={() => setValue(!value)}/>
                <span>{value ? "Completed" : "Uncompleted"}</span>
            </div>
        </div>
    )
}

export default MountainCard