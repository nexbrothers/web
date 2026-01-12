// Author profiles for the blog
// Anyone can contribute - their profile will be linked here!

export interface Author {
  name: string;
  bio: string;
  avatar?: string;
  social?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    website?: string;
  };
}

export const authors: Record<string, Author> = {
  "aman-sharma": {
    name: "Aman Sharma",
    bio: "Co-founder at NexBrothers. Building products that matter.",
    social: {
      twitter: "https://twitter.com/AmanShar1310",
      github: "https://github.com/amansharmaNEX",
      linkedin: "https://linkedin.com/in/aman-sharma",
    },
  },
  "anuj-sharma": {
    name: "Anuj Sharma",
    bio: "Co-founder at NexBrothers. Passionate about technology and innovation.",
    social: {
      twitter: "https://twitter.com/anuj_sharma",
      github: "https://github.com/anujsharmaNEX",
      linkedin: "https://linkedin.com/in/anuj-sharma",
    },
  },
  "nexbrothers-team": {
    name: "NexBrothers Team",
    bio: "Building the future of technology at NexBrothers.",
    social: {
      twitter: "https://x.com/nexbrothers",
      github: "https://github.com/nexbrothers",
    },
  },
  // Add more guest authors here!
  // Format:
  // "author-slug": {
  //   name: "Author Name",
  //   bio: "Short bio about the author",
  //   social: {
  //     twitter: "https://twitter.com/username",
  //     github: "https://github.com/username",
  //   },
  // },
};

export function getAuthor(authorSlug: string): Author {
  return (
    authors[authorSlug] || {
      name: authorSlug,
      bio: "Guest contributor",
    }
  );
}
