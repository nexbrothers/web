import Page, { metadata as pageMetadata } from "../privacypolicy/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...pageMetadata,
  alternates: {
    canonical: "https://nexbrothers.com/signlock/privacypolicy",
  },
};

export default Page;
