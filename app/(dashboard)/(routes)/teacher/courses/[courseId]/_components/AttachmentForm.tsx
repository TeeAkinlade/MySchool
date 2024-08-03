"use client";

import * as z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import {  File, Loader2, PlusCircle, X } from "lucide-react";
import { Attachment, Course } from "@prisma/client";
import { FileUpload } from "@/components/FileUplaod";

interface AttachmentFormProps {
    initialData: Course & { attachments: Attachment[]};
    courseId: string
}


const formSchema = z.object({
    url: z.string().min(1)
})

export const AttachmentForm = ({ initialData, courseId }: AttachmentFormProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [delectingId, setDelectingId] = useState<string | null>(null);
    const router = useRouter();

    const toggleEdit = () => setIsEditing((current) => !current);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try{
            await axios.post(`/api/courses/${courseId}/attachments`, values);
            toast.success("course updated");
            toggleEdit();
            router.refresh()
        } catch {
            toast.error("something went wrong")
        }
    };

    const onDelete = async (id: string) => {
        try {
            setDelectingId(id);
            await axios.delete(`/api/courses/${courseId}/attachments/${id}`);
            toast.success("Attachment delected")
            router.refresh();
        } catch {
            toast.error("something went wrong");
            setDelectingId(null)
        }
    }

    return(
        <div className="mt-6 border bg-slate-100 rounded-md p-4">
            <div className="font-medium flex items-center justify-between">
                Course attachment
                <Button onClick={toggleEdit} variant="ghost">
                    {isEditing && (
                        <>Cancel</>

                        )}
                        {!isEditing && (
                            <>
                                <PlusCircle className="h-4 w-4 mr-2" />
                                Add an file
                            </>
                        )}
                </Button>   
            </div>
            {!isEditing && (
                <>
                    {initialData.attachments.length === 0 && (
                        <p className="text-sm mt-2 text-slate-500 italic
                        ">
                            No attachments yet
                        </p>
                    )}
                     {initialData.attachments.length > 0 && (
                        <div className="space-y-2">
                            {initialData.attachments.map((attachment) => (
                                <div 
                                    key={attachment.id}
                                    className="flex items-center p-3  w-full bg-sky-100 border-sky-200 border text-sky-700 rounded-md"
                                >
                                <File className="h-4 w-4 mr-2 flex-shrink-0"/>
                                <p className="text-xs line-clamp-1">
                                    {attachment.name}
                                </p>
                                {delectingId === attachment.id && (
                                    <div>
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                    </div>
                                )}
                                {delectingId !== attachment.id && (
                                    <button 
                                        onClick ={() => onDelete(attachment.id)}
                                        className="ml-auto hover:opacity-75 transition">
                                        <X className="h-4 w-4" />
                                    </button>
                                )}
                                </div>
                            ))}
                        </div>
                     )}
                </>
            )}
            {isEditing && (
               <div>
                <FileUpload
                    endpoint="courseAttachment"
                    onChange={(url) => {
                        if (url) {
                            onSubmit({ url: url});
                        }
                    }}
                />
                <div className="text-sm text-muted-foreground mt-4">
                    Add anyhing your student might need to complete the course.
                </div>
               </div>
            )}
        </div>
    )
}