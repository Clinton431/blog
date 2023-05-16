import React from "react";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import Container from "app/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Ken Mwangi",
  description:
    "Indulge into my thoughts, software development and open-source contributions",
};

const BlogPage = () => {
  return (
    <section className="max-w-screen-lg m-auto min-h-[70%]  pb-20">
      <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
      {allBlogs
        .sort((first, second) => {
          if (new Date(first.publishedAt) > new Date(second.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <div key={post.slug} className="w-full flex-col space-y-1 mb-4">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            <p>{post.summary}</p>
          </div>
        ))}
    </section>
  );
};

export default BlogPage;
