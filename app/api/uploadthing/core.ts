import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
 
const handleAuth = () => {
    const { userId } = auth();
    // If you throw, the user will not be able to upload
    if (!userId) throw new Error("Unauthorized");
    return { userId};
}
 
export const ourFileRouter = {
    // Define as many FileRoutes as you like, each with a unique routeSlug
    courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        // Set permissions and file types for this FileRoute
        .middleware(() =>  handleAuth())
        .onUploadComplete(() => {}),
    courseAttachment: f(["text", "image", "video", "audio", "pdf"])
        .middleware(()=> handleAuth())
        .onUploadComplete(() => {}),
    chapterVideo: f({ video: { maxFileSize: "512GB", maxFileCount: 1 } })
    .middleware(() =>  handleAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;