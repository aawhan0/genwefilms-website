export interface Project {
  slug: string;
  title: string;
  description: string;
  type: string;
  previewSrc: string;
  fullVideoSrc: string;
}

export const projects: Project[] = [
  {
    slug: "the-origin-story",
    title: "The Origin Story",
    description: "A cinematic brand film that repositioned a D2C skincare label as a premium lifestyle brand.",
    type: "Conceptual Brand Film",
    previewSrc: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4", // Placeholder, using hero video for now as I don't have the specific project videos
    fullVideoSrc: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4",
  },
  {
    slug: "in-every-drop",
    title: "In Every Drop",
    description: "A product advertisement film shot with motion control rigs, capturing texture and craft at macro scale.",
    type: "Product Ad Film",
    previewSrc: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4",
    fullVideoSrc: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4",
  },
  {
    slug: "boundless",
    title: "Boundless",
    description: "A fully CGI-rendered advertisement exploring the future of performance sportswear for a Gen-Z audience.",
    type: "CGI Ad Film",
    previewSrc: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4",
    fullVideoSrc: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4",
  },
];
