import WayToTeach from "./WayToTeach"
import { ways } from "../data"

export default function TeachingSection(){
    return (
        <section>
            <h2>Наш подход к сотрудничеству:</h2>
            <ul>
            {ways.map((el, index) => (
                <WayToTeach key={index} title={el.title} description={el.description} />
            ))}
            </ul>
        </section>
    )
}
