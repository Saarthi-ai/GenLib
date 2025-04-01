import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import NoDatamodel from "../NoDatamodel";
import React from "react";
import "@testing-library/jest-dom";

describe("<NoDataModel/>", () => {
  it("renders No Data Model Component", () => {
    render(
      <NoDatamodel
        message="We haven't yet generated an invoice for you. Keep using Pravid."
        srcImg={"noInvoiceIcon"}
      />
    );
    const divElement = screen.getByTestId("no-data-model");
    expect(divElement).toBeInTheDocument();
  });

  it("renders message prop passed to No Data Model Component on screen", () => {
    render(
      <NoDatamodel
        message="We haven't yet generated an invoice for you. Keep using Pravid."
        srcImg={"noInvoiceIcon"}
      />
    );
    const divElement = screen.queryByText(
      /We haven't yet generated an invoice for you. Keep using Pravid./i
    );
    expect(divElement).toBeInTheDocument();
  });

  it("renders image prop passed to No Data Model Component on screen", async () => {
    render(
      <NoDatamodel
        message="We haven't yet generated an invoice for you. Keep using Pravid."
        srcImg={"noInvoiceIcon"}
      />
    );
    const res = "http://localhost/noInvoiceIcon";

    const displayedImage = document.querySelector("img");
    await waitFor(() => {
      expect(displayedImage.src).toContain(res);
    });
  });
});
