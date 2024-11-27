import React from "react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";

const PromptCard = ({ handleTagClick, post, handleEdit, handleDelete }) => {
	const [copied, setCopied] = useState("");

	return (
		<div className="prompt_card">
			<div className="flex items-start justify-between gap-5">
				<div className="flex items-center justify-start flex-1 gap-3 cursor-pointer">
					<Image
						src={post.creator.image}
						alt="user_image"
						width={40}
						height={40}
						className="object-contain rounded-full"
					/>

					<div className="flex flex-col">
						<h3 className="font-semibold text-gray-900 font-satoshi">{post.creator.username}</h3>
						<p className="text-sm text-gray-500 font-inter">{post.creator.email}</p>
					</div>
				</div>

				<div className="copy_btn" onClick={() => {}}>
					<Image
						src={copied === post.prompt ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"}
						width={12}
						height={12}
					/>
				</div>
			</div>

			<p className="my-4 text-sm text-gray-700 font-satoshi">{post.prompt}</p>
			<p
				className="text-sm cursor-pointer blue_gradient font-inter"
				onClick={() => handleTagClick && handleTagClick(post.tag)}
			>
				{post.tag}
			</p>
		</div>
	);
};

export default PromptCard;
