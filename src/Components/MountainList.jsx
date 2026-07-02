// TODO "CREAR LA LISTA QUE CONTIENE TODAS TARJETAS"

import { mountains } from "../Data/Mountains";
import MountainCard from "./MountainCard";
import { useState } from "react";

function MountainList() {

    const [search, setSearch] = useState("")

    const filterArray = mountains.filter((mountain) => 
    mountain.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <input type="text" 
            className="search-bar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />

            <div className="mountain-list">
                {filterArray.map((mountain) => (
                    <MountainCard 
                        key={mountain.id}
                        name={mountain.name}
                        height={mountain.height}
                        status={mountain.status}
                        image={mountain.image}
                        save={mountain.save}
                    />
                ))}
            </div>
        </>
    )
}

export default MountainList