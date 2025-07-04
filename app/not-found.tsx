import css from './page.module.css';

export const metadata = {
	title: 'Page not Found',
	description: 'Oops! We couldn`t find the page you were looking for. It might have been deleted or never existed.',
	url: '/*',
	openGraph: {
		title: 'Page not Found',
		description: 'Oops! We couldn`t find the page you were looking for. It might have been deleted or never existed.',
		url: '/*',
		images: 'https://storage.googleapis.com/support-forums-api/attachment/thread-275804406-4521668504705607705.jpg',
	},
};

const NotFound = () => {
	return (
		<>
			<h1 className={css.title}>404 - Page not found</h1>
			<p className={css.description}>Sorry, the page you are looking for does not exist.</p>
		</>
	);
};

export default NotFound;
