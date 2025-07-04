import { fetchNoteById } from '@/lib/api';
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import NoteDetailsClient from './NoteDetails.client';

type NoteDetailsProps = {
	params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: NoteDetailsProps) {
	const { id } = await params;
	const parsedId = Number(id);
	const note = await fetchNoteById(parsedId);

	return {
		title: note.title,
		description: note.content.slice(0, 100),
		openGraph: {
			title: note.title,
			description: note.content.slice(0, 100),
			url: `https://07-routing-nextjs-bice.vercel.app/notes/${id}`,
			images: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
		},
	};
}

async function NoteDetails({ params }: NoteDetailsProps) {
	const queryClient = new QueryClient();

	const { id } = await params;
	const parsedId = Number(id);

	await queryClient.prefetchQuery({
		queryKey: ['note', parsedId],
		queryFn: () => fetchNoteById(parsedId),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<NoteDetailsClient />
		</HydrationBoundary>
	);
}

export default NoteDetails;
