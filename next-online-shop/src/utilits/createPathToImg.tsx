type CreatePathToImg = (filePath: string, host?: string) => string;

const createPathToImg: CreatePathToImg = (
  filePath,
  host = "http://45.12.239.121:5001",
) => {
  const pathParts = filePath.split("/react-online-shop-embroidery/server");
  const filePathWithoutPrefix = pathParts[1] || "";

  return `${host}${filePathWithoutPrefix}`;
};

export default createPathToImg;
