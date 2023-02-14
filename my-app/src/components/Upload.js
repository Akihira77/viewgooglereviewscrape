import { useState } from "react";
import * as XLSX from "xlsx";

export const Upload = () => {
  const [fileRead, setFileRead] = useState(null);

  const handleUploadFile = (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];
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
        };
        reader.readAsArrayBuffer(selectedFile);
      } else {
        reader.onload = (e) => {
          let json = JSON.parse(e.target.result);
          setFileRead(json);
        };
        reader.readAsText(selectedFile);
      }
    } else {
      alert("plz input file");
    }
  };

  const importFile = (e) => {
    e.preventDefault();
    let json = [];
    for (let i = 0; i < fileRead.length; i++) {
      let b1 = JSON.stringify(fileRead[i]["Bintang 1"]).includes("empty") === false ? 1 : 0;
      let b2 = JSON.stringify(fileRead[i]["Bintang 2"]).includes("empty") === false ? 1 : 0;
      let b3 = JSON.stringify(fileRead[i]["Bintang 3"]).includes("empty") === false ? 1 : 0;
      let b4 = JSON.stringify(fileRead[i]["Bintang 4"]).includes("empty") === false ? 1 : 0;
      let b5 = JSON.stringify(fileRead[i]["Bintang 5"]).includes("empty") === false ? 1 : 0;
      let obj = {
        index: i + 1,
        nama: fileRead[i]["Nama"],
        rate: b1 + b2 + b3 + b4 + b5,
        //waktuDalamHari:
        //    time *
        //    (fileRead[i]["Waktu Review"].includes("bulan")
        //        ? 30
        //        : fileRead[i]["Waktu Review"].includes("minggu")
        //            ? 7
        //            : 1),
        waktu: fileRead[i]["Waktu Review"],
        review: fileRead[i]["Review"],
        jumlahLike: fileRead[i]["Jumlah Like"],
        respon: fileRead[i]["Respon"],
        waktuRespon: fileRead[i]["Waktu Respon"],
        textRespon: fileRead[i]["Text Respon"],
      };
      json.push(obj);
    }
    console.log(json);
    localStorage.setItem("data", JSON.stringify(json));
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
              <em>.json, .csv, .xls</em>
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
