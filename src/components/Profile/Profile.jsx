import React from 'react';
import Wallpaper from './Wallpaper/Wallpaper';
import Info from './Info/Info';
import Posts from './Posts/Posts';
import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <section className={s.profile}>
            <Wallpaper />
            <div className={s.wrapper}>
                <Info />
                <Posts addPost={props.addPost}
                       state={props.state}
                       changePostText={props.changePostText}/>
            </div>
        </section>
    );
}

export default Profile;
