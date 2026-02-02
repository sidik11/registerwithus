import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../utils/api.js";

export default function useSeo(pageName) {
  const [seo, setSeo] = useState({
    title: "",
    description: "",
    keywords: "",
    author: "",
    robots: "",
    canonical: ""
  });

  useEffect(() => {
    if (!pageName) return;

    async function fetchSeo() {
      try {
        // Fetch meta tags
        const metaRes = await fetch(
          `${API_BASE_URL}/api/meta-tags?page_name=${pageName}`
        );
        const metaJson = await metaRes.json();

        const metaMap = {};
        if (metaJson.success) {
          metaJson.data.forEach(m => {
            metaMap[m.meta_name] = Array.isArray(m.meta_content)
              ? m.meta_content.join(", ")
              : m.meta_content;
          });
        }

        // Fetch canonical
        const canonicalRes = await fetch(
          `${API_BASE_URL}/api/canonical?page_name=${pageName}`
        );
        const canonicalJson = await canonicalRes.json();

        setSeo({
          title: metaMap.title || "",
          description: metaMap.description || "",
          keywords: metaMap.keywords || "",
          author: metaMap.author || "",
          robots: metaMap.robots || "",
          canonical: canonicalJson?.canonical_url || ""
        });
      } catch (err) {
        console.error("SEO fetch error:", err);
      }
    }

    fetchSeo();
  }, [pageName]);

  return seo;
}