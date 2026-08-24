import { useEffect, useMemo, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

function List() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:8000/api/users");
      if (!response.ok) throw new Error("Failed to fetch users");

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(fetchData, 1000);
  }, []);

  // 🔍 Search filter
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  // 📄 Pagination logic
  const pageCount = Math.ceil(filteredUsers.length / itemsPerPage);

  const paginatedUsers = useMemo(() => {
    const start = currentPage * itemsPerPage;
    return filteredUsers.slice(start, start + itemsPerPage);
  }, [filteredUsers, currentPage]);

  const handlePageChange = (event) => {
    setCurrentPage(event.selected);
  };

  // Reset page when search changes
  useEffect(() => {
    setCurrentPage(0);
  }, [search]);

  if (loading) return <p className="status" style={{ fontSize: "60px" }}>Loading...</p>;
  if (error) return <p className="status error">{error}</p>;

  return (
    <div className="container">
      <input
        type="search"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {search && (
        <p>
          <strong>Result Found:</strong> {filteredUsers.length}
        </p>
      )}

      {paginatedUsers.length === 0 ? (
        <p className="status">No users found</p>
      ) : (
        <div className="card-grid">
          {paginatedUsers.map((user) => (
            <div className="card" key={user.id}>
              <p><strong>ID:</strong> {user.id}</p>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <Link to={`/user/${user.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {pageCount > 1 && (
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
          previousLabel="Prev"
          nextLabel="Next"
          breakLabel="..."
        />
      )}
    </div>
  );
}

export default List;
