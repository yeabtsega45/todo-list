const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
      {/* Add Task */}
      <div className="row">
        <div className="col">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
      </div>
      <br />
    </>
  );
};

export default AddTaskForm;
