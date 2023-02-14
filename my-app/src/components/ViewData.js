import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Items } from "./Items";

export const ViewData = ({ itemsPerPage }) => {
  const [itemOffSet, setItemOffSet] = useState(0);
  let temp = [],
    currentItems = [],
    pageCount = 0;

  const data = useState(JSON.parse(localStorage.getItem("data")));
  const items = data[0];
  console.log(items);
  const endOffset = itemOffSet + itemsPerPage;
  if (items !== null) {
    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    for (let i = itemOffSet; i < endOffset; i++) {
      //let time = items[i]["Waktu Review"].slice(0, items[i]["Waktu Review"].search(" "));
      //if (
      //    items[i]["Waktu Review"].slice(0, items[i]["Waktu Review"].search(" ")) == "seminggu" ||
      //    items[i]["Waktu Review"].slice(0, items[i]["Waktu Review"].search(" ")) == "sebulan"
      //) {
      //    time = 1;
      //}
      let b1 = JSON.stringify(items[i]["Bintang 1"]).includes("empty") === false ? 1 : 0;
      let b2 = JSON.stringify(items[i]["Bintang 2"]).includes("empty") === false ? 1 : 0;
      let b3 = JSON.stringify(items[i]["Bintang 3"]).includes("empty") === false ? 1 : 0;
      let b4 = JSON.stringify(items[i]["Bintang 4"]).includes("empty") === false ? 1 : 0;
      let b5 = JSON.stringify(items[i]["Bintang 5"]).includes("empty") === false ? 1 : 0;
      let obj = {
        index: i + 1,
        nama: items[i]["Nama"],
        rate: b1 + b2 + b3 + b4 + b5,
        //waktuDalamHari:
        //    time *
        //    (items[i]["Waktu Review"].includes("bulan")
        //        ? 30
        //        : items[i]["Waktu Review"].includes("minggu")
        //            ? 7
        //            : 1),
        waktu: items[i]["Waktu Review"],
        review: items[i]["Review"],
        jumlahLike: items[i]["Jumlah Like"],
        respon: items[i]["Respon"],
        waktuRespon: items[i]["Waktu Respon"],
        textRespon: items[i]["Text Respon"],
      };
      temp.push(obj);
    }
    currentItems = temp;
    pageCount = Math.ceil(items.length / itemsPerPage);
  }

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    // After change page of tabel will scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
    });
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffSet(newOffset);
  };

  return (
    <div className="mx-auto d-flex mb-4">
      {items && items.length > 0 ? (
        <div className="d-flex ps-3" style={{ width: "95%" }}>
          <div className="w-100">
            <h1 id="tabelLabel" className="text-center">
              Your Google Maps Reviews Data
            </h1>
            <Items currentItems={currentItems} />
          </div>
          <div className="mx-auto mt-5">
            <ReactPaginate
              className="pagination d-flex flex-column position-fixed text-center ms-3 mt-5"
              breakLabel="..."
              nextLabel=">>"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="<<"
              renderOnZeroPageCount={null}
              marginPagesDisplayed={2}
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
            ></ReactPaginate>
          </div>
        </div>
      ) : (
        <p>
          <em>loading...</em>
        </p>
      )}
    </div>
  );
};
