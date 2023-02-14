import React from "react";

export const Home = () => {
  return (
    <div className="ms-5">
      <h1>This website is for view data from google maps review</h1>
      <div>
        <h2>Here i will give you a tutorial before view the data</h2>
        <ul className="mt-5">
          <li>
            Install extension for scraping data{" "}
            <a
              href="https://chrome.google.com/webstore/detail/instant-data-scraper/ofaokhiedipichpaobibbnahnkdoiiah"
              target="_blank"
              rel="noreferrer"
            >
              Instant Data Scraper
            </a>
          </li>
          <li>Go to your location use Google Maps and open the review And sort from the newest</li>
          <li>
            Open your Instant Data Scraper, Checklist <em>infinity scroll</em>, then scroll the
            reviews until your desired time <em>(like 6 months, 1 years etc...)</em>
          </li>
          <li>
            After that rename the head of column like this ... then download as <em>csv</em>
          </li>
          <li>
            Finally <a href="upload-file">Upload your file</a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};
