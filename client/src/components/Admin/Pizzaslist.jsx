import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Table } from "react-bootstrap";
import { deletePizza, getAllPizzas } from "../../actions/pizzaAction";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { Link } from "react-router-dom";

const Pizzaslist = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  console.log(pizzas);
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error>Error while fetching pizzas {error}</Error>
      ) : (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Pizza Name</th>
                <th>Prices</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pizzas &&
                pizzas.map((pizza) => (
                  <tr>
                    <td>
                      <img
                        src={pizza.image}
                        alt="logo"
                        width="100px"
                        height="100px"
                      />
                    </td>
                    <td>{pizza.name}</td>
                    <td>
                      Small : {pizza.prices[0]["small"]}
                      <br />
                      Medium : {pizza.prices[0]["medium"]}
                      <br />
                      Large : {pizza.prices[0]["large"]}
                    </td>
                    <td>{pizza.category}</td>
                    <td>
                      <Link to={`/admin/editpizza/${pizza._id}`}>
                        <AiFillEdit style={{ cursor: "pointer" }} />
                      </Link>
                      &nbsp;
                      <AiFillDelete
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => {
                          dispatch(deletePizza(pizza._id));
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default Pizzaslist;
