import React from 'react'
import style from '../../styles/Home.module.css'
import Link from 'next/link'

export default function FirstPst() {
  return(
    <>
        <h1 className={style.title}>FirstPost</h1>
        <button><Link href='/'>Back to main page</Link></button>
    </>
  )
}
