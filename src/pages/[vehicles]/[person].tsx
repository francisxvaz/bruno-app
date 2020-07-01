import React from 'react'
import {useRouter} from "next/router";

function Person() {

    const router = useRouter();

    return (
        <div>
            {router.query.person}'s' {router.query.vehicles}
        </div>
    )
}

export default Person
