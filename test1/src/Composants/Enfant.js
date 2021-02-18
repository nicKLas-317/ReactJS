import React from 'react';



// Composant function
// export function App2()
const Enfant = () => {
    return (
        <>
            <Headerbar />
            <Footerbar />
        </>
    )
}

const Footerbar = () => {
    return (
        <div>
            <p>3e composant :</p>
            <ul>
                <li>Footer</li>
                <li>Footer</li>
                <li>Footer</li>
            </ul>
        </div>
    )
}
const Headerbar = () => {
    return (
        <div>
            <p>2e composant :</p>
            <ul>
                <li>Header</li>
                <li>Header</li>
                <li>Header</li>
            </ul>
        </div>
    )
}

export default Enfant