
import {useEffect, useState} from "react";
import axios from "axios";
import button from "bootstrap/js/src/button";
import Modal from "./components/Modal";

const App = () => {
  const [userLIst,setUserList]= useState([])
  const [isShowModal,setShowModal]=useState(false)
  const[editUser,setEditUser]=useState({})

  useEffect(() => {
    axios('https://64357ec2537112453fd7f9f7.mockapi.io/users')
        .then(res => setUserList(res.data))
      },[])
  const handleAddUser = (user) => {
    axios.post('https://64357ec2537112453fd7f9f7.mockapi.io/users')
        .then (res => setUserList([...userLIst.res.data]))
    const handleEdit = (id) => {
      setShowModal(true)
      setEditUser(userLIst.find(user => user.id===id))
    }
  }
  const handleEdit =(id)=>{
      setShowModal(true)
      setEditUser(userLIst.find(user => user.id === id))
  }
  return (
    <div className={'container-xl'}>
      <table className={'table table-dark table-hover'}>
             <thead>
             <tr>
                 <th scope="col">name</th>
                 <th scope="col">Username</th>
                 <th scope="col">job</th>
                 <th scope="col">Hired</th>
                 <th scope="col">Email</th>
                 <th scope="col">action</th>
             </tr>
             </thead>
            <tbody>
              {
                  userLIst.map((user,index)=>{
                      return (
                  <tr key={user.id}>
                       <th  scope ="row">{index + 1} </th>
                       <td>{user.name}</td>
                       <td>{user.job}</td>
                      <td>{user.hired ? 'yes' : 'no'}</td>
                      <td>{user.email}</td>
                      <td> <button onClick={()=>handleEdit(user.id)}>edit</button></td>
                  </tr>
                  )
              })

              }


            </tbody>
      </table>
          <button
              className={'btn btn-primary mt-2'}
              onClick={()=>setShowModal(!isShowModal)}
          >Add user
          </button>
          {
              isShowModal && <Modal
              handleAddUser = {handleAddUser}
              editUser={editUser}
              setShowModal={setShowModal}
              />

          }
    </div>
  );
}

export default App;
