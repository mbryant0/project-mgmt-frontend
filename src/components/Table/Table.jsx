import React, { useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';

const Table = ({ rows, columns, bordered, striped }) => {
  const data = {
    columns: columns,
    rows: rows,
  };
  return (
    <MDBDataTable
      bordered={bordered}
      striped={striped}
      hover={true}
      searching={true}
      data={data}
      style={{ backgroundColor: 'white' }}
    />
  );
};

export default Table;
