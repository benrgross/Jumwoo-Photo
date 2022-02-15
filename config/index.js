const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://jumwoo-photo-3dg4cdo51-benrgross.vercel.app";
