import  { useState, useEffect } from 'react';

const mockApiUrl = 'https://jsonplaceholder.typicode.com/comments';

const PaginatedTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${mockApiUrl}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  const handleFirstPage = () => {
    // setCurrentPage(0);
  }

  const handlePreviousPage = () => {
    // setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
  };

  const handleNextPage = () => {
    // const totalPages = Math.ceil(data.count / 10) - 1; // Assuming page size is 10
    // setCurrentPage((prevPage) => Math.min(totalPages, prevPage + 1));
  };

  const handleLastPage = () => {
  //   const totalPages = Math.ceil(data.count / 10) - 1; // Assuming page size is 10
  //   setCurrentPage(totalPages);
  }

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === Math.ceil(data.count / 10) - 1;

  return (
 
    <div>
         {console.log(data)}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={handleFirstPage}
          disabled={isFirstPage || isLoading}
          className="first-page-btn"
        >
          First
        </button>
        <button
          onClick={handlePreviousPage}
          disabled={isFirstPage || isLoading}
          className="previous-page-btn"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={isLastPage || isLoading}
          className="next-page-btn"
        >
          Next
        </button>
        <button
          onClick={handleLastPage}
          disabled={isLastPage || isLoading}
          className="last-page-btn"
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default PaginatedTable;