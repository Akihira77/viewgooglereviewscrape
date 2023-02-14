import React from "react";

export const Items = ({ currentItems }) => {
  return (
    <div className="items rounded">
      <table className="table table-hover border fs-4">
        <thead>
          <tr className="bg-secondary text-center" style={{ height: "70px" }}>
            <th scope="col"></th>
            <th scope="col">Name</th>
            {/*<th scope="col">Waktu dalam Hari</th>*/}
            <th scope="col">Rate</th>
            <th scope="col">Date</th>
            <th scope="col">Like</th>
            <th scope="col">Review</th>
            <th scope="col">Respon</th>
            <th scope="col">Respon Date</th>
            <th scope="col">Respon Text</th>
          </tr>
        </thead>
        <tbody>
          {currentItems?.map((item, index) => (
            <tr
              key={index}
              className={`text-wrap ${index & 1 ? "" : "table-light"}`}
              style={{ height: "140px" }}
            >
              <td className="text-center" style={{ width: "100px" }}>
                {item.index}
              </td>
              <td style={{ width: "15%" }}>{item.nama}</td>
              {/*<td style={{ width: "15%", textAlign: "center" }}>{item.waktuDalamHari}</td>*/}
              <td style={{ width: "5%" }} className="text-center">
                <span className="d-inline-block">{item.rate}</span>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-star-fill mb-1 text-warning"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </td>
              <td className="text-center" style={{ width: "10%" }}>
                {item.waktu}
              </td>
              <td className="text-center">{item.jumlahLike}</td>
              <td>{item.review}</td>
              <td>{item.respon}</td>
              <td>{item.waktuRespon}</td>
              <td>{item.textRespon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
