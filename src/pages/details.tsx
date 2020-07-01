import Link from "next/link";
import { useEffect, useState } from "react";


export default function Details({blogs}) {

  return <div>
            <pre>{blogs?.bpi?.USD.symbol}</pre>
            <pre>{blogs?.bpi?.USD.code}</pre>
            <pre>{blogs?.bpi?.USD.rate}</pre>
            <pre>{blogs?.bpi?.USD.description}</pre>
            <pre>{blogs?.bpi?.USD.ratefloat}</pre>
            <hr/>
            <pre>{blogs?.bpi?.EUR.symbol}</pre>
            <pre>{blogs?.bpi?.EUR.code}</pre>
            <pre>{blogs?.bpi?.EUR.rate}</pre>
            <pre>{blogs?.bpi?.EUR.description}</pre>
            <pre>{blogs?.bpi?.EUR.ratefloat}</pre>
            <hr/>
            <pre>{blogs?.bpi?.GBP.symbol}</pre>
            <pre>{blogs?.bpi?.GBP.code}</pre>
            <pre>{blogs?.bpi?.GBP.rate}</pre>
            <pre>{blogs?.bpi?.GBP.description}</pre>
            <pre>{blogs?.bpi?.GBP.ratefloat}</pre>
            <hr/>
    </div>
}

export async function getStaticProps(){
    debugger;
    const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    const blogs = await response.json()
    return {
        props: {
          blogs
        }
      }
}    


