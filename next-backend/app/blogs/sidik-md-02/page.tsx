// next-backend/app/blogs/[slug]/page.tsx

export async function generateMetadata({ params }) {
  const blog = await fetch(
    `https://api.yoursite.com/blog/${params.slug}`,
    { cache: "no-store" }
  ).then(r => r.json());

  return {
    title: blog.title,
    description: blog.excerpt,
    alternates: {
      canonical: `https://registerwithus.com/blogs/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `https://registerwithus.com/blogs/${blog.slug}`,
      images: [
        {
          url: blog.ogImage,
          width: 1200,
          height: 630,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.ogImage],
    },
  };
}

export default async function BlogDetails({ params }) {
  const blog = await fetch(
    `https://api.yoursite.com/blog/${params.slug}`,
    { cache: "no-store" }
  ).then(r => r.json());

  return (
    <article>
      <h1>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </article>
  );
}
