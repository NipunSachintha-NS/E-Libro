import React from "react";
const styles = () => {
  height: "10px";
  width: "100px";
};
function AddBook() {
  return (
    <>
      <div className="">
        <h1>Book Details</h1>
        <div className="bg">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
      </div>
    </>
  );
}

export default AddBook;
