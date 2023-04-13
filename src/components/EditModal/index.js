import {useState} from "react";
import CustomInput from "../CustomInput";

const EditModal = ({setShowModal,handleAddUser,editUser}) => {
    const [user,setUser]=useState(editUser || {})

    const handleSubmit =(e)=> {
        e.preventDefault()
        console.log(user)
        handleAddUser(user)
        setShowModal(false)
    }
    return (
        <div style={{position:'fixed',top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.5)",
            zIndex:1000}}>
            <div style={{position:'absolute',
                top:"50%",
                left:'50%',
                transform:'translate(-50%, -50%)',
                backgroundColor:'#fff',
                width:'500px',
                height:'500px',
                borderRadius:'10px',
                zIndex:1000}}>
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-group p-4"
                         style={{position:"relative"}}>
                        <button className={'btn'}
                                style={{border:"none",background:'transparent',position:'absolute',top:'10px',right:'10px',
                                    fontSize:'20px'}}
                                onClick={()=>setShowModal(false)}>
                            X
                        </button>
                        <div className={'mt-3'}>
                            <CustomInput
                                label={'name'}
                                value={user.name}
                                id ={'name'}
                                placeholder={'Enter name'}
                                onChange={(e)=> setUser({...user,name: e.target.value})}
                            />
                        </div>
                        <div className={'mt-3'}>
                            <CustomInput
                                label={'Username'}
                                value={user.username}
                                id ={'username'}
                                placeholder={'Enter username'}
                                onChange={(e)=> setUser({...user,username: e.target.value})}
                            />
                        </div>
                        <div className={'mt-3'}>
                            <CustomInput
                                label={'Email'}
                                value={user.email}
                                id ={'email'}
                                placeholder={'Enter email'}
                                onChange={(e)=> setUser({...user,email: e.target.value})}
                            />
                        </div>
                        <div className={'mt-3'}>
                            <CustomInput
                                label={'Job'}
                                value={user.job}
                                id ={'job'}
                                placeholder={'Enter job'}
                                onChange={(e)=> setUser({...user,job: e.target.value})}
                            />
                        </div>
                        <div className={'mt-3'}>
                            <input
                                type="checkbox"
                                className="btn-check"
                                id ='btnchek1'
                                autoComplete="off"
                                onChange={(e) => setUser({...user,hired: e.target.checked})}
                            />
                            <label className="btn btn-outline-primary" htmlFor='btnchek1'>Hired</label>
                        </div>
                        <button className={'btn btn-primary'} style={{display:"block",margin: " 15px auto 0"}}>Save</button>
                    </div>
                </form>

            </div>

        </div>
    )
};
export default EditModal