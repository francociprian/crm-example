import { Formik, Form, Field } from 'formik';
import { addUser } from '../clients';
import { useNavigate } from 'react-router-dom';

const NewUserForm = () => {
  const navigate = useNavigate()

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required e-mail';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid e-mail address';
    }
    return error;
  }

  return (
    <Formik
      initialValues={{
        address: {
          geolocation: {
            lat: '',
            long: '',
          },
          city: '',
          street: '',
          number: '',
          zipcode: '',
        },
        username: '',
        name: {
          firstname: '',
          lastname: '',
        },
        email: '',
        phone: '',
        image: 'https://randomuser.me/api/portraits/med/men/20.jpg',
        status: 'Active',
        job: '',
        id:''
      }}
      validate={(values) => {
        let errors = {};
        if (!values.name.firstname || !values.name.lastname) {
          errors.name = 'Required Name';
        }
        if (!values.address.city || !values.address.street || !values.address.number) {
          errors.address = 'Required';
        }
        if (!values.phone) {
          errors.phone = 'Required Phone number';
        }
        if (!values.username) {
          errors.username = 'Required Username';
        }
        if (!values.job) {
          errors.job = 'Required Role'
        }
        return errors;
      }}
      onSubmit={async (values) => {
        try {
          await addUser(values)
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
                    className='appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name && <div className='text-xs text-red-500'>{errors.name}</div>}
                </div>

                <div className='flex flex-col w-full'>
                  <label htmlFor='name.lastname' className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">LastName</label>
                  <Field
                    id='name.lastname'
                    name='name.lastname'
                    className='appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name && <div className='text-xs text-red-500'>{errors.name}</div>}
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
                    className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.username && touched.username && <div className='text-xs text-red-500'>{errors.username}</div>}
                </div>

                <div className='flex flex-col w-full'>
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
                    style={errors.job && touched.job && {border: '1.5px solid red'}}
                    className={`appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.job && touched.job && <div className='text-xs text-red-600'>{errors.job}</div>}
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
                    className='appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
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
                    className='appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.phone && touched.phone && <div className='text-xs text-red-500'>{errors.phone}</div>}
                </div>
              </div>

              {/* ADDRESS */}
              <div className="mb-4 flex gap-4">
                <div className="flex flex-col w-full">
                  <label htmlFor="address.city" className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">City:</label>
                  <Field
                    id="address.city"
                    name="address.city"
                    className='appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.address && touched.address && <div className='text-xs text-red-500'>{errors.address} City</div>}
                </div>

                <div className="flex flex-col w-full">
                  <label htmlFor="address.street" className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Street:</label>
                  <Field
                    id="address.street"
                    name="address.street"
                    className='appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.address && touched.address && <div className='text-xs text-red-500'>{errors.address} Street</div>}
                </div>

                <div className="flex flex-col w-1/2">
                  <label htmlFor="address.number" className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Number:</label>
                  <Field
                    id="address.number"
                    name="address.number"
                    type='number'
                    className='appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.address && touched.address && <div className='text-xs text-red-500'>{errors.address} Number</div>}
                </div>

                <div className="flex flex-col w-1/2">
                  <label htmlFor="address.zipcode" className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">ZipCode:</label>
                  <Field
                    id="address.zipcode"
                    name="address.zipcode"
                    type='number'
                    className='appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.address && touched.address && <div className='text-xs text-red-500'>{errors.address} ZipCode</div>}
                </div>
              </div>
            </div>

            <div className='my-6 flex justify-center items-center gap-4'>
              <button type='submit' className=" px-3 py-1 font-semibold text-gray-50 bg-green-600">Save</button>
            </div>

          </div>
        </Form>
      )}
    </Formik>
  )
}

export default NewUserForm;