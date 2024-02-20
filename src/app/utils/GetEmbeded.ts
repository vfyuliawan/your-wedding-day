export const GetEmbededFromGmap = (embeded : string) : string  | undefined =>{
    const regex = /src="(.*?)"/;
    const match = embeded.match(regex);
    const extractedUrl = match ? match[1] : null;
    return extractedUrl ?? "";
}