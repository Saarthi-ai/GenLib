import React from "react";
import "./CsvUploadModal.css";
import { trueSign, falseSign, inActiveCSV, activeCSV } from '../../assets/index';

function CsvUploadModal(props) {
  return (
    <div className="CsvUploadModal-wrapper">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          flexDirection: "column",
        }}
      >
        <div className="upload-section">
          <div className="csv-uploaded-section">
            <div className="csv-uploaded-img">
              <img
                src={props.percentage == 100 ? activeCSV : inActiveCSV}
                id="auto_CSV_percentage"
              />
            </div>
            <div className="csv-uploaded-label" id="auto_CSV_fileName">
              {props.fileName}
            </div>
            <div className="isuploaded">
              {props.percentage !== 100 ? (
                <>
                  <progress value={props.percentage} max="100" />
                  {props.percentage}%
                </>
              ) : (
                <div
                  className={
                    !props.failedMsg ? "msgUploaded" : "errorMsgUploaded"
                  }
                >
                  <p id="auto_failed_msg">
                    {" "}
                    {!props.failedMsg ? "Uploaded" : "Failed"}
                  </p>{" "}
                  <img
                    className="imguploadRight"
                    src={!props.failedMsg ? trueSign : falseSign}
                    id="auto_img_upload_right"
                  ></img>
                </div>
              )}
            </div>
            {/* <div className="csv-upload-status-img">
            <img src={close} />
          </div> */}
          </div>
        </div>
        <div className="blank-div"></div>
      </div>
    </div>
  );
}

export default CsvUploadModal;
