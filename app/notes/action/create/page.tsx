import CreateNote from '@/components/CreateNote/CreateNote';

export const metadata = {
	title: 'Create New Note',
	description: 'Fill out the form to add a new note. Capture your thoughts, ideas, or tasks quickly and easily.',
	url: 'https://07-routing-nextjs-bice.vercel.app/notes/action/create',
	openGraph: {
		title: 'Create New Note',
		description: 'Fill out the form to add a new note. Capture your thoughts, ideas, or tasks quickly and easily.',
		url: 'https://07-routing-nextjs-bice.vercel.app/notes/action/create',
		images: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
	},
};

export default function CreateNotePage() {
	return <CreateNote />;
}
