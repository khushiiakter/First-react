// export default function Todo({task}){
//     return (
//         <li>Task: {task}</li>
//     )
// }
export default function Todo({kaj, isDone}){
    // option 3
    return <li>{isDone ? "finish" : "pending"} : {kaj}</li>
    // option 2
    // if(isDone){
    //     return <li>Finished: {kaj}</li>
    // }
    // return <li>Work on: {kaj}</li>
    // if(isDone === true){
    //     return <li>Finished: {kaj}</li>
    // } else {
    //     return <li>Work on: {kaj}</li>
    // }
}
