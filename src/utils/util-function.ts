// Function to check and transform Google Drive link
export const getTransformedLink = (link: string) => {
  if (link.includes("drive.google.com")) {
    const extractFileIdFromGoogleDriveLink = (link: string) => {
      const regex = /\/d\/(.*?)\//;
      const match = link.match(regex);
      return match ? match[1] : "";
    };

    const fileId = extractFileIdFromGoogleDriveLink(link);
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }
  return link;
};
