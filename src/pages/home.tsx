import Header from '../todo/header';
import AddTodo from '../todo/add';
import TodoList from '../todo/list';
import { useSelector } from 'react-redux';
import Modal from '../todo/modal';
import { RootState } from "../stores";

export default function Home(){
    const { open:isModalOpen } = useSelector((state: RootState)=>state.modal)
    return (
        <div>     
       {isModalOpen && <Modal/>}
      <Header/>
      <AddTodo/>
      <TodoList/>
        </div>
    )
}