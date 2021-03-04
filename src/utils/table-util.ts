const getSelectedPageData = <T>(
  data: T[],
  selectedPage: number,
  rowsPerPage: number
): T[] => {
  const startRow = selectedPage * rowsPerPage;
  const endRow = selectedPage * rowsPerPage + rowsPerPage;
  return data.slice(startRow, endRow);
};

const TableUtils = {
  getSelectedPageData,
};

export default TableUtils;
