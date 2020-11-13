import React from 'react'
import styles from './users.module.css'
import * as axios from 'axios';
import UserPhoto from '../Images/user.png';

class Users extends React.Component {

    componentDidMount(): void {
        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            // @ts-ignore
            this.props.setUsers(response.data.items);
            // @ts-ignore
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }
onPageChanged =(pageNumber:number)=> {
    // @ts-ignore
    this.props.setCurrentPage(pageNumber);
    // @ts-ignore
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
        // @ts-ignore
        this.props.setUsers(response.data.items);
    })
}
    render() {

        // @ts-ignore
        let pagesCount: number = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        // @ts-ignore
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <div>
                {pages.map(p => {// @ts-ignore
                    return <span className={this.props.currentPage === p && styles.selectedPage}
                        onClick={(e)=>{// @ts-ignore
                            this.onPageChanged(p)}}>{p}</span>
                })}

            </div>
            { // @ts-ignore
                this.props.users.map((u: {
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
                                // @ts-ignore
                                this.props.unfollow(u.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                // @ts-ignore
                                this.props.follow(u.id)
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
}

export default Users