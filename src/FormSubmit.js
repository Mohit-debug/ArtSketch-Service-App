import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { CiCircleMinus } from 'react-icons/ci';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { MdDelete } from "react-icons/md";
const FormSubmit = () => {

  const { register, handleSubmit } = useForm();
  const [document, setDocument] = useState([
    { filename: '', tof: '', document: null, error: '' },
    { filename: '', tof: '', document: null, error: '' },
  ]);
  const fileInputRefs = useRef([]);

  const handleRemove = (index) => {
    if (document.length > 2) {
      const updatedDocument = [...document];
      updatedDocument.splice(index, 1);
      setDocument(updatedDocument);
    }
  };

  const handleAdd = () => {
    setDocument((ps) => [
      ...ps,
      { filename: '', tof: '', document: null, error: '' },
    ]);
  };

  const handleChangeFilename = (index, value) => {
    const newFiles = [...document];
    newFiles[index] = {
      ...newFiles[index],
      filename: value,
    };
    setDocument(newFiles);
  };

  const handleFileChange = (index, file) => {
    const newFiles = [...document];
    const fileType = newFiles[index].tof;
    let isValid = false;
    let errorMessage = '';

    if (fileType === 'pdf' && file.type === 'application/pdf') {
      isValid = true;
    } else if (fileType === 'image' && 
               (file.type === 'image/jpeg' || 
                file.type === 'image/png' || 
                file.type === 'image/gif')) {
      isValid = true;
    }

    if (isValid) {
      newFiles[index].document = file;
      newFiles[index].error = '';
    } else {
      newFiles[index].document = null;
      errorMessage = 'Please select a valid file format';
      newFiles[index].error = errorMessage;
      if (fileInputRefs.current[index]) {
        fileInputRefs.current[index].value = '';
      }
    }

    setDocument(newFiles);
  };

  return (
    <div className='flex flex-col px-5 justify-center items-center py-10 '>
      <div className='flex flex-row w-4/5 font-semibold mb-6 '>
        <div className="flex flex-col items-start gap-2 w-full  ">
          <h1>First Name</h1>
          <input
            {...register('firstname', {
              required: true
            })}
            placeholder="Enter your first name here.."
            className="h-[35px] px-3 placeholder:text-[12px] w-4/5 border border-grey-900"
          ></input>
        </div>
        <div className="flex flex-col items-start gap-2 w-full  ">
          <h1>Last Name</h1>
          <input
            {...register('firstname', {
              required: true
            })}
            placeholder="Enter your last name here.."
            className="h-[35px] px-3 placeholder:text-[12px] w-4/5 border border-grey-900"
          ></input>
        </div>
      </div>
      <div className='flex flex-row w-4/5 mb-6'>
        <div className="flex flex-col items-start gap-2 w-full  ">
          <h1>E-mail</h1>
          <input
            {...register('firstname', {
              required: true
            })}
            placeholder="ex: myname@example.com"
            className="h-[35px] px-3 placeholder:text-[12px] w-4/5 border border-grey-900"
          ></input>
        </div>
        <div className="flex flex-col items-start gap-2 w-full  ">
          <h1>Date of Birth</h1>
          <input
            {...register('firstname', {
              required: true
            })}
            type="date"
            placeholder="Date of Birth "
            className="h-[35px] px-3 placeholder:text-[12px] w-4/5 border border-grey-900"
          ></input>
        </div>
      </div>

      <div className='flex flex-col w-4/5 font-semibold mb-6 '>
        <div className='flex'>
          <h1 >Residential Address</h1>
        </div>
        <div className='flex flex-row mt-4'>
          <div className="flex flex-col items-start gap-2 w-full  ">
            <h1>Street 1</h1>
            <input
              {...register('firstname', {
                required: true
              })}

              className="h-[35px] px-3 placeholder:text-[12px] w-4/5 border border-grey-900"
            ></input>
          </div>
          <div className="flex flex-col items-start gap-2 w-full  ">
            <h1>Street 2</h1>
            <input
              {...register('firstname', {
                required: true
              })}

              className="h-[35px] px-3 placeholder:text-[12px] w-4/5 border border-grey-900"
            ></input>
          </div>
        </div>
        <div class="flex items-center mt-6">
          <input type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700 dark:border-gray-600" />
          <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Same as Residential Address</label>
        </div>
      </div>

      <div className='flex flex-col w-4/5 font-semibold mb-6 '>
        <div className='flex'>
          <h1 >Permanent Address</h1>
        </div>
        <div className='flex flex-row mt-4'>
          <div className="flex flex-col items-start gap-2 w-full  ">
            <h1>Street 1</h1>
            <input
              {...register('firstname', {
                required: true
              })}

              className="h-[35px] px-3 placeholder:text-[12px] w-4/5 border border-grey-900"
            ></input>
          </div>
          <div className="flex flex-col items-start gap-2 w-full  ">
            <h1>Street 2</h1>
            <input
              {...register('firstname', {
                required: true
              })}

              className="h-[35px] px-3 placeholder:text-[12px] w-4/5 border border-grey-900"
            ></input>
          </div>
        </div>

      </div>



      <div className='flex flex-col w-4/5 font-semibold mb-6 '>
        <div className='flex'>
          <h1>Upload Documents</h1>
        </div>
        <div className='flex flex-col mt-4'>
          {document.map((item, index) => (
            <div key={index} className='flex flex-row justify-center mb-4'>
              <div className="flex flex-col items-start gap-2 w-full">
                <h1>File Name</h1>
                <input
                  {...register(`filename_${index}`, { required: true })}
                  className="h-[35px] px-3 placeholder:text-[12px] w-4/5 border border-grey-900"
                  placeholder="Enter file name"
                  value={item.filename}
                  onChange={(e) => handleChangeFilename(index, e.target.value)}
                />
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <h1>Type of File</h1>
                <select
                  {...register(`tof_${index}`, { required: true })}
                  className="h-[35px] px-3 w-4/5 border border-grey-900"
                  value={item.tof}
                  onChange={(e) => {
                    const newFiles = [...document];
                    newFiles[index].tof = e.target.value;
                    newFiles[index].document = null; // Reset file if type changes
                    newFiles[index].error = ''; // Reset error if type changes
                    setDocument(newFiles);
                    if (fileInputRefs.current[index]) {
                      fileInputRefs.current[index].value = ''; // Clear file input field
                    }
                  }}
                >
                  <option value="" disabled>Select file type</option>
                  <option value="image">Image</option>
                  <option value="pdf">PDF</option>
                </select>
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <h1>Upload Document</h1>
                <input
                  {...register(`document_${index}`, { required: true })}
                  className="h-[35px] px-3 placeholder:text-[12px] w-4/5 border border-grey-900"
                  type="file"
                  ref={(el) => (fileInputRefs.current[index] = el)}
                  onChange={(e) => handleFileChange(index, e.target.files[0])}
                />
                {item.error && <span className="text-red-500 text-sm">{item.error}</span>}
              </div>
              <div>
                <MdDelete
                  style={{ cursor: 'pointer', fontSize: '20px' }}
                  onClick={() => handleRemove(index)}
                />
              </div>
            </div>
          ))}
          <div className="flex gap-4 justify-start items-start">
            <IoMdAddCircleOutline
              className="text-[30px]"
              onClick={handleAdd}
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default FormSubmit;