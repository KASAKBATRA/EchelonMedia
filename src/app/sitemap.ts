import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://echelonmedia.in';

	return [
		{
			url: `${baseUrl}/`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: `${baseUrl}/homepage`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.9,
		},
	];
}
