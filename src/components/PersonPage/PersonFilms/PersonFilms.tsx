import React, {useEffect, useState} from 'react';
import {changeToHttps, makeCuncurrentRequest} from "../../../utils/network";
import styles from "./PersonFilms.module.scss"


interface PropsFilms {
    title: string
    episode_id: number
    opening_crawl?: string
}
interface Props {
    personFilms: Array<string>
}


const PersonFilms = ({personFilms}: Props) => {
    const [films, setFilms] = useState<Array<PropsFilms>>([])
    useEffect(() => {
        (async() =>{
            const filmsHttps = personFilms.map(film => changeToHttps(film))
            const res = await makeCuncurrentRequest(filmsHttps)
            setFilms(res)
        })()
    }, [])
    return (
        <div className={styles.wrapper}>
            <ul className={styles.list}  >
                {films?.sort((a, b) => a.episode_id - b.episode_id).map(({title, episode_id})=> (
                    <li className={styles.list__item} key={title} >
                        <span className={styles.item__episode} >Episode {episode_id}</span>
                        <span className={styles.item__colon} >:</span>
                        <span className={styles.item__title} >{title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PersonFilms;