type TasksPropsType = {
    data: {
        title: string,
        tasks:TasksType[],
        students: string[],
    }
}
    type TasksType = {
      taskId: number;
      title: string;
      isDone: boolean;
    };


export const Tasks = (props: TasksPropsType) => {
    const {data} = props
    const{title, tasks, students} = data
    

    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {tasks.map((element, index) => {
                    return(
                        <li key={index}>
                            <span>{element.taskId}</span>
                            <span>{element.title}</span>
                            <span>{element.isDone}</span>
                        </li>
                    )
                })}
            </ul>
            <ul>
                {students.map((student, index)=>{
                    return(
                        <li key={index}>{student}</li>
                    )
                })}
            </ul>
        </div>
    )
}