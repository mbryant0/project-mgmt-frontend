import React from 'react';
import { MDBDataTable } from 'mdbreact';

const Table = ({ rows, columns }) => {
  const data = {
    columns: columns,
    rows: rows,
  };

  return (
    <MDBDataTable
      striped={true}
      bordered={true}
      hover={true}
      searching={true}
      data={data}
      style={{ backgroundColor: 'white' }}
    />
  );
};

export default Table;
