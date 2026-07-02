// TODO "CREAR LA LISTA QUE CONTIENE TODAS TARJETAS"

import { mountains } from "../Data/Mountains";
import MountainCard from "./MountainCard";

function MountainList() {

    return (
        <div className="mountain-list">
            {mountains.map((mountain) => (
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
    )
}

export default MountainList