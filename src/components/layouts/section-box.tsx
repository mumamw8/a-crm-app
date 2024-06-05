import React from 'react'

function SectionBox({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`w-full bg-white max-h-fit p-4 rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  )
}

export default SectionBox;