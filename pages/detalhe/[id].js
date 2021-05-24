import Head from 'next/head'
import {useRouter} from 'next/router'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import {list} from '../../dados'

export default function Detalhe() {

  const router = useRouter()
  const id = router.query.id
  const info = list.filter((nome)=>nome.id === parseInt(id))
  

    return ( 
    <div className = { styles.container } >
        <Head >
        <title > Create Next App </title> < meta name = "description" content = "Generated by create next app" / >
        <link rel = "icon" href = "/favicon.ico" / >
        </Head>
           
            <ul>
              { info.map(i=>(
                <li>
                  <h1>{i.nome}</h1>
             
                  <img  src={i.img} width="400" height="400" />
              
               </li>
  

              ))}
            
            </ul>

        </div>
    )
}

