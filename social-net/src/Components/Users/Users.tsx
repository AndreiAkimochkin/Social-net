import React from 'react'
import styles from './users.module.css'
import * as axios from 'axios';
import UserPhoto from '../Images/user.png';

const Users = (props: any) => {
    let getUsers =()=> {
    if (props.users.length === 0) {

        // @ts-ignore
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            // @ts-ignore
            props.setUsers(response.data.items);
        })
        // props.setUsers([{
        //     id: 1,
        //     photoUrl: 'https://cdn1.iconfinder.com/data/icons/animal-avatars-soft-fill/60/Duck-animals-farm-wildlife-animal-avatars-512.png',
        //     followed: false,
        //     name: "Andrei",
        //     status: 'Im ok',
        //     location: {city: "Stockholm", country: 'Sweden'}
        // },
        //     {
        //         id: 2,
        //         photoUrl: 'https://cdn1.iconfinder.com/data/icons/animal-avatars-soft-fill/60/Duck-animals-farm-wildlife-animal-avatars-512.png',
        //         followed: true,
        //         name: "Mark",
        //         status: 'Whats upppp',
        //         location: {city: "Moscow", country: 'Russia'}
        //     },
        //     {
        //         id: 3,
        //         photoUrl: 'https://cdn1.iconfinder.com/data/icons/animal-avatars-soft-fill/60/Duck-animals-farm-wildlife-animal-avatars-512.png',
        //         followed: true,
        //         name: "Kate",
        //         status: 'What are u thinking',
        //         location: {city: "Kiev", country: 'Ukraine'}
        //     },
        //     {
        //         id: 4,
        //         photoUrl: 'https://cdn1.iconfinder.com/data/icons/animal-avatars-soft-fill/60/Duck-animals-farm-wildlife-animal-avatars-512.png',
        //         followed: false,
        //         name: "Chris",
        //         status: 'Lets goo',
        //         location: {city: "Stockholm", country: 'Sweden'}
        //     }
        // ])
    }
    }
    // @ts-ignore
    return <div>
        <button onClick={getUsers}>Get users</button>
        {
            props.users.map((u: {
                status: string,
                location: { city: string, country: string },
                name: string,
                id: number,
                photos: { small: string | undefined, large: string | undefined }
                followed: boolean
            }) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : UserPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                    </span>
                </span>
            </div>)
        }

    </div>
}


export default Users