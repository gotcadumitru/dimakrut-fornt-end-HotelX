import React, { useEffect, useState } from 'react';
import CustomButton from '../../../components/custom-button/CustomButton';
import FormInput from '../../../components/form-input/FormInput';
import s from './AdminProfile.module.css';

const AdminProfile = (props) => {
    useEffect(() => {
        props.getAllRooms();
        return () => {
            props.clearRooms();
        }
    }, [])
    const [newRoomData, setnewRoomData] = useState(
        {
            pret: '',
            clasa: '',
            nr_max_pers: '',
            poza1: '',
            poza2: '',
            poza3: '',
            poza4: '',
            facilitati: '',

        });
    const [emailText, setEmailText] = useState({
        subject: '',
        content: '',
    });

    const handleChangeEmailText = (event) => {
        let { value, name } = event.target;
        setEmailText({...emailText, [name]:value});
    }
    const handleSubmitEmailText = (e)=>{
        e.preventDefault();
        props.SendEmail(emailText)
        setEmailText({
            subject: '',
            content: '',
        })
        

    }
    const handleChange = (event) => {
        let { value, name } = event.target;
        setnewRoomData({ ...newRoomData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        props.addNewRoom(newRoomData.pret, newRoomData.clasa, newRoomData.nr_max_pers, newRoomData.poza1, newRoomData.poza2, newRoomData.poza3, newRoomData.poza4, newRoomData.facilitati);
        setnewRoomData(
            {
                pret: '',
                clasa: '',
                nr_max_pers: '',
                poza1: '',
                poza2: '',
                poza3: '',
                poza4: '',
                facilitati: '',
            })

    }
    const tableRooms = props.rooms.map(room =>{
        return(

        <tr className={`${s.colorTr}  ${room.rented.length>5 ? room.checked_in===1 ? s.blue : s.green : s.white} ${room.cleaned===1 ? '' : s.yellow}` }>
            <td>{room.id}</td>
            <td>{room.nr_max_pers}</td>
            <td>{room.clasa}</td>
            <td>{room.facilitati}</td>
            <td>{room.pret}</td>
        </tr>
    )
    })
    return (
        <div>

        <div className={s.adminContent}>

            <div className={s.contentItem}>
                <div className='sign-up'>
                    <h2 className='title'>Add New Room</h2>
                    <form className='sign-up-form' onSubmit={handleSubmit}>
                        <FormInput type='number' name='pret' value={newRoomData.pret} changeSubmitData={handleChange} label='Price in Euro' required />
                        <FormInput type='number' name='clasa' value={newRoomData.clasa} changeSubmitData={handleChange} label='0-SMALL | 1-MEDIUM | 2 BIG SIZE' required />
                        <FormInput type='number' name='nr_max_pers' value={newRoomData.nr_max_pers} changeSubmitData={handleChange} label='Max Number of Guests' required />
                        <FormInput type='text' name='poza1' value={newRoomData.poza1} changeSubmitData={handleChange} label='Image 1' required />
                        <FormInput type='text' name='poza2' value={newRoomData.poza2} changeSubmitData={handleChange} label='Image 2' required />
                        <FormInput type='text' name='poza3' value={newRoomData.poza3} changeSubmitData={handleChange} label='Image 3' required />
                        <FormInput type='text' name='poza4' value={newRoomData.poza4} changeSubmitData={handleChange} label='Image 4' required />
                        <FormInput type='text' name='facilitati' value={newRoomData.facilitati} changeSubmitData={handleChange} label='Facilities specified by comma' required />
                        <CustomButton type='submit'>Add new Room</CustomButton>
                    </form>
                </div>
            </div>

            <div className={s.contentItem}>
            <h2 className='title'>Realtime Hotel Rooms Status</h2>

            <table>
            <th>Number:</th>
            <th>Max Number of Guest : </th>
            <th>Size:</th>
            <th>Facilities:</th>
            <th>Price:</th>

                
            {tableRooms}
            <td className={s.blue}>Live Now</td>
            <td className={s.yellow}>Need to Clean </td>
            <td className={s.white}>Free</td>
            <td className={s.green}>The room has reservations</td>
            <td className={s.red}>Error</td>
            </table>
        </div>
        


       
        
        <div className={s.contentItem}>
                <h2 className='title'>About Hotel</h2>
                <div className={s.aboutHotelItems}>
                    <div className={s.aboutHotelItem}>
                        <span>Total Number Of Seats In The Hotel:</span><span>{props.totalCapacity}</span>
                    </div>
        
                    <div className={s.aboutHotelItem}>
                        <span>Number of guests in the hotel:</span><span>{props.totalGuestInHotel}</span>
                    </div>
                    <div className={s.aboutHotelItem}>
                        <span>Total number of reservations: </span><span>{props.totalRentPeriods}</span>
                    </div>
                    <div className={s.aboutHotelItem}>
                        <span>Total number of free beds:</span><span>{props.totalCapacity-props.totalGuestInHotel}</span>
                    </div>
                    <div className={s.aboutHotelItem}>
                        <span>Number of rooms to be cleaned:</span><span>{props.totalRoomsToClean}</span>
                    </div>
                </div>
            </div>


            <div className={s.contentItem}>
            <div className={s.SendEmail}>
            <div className='sign-up'>
                    <h2 className='title'>Type Email Text</h2>
                    <form className='sign-up-form' onSubmit={handleSubmitEmailText}>
                        <FormInput type='textarea' name='subject' value={emailText.subject} changeSubmitData={handleChangeEmailText} label='Subject' required />
                        <FormInput type='textarea' name='content' value={emailText.content} changeSubmitData={handleChangeEmailText} label='Email text' required />
                        <CustomButton type='submit'>Send Email</CustomButton>
                    </form>
                </div>
            </div>
        </div>


        </div>



    </div>
    )
}
export default AdminProfile