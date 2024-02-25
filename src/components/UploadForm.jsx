import { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("이미지를 업로드 해주세요.");
  return (
    <form>
      <label htmlFor="image">{fileName}</label>
      <input
        type="file"
        id="image"
        onChange={(e) => {
          const imageFile = e.target.files[0];
          setFile(imageFile);
          setFileName(imageFile.name);
        }}
      />
      <button type="submit">제출</button>
    </form>
  );
};
export default UploadForm;
0;
