export const getJwtErrorMessage = (error: any) => {
  if (error.message === "jwt expired")
    return "User Session is expired. Please login";

  return "Invalid Token";
};
