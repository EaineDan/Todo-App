import styles from "./index.css";

function AddTodo() {
    return (
        <section className={styles.module.addTodo}>
            <input placeholder="start typing"/>
            <button>Create</button>
        </section>
    );
}

export default AddTodo;