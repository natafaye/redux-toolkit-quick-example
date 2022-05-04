import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { createBusiness } from './businessSlice';

export default function BusinessFormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({})
  const [isSaving, setIsSaving] = useState(false);
  const onChange = (event) => setFormData({ ...formData, [event.target.name]: event.target.value})

  const onSubmit = async (event) => {
    event.preventDefault();

    setIsSaving(true);
    const result = await dispatch(createBusiness(formData));
    setIsSaving(false);

    if (!result.error) {
      navigate("/")
    }
  }

  return (
    <div className="row">
      <div className="col">
        <h2 className="my-4">New Business</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" name="name" className="form-control" value={formData.text} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea id="description" name="description" className="form-control" value={formData.description} onChange={onChange} />
          </div>
          <button className="btn btn-primary" onClick={onSubmit} disabled={isSaving}>{ isSaving ? "Saving..." : "Submit" }</button>
        </form>
      </div>
    </div>
  )
}
