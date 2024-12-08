import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
	return (
		<>
			<section className="w-full">
				<h1 className="text-left head_text">
					<span className="blue_gradient">{name} profile</span>
				</h1>
				<p className="text-left desc">{desc}</p>

				<div className="mt-10 prompt_layout">
					{data.map((post) => (
						<PromptCard
							key={post._id}
							post={post}
							handleDelete={() => handleDelete && handleDelete(post)}
							handleEdit={() => handleEdit && handleEdit(post)}
						/>
					))}
				</div>
			</section>
		</>
	);
};

export default Profile;
