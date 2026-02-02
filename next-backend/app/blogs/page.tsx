export const metadata = {
  title: "Blogs",
  description: "Latest updates and articles",
  alternates: {
    canonical: "https://registerwithus.com/blogs",
  },
};

export default async function BlogPage() {
  const blogs = await fetch("https://api.yoursite.com/blogs", {
    cache: "no-store",
  }).then(r => r.json());

  return (
    <main>
      {blogs.map(b => (
        <a key={b.slug} href={`/blogs/${b.slug}`}>
          {b.title}
        </a>
      ))}
    </main>
  );
}
