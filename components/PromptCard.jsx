import React from "react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";

const PromptCard = ({ handleTagClick, post, handleEdit, handleDelete }) => {
	return (
		<div className="prompt_card">
			<div className="flex items-start justify-between gap-5">
				<div>
					<Image
						src={post.creator.image}
						alt="user_image"
						width={40}
						height={40}
						className="object-contain rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default PromptCard;
