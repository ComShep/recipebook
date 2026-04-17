import { Helmet } from "react-helmet-async"

type Props = {
	title?: string,
	description?: string,
	image?: string,
	noIndex?: boolean
}

export const SEO = ({
	title = 'Recipe Book',
	description = 'Discover delicious recipes for every occasion',
	image,
	noIndex = false,
}: Props) => {
	const siteName = 'Recipe Book';
	const fullTitle = title === siteName ? title : `${title} | ${siteName}`
	return (
		<Helmet>
			<title>{fullTitle}</title>
			<meta name="description" content={description}/>
			{noIndex && <meta name="robots" content="noindex, nofollow"/>}

			<link rel="icon" type="image/x-icon" href="/recipebook/favicon/favicon.ico"/>
			<link rel="apple-touch-icon" href="/recipebook/favicon/apple-touch-icon.png" />

			<meta property="og:title" content={fullTitle}/>
			<meta property="og:description" content={description}/>
			{image && <meta property="og:image" content={image} />}
		</Helmet>
	)
}
