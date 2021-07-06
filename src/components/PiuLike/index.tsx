import React from "react";

import Piu, { PiuProps } from "../Piu";
import User, { UserProps } from "../User";

export interface PiuLikeProps {
	id: string;
	user: UserProps;
	piu: PiuProps;
}

const PiuLike: React.FC<PiuLikeProps>= (PiuLikeProps) =>{
   return(
		<>
		</>
   );
}

export default PiuLike;