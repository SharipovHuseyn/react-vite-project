// export default function introSection(){
//     return (
//         <section className="intro">
//             <h1>TaxiGo — ваш надежный партнер</h1>
//             <h3>Быстро, безопасно и по доступной цене — ваш выбор для комфортных поездок</h3>
//         </section>
//     )
// }

import React from "react";

const e = React.createElement

export default function introSection(){
    return e("section", {className: "intro"}, [
        e('h1', {key: 0}, "TaxiGo — ваш надежный партнер"),
        e('h3', {key: 1}, "Быстро, безопасно и по доступной цене — ваш выбор для комфортных поездок")
    ])
}