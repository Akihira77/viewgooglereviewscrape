import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Items } from "./Items";

export const ViewData = ({ itemsPerPage }) => {
  const [itemOffSet, setItemOffSet] = useState(0);
  const [sort, setSort] = useState(false);
  let temp = [],
    currentItems = [],
    pageCount = 0;

  const data = useState(JSON.parse(localStorage.getItem("data")));
  const items = data[0];
  const endOffset = itemOffSet + itemsPerPage;

  function loop(from, to, sort = null) {
    if (sort === true) {
      items.sort((a, b) => a.rate - b.rate);
    } else if (sort === false) {
      window.location.reload();
    }
    for (let i = from; i < to; i++) {
      //let time = items[i]["Waktu Review"].slice(0, items[i]["Waktu Review"].search(" "));
      //if (
      //    items[i]["Waktu Review"].slice(0, items[i]["Waktu Review"].search(" ")) == "seminggu" ||
      //    items[i]["Waktu Review"].slice(0, items[i]["Waktu Review"].search(" ")) == "sebulan"
      //) {
      //    time = 1;
      //}
      let obj = {
        index: i + 1,
        nama: items[i].nama,
        rate: items[i].rate,
        //waktuDalamHari:
        //    time *
        //    (items[i]["Waktu Review"].includes("bulan")
        //        ? 30
        //        : items[i]["Waktu Review"].includes("minggu")
        //            ? 7
        //            : 1),
        waktu: items[i].waktu,
        review: items[i].review,
        jumlahLike: items[i].jumlahLike,
        respon: items[i].respon,
        waktuRespon: items[i].waktuRespon,
        textRespon: items[i].textRespon,
      };
      temp.push(obj);
    }
  }

  if (items !== null) {
    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)

    loop(itemOffSet, endOffset);
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

  const handleSort = () => {
    temp = [];
    loop(0, items.length, !sort);
    setSort(!sort);
    currentItems = temp;
    console.log(temp);
  };

  return (
    <div className="mx-auto d-flex mb-4">
      {items && items.length > 0 ? (
        <div className="d-flex ps-3" style={{ width: "96%" }}>
          <div className="w-100">
            <div className="text-center">
              <h1 id="tabelLabel">Your Google Maps Reviews Data</h1>
              <div className="d-flex">
                <p className="mx-auto">Total {items.length}</p>
                <button
                  className={`rounded btn ${sort ? "btn-success" : "btn-info"} fs-4`}
                  onClick={handleSort}
                >
                  Sort by Rate <em>{sort ? "dsc" : "asc"}</em>
                </button>
              </div>
            </div>
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
