export const metadata = {
  title: "Blogs",
  description: "Latest updates and articles",
  alternates: {
    canonical: "https://registerwithus.com/blogs",
  },
};

type Blog = {
  slug: string;
  title: string;
};

async function getBlogs(): Promise<Blog[]> {
  const res = await fetch("https://api.yoursite.com/blogs", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <main>
      {blogs.map((b) => (
        <a key={b.slug} href={`/blogs/${b.slug}`}>
          {b.title}
        </a>
      ))}
    </main>
  );
}
