import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAutho } from "./security/AunthContext";
import { retriveTodoByidApi } from "./Apicalls/Helloworldapi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { updateTodoByidApi, addTodoApi } from "./Apicalls/Helloworldapi";
export default function TodoComponent() {
  const { id } = useParams();
  const Navi = useNavigate();
  const [targetdate, updatetargetDate] = useState("");
  const { username } = useAutho();
  const [description, setdescription] = useState("");
  useEffect(() => {
    retriveTodoByidApi(username, id)
      .then((e) => {
        console.log("ef " + e);
        setdescription(e.data.description);
        updatetargetDate(e.data.targetdate);
      })
      .catch((e) => console.log("x "));
  }, [id]);
  function handleSumbit(values) {
    console.log(values);
    const todo = {
      id: id,
      username: username,
      done: false,
      description: values.description,
      targetdate: values.targetdate,
    };
    // present put is working so we direct to simple
    if (id !== -1) {
      updateTodoByidApi(username, id, todo)
        .then(Navi(`/listtodos`))
        .catch(console.log("falied"));
    } else {
      addTodoApi(username, todo)
        .then(Navi("/listtodos"))
        .catch((e) => console.log(e));
    }
  }
  function validate(value) {
    let error = {};
    //console.log("va" + value);
    if (value.description.length < 5) error.description = "aleast 5 characters";
    //console.log(value.targetdate);
    if (
      value.targetdate === undefined ||
      value.targetdate.length === 0 ||
      value.targetdate === null
    )
      error.targetdate = "targetdate should not be empty";
    //   console.log(error);
    return error;
  }
  return (
    <div className="TodoComponent">
      {id !== -1 && <h1>Update Todos</h1>}
      {id === -1 && <h1>Add Todo</h1>}
      <Formik
        initialValues={{ description, targetdate }}
        enableReinitialize={true}
        onSubmit={handleSumbit}
        validate={validate}
        // first validate will call then sumbit is called
        validateOnChange={false}
        validateOnBlur={false}
      >
        {(props) => (
          <Form className="form">
            <ErrorMessage
              name="description"
              component="div"
              className="alert alert-warning"
            />
            <ErrorMessage
              name="targetdate"
              component="div"
              className="alert alert-warning"
            />
            <fieldset className="form-group">
              <label>Description</label>
              {/* BElow one is used for input  */}
              <Field type="text" className="form-control" name="description" />
            </fieldset>
            <fieldset className="form-group">
              <label>TargetDate</label>
              {/* BElow one is used for input  */}
              <Field type="date" className="form-control" name="targetdate" />
            </fieldset>
            <div>
              <button className="btn btn-success m-5" type="submit">
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
