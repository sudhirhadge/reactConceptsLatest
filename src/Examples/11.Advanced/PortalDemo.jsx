import React from 'react'
import ReactDOM from 'react-dom'

function Modal({ visible, onClose }) {
  if (!visible) return null

  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }}>
      <div style={{ background: 'white', padding: 20, borderRadius: 8 }}>
        <p>This is rendered using React Portal outside the normal tree.</p>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>,
    document.body,
  )
}

export default function PortalDemo() {
  const [open, setOpen] = React.useState(false)

  return (
    <div style={{ margin: 12, padding: 12, border: '1px solid #ccc' }}>
      <h2>Portal Demo</h2>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal visible={open} onClose={() => setOpen(false)} />
    </div>
  )
}
