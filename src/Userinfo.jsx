import useUserInfo from './useUserInfo'

function Userinfo() {
    const[userName,nameBind,nameReset]=useUserInfo('')
    const[userSurName,surNameBind,SurNameReset]=useUserInfo('')
    const register = (e) => {
        e.preventDefault()
        alert(`Adınız : ${userName} Soyadınız : ${userSurName}`) 
        nameReset()
        SurNameReset()
    }
  return (
    <div className='container'>
        <h3>Üye Kayıt Formu</h3>
        <form onSubmit={register} >
             <div className='formInput'>
                <label>Adınız</label>
                <input type='text' {...nameBind}/>
             </div>
             
             <div className='formInput'>
                <label>Soyadınız</label>
                <input type='text' {...surNameBind}/>
             </div>
             <div className='formBtn'>
                <button className='btn btn-primary'>Kaydet</button>
             </div>
        </form>   
    </div>
  )
}

export default Userinfo