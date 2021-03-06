import React from "react";

import avatarImg from '../../assets/images/avatar.png';
import PiuLike, { PiuLikeProps } from '../PiuLike';
import Piu, { PiuProps } from '../Piu';

export interface UserProps {
	id: string;
	username: string;
	first_name: string;
	last_name: string;
	email: string;
	about: string;
	photo: string;
	pius: PiuProps[];
	likes: PiuLikeProps[];
	following: UserProps[];
	followers: UserProps[];
	favorites: PiuProps[];
}

const User: React.FC<UserProps> = (UserProps) =>{
	return(
		<>
			{/* <div className="user-profile">
					<img src={UserProps.photo} alt="Foto de perfil" />
					<h3>{UserProps.username}</h3>
					<h3>{UserProps.first_name}</h3>
					<h3>{UserProps.last_name}</h3>
					<h3>{UserProps.about}</h3>
				</div> */}
		</>
   );
}

export default User;