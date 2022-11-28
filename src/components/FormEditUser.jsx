import { Formik, Form, Field } from 'formik';
import { updateUser } from '../clients';
import { useNavigate } from 'react-router-dom';

const FormEditUser = ({ valuesUser }) => {
  const navigate = useNavigate()

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

  const handleCancel = (e) => {
    e.preventDefault()
    navigate('/')
    console.log('cancel')
  }

  return (
    <Formik
      initialValues={{ ...valuesUser }}
      enableReinitialize={true}
      onSubmit={async (values) => {
        try {
          await updateUser(valuesUser.id, values)
          navigate('/')
        } catch (error) {
          alert(error)
        }
      }}
    >
      {({ handleChange, handleSubmit, handleBlur, errors, touched }) => (
        <Form onSubmit={handleSubmit}>
          <div className="max-w-4xl">

            <div className='py-6 my-6 '>
              {/* NAME */}
              <div className="mb-4 flex gap-4">
                <div className='flex flex-col w-full'>
                  <label htmlFor='name.firstname' className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">FirstName</label>
                  <Field
                    id='name.firstname'
                    name='name.firstname'
                    placeholder="Name Client"
                    // className="mt-2 py-1 px-3 bg-gray-100"
                    className='appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {/* {errors.name && touched.name && <div className='text-xs text-red-500'>{errors.name}</div>} */}
                </div>

                <div className='flex flex-col w-full'>
                  <label htmlFor='name.lastname' className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">LastName</label>
                  <Field
                    id='name.lastname'
                    name='name.lastname'
                    placeholder="Name Client"
                    // className="mt-2 py-1 px-3 bg-gray-100"
                    className='appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {/* {errors.name && touched.name && <div className='text-xs text-red-500'>{errors.name}</div>} */}
                </div>
              </div>

              {/* USERNAME - IMAGE */}
              <div className="mb-4 flex gap-4">
                <div className='flex flex-col w-full'>
                  <label htmlFor="username" className="uppercase block tracking-wide text-gray-700 text-xs font-bold mb-2" >Username:</label>
                  <Field
                    id="username"
                    name="username"
                    type="text"
                    // className="mt-2 block w-full py-1 px-3 bg-gray-100"
                    className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    placeholder="Username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.business && touched.business && <div className='text-xs text-red-500'>{errors.business}</div>}
                </div>

                <div className='flex flex-col w-full'>
                  {/* <label htmlFor="image" className="uppercase block tracking-wide text-gray-700 text-xs font-bold mb-2" >Image:</label>
                  <Field
                    id="image"
                    name="image"
                    type="text" 
                    className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    placeholder="Username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  /> */}
                  {/* {errors.business && touched.business && <div className='text-xs text-red-500'>{errors.business}</div>} */}
                  <p className="uppercase block tracking-wide text-gray-700 text-xs font-bold mb-2" >Image:</p>
                  <label>
                    <input type="file"
                      className="text-sm text-grey-500 file:mr-5 file:py-3 file:px-10 file:rounded file:border-0 file:text-md file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:cursor-pointer" />
                  </label>
                </div>
              </div>

              {/* JOB(ROLE) - STATUS */}
              <div className='mb-4 flex gap-4'>
                {/* JOB */}
                <div className="flex flex-col w-full ">
                  <label htmlFor="job" className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >Job: </label>
                  <Field
                    id='job'
                    name="job"
                    type="text"
                    className='appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    placeholder="Job Client"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {/* {errors.email && touched.email && <div className='text-xs text-red-500'>{errors.email}</div>} */}
                </div>

                {/* STATUS */}
                <div className='flex flex-col w-full'>
                  <label htmlFor="status" className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >Status: </label>
                  <div className="relative">
                    <Field name="status" as="select" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </Field>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>



              </div>

              {/* EMAIL - PHONE */}
              <div className='mb-4 flex gap-4'>
                {/* e-mail */}
                <div className="flex flex-col w-full ">
                  <label htmlFor="email" className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >E-mail:</label>
                  <Field
                    id='email'
                    name="email"
                    type="email"
                    // className="mt-2 py-1 px-3 bg-gray-100"
                    className='appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    placeholder="Email Client"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    validate={validateEmail}
                  />
                  {errors.email && touched.email && <div className='text-xs text-red-500'>{errors.email}</div>}
                </div>

                {/* phone */}
                <div className="flex flex-col w-full ">
                  <label htmlFor="phone" className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >Phone:</label>
                  <Field
                    id='phone'
                    name="phone"
                    type="tel"
                    // className="mt-2 py-1 px-3 bg-gray-100"
                    className='appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    placeholder="Phone Client"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.phone && touched.phone && <div className='text-xs text-red-500'>{errors.phone}</div>}
                </div>
              </div>

              {/* ADDRESS */}
              {/* <p>Address:</p> */}
              <div className="mb-4 flex gap-4">
                <div className="flex flex-col w-full">
                  <label htmlFor="address.city" className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">City:</label>
                  <Field
                    id="address.city"
                    name="address.city"
                    placeholder="Name Client"
                    className='appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {/* {errors.name && touched.name && <div className='text-xs text-red-500'>{errors.name}</div>} */}
                </div>

                <div className="flex flex-col w-full">
                  <label htmlFor="address.street" className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Street:</label>
                  <Field
                    id="address.street"
                    name="address.street"
                    placeholder="Name Client"
                    className='appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {/* {errors.name && touched.name && <div className='text-xs text-red-500'>{errors.name}</div>} */}
                </div>

                <div className="flex flex-col w-full">
                  <label htmlFor="address.number" className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Number:</label>
                  <Field
                    id="address.number"
                    name="address.number"
                    type='number'
                    className='appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {/* {errors.name && touched.name && <div className='text-xs text-red-500'>{errors.name}</div>} */}
                </div>
              </div>
            </div>

            <div className='my-6 flex justify-center items-center gap-4'>
              <button onClick={handleCancel} className=" px-3 py-1 font-semibold bg-red-600 text-gray-50">Cancel</button>
              <button type='submit' className="px-3 py-1 font-semibold text-gray-50 bg-green-600">Save</button>
            </div>

          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FormEditUser;