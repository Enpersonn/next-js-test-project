export type fileType = {
    name: string;
    type: "file" | "folder";
    title?: string;
    description?: string[];
    children?: fileType[];
}
