import { Suspense } from "react";
import UpdatePrompt from "@/components/UpdatePrompt";

const Page = () => {
	return (
		<Suspense fallback={<div>Loading Update Prompt...</div>}>
			<UpdatePrompt />
		</Suspense>
	);
};

export default Page;
