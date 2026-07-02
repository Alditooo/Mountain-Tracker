import { useState } from "react"
import { Bookmark } from "lucide-react"

function MountainCard({image, name, height, status, save}) {

    const [value, setValue] = useState(status)
    const [saved, setSaved] = useState(save)
    
    return (
        <div className="card">
            <img src={image} alt={name} className="card-image" draggable={false}/>
            <h2 className="card-name">{name}</h2>
            <p className="card-height">{height}m</p>
            <div className="card-status">
                <input type="checkbox" checked={value} onChange={() => setValue(!value)}/>
                <span>{value ? "Completed" : "Uncompleted"}</span>
                <Bookmark
                fill={saved ? "currentColor" : "none"}
                onClick={() => setSaved(!saved)}
                />
            </div>
        </div>
    )
}

export default MountainCard