import { useState } from "react";
import * as XLSX from "xlsx";

export const Upload = () => {
  const [fileRead, setFileRead] = useState(null);

  const handleUploadFile = (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();

      if (selectedFile.type === "text/csv") {
        reader.onload = (e) => {
          const data = e.target.result;
          const workbook = XLSX.read(data, { type: "array" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const json = XLSX.utils.sheet_to_json(worksheet);
          setFileRead(json);
          console.log(json);
        };
        reader.readAsArrayBuffer(selectedFile);
      } else {
        reader.onload = (e) => {
          let json = JSON.parse(e.target.result);
          setFileRead(json);
          console.log(json);
        };
        reader.readAsText(selectedFile);
      }
    } else {
      alert("plz input file");
    }
  };

  const importFile = (e) => {
    e.preventDefault();
    console.log(fileRead);
    localStorage.setItem("data", JSON.stringify(fileRead));
    window.location = "view-data";
  };

  return (
    <div className="d-flex flex-column fs-3">
      <div className="d-flex align-items-center justify-content-center">
        <form
          className="d-flex flex-column text-center"
          onSubmit={importFile}
          encType="multipart/form-data"
        >
          <label htmlFor="formFile" className="form-label">
            Upload File{" "}
            <span className="text-danger">
              <em>.json</em>
            </span>
          </label>
          <input
            className="form-control fs-5"
            type="file"
            id="formFile"
            onChange={handleUploadFile}
            accept=".csv, .json"
          />
          <button type="submit" className="fs-4 mx-auto mt-5 btn btn-success">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};
