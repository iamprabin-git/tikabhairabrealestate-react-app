import React, { useState } from 'react';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPenToSquare } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

const Service = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [showModel, SetShowModel] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      message
    }
    // console.log(data);
    if (!data) {
      alert("please fill all field"

      )
      return;
    }
    SetShowModel(true)
  }
  const closeModal = () => {
    SetShowModel(false)
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
  }
  return (
    <div className='space-y-8 p-8 bg-white shadow-xl rounded-md py-28' id='service'>
      <h2 className='text-2xl font-bold mb-4'>Service Request</h2>
      <form onSubmit={handleSubmit} className='space-y-8'>
        <div className='flex gap-3'>
          <div className='flex items-center justify-center rounded-full bg-[#ffffffla] p-3'>
            <IoPerson className='text-primary text-3xl' />
          </div>
          <div>
            <input
              onChange={e => setName(e.target.value)}
              type="text" placeholder='Name' className='w-full p-4 rounded:md focus:outline-none focus:ring-2 focus:ring-primary shadow' />
          </div>
        </div>
        <div className='flex gap-3'>
          <div className='flex items-center justify-center rounded-full bg-[#ffffffla] p-3'>
            <MdEmail className='text-primary text-3xl' />
          </div>
          <div>
            <input
              onChange={e => setEmail(e.target.value)}
              type="email" placeholder='Email Address' className='w-full p-4 rounded:md focus:outline-none focus:ring-2 focus:ring-primary shadow' />
          </div>
        </div>
        <div className='flex gap-3 item'>
          <div className='flex items-center justify-center rounded-full bg-[#ffffffla] p-3'>
            <FaPhoneVolume className='text-primary text-2xl' />
          </div>
          <div>
            <input
              onChange={e => setPhone(e.target.value)}
              type="tel" placeholder='Contact Number' className='w-full p-4 rounded:md focus:outline-none focus:ring-2 focus:ring-primary shadow' />
          </div>
        </div>
        <div className='flex gap-3 item'>
          <div className='flex items-center justify-center rounded-full bg-[#ffffffla] p-3'>
            <FaPenToSquare className='text-primary text-2xl' />
          </div>

          <div>

            <textarea
              onChange={e => setMessage(e.target.value)}
              cols={50} rows={5} placeholder='write your message'
              className='w-full p-4 rounded:md focus:outline-none focus:ring-2 focus:ring-primary shadow'></textarea>
          </div>
        </div>
        <button type='submit' className='w-full p-3 bg-primary text-white rounded-md hover:bg-sky-500'>Send Message</button>
      </form>
      {
        showModel && (
          <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-90'>
              <div className='bg-white p-8 rounded-md shadow-lg'>
                  <h2 className='text-2xl font-bold mb-4'>Submit Successfully</h2>
                  <p>Thank You, {name} for submitting your querry to us.</p>
                  <button
                      onClick={closeModal}
                      className='mt-4 px-4 py-2 bg-primary text-white rounded-md'>Close</button>
              </div>
          </div>
      )
      }
    </div>

)
}

export default Service