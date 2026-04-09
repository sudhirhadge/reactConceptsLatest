import React, { useState } from 'react'

export default function ControlledFormDemo() {
  const [formData, setFormData] = useState({ name: '', email: '', agreeTerms: false })
  const [submitted, setSubmitted] = useState(null)

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(formData)
  }

  return (
    <div style={{ margin: 12, padding: 12, border: '1px solid #ccc' }}>
      <h2>Controlled Form Demo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: <input name="name" value={formData.name} onChange={handleChange} /></label>
        </div>
        <div>
          <label>Email: <input type="email" name="email" value={formData.email} onChange={handleChange} /></label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />
            Agree to terms
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div style={{ marginTop: 8 }}>
          <h4>Submitted:</h4>
          <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}
