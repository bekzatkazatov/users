import {useEffect, useState} from "react";
import axios from "axios";
import Modal from "./components/Modal";
import EditModal from "./components/EditModal";
import Carousel from "./components/Carousel";
import Gallery from "./components/Gallery";

const App = () => {
    const [userLIst, setUserList] = useState([])
    const [isShowModal, setShowModal] = useState(false)
    const [isEditShowModal, setEditShowModal] = useState(false)
    const [editUser, setEditUser] = useState({})

    useEffect(() => {
        axios('https://64357ec2537112453fd7f9f7.mockapi.io/users')
            .then(res => setUserList(res.data))
    }, [])

    const handleDelete = (id) => {
        axios.delete(`https://64357ec2537112453fd7f9f7.mockapi.io/users/${id}`)
            .then(res => setUserList(userLIst.filter(user => user.id !== id)))
    }

    const handleEditUser = (user) => {
        axios.put(`https://64357ec2537112453fd7f9f7.mockapi.io/users/${user.id}`, user)
            .then(res => setUserList([...userLIst.filter(user => user.id !== res.data.id), res.data ]))
    }

    const handleAddUser = (user) => {
        axios.post('https://64357ec2537112453fd7f9f7.mockapi.io/users', user)
            .then(res => setUserList([...userLIst, res.data]))
    }
    const handleEdit = (id) => {
        setEditShowModal(true)
        setEditUser(userLIst.find(user => user.id === id))
    }
    return (
        <div className={'container-xl'}>
            <table className={'table table-dark table-hover'}>
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">job</th>
                    <th scope="col">Hired</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    userLIst.map((user, index) => {
                        return (
                            <tr key={user.id}>
                                <th scope="row">{index + 1} </th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.job}</td>
                                <td>{user.hired ? 'yes' : 'no'}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={() => handleEdit(user.id)}>edit</button>
                                    <button onClick={() => handleDelete(user.id)}>delete</button>
                                </td>
                            </tr>
                        )
                    })

                }
                </tbody>
            </table>

            <button
                className={'btn btn-primary mt-2'}
                onClick={() => setShowModal(!isShowModal)}
            >Add user
            </button>
            <Carousel/>
            <Gallery/>
            {
                isShowModal && <Modal
                    handleAddUser={handleAddUser}
                    // editUser={editUser}
                    setShowModal={setShowModal}
                />
            }
            {
                isEditShowModal && <EditModal
                    handleAddUser={handleEditUser}
                    editUser={editUser}
                    setShowModal={setEditShowModal}
                />
            }
        </div>
    );
}

export default App;