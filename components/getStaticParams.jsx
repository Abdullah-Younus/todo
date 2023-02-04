import React from 'react'



// static genrateStaticParams

export async function generateStaticParams() {
    const ids = ["1", "2"];
    return ids.map((id) => ({ id: id }));
}


export default function getStaticParams() {
    return (
        <div>getStaticParams</div>
    )
}
