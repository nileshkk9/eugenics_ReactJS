import { useEffect, useState } from "react";
import Listitem from "../Listitem/Listitem";
import "./ViewReport";
import { api } from "../../Api/requests";
import Spinner from "../SpinnerV3/Spinner";
import Pagination from '@mui/material/Pagination';


const Main = () => {
  const [activePage, setActivePage] = useState(1);
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getReports(activePage);
    // eslint-disable-next-line
  }, []);

  const getReports = async (pageNumber) => {
    setIsLoading(true);
    const reportsRes = await api.getReports(pageNumber);
    if (reportsRes.status === 200) {
      console.log(reportsRes.data);
      setReports(reportsRes.data);
    } else {
      console.log("error", reportsRes.data);
    }
    setIsLoading(false);
  };

  const handlePagination = (e,pageNumber) => {
    getReports(pageNumber);
    setActivePage(pageNumber);
  };
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : reports ? (
        <div>
          <div className="w3-container">
            <ul className="w3-ul w3-card-4">
              {reports.map((data, i) => (
                <Listitem data={data} key={i} />
              ))}
            </ul>
          </div>
          <div className="pagination-listview">
          <Pagination count={10} color="primary" onChange={handlePagination} page={activePage}/>
          </div>
        </div>
      ) : (
        <div className="noentry">
          <h3>No Reports Found</h3>
        </div>
      )}
    </div>
  );
};
export default Main;
