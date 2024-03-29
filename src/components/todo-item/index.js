function TodoItem ({index, todo}) {
    return (
        <li className="list-group-item" key={index}>
            <input className="form-check-input me-1" type="checkbox"/>
            <span className="me-3">{todo}</span>
            <button className="btn btn-danger">Delete</button>
        </li>
    );
}

export default TodoItem;