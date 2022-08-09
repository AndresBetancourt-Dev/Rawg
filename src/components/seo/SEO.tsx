import Head from "next/head";

const DOMAIN = "https://www.jimraptis.com";
const DEFAULT_OG_IMAGE =
    "https://storage.googleapis.com/brandflow-bucket/personal/blog/portfolio-og.jpg";

export interface SEOProps {
    title?: string,
    description?: string,
    siteName?: string,
    canonical?: string,
    ogImage?: string,
    ogType?: string
}

const SEO: React.FC<SEOProps> = ({
    title = "",
    description = "Consumption of RAWG API for the building of games and blog and information display, built with Next.JS, Typescript, A11Y, Testing and Framer Motion.",
    siteName = "RAWG Platform",
    canonical = DOMAIN,
    ogImage = DEFAULT_OG_IMAGE,
    ogType = "website",
}) => {
    return (
        <Head>
            <title key="title">{`${title && `${title} - `}${siteName}`}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta key="og_type" property="og:type" content={ogType} />
            <meta key="og_title" property="og:title" content={title} />
            <meta key="og_description" property="og:description" content={description} />
            <meta key="og_locale" property="og:locale" content="en_IE" />
            <meta key="og_site_name" property="og:site_name" content={siteName} />
            <meta key="og_url" property="og:url" content={canonical ?? DOMAIN} />
            <meta key="og_site_name" property="og:site_name" content={siteName} />
            <meta
                key="og_image"
                property="og:image"
                content={ogImage ?? DEFAULT_OG_IMAGE}
            />
            <meta
                key="og_image:alt"
                property="og:image:alt"
                content={`${title} | ${siteName}`}
            />
            <meta key="og_image:width" property="og:image:width" content="1200" />
            <meta key="og_image:height" property="og:image:height" content="630" />

            <meta name="robots" content="index,follow" />

            <link rel="canonical" href={canonical ?? DOMAIN} />

            <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
    );
}

export default SEO;